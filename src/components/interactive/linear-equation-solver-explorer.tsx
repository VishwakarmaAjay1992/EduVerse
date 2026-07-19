"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type SolutionKind = "unique" | "none" | "infinite";

interface EquationStep {
  /** What is being done to both sides, e.g. "Distribute the bracket". */
  action: string;
  /** The equation after this step, as plain text (no LaTeX inside SVG/JSX text). */
  left: string;
  right: string;
}

interface EquationPreset {
  id: string;
  display: string;
  category: string;
  steps: EquationStep[];
  solution: SolutionKind;
  value?: number;
  /** A common wrong answer, for targeted error-detection feedback. */
  distractor?: number;
  distractorHint?: string;
}

const PRESETS: EquationPreset[] = [
  {
    id: "two-step",
    display: "3x + 7 = 22",
    category: "Two-step equation",
    steps: [
      { action: "Start", left: "3x + 7", right: "22" },
      { action: "Subtract 7 from both sides", left: "3x", right: "15" },
      { action: "Divide both sides by 3", left: "x", right: "5" },
    ],
    solution: "unique",
    value: 5,
    distractor: 29 / 3,
    distractorHint:
      "That looks like you divided before subtracting 7. Subtract first, then divide.",
  },
  {
    id: "brackets",
    display: "5(x − 2) = 25",
    category: "Equation with brackets",
    steps: [
      { action: "Start", left: "5(x − 2)", right: "25" },
      { action: "Distribute the 5 across the bracket", left: "5x − 10", right: "25" },
      { action: "Add 10 to both sides", left: "5x", right: "35" },
      { action: "Divide both sides by 5", left: "x", right: "7" },
    ],
    solution: "unique",
    value: 7,
    distractor: 3,
    distractorHint:
      "That's the answer you get by dividing 25 by 5 first without distributing. Multiply the 5 into the bracket before doing anything else.",
  },
  {
    id: "both-sides",
    display: "4x + 9 = 2x + 21",
    category: "Variable on both sides",
    steps: [
      { action: "Start", left: "4x + 9", right: "2x + 21" },
      { action: "Subtract 2x from both sides", left: "2x + 9", right: "21" },
      { action: "Subtract 9 from both sides", left: "2x", right: "12" },
      { action: "Divide both sides by 2", left: "x", right: "6" },
    ],
    solution: "unique",
    value: 6,
    distractor: 15,
    distractorHint:
      "It looks like the x-terms were combined incorrectly. Move every x-term to one side and every number to the other, one step at a time.",
  },
  {
    id: "fraction",
    display: "x/3 + 4 = 10",
    category: "Equation with a fraction",
    steps: [
      { action: "Start", left: "x/3 + 4", right: "10" },
      { action: "Subtract 4 from both sides", left: "x/3", right: "6" },
      { action: "Multiply both sides by 3", left: "x", right: "18" },
    ],
    solution: "unique",
    value: 18,
    distractor: 2,
    distractorHint:
      "That's 6 ÷ 3, but the fraction needs undoing, not repeating — multiply both sides by 3 instead of dividing.",
  },
  {
    id: "decimal",
    display: "0.5x + 1.5 = 4",
    category: "Equation with decimals",
    steps: [
      { action: "Start", left: "0.5x + 1.5", right: "4" },
      { action: "Subtract 1.5 from both sides", left: "0.5x", right: "2.5" },
      { action: "Divide both sides by 0.5", left: "x", right: "5" },
    ],
    solution: "unique",
    value: 5,
    distractor: 1.25,
    distractorHint:
      "That comes from multiplying by 0.5 instead of dividing. Dividing by 0.5 is the same as doubling.",
  },
  {
    id: "no-solution",
    display: "2x + 4 = 2x + 9",
    category: "No solution",
    steps: [
      { action: "Start", left: "2x + 4", right: "2x + 9" },
      { action: "Subtract 2x from both sides", left: "4", right: "9" },
    ],
    solution: "none",
  },
  {
    id: "infinite",
    display: "3(x + 2) = 3x + 6",
    category: "Infinitely many solutions",
    steps: [
      { action: "Start", left: "3(x + 2)", right: "3x + 6" },
      { action: "Distribute the 3 across the bracket", left: "3x + 6", right: "3x + 6" },
    ],
    solution: "infinite",
  },
];

