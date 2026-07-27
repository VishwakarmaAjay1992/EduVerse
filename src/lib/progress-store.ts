import { useEffect, useState } from "react";

// Local-first learning persistence. The public API intentionally stays small so
// localStorage can later be replaced with account-backed synchronization.

const KEY = "eduverse:progress:v1";
const RECENT_KEY = "eduverse:recent-lesson:v1";
const REVIEW_KEY = "eduverse:smart-review:v1";
const ACTIVITY_KEY = "eduverse:activity:v1";
const BOOKMARK_KEY = "eduverse:bookmarks:v1";
const EVENT = "eduverse:progress-change";
const MAX_REVIEW_ITEMS = 300;
const MAX_ACTIVITY_ITEMS = 200;

export interface QuizResult {
  attempts: number;
  latest: number;
  best: number;
  earned: number;
  total: number;
  percent: number;
  passed: boolean;
  updatedAt: string;
}

export interface LessonProgress {
  opened: boolean;
  openedAt?: string;
  steps: Record<string, boolean>;
  quiz?: QuizResult;
  completed: boolean;
  completedAt?: string;
}

export interface RecentLesson {
  id: string;
  href: string;
  title: string;
  subject: string;
  chapter: string;
  minutes: number;
  visitedAt: string;
}

export type ReviewKind = "practice" | "quiz";
export type ReviewStatus = "active" | "mastered";

export interface ReviewItem {
  id: string;
  lessonId: string;
  kind: ReviewKind;
  prompt: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation: string;
  href: string;
  stage: number;
  attempts: number;
  successes: number;
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;
  dueAt: string;
}

export interface ReviewItemInput {
  id: string;
  lessonId: string;
  kind: ReviewKind;
  prompt: string;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation: string;
  href?: string;
}

export type ActivityType = "lesson_opened" | "quiz_completed" | "lesson_completed";

export interface LearningActivity {
  id: string;
  type: ActivityType;
  lessonId: string;
  at: string;
  score?: number;
}

export interface LearningSnapshot {
  progress: Record<string, LessonProgress>;
  recentLesson: RecentLesson | null;
  reviews: ReviewItem[];
  activities: LearningActivity[];
  bookmarks: string[];
}

export interface LearningBackup extends LearningSnapshot {
  version: 1;
  exportedAt: string;
}

