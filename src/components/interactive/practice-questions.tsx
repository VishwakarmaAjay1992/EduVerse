"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";
import { richText } from "@/components/math";
import type { PracticeQuestion } from "@/lib/lesson-content-types";

export function PracticeQuestions({
  lessonId,
  questions,
  stepKey = "practice",
}: {
  lessonId: string;
  questions: PracticeQuestion[];
  stepKey?: string;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  function choose(qi: number, oi: number) {
    if (answers[qi] !== undefined) return;
    const next = { ...answers, [qi]: oi };
    setAnswers(next);
    if (Object.keys(next).length === questions.length) markStep(lessonId, stepKey);
  }

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => {
        const chosen = answers[qi];
        const answered = chosen !== undefined;
        const correct = chosen === q.answer;
        return (
          <div key={qi} className="rounded-lg border p-4">
            <p className="mb-2 text-sm font-medium">{richText(q.prompt)}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  disabled={answered}
                  onClick={() => choose(qi, oi)}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-sm transition-colors",
                    !answered && "hover:border-primary/40",
                    answered && oi === q.answer && "border-emerald-500 bg-emerald-500/10",
                    answered && chosen === oi && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {richText(opt)}
                </button>
              ))}
            </div>
            {answered && (
              <p
                className={cn(
                  "mt-2 flex items-center gap-1.5 text-sm",
                  correct ? "text-emerald-600" : "text-destructive"
                )}
              >
                {correct ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
                {richText(q.explanation)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
