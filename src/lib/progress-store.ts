import { useEffect, useState } from "react";

// Reusable progress persistence adapter. Currently backed by localStorage; the
// same API can later be swapped for a database service without touching UI.

const KEY = "eduverse:progress:v1";
const EVENT = "eduverse:progress-change";

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
  steps: Record<string, boolean>;
  quiz?: QuizResult;
  completed: boolean;
}

const EMPTY: LessonProgress = { opened: false, steps: {}, completed: false };

function readAll(): Record<string, LessonProgress> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Record<string, LessonProgress>;
  } catch {
    return {};
  }
}

function writeAll(all: Record<string, LessonProgress>): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(all));
  window.dispatchEvent(new Event(EVENT));
}

export function getLesson(id: string): LessonProgress {
  return readAll()[id] ?? EMPTY;
}

function update(id: string, fn: (p: LessonProgress) => LessonProgress): void {
  const all = readAll();
  const next = fn(all[id] ?? EMPTY);
  all[id] = next;
  writeAll(all);
}

export function setOpened(id: string): void {
  update(id, (p) => (p.opened ? p : { ...p, opened: true }));
}

export function markStep(id: string, step: string): void {
  update(id, (p) => ({ ...p, steps: { ...p.steps, [step]: true } }));
}

export function saveQuiz(id: string, earned: number, total: number, passMark = 60): void {
  update(id, (p) => {
    const percent = Math.round((earned / total) * 100);
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
  update(id, (p) => ({ ...p, completed: value }));
}

/** Count completed lessons whose id starts with the given prefix (e.g. subject/category). */
export function completedCount(prefix: string): number {
  const all = readAll();
  return Object.entries(all).filter(([id, p]) => id.startsWith(prefix) && p.completed).length;
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
