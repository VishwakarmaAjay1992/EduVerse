"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock3, Route } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { slugify } from "@/lib/slug";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export interface StartLessonOption {
  title: string;
  minutes: number;
  ready: boolean;
}

export interface StartChapterOption {
  title: string;
  lessonCount: number;
  totalMinutes: number;
  startLesson: StartLessonOption | null;
}

export interface StartCategoryOption {
  title: string;
  level: string;
  chapters: StartChapterOption[];
}

export interface StartSubjectOption {
  slug: string;
  name: string;
  tagline: string;
  accent: string;
  categories: StartCategoryOption[];
}

const LEVELS = [
  { value: "beginner", label: "Beginner", description: "Start from the foundations" },
  { value: "intermediate", label: "Intermediate", description: "Build school-level fluency" },
  { value: "advanced", label: "Advanced", description: "Tackle demanding concepts" },
  { value: "university", label: "University", description: "Study formal higher-level material" },
] as const;

const STUDY_TIMES = [15, 30, 60] as const;

export function StartLearningWizard({ subjects }: { subjects: StartSubjectOption[] }) {
  const [subjectSlug, setSubjectSlug] = useState(subjects[0]?.slug ?? "mathematics");
  const [level, setLevel] = useState("beginner");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [dailyMinutes, setDailyMinutes] = useState<number>(30);

  const subject = subjects.find((item) => item.slug === subjectSlug) ?? subjects[0];
  const categories = useMemo(
    () => subject?.categories.filter((category) => category.level === level) ?? [],
    [subject, level]
  );

  useEffect(() => {
    if (!categories.some((category) => category.title === categoryTitle)) {
      setCategoryTitle(categories[0]?.title ?? "");
    }
  }, [categories, categoryTitle]);

  const category = categories.find((item) => item.title === categoryTitle) ?? categories[0];
  const lessonCount =
    category?.chapters.reduce((total, chapter) => total + chapter.lessonCount, 0) ?? 0;
  const totalMinutes =
    category?.chapters.reduce((total, chapter) => total + chapter.totalMinutes, 0) ?? 0;
  const lessonTargets =
    category?.chapters.flatMap((chapter) =>
      chapter.startLesson ? [{ chapter, lesson: chapter.startLesson }] : []
    ) ?? [];
  const startTarget = lessonTargets.find((target) => target.lesson.ready) ?? lessonTargets[0];
  const firstChapter = startTarget?.chapter;
  const firstLesson = startTarget?.lesson;
  const startHref =
    subject && firstChapter && firstLesson
      ? `/subjects/${subject.slug}/${slugify(firstChapter.title)}/${slugify(firstLesson.title)}`
      : "/subjects";
  const studyDays = totalMinutes ? Math.max(1, Math.ceil(totalMinutes / dailyMinutes)) : 0;

  useEffect(() => {
    if (!subject || !category) return;
    trackEvent("placement_plan_created", {
      subject: subject.slug,
      level,
      category: category.title,
      daily_minutes: dailyMinutes,
    });
  }, [subject, level, category, dailyMinutes]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <Card className="shadow-sm">
        <CardContent className="space-y-8 p-6">
          <fieldset>
            <legend className="text-base font-bold">1. Choose a subject</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {subjects.map((item) => {
                const active = item.slug === subjectSlug;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setSubjectSlug(item.slug)}
                    className={`rounded-xl border p-4 text-left transition ${
                      active ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted/45"
                    }`}
                    aria-pressed={active}
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                      {item.tagline}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold">2. Select your current level</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {LEVELS.map((item) => {
                const active = item.value === level;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setLevel(item.value)}
                    className={`rounded-lg border px-4 py-3 text-left transition ${
                      active ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    aria-pressed={active}
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span
                      className={`mt-0.5 block text-xs ${active ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                    >
                      {item.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <Label htmlFor="learning-goal" className="text-base font-bold">
              3. What do you want to study?
            </Label>
            <select
              id="learning-goal"
              value={category?.title ?? ""}
              onChange={(event) => setCategoryTitle(event.target.value)}
              className="mt-3 h-11 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {categories.map((item) => (
                <option key={item.title} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-base font-bold">4. Daily study time</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {STUDY_TIMES.map((minutes) => {
                const active = minutes === dailyMinutes;
                return (
                  <button
                    key={minutes}
                    type="button"
                    onClick={() => setDailyMinutes(minutes)}
                    className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                      active ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    aria-pressed={active}
                  >
                    {minutes} min
                  </button>
                );
              })}
            </div>
          </fieldset>
        </CardContent>
      </Card>

      <div className="lg:sticky lg:top-20">
        <div
          className="overflow-hidden rounded-2xl border bg-card shadow-xl"
          style={{ borderTopColor: subject?.accent, borderTopWidth: 4 }}
          aria-live="polite"
        >
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Route className="size-3.5" aria-hidden="true" /> Your recommended path
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">{category?.title ?? "Choose a path"}</h2>
            <p className="mt-2 text-muted-foreground">
              {subject?.name} · {level.charAt(0).toUpperCase() + level.slice(1)}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <PlanStat icon={BookOpen} value={lessonCount} label="lessons" />
              <PlanStat icon={Clock3} value={`~${Math.round(totalMinutes / 60)}`} label="hours" />
              <PlanStat icon={CalendarDays} value={studyDays} label="study days" />
            </div>

            <div className="mt-7 rounded-xl border bg-muted/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your first three chapters
              </p>
              <ol className="mt-4 space-y-3">
                {category?.chapters.slice(0, 3).map((chapter, index) => (
                  <li key={chapter.title} className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="block text-sm">{chapter.title}</strong>
                      <span className="text-xs text-muted-foreground">
                        {chapter.lessonCount} lessons
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {firstLesson && (
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-500/10 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <strong>Start with: {firstLesson.title}</strong>
                  <p className="mt-1 text-muted-foreground">
                    A focused {firstLesson.minutes}-minute lesson with full teaching content in {firstChapter?.title}.
                  </p>
                </div>
              </div>
            )}

            <Button asChild size="lg" className="mt-7 w-full">
              <Link
                href={startHref}
                onClick={() =>
                  trackEvent("start_path_clicked", {
                    subject: subject?.slug,
                    level,
                    category: category?.title,
                    daily_minutes: dailyMinutes,
                  })
                }
              >
                Start my first lesson <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your lesson progress is saved automatically on this device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BookOpen;
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-xl border bg-background p-3 text-center">
      <Icon className="mx-auto size-4 text-muted-foreground" aria-hidden="true" />
      <strong className="mt-2 block text-lg">{value}</strong>
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
}
