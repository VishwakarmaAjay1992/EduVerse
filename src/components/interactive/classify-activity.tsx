"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";
import type { ClassifyItem } from "@/lib/lesson-content-types";

export function ClassifyActivity({
  lessonId,
  categories,
  items,
  stepKey = "classify",
}: {
  lessonId: string;
  categories: string[];
  items: ClassifyItem[];
  stepKey?: string;
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const decided = Object.keys(answers).length;
  const score = items.filter((it, i) => answers[i] === it.category).length;
  const allDone = decided === items.length;

  function choose(i: number, cat: string) {
    if (answers[i]) return;
    const next = { ...answers, [i]: cat };
    setAnswers(next);
    if (Object.keys(next).length === items.length) markStep(lessonId, stepKey);
  }

  return (
    <div className="rounded-xl border p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Tap a category for each quantity.</span>
        <span className="text-xs text-muted-foreground">
          Score: {score} / {items.length}
        </span>
      </div>

      <ul className="space-y-2">
        {items.map((it, i) => {
          const chosen = answers[i];
          const answered = chosen !== undefined;
          const correct = chosen === it.category;
          return (
            <li key={i} className="flex flex-wrap items-center gap-2 rounded-lg border p-2">
              <span className="min-w-24 flex-1 text-sm font-medium">{it.term}</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  disabled={answered}
                  onClick={() => choose(i, cat)}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-sm transition-colors",
                    !answered && "hover:border-primary/40",
                    answered && cat === it.category && "border-emerald-500 bg-emerald-500/10",
                    answered &&
                      chosen === cat &&
                      !correct &&
                      "border-destructive bg-destructive/10",
                    answered && chosen !== cat && cat !== it.category && "opacity-50"
                  )}
                >
                  {cat}
                </button>
              ))}
              {answered && !correct && (
                <span className="w-full text-xs text-muted-foreground">
                  {it.term} is a {it.category.toLowerCase()} quantity.
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setAnswers({})}
          className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
        >
          <RotateCcw className="size-3.5" /> Reset
        </button>
        {allDone && (
          <p className="text-sm text-emerald-600">
            Finished — {score} of {items.length} correct.
          </p>
        )}
      </div>
    </div>
  );
}
