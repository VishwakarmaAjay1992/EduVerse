"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw, Scale, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface EquationPreset {
  a: number;
  b: number;
  c: number;
  context: string;
}

const EQUATIONS: EquationPreset[] = [
  { a: 1, b: 5, c: 12, context: "A number increased by 5 equals 12." },
  { a: 3, b: 0, c: 18, context: "Three equal bags contain 18 counters altogether." },
  { a: 2, b: 3, c: 15, context: "Twice a number plus 3 equals 15." },
  { a: 5, b: -4, c: 21, context: "Five times a number, decreased by 4, equals 21." },
  { a: -2, b: 6, c: -8, context: "Negative twice a number plus 6 equals −8." },
];

const WORD_PROBLEMS = [
  {
    prompt: "A cinema ticket costs x rupees. A ₹4 booking fee makes the total ₹29.",
    options: ["4x = 29", "x + 4 = 29", "x − 4 = 29"],
    answer: 1,
    solution: "x = 25",
    explanation: "The booking fee is added once, so the equation is x + 4 = 29.",
  },
  {
    prompt: "Three identical notebooks cost ₹24 in total.",
    options: ["x + 3 = 24", "3x = 24", "x/3 = 24"],
    answer: 1,
    solution: "x = 8",
    explanation: "Three equal prices are represented by 3x.",
  },
  {
    prompt: "A number is doubled and then 7 is subtracted. The result is 19.",
    options: ["2(x − 7) = 19", "2x − 7 = 19", "x − 14 = 19"],
    answer: 1,
    solution: "x = 13",
    explanation: "Double first gives 2x; subtracting 7 afterwards gives 2x − 7.",
  },
];

function coefficientTerm(a: number): string {
  if (a === 1) return "x";
  if (a === -1) return "−x";
  return `${a}x`;
}

function equationSide(a: number, b: number): string {
  const variable = coefficientTerm(a);
  if (b === 0) return variable;
  return `${variable} ${b > 0 ? "+" : "−"} ${Math.abs(b)}`;
}

