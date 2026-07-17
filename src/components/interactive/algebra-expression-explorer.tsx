"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, FunctionSquare, RefreshCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

const TRANSLATIONS = [
  {
    phrase: "Five more than a number n",
    options: ["5n", "n + 5", "5 − n"],
    answer: 1,
    explanation: "‘More than’ means add. Start with n and add 5, giving n + 5.",
  },
  {
    phrase: "Three times a number x, then subtract 4",
    options: ["3(x − 4)", "3x − 4", "x − 12"],
    answer: 1,
    explanation: "Three times x is 3x. Subtracting 4 afterwards gives 3x − 4.",
  },
  {
    phrase: "The difference between 20 and y",
    options: ["y − 20", "20 − y", "20y"],
    answer: 1,
    explanation: "The order matters: the difference between 20 and y is 20 − y.",
  },
  {
    phrase: "Half of the sum of a and 6",
    options: ["a/2 + 6", "(a + 6)/2", "2(a + 6)"],
    answer: 1,
    explanation: "The sum must be formed first, so it belongs inside grouping symbols.",
  },
];

const EXPRESSIONS = [
  {
    label: "3x + 2",
    evaluate: (x: number, y: number) => {
      void y;
      return 3 * x + 2;
    },
    steps: (x: number, y: number) => {
      void y;
      return `3(${x}) + 2 = ${3 * x} + 2 = ${3 * x + 2}`;
    },
  },
  {
    label: "2x − y",
    evaluate: (x: number, y: number) => 2 * x - y,
    steps: (x: number, y: number) => `2(${x}) − (${y}) = ${2 * x} − (${y}) = ${2 * x - y}`,
  },
  {
    label: "x² + y",
    evaluate: (x: number, y: number) => x * x + y,
    steps: (x: number, y: number) => `(${x})² + (${y}) = ${x * x} + (${y}) = ${x * x + y}`,
  },
  {
    label: "4 − 2y",
    evaluate: (_x: number, y: number) => 4 - 2 * y,
    steps: (_x: number, y: number) => `4 − 2(${y}) = 4 − (${2 * y}) = ${4 - 2 * y}`,
  },
];

const LIKE_TERM_SETS = [
  { term: "7x", family: "x terms", reason: "Its variable part is x." },
  {
    term: "−2x",
    family: "x terms",
    reason: "The coefficient changes, but the variable part is still x.",
  },
  { term: "4y", family: "y terms", reason: "Its variable part is y, not x." },
  { term: "9", family: "constants", reason: "It has no variable, so it is a constant." },
  { term: "3x²", family: "x² terms", reason: "x² and x are different variable parts." },
];

