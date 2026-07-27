"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Download,
  FileUp,
  History,
  PlayCircle,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";
import type { LessonCatalogItem } from "@/lib/curriculum";
import {
  exportLearningData,
  importLearningData,
  useLearningSnapshot,
} from "@/lib/progress-store";
import { cn } from "@/lib/utils";

function percent(value: number, total: number): number {
  return total > 0 ? Math.round((value / total) * 100) : 0;
}

function formatActivity(type: string, score?: number): string {
  if (type === "lesson_completed") return "Completed a lesson";
  if (type === "quiz_completed") return `Completed a quiz${score !== undefined ? ` · ${score}%` : ""}`;
  return "Opened a lesson";
}

function formatWhen(value: string): string {
  const date = new Date(value);
  const diff = Date.now() - date.getTime();
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function LearningDashboard({ catalog }: { catalog: LessonCatalogItem[] }) {
  const snapshot = useLearningSnapshot();
  const importRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const catalogMap = useMemo(() => new Map(catalog.map((lesson) => [lesson.id, lesson])), [catalog]);

  useEffect(() => {
    trackEvent("dashboard_opened");
  }, []);

  const progressEntries = Object.entries(snapshot.progress);
  const opened = progressEntries.filter(([, progress]) => progress.opened).length;
  const completed = progressEntries.filter(([, progress]) => progress.completed).length;
  const quizResults = progressEntries
    .map(([, progress]) => progress.quiz?.latest)
    .filter((score): score is number => score !== undefined);
  const averageQuiz = quizResults.length
    ? Math.round(quizResults.reduce((sum, score) => sum + score, 0) / quizResults.length)
    : 0;
  const activeReviews = snapshot.reviews.filter((review) => review.status === "active");
  const dueReviews = activeReviews.filter((review) => new Date(review.dueAt).getTime() <= Date.now());

  const activeDays = new Set(
    snapshot.activities
      .filter((activity) => Date.now() - new Date(activity.at).getTime() <= 7 * 86_400_000)
      .map((activity) => new Date(activity.at).toISOString().slice(0, 10))
  ).size;

  const subjectStats = ["mathematics", "physics"].map((subjectSlug) => {
    const total = catalog.filter((lesson) => lesson.subjectSlug === subjectSlug).length;
    const complete = Object.entries(snapshot.progress).filter(
      ([id, progress]) => id.startsWith(`${subjectSlug}/`) && progress.completed
    ).length;
    return {
      slug: subjectSlug,
      label: subjectSlug === "mathematics" ? "Mathematics" : "Physics",
      total,
      complete,
      percentage: percent(complete, total),
    };
  });

  const current = snapshot.recentLesson
    ? (catalogMap.get(snapshot.recentLesson.id) ?? null)
    : null;
  const currentIndex = current ? catalog.findIndex((lesson) => lesson.id === current.id) : -1;
  const recommended =
    currentIndex >= 0
      ? catalog.slice(currentIndex + 1).find((lesson) => !snapshot.progress[lesson.id]?.completed) ??
        catalog.find((lesson) => !snapshot.progress[lesson.id]?.opened)
      : catalog.find((lesson) => !snapshot.progress[lesson.id]?.opened);

  const bookmarkedLessons = snapshot.bookmarks
    .map((id) => catalogMap.get(id))
    .filter((lesson): lesson is LessonCatalogItem => lesson !== undefined)
    .slice(0, 4);

  const recentActivities = snapshot.activities
    .map((activity) => ({ activity, lesson: catalogMap.get(activity.lessonId) }))
    .filter(({ lesson }) => lesson !== undefined)
    .slice(0, 6);

  function downloadBackup() {
    const blob = new Blob([exportLearningData()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `eduverse-learning-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    trackEvent("learning_data_exported");
    setMessage("Your learning backup was downloaded.");
  }

  async function importBackup(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      importLearningData(await file.text());
      trackEvent("learning_data_imported");
      setMessage("Progress imported successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not import that backup.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-8">
      {message && (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-sm">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" /> {message}
          </span>
          <button onClick={() => setMessage(null)} className="text-muted-foreground hover:text-foreground">
            Dismiss
          </button>
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Trophy, label: "Lessons completed", value: completed, detail: `${opened} opened` },
          { icon: Target, label: "Average quiz score", value: `${averageQuiz}%`, detail: `${quizResults.length} attempts` },
          { icon: Brain, label: "Reviews due", value: dueReviews.length, detail: `${activeReviews.length} active mistakes` },
          { icon: CalendarDays, label: "Active study days", value: activeDays, detail: "During the last 7 days" },
        ].map(({ icon: Icon, label, value, detail }) => (
          <Card key={label} className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                </div>
                <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <Card className="overflow-hidden shadow-sm">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" aria-hidden="true" /> Today&apos;s learning plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {dueReviews.length > 0 ? (
              <PlanRow
                icon={RotateCcw}
                label={`Review ${Math.min(dueReviews.length, 5)} mistake${dueReviews.length === 1 ? "" : "s"}`}
                detail="Strengthen concepts before they fade"
                href="/my-learning/review"
                action="Start review"
                priority
              />
            ) : (
              <PlanRow
                icon={CheckCircle2}
                label="Smart Review is clear"
                detail="No revision questions are due right now"
                href="/my-learning/mistakes"
                action="View notebook"
              />
            )}

            {snapshot.recentLesson ? (
              <PlanRow
                icon={PlayCircle}
                label={`Continue: ${snapshot.recentLesson.title}`}
                detail={`${snapshot.recentLesson.subject} · ${snapshot.recentLesson.minutes} min`}
                href={snapshot.recentLesson.href}
                action="Continue"
                priority={dueReviews.length === 0}
              />
            ) : (
              <PlanRow
                icon={PlayCircle}
                label="Choose your first learning path"
                detail="Answer three questions and get a recommended starting point"
                href="/start"
                action="Get started"
                priority={dueReviews.length === 0}
              />
            )}

            {recommended && (
              <PlanRow
                icon={BookOpen}
                label={`Next lesson: ${recommended.lessonTitle}`}
                detail={`${recommended.subjectName} · ${recommended.chapterTitle} · ${recommended.minutes} min`}
                href={recommended.href}
                action="Open lesson"
              />
            )}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-5 text-primary" aria-hidden="true" /> Subject progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {subjectStats.map((subject) => (
              <div key={subject.slug}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <Link href={`/subjects/${subject.slug}`} className="font-semibold hover:text-primary">
                    {subject.label}
                  </Link>
                  <span className="text-muted-foreground">
                    {subject.complete}/{subject.total}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${Math.max(subject.percentage, subject.complete > 0 ? 2 : 0)}%` }}
                  />
                </div>
                <p className="mt-1 text-right text-xs text-muted-foreground">{subject.percentage}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center gap-2">
              <History className="size-5 text-primary" aria-hidden="true" /> Recent activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivities.length > 0 ? (
              <div className="divide-y">
                {recentActivities.map(({ activity, lesson }) => (
                  <Link
                    key={activity.id}
                    href={lesson!.href}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0 hover:text-primary"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{lesson!.lessonTitle}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {formatActivity(activity.type, activity.score)}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{formatWhen(activity.at)}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={History}
                title="No activity yet"
                text="Open a lesson and your recent learning history will appear here."
                href="/start"
                action="Start learning"
              />
            )}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center gap-2">
              <Bookmark className="size-5 text-primary" aria-hidden="true" /> Bookmarked lessons
            </CardTitle>
          </CardHeader>
          <CardContent>
            {bookmarkedLessons.length > 0 ? (
              <div className="space-y-3">
                {bookmarkedLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={lesson.href}
                    className="flex items-center justify-between gap-4 rounded-lg border p-3 transition hover:border-primary/40"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{lesson.lessonTitle}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {lesson.subjectName} · {lesson.chapterTitle}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Bookmark}
                title="No bookmarks yet"
                text="Use the bookmark button inside any lesson to save it here."
                href="/search"
                action="Find a lesson"
              />
            )}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <QuickLink
          icon={Brain}
          title="Smart Review"
          text="Practice mistakes when they are due."
          href="/my-learning/review"
          badge={dueReviews.length > 0 ? `${dueReviews.length} due` : undefined}
        />
        <QuickLink
          icon={RotateCcw}
          title="Mistake Notebook"
          text="See incorrect answers and explanations."
          href="/my-learning/mistakes"
          badge={activeReviews.length > 0 ? `${activeReviews.length} active` : undefined}
        />
        <QuickLink
          icon={Search}
          title="Universal Search"
          text="Search every part of EduVerse."
          href="/search"
        />
      </section>

      <Card className="shadow-sm">
        <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold">Protect your progress</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
              Progress currently stays in this browser. Download a backup before changing devices or clearing browser data.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={downloadBackup}>
              <Download aria-hidden="true" /> Export progress
            </Button>
            <Button variant="outline" onClick={() => importRef.current?.click()}>
              <FileUp aria-hidden="true" /> Import backup
            </Button>
            <input
              ref={importRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={importBackup}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PlanRow({
  icon: Icon,
  label,
  detail,
  href,
  action,
  priority = false,
}: {
  icon: typeof Brain;
  label: string;
  detail: string;
  href: string;
  action: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center", priority && "border-primary/30 bg-primary/5")}>
      <span className={cn("w-fit rounded-lg p-2.5", priority ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      </div>
      <Button asChild size="sm" variant={priority ? "default" : "outline"}>
        <Link href={href}>
          {action} <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  text,
  href,
  action,
}: {
  icon: typeof History;
  title: string;
  text: string;
  href: string;
  action: string;
}) {
  return (
    <div className="py-6 text-center">
      <Icon className="mx-auto size-7 text-muted-foreground" aria-hidden="true" />
      <p className="mt-3 font-semibold">{title}</p>
      <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-muted-foreground">{text}</p>
      <Button asChild variant="outline" size="sm" className="mt-4">
        <Link href={href}>{action}</Link>
      </Button>
    </div>
  );
}

function QuickLink({
  icon: Icon,
  title,
  text,
  href,
  badge,
}: {
  icon: typeof Brain;
  title: string;
  text: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="group rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {badge && <Badge variant="secondary">{badge}</Badge>}
      </div>
      <h2 className="mt-4 font-semibold group-hover:text-primary">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </Link>
  );
}