export function EquationBalanceExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"balance" | "words">("balance");
  const [equationIndex, setEquationIndex] = useState(2);
  const [stage, setStage] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordChoice, setWordChoice] = useState<number | null>(null);

  const equation = EQUATIONS[equationIndex]!;
  const isolatedProduct = equation.c - equation.b;
  const solution = isolatedProduct / equation.a;
  const word = WORD_PROBLEMS[wordIndex]!;

  function record() {
    markStep(lessonId, "equationBalanceExplorer");
  }

  const leftLabel =
    stage === 0
      ? equationSide(equation.a, equation.b)
      : stage === 1
        ? coefficientTerm(equation.a)
        : "x";
  const rightLabel =
    stage === 0 ? String(equation.c) : stage === 1 ? String(isolatedProduct) : String(solution);

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Equation activities">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "balance"}
          onClick={() => {
            setTab("balance");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            tab === "balance" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Balance model
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "words"}
          onClick={() => {
            setTab("words");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            tab === "words" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Form equations from words
        </button>
      </div>

      {tab === "balance" && (
        <div className="space-y-5">
          <label className="block space-y-2 text-sm font-medium">
            Equation
            <select
              value={equationIndex}
              onChange={(event) => {
                setEquationIndex(Number(event.target.value));
                setStage(0);
                record();
              }}
              className="w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
            >
              {EQUATIONS.map((item, index) => (
                <option key={index} value={index}>
                  {equationSide(item.a, item.b)} = {item.c}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
            {equation.context}
          </div>

          <svg
            viewBox="0 0 760 300"
            className="h-auto w-full"
            role="img"
            aria-label={`Balanced equation showing ${leftLabel} equals ${rightLabel}`}
          >
            <line
              x1="180"
              y1="145"
              x2="580"
              y2="145"
              className="stroke-foreground"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="380" cy="145" r="18" className="fill-primary stroke-primary" />
            <path
              d="M380 163 L330 255 H430 Z"
              className="fill-muted stroke-border"
              strokeWidth="3"
            />
            <line
              x1="220"
              y1="145"
              x2="220"
              y2="205"
              className="stroke-muted-foreground"
              strokeWidth="3"
            />
            <line
              x1="540"
              y1="145"
              x2="540"
              y2="205"
              className="stroke-muted-foreground"
              strokeWidth="3"
            />
            <path
              d="M130 205 H310 L285 245 H155 Z"
              className="fill-primary/10 stroke-primary"
              strokeWidth="2"
            />
            <path
              d="M450 205 H630 L605 245 H475 Z"
              className="fill-primary/10 stroke-primary"
              strokeWidth="2"
            />
            <text x="220" y="231" textAnchor="middle" className="fill-foreground text-xl font-bold">
              {leftLabel}
            </text>
            <text x="540" y="231" textAnchor="middle" className="fill-foreground text-xl font-bold">
              {rightLabel}
            </text>
            <text x="380" y="55" textAnchor="middle" className="fill-primary text-2xl font-bold">
              {leftLabel} = {rightLabel}
            </text>
            <text x="380" y="88" textAnchor="middle" className="fill-muted-foreground text-sm">
              Whatever operation is applied to one side must be applied to the other.
            </text>
          </svg>

          <div className="grid gap-3 sm:grid-cols-3">
            <StepCard
              number={1}
              active={stage === 0}
              complete={stage > 0}
              title={
                equation.b === 0
                  ? "No constant to remove"
                  : `${equation.b > 0 ? "Subtract" : "Add"} ${Math.abs(equation.b)}`
              }
              text={
                equation.b === 0
                  ? `The variable term ${coefficientTerm(equation.a)} is already isolated.`
                  : `Apply ${equation.b > 0 ? `−${equation.b}` : `+${Math.abs(equation.b)}`} to both sides.`
              }
            />
            <StepCard
              number={2}
              active={stage === 1}
              complete={stage > 1}
              title={`Divide by ${equation.a}`}
              text={`Divide both sides by the coefficient of x.`}
            />
            <StepCard
              number={3}
              active={stage === 2}
              complete={stage === 2}
              title="Check"
              text={`${equationSide(equation.a, equation.b).replace("x", `(${solution})`)} = ${equation.c}`}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {stage === 0 && (
              <button
                type="button"
                onClick={() => {
                  setStage(1);
                  record();
                }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                {equation.b === 0
                  ? "Continue to division"
                  : `${equation.b > 0 ? "Subtract" : "Add"} ${Math.abs(equation.b)} on both sides`}
                <ArrowRight className="size-4" />
              </button>
            )}
            {stage === 1 && (
              <button
                type="button"
                onClick={() => {
                  setStage(2);
                  record();
                }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Divide both sides by {equation.a} <ArrowRight className="size-4" />
              </button>
            )}
            {stage === 2 && (
              <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="mr-2 inline size-4" /> Solution: x = {solution}
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setStage(0);
                record();
              }}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <RefreshCcw className="size-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {tab === "words" && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Word problem
            </p>
            <p className="mt-2 text-lg font-semibold">{word.prompt}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {word.options.map((option, index) => {
              const answered = wordChoice !== null;
              const correct = index === word.answer;
              return (
                <button
                  key={option}
                  type="button"
                  disabled={answered}
                  onClick={() => {
                    setWordChoice(index);
                    record();
                  }}
                  className={cn(
                    "rounded-lg border p-3 text-left font-medium",
                    !answered && "hover:border-primary/50",
                    answered && correct && "border-emerald-500 bg-emerald-500/10",
                    wordChoice === index && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {wordChoice !== null && (
            <div className="rounded-lg border p-4 text-sm">
              <p className="flex items-center gap-2 font-semibold">
                {wordChoice === word.answer ? (
                  <CheckCircle2 className="size-4 text-emerald-600" />
                ) : (
                  <XCircle className="size-4 text-destructive" />
                )}
                Correct equation: {word.options[word.answer]}
              </p>
              <p className="mt-1 text-muted-foreground">
                {word.explanation} Solving gives {word.solution}.
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setWordIndex((current) => (current + 1) % WORD_PROBLEMS.length);
              setWordChoice(null);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            Next problem <ArrowRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function StepCard({
  number,
  active,
  complete,
  title,
  text,
}: {
  number: number;
  active: boolean;
  complete: boolean;
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        active && "border-primary bg-primary/5",
        complete && "border-emerald-500/40 bg-emerald-500/5"
      )}
    >
      <p className="flex items-center gap-2 text-sm font-semibold">
        {number === 1 ? (
          <Scale className="size-4 text-primary" />
        ) : (
          <span className="grid size-5 place-items-center rounded-full bg-muted text-xs">
            {number}
          </span>
        )}
        {title}
      </p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
    </div>
  );
}