export function AlgebraExpressionExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"translate" | "substitute" | "classify">("translate");
  const [translationIndex, setTranslationIndex] = useState(0);
  const [translationChoice, setTranslationChoice] = useState<number | null>(null);
  const [x, setX] = useState(3);
  const [y, setY] = useState(-2);
  const [expressionIndex, setExpressionIndex] = useState(0);
  const [termIndex, setTermIndex] = useState(0);
  const [familyChoice, setFamilyChoice] = useState<string | null>(null);

  const expression = EXPRESSIONS[expressionIndex]!;
  const result = useMemo(() => expression.evaluate(x, y), [expression, x, y]);
  const translation = TRANSLATIONS[translationIndex]!;
  const term = LIKE_TERM_SETS[termIndex]!;

  function record() {
    markStep(lessonId, "algebraExpressionExplorer");
  }

  function changeTab(next: typeof tab) {
    setTab(next);
    record();
  }

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Algebra expression activities"
      >
        {[
          ["translate", "Translate words"],
          ["substitute", "Substitution machine"],
          ["classify", "Like-term families"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => changeTab(value as typeof tab)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              tab === value ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "translate" && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Translate this phrase
            </p>
            <p className="mt-2 text-lg font-semibold">{translation.phrase}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {translation.options.map((option, index) => {
              const answered = translationChoice !== null;
              const correct = index === translation.answer;
              const chosen = translationChoice === index;
              return (
                <button
                  key={option}
                  type="button"
                  disabled={answered}
                  onClick={() => {
                    setTranslationChoice(index);
                    record();
                  }}
                  className={cn(
                    "rounded-lg border p-3 text-left font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    !answered && "hover:border-primary/50 hover:bg-primary/5",
                    answered && correct && "border-emerald-500 bg-emerald-500/10",
                    answered && chosen && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {translationChoice !== null && (
            <div
              className={cn(
                "rounded-lg border p-4 text-sm",
                translationChoice === translation.answer
                  ? "border-emerald-500/40 bg-emerald-500/5"
                  : "border-destructive/40 bg-destructive/5"
              )}
            >
              <p className="flex items-center gap-2 font-semibold">
                {translationChoice === translation.answer ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <XCircle className="size-4" />
                )}
                {translationChoice === translation.answer ? "Correct" : "Try the reasoning"}
              </p>
              <p className="mt-1 text-muted-foreground">{translation.explanation}</p>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setTranslationIndex((current) => (current + 1) % TRANSLATIONS.length);
              setTranslationChoice(null);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            Next phrase <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {tab === "substitute" && (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm font-medium">
              Expression
              <select
                value={expressionIndex}
                onChange={(event) => {
                  setExpressionIndex(Number(event.target.value));
                  record();
                }}
                className="w-full rounded-md border bg-background px-3 py-2"
              >
                {EXPRESSIONS.map((item, index) => (
                  <option key={item.label} value={index}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium">
              x = <span className="font-bold">{x}</span>
              <input
                type="range"
                min={-6}
                max={8}
                value={x}
                onChange={(event) => {
                  setX(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              y = <span className="font-bold">{y}</span>
              <input
                type="range"
                min={-6}
                max={8}
                value={y}
                onChange={(event) => {
                  setY(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
          </div>

          <svg
            viewBox="0 0 720 180"
            className="h-auto w-full"
            role="img"
            aria-label={`Function machine evaluating ${expression.label} at x equals ${x} and y equals ${y}`}
          >
            <rect
              x="20"
              y="52"
              width="150"
              height="78"
              rx="14"
              className="fill-muted stroke-border"
            />
            <text
              x="95"
              y="82"
              textAnchor="middle"
              className="fill-foreground text-sm font-semibold"
            >
              Inputs
            </text>
            <text x="95" y="108" textAnchor="middle" className="fill-muted-foreground text-sm">
              x = {x}, y = {y}
            </text>
            <line x1="170" y1="91" x2="255" y2="91" className="stroke-primary" strokeWidth="3" />
            <path d="M255 91 l-12 -7 v14 z" className="fill-primary" />
            <rect
              x="265"
              y="35"
              width="190"
              height="112"
              rx="18"
              className="fill-primary/10 stroke-primary"
              strokeWidth="2"
            />
            <text
              x="360"
              y="76"
              textAnchor="middle"
              className="fill-foreground text-sm font-semibold"
            >
              Expression machine
            </text>
            <text x="360" y="112" textAnchor="middle" className="fill-primary text-xl font-bold">
              {expression.label}
            </text>
            <line x1="455" y1="91" x2="540" y2="91" className="stroke-primary" strokeWidth="3" />
            <path d="M540 91 l-12 -7 v14 z" className="fill-primary" />
            <rect
              x="550"
              y="52"
              width="150"
              height="78"
              rx="14"
              className="fill-muted stroke-border"
            />
            <text
              x="625"
              y="82"
              textAnchor="middle"
              className="fill-foreground text-sm font-semibold"
            >
              Output
            </text>
            <text x="625" y="112" textAnchor="middle" className="fill-primary text-xl font-bold">
              {result}
            </text>
          </svg>

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="flex items-center gap-2 font-semibold">
              <FunctionSquare className="size-5 text-primary" /> Substitute first, then calculate
            </p>
            <p className="mt-2 font-mono text-sm sm:text-base">{expression.steps(x, y)}</p>
          </div>
        </div>
      )}

      {tab === "classify" && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-5 text-center">
            <p className="text-sm text-muted-foreground">Which family contains this term?</p>
            <p className="mt-2 text-3xl font-bold text-primary">{term.term}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-4">
            {["x terms", "y terms", "x² terms", "constants"].map((family) => (
              <button
                key={family}
                type="button"
                disabled={familyChoice !== null}
                onClick={() => {
                  setFamilyChoice(family);
                  record();
                }}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm font-medium",
                  familyChoice === null && "hover:border-primary/50",
                  familyChoice !== null &&
                    family === term.family &&
                    "border-emerald-500 bg-emerald-500/10",
                  familyChoice === family &&
                    family !== term.family &&
                    "border-destructive bg-destructive/10"
                )}
              >
                {family}
              </button>
            ))}
          </div>
          {familyChoice !== null && (
            <p className="rounded-lg border p-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{term.family}.</span> {term.reason}
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              setTermIndex((current) => (current + 1) % LIKE_TERM_SETS.length);
              setFamilyChoice(null);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <RefreshCcw className="size-4" /> New term
          </button>
        </div>
      )}
    </div>
  );
}
