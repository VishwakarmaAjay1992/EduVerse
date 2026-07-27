"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { creditReviewFromAssessment, recordReviewItem } from "@/lib/progress-store";
import { cn } from "@/lib/utils";
import { plainMath, richText } from "@/components/math";

export interface QuizQuestion {
  prompt: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export function Quiz({ questions, lessonId }: { questions: QuizQuestion[]; lessonId?: string }) {
  const [picked, setPicked] = useState<Record<number, number>>({});

  function choose(questionIndex: number, optionIndex: number) {
    setPicked((current) => ({ ...current, [questionIndex]: optionIndex }));
    if (!lessonId) return;
    const question = questions[questionIndex]!;
    const reviewId = `${lessonId}:quick-quiz:${questionIndex}`;
    if (optionIndex !== question.answer) {
      recordReviewItem({
        id: reviewId,
        lessonId,
        kind: "practice",
        prompt: plainMath(question.prompt),
        selectedAnswer: plainMath(question.options[optionIndex] ?? "No answer"),
        correctAnswer: plainMath(question.options[question.answer] ?? ""),
        explanation: plainMath(question.explanation ?? "Review the relevant lesson section and try again."),
      });
      trackEvent("mistake_saved", { lesson_id: lessonId, source: "quick_quiz", question_index: questionIndex });
    } else {
      creditReviewFromAssessment(reviewId);
    }
  }

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const chosen = picked[qi];
        const answered = chosen !== undefined;
        return (
          <div key={qi} className="rounded-lg border p-4">
            <p className="mb-3 font-medium">{richText(q.prompt)}</p>
            <div className="grid gap-2">
              {q.options.map((opt, oi) => {
                const isAnswer = oi === q.answer;
                const isChosen = oi === chosen;
                return (
                  <button
                    key={oi}
                    disabled={answered}
                    onClick={() => choose(qi, oi)}
                    className={cn(
                      "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                      !answered && "hover:border-primary/50",
                      answered && isAnswer && "border-emerald-500 bg-emerald-500/10",
                      answered && isChosen && !isAnswer && "border-destructive bg-destructive/10",
                      answered && !isAnswer && !isChosen && "opacity-60"
                    )}
                  >
                    {richText(opt)}
                  </button>
                );
              })}
            </div>
            {answered && q.explanation && (
              <p className="mt-3 text-sm text-muted-foreground">{richText(q.explanation)}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
