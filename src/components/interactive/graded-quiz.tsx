"use client";

import { useMemo, useState } from "react";
import { saveQuiz, useLessonProgress } from "@/lib/progress-store";
import { cn } from "@/lib/utils";
import { richText, plainMath } from "@/components/math";
import type { GradedQuestion } from "@/lib/lesson-content-types";

type Answer =
  | { type: "mc" | "tf"; value: number }
  | { type: "matching"; value: number[] }
  | { type: "multi"; value: number[] };

function markQuestion(q: GradedQuestion, a: Answer | undefined): number {
  if (!a) return 0;
  if (q.type === "mc") return a.type === "mc" && a.value === q.answer ? q.marks : 0;
  if (q.type === "tf") return a.type === "tf" && a.value === (q.answer ? 1 : 0) ? q.marks : 0;
  if (q.type === "matching" && a.type === "matching") {
    const per = q.marks / q.left.length;
    let correct = 0;
    q.left.forEach((_, i) => {
      if (a.value[i] === q.answer[i]) correct++;
    });
    return Math.round(correct * per * 100) / 100;
  }
  if (q.type === "multi" && a.type === "multi") {
    const chosen = a.value;
    if (chosen.some((c) => !q.answers.includes(c))) return 0; // any wrong -> 0
    const right = chosen.filter((c) => q.answers.includes(c)).length;
    if (right === q.answers.length) return q.marks;
    if (right >= 2) return q.marks / 2;
    return 0;
  }
  return 0;
}

function status(earned: number, max: number, answered: boolean): string {
  if (!answered) return "Unanswered";
  if (earned === max) return "Correct";
  if (earned > 0) return "Partially correct";
  return "Incorrect";
}

export function GradedQuiz({
  lessonId,
  questions,
  passMark = 60,
}: {
  lessonId: string;
  questions: GradedQuestion[];
  passMark?: number;
}) {
  const totalMarks = useMemo(() => questions.reduce((s, q) => s + q.marks, 0), [questions]);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [current, setCurrent] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const progress = useLessonProgress(lessonId);

  const q = questions[current]!;
  const answeredCount = Object.keys(answers).length;

  function setAnswer(a: Answer) {
    setAnswers((prev) => ({ ...prev, [current]: a }));
  }

  function submit() {
    const earned = questions.reduce((s, qq, i) => s + markQuestion(qq, answers[i]), 0);
    saveQuiz(lessonId, Math.round(earned * 100) / 100, totalMarks, passMark);
    setSubmitted(true);
    setConfirming(false);
  }

  function retry() {
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
  }

  // ---------- Results view ----------
  if (submitted) {
    const earned = questions.reduce((s, qq, i) => s + markQuestion(qq, answers[i]), 0);
    const percent = Math.round((earned / totalMarks) * 100);
    const passed = percent >= passMark;
    const label =
      percent >= 90
        ? "Excellent"
        : percent >= 80
          ? "Very Good"
          : percent >= 70
            ? "Good"
            : percent >= 60
              ? "Satisfactory"
              : "Needs Improvement";
    return (
      <div className="space-y-4">
        <div
          className={cn(
            "rounded-xl border p-5",
            passed ? "border-emerald-500/40 bg-emerald-500/5" : "border-amber-500/40 bg-amber-500/5"
          )}
        >
          <p className="text-lg font-semibold">
            {Math.round(earned * 100) / 100} / {totalMarks} marks — {percent}% ({label})
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {passed ? "Passed" : `Not passed — you need ${passMark}%`} · Attempt{" "}
            {progress.quiz?.attempts ?? 1} · Best {progress.quiz?.best ?? percent}%
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={retry}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Retry quiz
            </button>
          </div>
        </div>

        {questions.map((qq, i) => {
          const a = answers[i];
          const earnedQ = markQuestion(qq, a);
          const st = status(earnedQ, qq.marks, a !== undefined);
          return (
            <div key={i} className="rounded-lg border p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium">
                  {i + 1}. {richText(qq.prompt)}
                </p>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-xs",
                    st === "Correct" && "bg-emerald-500/15 text-emerald-600",
                    st === "Partially correct" && "bg-amber-500/15 text-amber-600",
                    st === "Incorrect" && "bg-destructive/15 text-destructive",
                    st === "Unanswered" && "bg-muted text-muted-foreground"
                  )}
                >
                  {st} · {Math.round(earnedQ * 100) / 100}/{qq.marks}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{richText(qq.explanation)}</p>
            </div>
          );
        })}
      </div>
    );
  }

  // ---------- Question view ----------
  return (
    <div className="rounded-xl border p-5">
      {/* progress + direct nav */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Question {current + 1} of {questions.length} · {totalMarks} marks total
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to question ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                "size-6 rounded text-xs",
                i === current
                  ? "bg-primary text-primary-foreground"
                  : answers[i] !== undefined
                    ? "bg-primary/20"
                    : "bg-muted"
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 font-medium">{richText(q.prompt)}</p>

      {/* inputs by type */}
      {(q.type === "mc" || q.type === "tf") && (
        <div className="grid gap-2">
          {(q.type === "mc" ? q.options : ["True", "False"]).map((opt, oi) => {
            const val = answers[current]?.value;
            const selected = typeof val === "number" && val === oi;
            return (
              <button
                key={oi}
                onClick={() => setAnswer({ type: q.type === "tf" ? "tf" : "mc", value: oi })}
                className={cn(
                  "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                  selected ? "border-primary bg-primary/5" : "hover:border-primary/40"
                )}
              >
                {richText(opt)}
              </button>
            );
          })}
        </div>
      )}

      {q.type === "matching" && (
        <div className="space-y-3">
          {q.left.map((l, li) => {
            const arr = (answers[current]?.value as number[] | undefined) ?? q.left.map(() => -1);
            const cur = arr[li];
            return (
              <div key={li} className="rounded-md border p-3">
                <p className="mb-2 text-sm font-medium">{richText(l)}</p>
                <div
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label={`Match for ${plainMath(l)}`}
                >
                  {q.options.map((o, oi) => {
                    const selected = cur === oi;
                    return (
                      <button
                        key={oi}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => {
                          const next = [...arr];
                          next[li] = oi;
                          setAnswer({ type: "matching", value: next });
                        }}
                        className={cn(
                          "rounded-md border px-2.5 py-1.5 text-sm transition-colors",
                          selected ? "border-primary bg-primary/10" : "hover:border-primary/40"
                        )}
                      >
                        {richText(o)}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {q.type === "multi" && (
        <div className="grid gap-2">
          {q.options.map((opt, oi) => {
            const arr = (answers[current]?.value as number[] | undefined) ?? [];
            const checked = arr.includes(oi);
            return (
              <label
                key={oi}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm",
                  checked ? "border-primary bg-primary/5" : "hover:border-primary/40"
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const next = checked ? arr.filter((x) => x !== oi) : [...arr, oi];
                    setAnswer({ type: "multi", value: next });
                  }}
                  className="accent-primary"
                />
                {richText(opt)}
              </label>
            );
          })}
        </div>
      )}

      {/* navigation */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
        >
          Previous
        </button>

        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="rounded-md border px-3 py-1.5 text-sm"
          >
            Next
          </button>
        ) : confirming ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {answeredCount < questions.length
                ? `${questions.length - answeredCount} unanswered. `
                : ""}
              Submit?
            </span>
            <button
              onClick={submit}
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Confirm
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="rounded-md border px-3 py-1.5 text-sm"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
          >
            Submit quiz
          </button>
        )}
      </div>
    </div>
  );
}
