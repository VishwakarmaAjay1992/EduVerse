"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, RotateCcw } from "lucide-react";
import questions from "@/data/physics-question-bank.json";
import { saveMastery } from "@/lib/mastery-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Question = {
  id: string;
  chapterSlug: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  concept: string;
};

export function ChapterAssessment({
  chapterSlug,
  chapterTitle,
}: {
  chapterSlug: string;
  chapterTitle: string;
}) {
  const pool = useMemo(
    () => (questions as Question[]).filter((question) => question.chapterSlug === chapterSlug).slice(0, 20),
    [chapterSlug]
  );
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const correct = pool.filter((question) => answers[question.id] === question.answer).length;
  const score = pool.length ? Math.round((correct / pool.length) * 100) : 0;
  const passed = score >= 75;
  const progress = pool.length ? Math.round((answeredCount / pool.length) * 100) : 0;

  function submit() {
    if (answeredCount < pool.length) return;
    setSubmitted(true);
    saveMastery({ chapterSlug, score, passed });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retry() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-xl leading-tight sm:text-2xl">
            {chapterTitle} mastery assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4 text-sm text-muted-foreground sm:pt-6">
          <p>
            Answer {pool.length} tagged questions. A score of 75% is required for chapter mastery.
          </p>
          <div>
            <div className="mb-2 flex items-center justify-between gap-3 text-xs">
              <span>{submitted ? "Assessment complete" : `${answeredCount} of ${pool.length} answered`}</span>
              <span>{submitted ? `${score}% score` : `${progress}%`}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn("h-full rounded-full transition-all", submitted ? (passed ? "bg-emerald-500" : "bg-amber-500") : "bg-primary")}
                style={{ width: `${submitted ? score : progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {submitted ? (
        <Card className={cn("border-2", passed ? "border-emerald-500/35" : "border-amber-500/35")}>
          <CardContent className="space-y-5 pt-4 sm:pt-6">
            <div className="flex items-start gap-3">
              {passed ? (
                <CheckCircle2 className="mt-0.5 size-7 shrink-0 text-emerald-500" aria-hidden="true" />
              ) : (
                <CircleAlert className="mt-0.5 size-7 shrink-0 text-amber-500" aria-hidden="true" />
              )}
              <div>
                <p className="text-3xl font-bold">{score}%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {passed ? "Chapter mastery achieved." : "Review the explanations below and try again."}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button variant="outline" onClick={retry} className="w-full sm:w-auto">
                <RotateCcw aria-hidden="true" /> Retry assessment
              </Button>
              <Button asChild className="w-full sm:w-auto">
                <Link href={`/subjects/physics/${chapterSlug}`}>Return to chapter</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {pool.map((question, index) => {
        const selected = answers[question.id];
        const isCorrect = selected === question.answer;
        return (
          <Card key={question.id} className="scroll-mt-20">
            <CardContent className="space-y-4 pt-4 sm:pt-6">
              <div className="flex items-start justify-between gap-3">
                <p className="min-w-0 font-medium leading-6">
                  <span className="mr-1 text-muted-foreground">{index + 1}.</span> {question.prompt}
                </p>
                <Badge variant="secondary" className="hidden shrink-0 sm:inline-flex">
                  {question.concept}
                </Badge>
              </div>
              <Badge variant="secondary" className="sm:hidden">
                {question.concept}
              </Badge>
              <div className="grid gap-2.5">
                {question.options.map((option, optionIndex) => {
                  const chosen = selected === optionIndex;
                  const correctOption = submitted && question.answer === optionIndex;
                  return (
                    <button
                      key={`${question.id}-${optionIndex}`}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                      className={cn(
                        "min-h-12 rounded-lg border p-3 text-left text-sm leading-5 transition-colors sm:p-3.5",
                        chosen && !submitted && "border-primary bg-primary/5 ring-1 ring-primary/25",
                        correctOption && "border-emerald-500/50 bg-emerald-500/10",
                        submitted && chosen && !correctOption && "border-amber-500/50 bg-amber-500/10",
                        !submitted && !chosen && "hover:bg-muted/50"
                      )}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                            chosen && !submitted && "border-primary bg-primary text-primary-foreground",
                            correctOption && "border-emerald-500 bg-emerald-500 text-white",
                            submitted && chosen && !correctOption && "border-amber-500 bg-amber-500 text-white"
                          )}
                        >
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span>{option}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {submitted ? (
                <div className={cn("rounded-lg p-3.5 text-sm leading-6", isCorrect ? "bg-emerald-500/10" : "bg-amber-500/10")}>
                  <strong>{isCorrect ? "Correct." : `Correct answer: ${question.options[question.answer]}.`}</strong>{" "}
                  {question.explanation}
                </div>
              ) : null}
            </CardContent>
          </Card>
        );
      })}

      {!submitted ? (
        <div className="sticky bottom-0 z-20 -mx-4 border-t bg-background/95 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
          <Button onClick={submit} disabled={answeredCount < pool.length} className="w-full sm:w-auto">
            {answeredCount < pool.length
              ? `Answer ${pool.length - answeredCount} more question${pool.length - answeredCount === 1 ? "" : "s"}`
              : "Submit assessment"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
