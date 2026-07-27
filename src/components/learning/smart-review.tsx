"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Brain, CalendarClock, CheckCircle2, Eye, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";
import type { LessonCatalogItem } from "@/lib/curriculum";
import { recordReviewOutcome, useLearningSnapshot } from "@/lib/progress-store";

function nextInterval(stage: number): string {
  return ["tomorrow", "in 3 days", "in 7 days", "in 14 days", "in 30 days"][Math.min(stage, 4)] ?? "later";
}

export function SmartReview({ catalog }: { catalog: LessonCatalogItem[] }) {
  const snapshot = useLearningSnapshot();
  const [showAll, setShowAll] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const catalogMap = useMemo(() => new Map(catalog.map((lesson) => [lesson.id, lesson])), [catalog]);
  const active = snapshot.reviews.filter((review) => review.status === "active");
  const due = active.filter((review) => new Date(review.dueAt).getTime() <= Date.now());
  const items = (showAll ? active : due).slice(0, 12);

  function answer(id: string, remembered: boolean, lessonId: string, stage: number) {
    recordReviewOutcome(id, remembered);
    trackEvent("review_completed", {
      review_id: id,
      lesson_id: lessonId,
      remembered,
      previous_stage: stage,
    });
    setRevealed((current) => ({ ...current, [id]: false }));
  }

  if (active.length === 0) {
    return (
      <Card className="mx-auto max-w-2xl shadow-sm">
        <CardContent className="py-12 text-center">
          <CheckCircle2 className="mx-auto size-10 text-emerald-500" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold">Nothing needs review yet</h2>
          <p className="mx-auto mt-2 max-w-lg leading-7 text-muted-foreground">
            Incorrect practice and quiz answers will automatically appear here with a spaced revision schedule.
          </p>
          <Button asChild className="mt-6">
            <Link href="/search">Find a lesson <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Brain className="size-5 text-primary" aria-hidden="true" />
            <p className="font-semibold">{due.length} due now · {active.length} active</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Reveal the answer only after trying to recall it yourself.
          </p>
        </div>
        <Button type="button" variant="outline" onClick={() => setShowAll((value) => !value)}>
          <CalendarClock aria-hidden="true" /> {showAll ? "Show due only" : "Show all active"}
        </Button>
      </div>

      {items.length === 0 ? (
        <Card className="shadow-sm">
          <CardContent className="py-12 text-center">
            <CheckCircle2 className="mx-auto size-9 text-emerald-500" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">Today&apos;s review is complete</h2>
            <p className="mt-2 text-muted-foreground">Your next reviews are already scheduled.</p>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/my-learning"><ArrowLeft aria-hidden="true" /> Back to dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => {
            const lesson = catalogMap.get(item.lessonId);
            const isRevealed = !!revealed[item.id];
            return (
              <Card key={item.id} className="overflow-hidden shadow-sm">
                <CardContent className="p-0">
                  <div className="border-b bg-muted/30 px-5 py-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">Review {index + 1}</Badge>
                        <Badge variant="outline">Stage {item.stage + 1}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {lesson ? `${lesson.subjectName} · ${lesson.chapterTitle}` : item.lessonId}
                        </span>
                      </div>
                      <Link href={item.href} className="text-xs font-medium text-primary hover:underline">
                        Open lesson
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-5 p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Question</p>
                      <p className="mt-2 text-lg font-semibold leading-8">{item.prompt}</p>
                    </div>

                    {item.selectedAnswer && (
                      <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-destructive">Previous answer</p>
                        <p className="mt-1 text-sm">{item.selectedAnswer}</p>
                      </div>
                    )}

                    {!isRevealed ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setRevealed((current) => ({ ...current, [item.id]: true }))}
                      >
                        <Eye aria-hidden="true" /> Reveal answer
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        {item.correctAnswer && (
                          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Correct answer</p>
                            <p className="mt-1 font-medium">{item.correctAnswer}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold">Why</p>
                          <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.explanation}</p>
                        </div>
                        <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row">
                          <Button
                            type="button"
                            onClick={() => answer(item.id, true, item.lessonId, item.stage)}
                          >
                            <CheckCircle2 aria-hidden="true" /> I remembered
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => answer(item.id, false, item.lessonId, item.stage)}
                          >
                            <RotateCcw aria-hidden="true" /> Needs more practice
                          </Button>
                          <p className="self-center text-xs text-muted-foreground sm:ml-auto">
                            Correct: next review {nextInterval(item.stage)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
