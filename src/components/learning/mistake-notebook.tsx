"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, Search, Trash2, TriangleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { LessonCatalogItem } from "@/lib/curriculum";
import {
  clearMasteredReviews,
  removeReviewItem,
  type ReviewStatus,
  useLearningSnapshot,
} from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Filter = "all" | ReviewStatus;

export function MistakeNotebook({ catalog }: { catalog: LessonCatalogItem[] }) {
  const snapshot = useLearningSnapshot();
  const [filter, setFilter] = useState<Filter>("active");
  const [query, setQuery] = useState("");
  const catalogMap = useMemo(() => new Map(catalog.map((lesson) => [lesson.id, lesson])), [catalog]);

  const filtered = snapshot.reviews.filter((item) => {
    if (filter !== "all" && item.status !== filter) return false;
    if (!query.trim()) return true;
    const lesson = catalogMap.get(item.lessonId);
    const haystack = `${item.prompt} ${item.explanation} ${item.correctAnswer ?? ""} ${lesson?.lessonTitle ?? ""}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  const activeCount = snapshot.reviews.filter((item) => item.status === "active").length;
  const masteredCount = snapshot.reviews.filter((item) => item.status === "mastered").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold">{activeCount} active · {masteredCount} mastered</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Mistakes are saved automatically from lesson practice and graded quizzes.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search mistakes…" className="pl-9" />
          </div>
          {masteredCount > 0 && (
            <Button type="button" variant="outline" onClick={clearMasteredReviews}>
              <Trash2 aria-hidden="true" /> Clear mastered
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["active", "mastered", "all"] as const).map((value) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={filter === value ? "default" : "outline"}
            onClick={() => setFilter(value)}
            className="capitalize"
          >
            {value}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Card className="shadow-sm">
          <CardContent className="py-12 text-center">
            {snapshot.reviews.length === 0 ? (
              <CheckCircle2 className="mx-auto size-10 text-emerald-500" aria-hidden="true" />
            ) : (
              <Search className="mx-auto size-9 text-muted-foreground" aria-hidden="true" />
            )}
            <h2 className="mt-4 text-xl font-bold">
              {snapshot.reviews.length === 0 ? "Your notebook is empty" : "No matching mistakes"}
            </h2>
            <p className="mx-auto mt-2 max-w-xl leading-7 text-muted-foreground">
              {snapshot.reviews.length === 0
                ? "Complete practice or a graded quiz. Any incorrect answers will be collected here automatically."
                : "Change the filter or try a different search term."}
            </p>
            {snapshot.reviews.length === 0 && (
              <Button asChild className="mt-6">
                <Link href="/search">Find a lesson</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((item) => {
            const lesson = catalogMap.get(item.lessonId);
            return (
              <Card key={item.id} className={cn("shadow-sm", item.status === "mastered" && "border-emerald-500/30 bg-emerald-500/5")}>
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={item.status === "mastered" ? "secondary" : "destructive"}>
                        {item.status === "mastered" ? "Mastered" : "Needs review"}
                      </Badge>
                      <Badge variant="outline" className="capitalize">{item.kind}</Badge>
                      <span className="text-xs text-muted-foreground">Stage {item.stage + 1}</span>
                    </div>
                    <button
                      type="button"
                      aria-label="Remove mistake"
                      onClick={() => removeReviewItem(item.id)}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-destructive"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div>
                    <p className="font-semibold leading-7">{item.prompt}</p>
                    {lesson && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {lesson.subjectName} · {lesson.chapterTitle} · {lesson.lessonTitle}
                      </p>
                    )}
                  </div>

                  {item.selectedAnswer && (
                    <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm">
                      <span className="font-semibold text-destructive">Your answer: </span>{item.selectedAnswer}
                    </div>
                  )}
                  {item.correctAnswer && (
                    <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-3 text-sm">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">Correct answer: </span>{item.correctAnswer}
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                    <TriangleAlert className="mt-1 size-4 shrink-0 text-amber-500" aria-hidden="true" />
                    <p>{item.explanation}</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t pt-4">
                    <p className="text-xs text-muted-foreground">Attempted {item.attempts} time{item.attempts === 1 ? "" : "s"}</p>
                    <Button asChild size="sm" variant="outline">
                      <Link href={item.href}><BookOpen aria-hidden="true" /> Open lesson</Link>
                    </Button>
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