export function LinearEquationSolverExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("two-step");
  const [stepIndex, setStepIndex] = useState(0);
  const [checkValue, setCheckValue] = useState("");
  const [checkChoice, setCheckChoice] = useState<SolutionKind | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);

  const preset = useMemo(() => PRESETS.find((p) => p.id === presetId)!, [presetId]);
  const current = preset.steps[stepIndex]!;
  const atEnd = stepIndex === preset.steps.length - 1;

  function record() {
    markStep(lessonId, "linearEquationSolverExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setStepIndex(0);
    setCheckValue("");
    setCheckChoice(null);
    setFeedback(null);
    record();
  }

  function submitCheck() {
    record();
    if (preset.solution === "unique") {
      const submitted = Number(checkValue);
      if (checkValue.trim() === "" || Number.isNaN(submitted)) {
        setFeedback({
          correct: false,
          message: "Enter a number to check, or use the buttons for special cases.",
        });
        return;
      }
      if (submitted === preset.value) {
        setFeedback({
          correct: true,
          message: `Correct — x = ${preset.value} satisfies the equation.`,
        });
        return;
      }
      if (preset.distractor !== undefined && Math.abs(submitted - preset.distractor) < 1e-9) {
        setFeedback({
          correct: false,
          message: preset.distractorHint ?? "That's a common slip — check your working.",
        });
        return;
      }
      setFeedback({
        correct: false,
        message: `Not quite. Substitute x = ${submitted} back into the original equation and compare both sides — they won't match.`,
      });
      return;
    }
    // solution is "none" or "infinite": expect a button choice, not a number
    if (checkChoice === preset.solution) {
      setFeedback({
        correct: true,
        message:
          preset.solution === "none"
            ? "Correct — the variable cancels out and leaves a false statement, so there is no solution."
            : "Correct — the variable cancels out and leaves a true statement, so every value of x works.",
      });
    } else if (checkChoice) {
      setFeedback({
        correct: false,
        message:
          preset.solution === "none"
            ? "Not quite — simplify both sides fully. If the x-terms cancel and the numbers left over are unequal, there is no solution."
            : "Not quite — simplify both sides fully. If the x-terms cancel and the numbers left over are equal, every x works.",
      });
    } else {
      setFeedback({
        correct: false,
        message: "Choose whether this equation has no solution or infinitely many.",
      });
    }
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div>
        <label className="block text-sm font-medium" htmlFor="leq-preset">
          Choose an equation
        </label>
        <select
          id="leq-preset"
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.display} — {p.category}
            </option>
          ))}
        </select>
      </div>

      {/* Balance-scale visual */}
      <svg
        viewBox="0 0 640 220"
        className="h-auto w-full"
        role="img"
        aria-label={`Balance scale showing ${current.left} equals ${current.right} after: ${current.action}`}
      >
        <line
          x1="150"
          y1="110"
          x2="490"
          y2="110"
          className="stroke-foreground"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="320" cy="110" r="14" className="fill-primary stroke-primary" />
        <path d="M320 124 L280 195 H360 Z" className="fill-muted stroke-border" strokeWidth="2.5" />
        <line
          x1="185"
          y1="110"
          x2="185"
          y2="155"
          className="stroke-muted-foreground"
          strokeWidth="2.5"
        />
        <line
          x1="455"
          y1="110"
          x2="455"
          y2="155"
          className="stroke-muted-foreground"
          strokeWidth="2.5"
        />
        <path
          d="M110 155 H260 L240 188 H130 Z"
          className="fill-primary/10 stroke-primary"
          strokeWidth="2"
        />
        <path
          d="M380 155 H530 L510 188 H400 Z"
          className="fill-primary/10 stroke-primary"
          strokeWidth="2"
        />
        <text x="185" y="176" textAnchor="middle" className="fill-foreground text-base font-bold">
          {current.left}
        </text>
        <text x="455" y="176" textAnchor="middle" className="fill-foreground text-base font-bold">
          {current.right}
        </text>
        <text x="320" y="40" textAnchor="middle" className="fill-primary text-xl font-bold">
          {current.left} = {current.right}
        </text>
        <text x="320" y="65" textAnchor="middle" className="fill-muted-foreground text-sm">
          {current.action}
        </text>
      </svg>

      {/* Step-by-step controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={stepIndex === 0}
          onClick={() => {
            setStepIndex((i) => Math.max(0, i - 1));
            record();
          }}
          className="rounded-md border px-3 py-2 text-sm font-medium disabled:opacity-40"
        >
          Back
        </button>
        {!atEnd ? (
          <button
            type="button"
            onClick={() => {
              setStepIndex((i) => i + 1);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {preset.steps[stepIndex + 1]!.action} <ArrowRight className="size-4" />
          </button>
        ) : (
          <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="mr-2 inline size-4" />
            {preset.solution === "unique" && `Solution: x = ${preset.value}`}
            {preset.solution === "none" && "No solution — the two sides can never be equal."}
            {preset.solution === "infinite" &&
              "Infinitely many solutions — the equation is always true."}
          </div>
        )}
        <button
          type="button"
          onClick={() => selectPreset(presetId)}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          <RefreshCcw className="size-4" /> Reset
        </button>
      </div>

      {/* Check my answer */}
      <div className="space-y-3 border-t pt-5">
        <p className="text-sm font-semibold">Check my answer</p>
        {preset.solution === "unique" ? (
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-sm" htmlFor="leq-check">
              What is x for {preset.display}?
            </label>
            <input
              id="leq-check"
              type="number"
              value={checkValue}
              onChange={(e) => setCheckValue(e.target.value)}
              className="w-28 rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="x = "
            />
            <button
              type="button"
              onClick={submitCheck}
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              Check
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCheckChoice("none")}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium",
                checkChoice === "none" && "border-primary bg-primary/10"
              )}
            >
              No solution
            </button>
            <button
              type="button"
              onClick={() => setCheckChoice("infinite")}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium",
                checkChoice === "infinite" && "border-primary bg-primary/10"
              )}
            >
              Infinitely many solutions
            </button>
            <button
              type="button"
              onClick={submitCheck}
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              Check
            </button>
          </div>
        )}
        {feedback && (
          <p
            className={cn(
              "flex items-start gap-2 rounded-md border p-3 text-sm",
              feedback.correct
                ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                : "border-destructive/40 bg-destructive/5 text-destructive"
            )}
          >
            {feedback.correct ? (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
            ) : (
              <XCircle className="mt-0.5 size-4 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </p>
        )}
      </div>
    </div>
  );
}
