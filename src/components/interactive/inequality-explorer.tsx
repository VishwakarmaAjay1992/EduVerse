"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Op = ">" | "<" | "\u2265" | "\u2264";

interface IneqStep {
  action: string;
  text: string;
  flipped?: boolean;
}

interface IneqPreset {
  id: string;
  display: string;
  category: string;
  steps: IneqStep[];
  finalOp: Op;
  finalValue: number;
  closed: boolean; // true for ≤ / ≥ (closed circle)
  direction: "left" | "right"; // which way the shading/ray points
}

const PRESETS: IneqPreset[] = [
  {
    id: "one-step",
    display: "x + 5 > 12",
    category: "One-step inequality",
    steps: [
      { action: "Start", text: "x + 5 > 12" },
      { action: "Subtract 5 from both sides", text: "x > 7" },
    ],
    finalOp: ">",
    finalValue: 7,
    closed: false,
    direction: "right",
  },
  {
    id: "two-step",
    display: "3x \u2212 4 \u2264 11",
    category: "Two-step inequality",
    steps: [
      { action: "Start", text: "3x \u2212 4 \u2264 11" },
      { action: "Add 4 to both sides", text: "3x \u2264 15" },
      { action: "Divide both sides by 3 (positive, no flip)", text: "x \u2264 5" },
    ],
    finalOp: "\u2264",
    finalValue: 5,
    closed: true,
    direction: "left",
  },
  {
    id: "negative-flip",
    display: "\u22122x + 6 > 14",
    category: "Dividing by a negative (sign flips)",
    steps: [
      { action: "Start", text: "\u22122x + 6 > 14" },
      { action: "Subtract 6 from both sides", text: "\u22122x > 8" },
      {
        action: "Divide both sides by \u22122 \u2014 the inequality sign flips",
        text: "x < \u22124",
        flipped: true,
      },
    ],
    finalOp: "<",
    finalValue: -4,
    closed: false,
    direction: "left",
  },
  {
    id: "brackets",
    display: "2(x + 3) \u2264 16",
    category: "Inequality with brackets",
    steps: [
      { action: "Start", text: "2(x + 3) \u2264 16" },
      { action: "Distribute the 2 across the bracket", text: "2x + 6 \u2264 16" },
      { action: "Subtract 6 from both sides", text: "2x \u2264 10" },
      { action: "Divide both sides by 2 (positive, no flip)", text: "x \u2264 5" },
    ],
    finalOp: "\u2264",
    finalValue: 5,
    closed: true,
    direction: "left",
  },
];

const GRAPH_CHOICES: {
  id: string;
  op: Op;
  value: number;
  closed: boolean;
  direction: "left" | "right";
}[] = [
  { id: "a", op: ">", value: 3, closed: false, direction: "right" },
  { id: "b", op: "\u2264", value: -2, closed: true, direction: "left" },
  { id: "c", op: "\u2265", value: 1, closed: true, direction: "right" },
];

function NumberLineGraph({
  value,
  closed,
  direction,
  label,
}: {
  value: number;
  closed: boolean;
  direction: "left" | "right";
  label: string;
}) {
  const min = -10;
  const max = 10;
  const w = 560;
  const pad = 24;
  const usable = w - pad * 2;
  const scale = (n: number) => pad + ((n - min) / (max - min)) * usable;
  const px = scale(value);
  const rayEnd = direction === "right" ? scale(max) : scale(min);
  const ticks = Array.from({ length: max - min + 1 }, (_, i) => min + i).filter((n) => n % 2 === 0);

  return (
    <svg
      viewBox="0 0 560 90"
      className="h-auto w-full"
      role="img"
      aria-label={`Number line showing ${label}, with a ${closed ? "closed (filled)" : "open"} circle at ${value} and shading toward ${direction === "right" ? "positive infinity" : "negative infinity"}.`}
    >
      <line
        x1={pad}
        y1="50"
        x2={w - pad}
        y2="50"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={scale(t)}
            y1="45"
            x2={scale(t)}
            y2="55"
            className="stroke-muted-foreground"
            strokeWidth="1.5"
          />
          <text
            x={scale(t)}
            y="72"
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            {t}
          </text>
        </g>
      ))}
      <line
        x1={px}
        y1="50"
        x2={rayEnd}
        y2="50"
        className="stroke-primary"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle
        cx={px}
        cy="50"
        r="8"
        className={closed ? "fill-primary stroke-primary" : "fill-background stroke-primary"}
        strokeWidth="3"
      />
    </svg>
  );
}