const EMPTY: LessonProgress = { opened: false, steps: {}, completed: false };

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function emitChange(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

function readAll(): Record<string, LessonProgress> {
  return readJson<Record<string, LessonProgress>>(KEY, {});
}

function writeAll(all: Record<string, LessonProgress>): void {
  writeJson(KEY, all);
  emitChange();
}

function lessonHref(lessonId: string): string {
  return `/subjects/${lessonId}`;
}

function activityId(type: ActivityType, lessonId: string, at: string): string {
  return `${type}:${lessonId}:${at}`;
}

function addActivity(type: ActivityType, lessonId: string, score?: number): void {
  const at = new Date().toISOString();
  const activities = readJson<LearningActivity[]>(ACTIVITY_KEY, []);
  const latest = activities[0];

  // Avoid duplicate Strict Mode mount entries within a very small window.
  if (
    type === "lesson_opened" &&
    latest?.type === type &&
    latest.lessonId === lessonId &&
    Math.abs(new Date(at).getTime() - new Date(latest.at).getTime()) < 5_000
  ) {
    return;
  }

  activities.unshift({ id: activityId(type, lessonId, at), type, lessonId, at, score });
  writeJson(ACTIVITY_KEY, activities.slice(0, MAX_ACTIVITY_ITEMS));
}

export function getLesson(id: string): LessonProgress {
  return readAll()[id] ?? EMPTY;
}

export function getAllProgress(): Record<string, LessonProgress> {
  return readAll();
}

function update(id: string, fn: (p: LessonProgress) => LessonProgress): void {
  const all = readAll();
  const next = fn(all[id] ?? EMPTY);
  all[id] = next;
  writeAll(all);
}

export function setOpened(id: string): void {
  update(id, (p) =>
    p.opened ? p : { ...p, opened: true, openedAt: new Date().toISOString() }
  );
}

export function recordLessonVisit(lesson: Omit<RecentLesson, "visitedAt">): void {
  if (typeof window === "undefined") return;
  const visitedAt = new Date().toISOString();
  setOpened(lesson.id);
  writeJson(RECENT_KEY, { ...lesson, visitedAt });
  addActivity("lesson_opened", lesson.id);
  emitChange();
}

export function getRecentLesson(): RecentLesson | null {
  return readJson<RecentLesson | null>(RECENT_KEY, null);
}

export function markStep(id: string, step: string): void {
  update(id, (p) => ({ ...p, steps: { ...p.steps, [step]: true } }));
}

export function saveQuiz(id: string, earned: number, total: number, passMark = 60): void {
  const percent = total > 0 ? Math.round((earned / total) * 100) : 0;
  update(id, (p) => {
    const prev = p.quiz;
    const best = Math.max(prev?.best ?? 0, percent);
    return {
      ...p,
      quiz: {
        attempts: (prev?.attempts ?? 0) + 1,
        latest: percent,
        best,
        earned,
        total,
        percent,
        passed: percent >= passMark,
        updatedAt: new Date().toISOString(),
      },
    };
  });
  addActivity("quiz_completed", id, percent);
  emitChange();
}

export interface CompletionRules {
  steps: string[];
  requireQuizPass: boolean;
}

export function computeComplete(p: LessonProgress, rules: CompletionRules): boolean {
  if (!p.opened) return false;
  for (const s of rules.steps) if (!p.steps[s]) return false;
  if (rules.requireQuizPass && !p.quiz?.passed) return false;
  return true;
}

export function setCompleted(id: string, value: boolean): void {
  const wasCompleted = getLesson(id).completed;
  update(id, (p) => ({
    ...p,
    completed: value,
    completedAt: value ? (p.completedAt ?? new Date().toISOString()) : undefined,
  }));
  if (value && !wasCompleted) {
    addActivity("lesson_completed", id);
    emitChange();
  }
}

/** Count completed lessons whose id starts with the given prefix (e.g. subject/category). */
export function completedCount(prefix: string): number {
  const all = readAll();
  return Object.entries(all).filter(([id, p]) => id.startsWith(prefix) && p.completed).length;
}

export function getReviewItems(): ReviewItem[] {
  return readJson<ReviewItem[]>(REVIEW_KEY, []);
}

function writeReviewItems(items: ReviewItem[]): void {
  const sorted = [...items].sort(
    (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
  );
  writeJson(REVIEW_KEY, sorted.slice(0, MAX_REVIEW_ITEMS));
  emitChange();
}

/** Add or refresh a mistake. A first mistake is immediately available for review. */
export function recordReviewItem(input: ReviewItemInput): void {
  const now = new Date().toISOString();
  const items = getReviewItems();
  const index = items.findIndex((item) => item.id === input.id);

  if (index >= 0) {
    const previous = items[index]!;
    items[index] = {
      ...previous,
      ...input,
      href: input.href ?? lessonHref(input.lessonId),
      stage: Math.max(0, previous.stage - 1),
      attempts: previous.attempts + 1,
      status: "active",
      updatedAt: now,
      dueAt: now,
    };
  } else {
    items.push({
      ...input,
      href: input.href ?? lessonHref(input.lessonId),
      stage: 0,
      attempts: 1,
      successes: 0,
      status: "active",
      createdAt: now,
      updatedAt: now,
      dueAt: now,
    });
  }

  writeReviewItems(items);
}

const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;

/** Record a dedicated review result and schedule the next retrieval attempt. */
export function recordReviewOutcome(id: string, remembered: boolean): void {
  const items = getReviewItems();
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) return;

  const item = items[index]!;
  const now = new Date();
  const nextStage = remembered ? Math.min(item.stage + 1, REVIEW_INTERVAL_DAYS.length) : 0;
  const mastered = remembered && nextStage >= REVIEW_INTERVAL_DAYS.length;
  const days = remembered ? REVIEW_INTERVAL_DAYS[Math.min(nextStage - 1, REVIEW_INTERVAL_DAYS.length - 1)]! : 1;
  const due = new Date(now);
  due.setDate(due.getDate() + days);

  items[index] = {
    ...item,
    stage: nextStage,
    attempts: item.attempts + 1,
    successes: item.successes + (remembered ? 1 : 0),
    status: mastered ? "mastered" : "active",
    updatedAt: now.toISOString(),
    dueAt: due.toISOString(),
  };
  writeReviewItems(items);
}

/** Credit a correct answer in a later lesson quiz when the same mistake exists. */
export function creditReviewFromAssessment(id: string): void {
  const item = getReviewItems().find((review) => review.id === id);
  if (!item || item.status === "mastered") return;
  recordReviewOutcome(id, true);
}

export function removeReviewItem(id: string): void {
  writeReviewItems(getReviewItems().filter((item) => item.id !== id));
}

export function clearMasteredReviews(): void {
  writeReviewItems(getReviewItems().filter((item) => item.status !== "mastered"));
}

export function getActivities(): LearningActivity[] {
  return readJson<LearningActivity[]>(ACTIVITY_KEY, []);
}

export function getBookmarks(): string[] {
  return readJson<string[]>(BOOKMARK_KEY, []);
}

export function toggleBookmark(lessonId: string): boolean {
  const bookmarks = getBookmarks();
  const exists = bookmarks.includes(lessonId);
  const next = exists ? bookmarks.filter((id) => id !== lessonId) : [lessonId, ...bookmarks];
  writeJson(BOOKMARK_KEY, next);
  emitChange();
  return !exists;
}

export function isBookmarked(lessonId: string): boolean {
  return getBookmarks().includes(lessonId);
}

export function getLearningSnapshot(): LearningSnapshot {
  return {
    progress: getAllProgress(),
    recentLesson: getRecentLesson(),
    reviews: getReviewItems(),
    activities: getActivities(),
    bookmarks: getBookmarks(),
  };
}

export function exportLearningData(): string {
  const backup: LearningBackup = {
    version: 1,
    exportedAt: new Date().toISOString(),
    ...getLearningSnapshot(),
  };
  return JSON.stringify(backup, null, 2);
}

export function importLearningData(raw: string): void {
  const parsed = JSON.parse(raw) as Partial<LearningBackup>;
  if (parsed.version !== 1 || typeof parsed.progress !== "object" || parsed.progress === null) {
    throw new Error("This is not a valid EduVerse learning backup.");
  }

  writeJson(KEY, parsed.progress);
  writeJson(RECENT_KEY, parsed.recentLesson ?? null);
  writeJson(REVIEW_KEY, Array.isArray(parsed.reviews) ? parsed.reviews : []);
  writeJson(ACTIVITY_KEY, Array.isArray(parsed.activities) ? parsed.activities : []);
  writeJson(BOOKMARK_KEY, Array.isArray(parsed.bookmarks) ? parsed.bookmarks : []);
  emitChange();
}

/** React hook: subscribe to a lesson's progress. */
export function useLessonProgress(id: string): LessonProgress {
  const [p, setP] = useState<LessonProgress>(EMPTY);
  useEffect(() => {
    const load = () => setP(getLesson(id));
    load();
    window.addEventListener(EVENT, load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(EVENT, load);
      window.removeEventListener("storage", load);
    };
  }, [id]);
  return p;
}

/** React hook: most recently opened lesson. */
export function useRecentLesson(): RecentLesson | null {
  const [lesson, setLesson] = useState<RecentLesson | null>(null);
  useEffect(() => {
    const load = () => setLesson(getRecentLesson());
    load();
    window.addEventListener(EVENT, load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(EVENT, load);
      window.removeEventListener("storage", load);
    };
  }, []);
  return lesson;
}

/** React hook: total completed lessons across the given id prefixes. */
export function useCompletedCount(prefixes: string[]): number {
  const [n, setN] = useState(0);
  const key = prefixes.join("|");
  useEffect(() => {
    const calc = () => setN(prefixes.reduce((a, p) => a + completedCount(p), 0));
    calc();
    window.addEventListener(EVENT, calc);
    window.addEventListener("storage", calc);
    return () => {
      window.removeEventListener(EVENT, calc);
      window.removeEventListener("storage", calc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return n;
}

export function useLearningSnapshot(): LearningSnapshot {
  const [snapshot, setSnapshot] = useState<LearningSnapshot>({
    progress: {},
    recentLesson: null,
    reviews: [],
    activities: [],
    bookmarks: [],
  });

  useEffect(() => {
    const load = () => setSnapshot(getLearningSnapshot());
    load();
    window.addEventListener(EVENT, load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(EVENT, load);
      window.removeEventListener("storage", load);
    };
  }, []);

  return snapshot;
}