export function InequalityExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("one-step");
  const [stepIndex, setStepIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [target] = useState(() => GRAPH_CHOICES[Math.floor(Math.random() * GRAPH_CHOICES.length)]!);

  const preset = useMemo(() => PRESETS.find((p) => p.id === presetId)!, [presetId]);
  const current = preset.steps[stepIndex]!;
  const atEnd = stepIndex === preset.steps.length - 1;

  function record() {
    markStep(lessonId, "inequalityExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setStepIndex(0);
    record();
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div>
        <label className="block text-sm font-medium" htmlFor="ineq-preset">
          Choose an inequality
        </label>
        <select
          id="ineq-preset"
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

      <div className="rounded-lg border bg-muted/30 p-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {current.action}
        </p>
        <p
          className={cn(
            "mt-1 text-2xl font-bold",
            current.flipped ? "text-destructive" : "text-primary"
          )}
        >
          {current.text}
        </p>
        {current.flipped && (
          <p className="mt-2 text-sm font-medium text-destructive">
            Dividing by a negative number reverses the inequality sign — greater-than becomes
            less-than.
          </p>
        )}
      </div>

      <NumberLineGraph
        value={atEnd ? preset.finalValue : 0}
        closed={preset.closed}
        direction={preset.direction}
        label={
          atEnd
            ? preset.steps[preset.steps.length - 1]!.text
            : "the equation before it is fully solved"
        }
      />
      {!atEnd && (
        <p className="text-center text-xs text-muted-foreground">
          The number line updates once the inequality is fully solved — press through the steps
          below.
        </p>
      )}

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
            <CheckCircle2 className="mr-2 inline size-4" /> Solved: {current.text}
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

      <div className="space-y-3 border-t pt-5">
        <p className="text-sm font-semibold">
          Practice: choose the graph for x {target.op} {target.value}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {GRAPH_CHOICES.map((g) => {
            const answered = choice !== null;
            const correct = g.id === target.id;
            return (
              <button
                key={g.id}
                type="button"
                disabled={answered}
                onClick={() => {
                  setChoice(g.id);
                  record();
                }}
                className={cn(
                  "rounded-lg border p-3",
                  !answered && "hover:border-primary/50",
                  answered && correct && "border-emerald-500 bg-emerald-500/10",
                  choice === g.id && !correct && "border-destructive bg-destructive/10"
                )}
              >
                <NumberLineGraph
                  value={g.value}
                  closed={g.closed}
                  direction={g.direction}
                  label={`option ${g.id}`}
                />
              </button>
            );
          })}
        </div>
        {choice !== null && (
          <p className="flex items-center gap-2 rounded-lg border p-3 text-sm">
            {choice === target.id ? (
              <>
                <CheckCircle2 className="size-4 text-emerald-600" /> Correct — a{" "}
                {target.closed ? "closed (filled)" : "open"} circle at {target.value}, shaded to the{" "}
                {target.direction}.
              </>
            ) : (
              <>
                <XCircle className="size-4 text-destructive" /> Not quite. The correct graph uses a{" "}
                {target.closed
                  ? "closed circle (≤ or ≥ includes the endpoint)"
                  : "open circle (< or > excludes it)"}{" "}
                at {target.value}.
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
