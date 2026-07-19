"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface Preset {
  id: string;
  label: string;
  category: string;
  /** Coefficients: (a1 x + b1)(a2 x + b2) */
  a1: number;
  b1: number;
  a2: number;
  b2: number;
}

const PRESETS: Preset[] = [
  {
    id: "p1",
    label: "(x + 3)(x + 5)",
    category: "Two positive binomials",
    a1: 1,
    b1: 3,
    a2: 1,
    b2: 5,
  },
  { id: "p2", label: "(x − 2)(x + 7)", category: "Mixed signs", a1: 1, b1: -2, a2: 1, b2: 7 },
  {
    id: "p3",
    label: "(2x + 1)(x − 4)",
    category: "Leading coefficient",
    a1: 2,
    b1: 1,
    a2: 1,
    b2: -4,
  },
  {
    id: "p4",
    label: "(x + 4)(x + 4)",
    category: "Special product: perfect square",
    a1: 1,
    b1: 4,
    a2: 1,
    b2: 4,
  },
  {
    id: "p5",
    label: "(x + 3)(x − 3)",
    category: "Special product: difference of squares",
    a1: 1,
    b1: 3,
    a2: 1,
    b2: -3,
  },
];

function term(coeff: number, withX: boolean): string {
  if (!withX) return coeff >= 0 ? `${coeff}` : `${coeff}`;
  if (coeff === 1) return "x";
  if (coeff === -1) return "\u2212x";
  return `${coeff}x`;
}

function signed(n: number): string {
  return n >= 0 ? `+ ${n}` : `\u2212 ${Math.abs(n)}`;
}

const STEP_LABELS = ["First", "Outer", "Inner", "Last"];

export function PolynomialMultiplyExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("p1");
  const [revealed, setRevealed] = useState(0);

  const preset = PRESETS.find((p) => p.id === presetId)!;
  const { a1, b1, a2, b2 } = preset;

  const first = a1 * a2; // x^2 coefficient
  const outer = a1 * b2;
  const inner = b1 * a2;
  const last = b1 * b2;
  const middle = outer + inner;

  const partials = [
    {
      label: "First",
      value: `${term(a1, true)} \u00d7 ${term(a2, true)} = ${term(first, false)}x\u00b2`,
      color: "border-sky-500 bg-sky-500/10",
    },
    {
      label: "Outer",
      value: `${term(a1, true)} \u00d7 (${signed(b2)}) = ${signed(outer)}x`,
      color: "border-emerald-500 bg-emerald-500/10",
    },
    {
      label: "Inner",
      value: `(${signed(b1)}) \u00d7 ${term(a2, true)} = ${signed(inner)}x`,
      color: "border-amber-500 bg-amber-500/10",
    },
    {
      label: "Last",
      value: `(${signed(b1)}) \u00d7 (${signed(b2)}) = ${signed(last)}`,
      color: "border-rose-500 bg-rose-500/10",
    },
  ];

  function record() {
    markStep(lessonId, "polynomialMultiplyExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setRevealed(0);
    record();
  }

  const resultText = `${term(first, false)}x\u00b2 ${signed(middle)}x ${signed(last)}`;

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <label className="block text-sm font-medium">
        Choose a product
        <select
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label} — {p.category}
            </option>
          ))}
        </select>
      </label>

      {/* Area model grid */}
      <div className="grid grid-cols-[auto_1fr_1fr] gap-1 text-center text-sm">
        <div />
        <div className="rounded-md bg-muted/40 p-2 font-semibold">{term(a1, true)}</div>
        <div className="rounded-md bg-muted/40 p-2 font-semibold">{signed(b1)}</div>
        <div className="rounded-md bg-muted/40 p-2 font-semibold">{term(a2, true)}</div>
        <div
          className={cn(
            "rounded-md border-2 p-3 font-mono transition-opacity",
            partials[0]!.color,
            revealed < 1 && "opacity-20"
          )}
        >
          {term(first, false)}x\u00b2
        </div>
        <div
          className={cn(
            "rounded-md border-2 p-3 font-mono transition-opacity",
            partials[2]!.color,
            revealed < 3 && "opacity-20"
          )}
        >
          {signed(inner)}x
        </div>
        <div className="rounded-md bg-muted/40 p-2 font-semibold">{signed(b2)}</div>
        <div
          className={cn(
            "rounded-md border-2 p-3 font-mono transition-opacity",
            partials[1]!.color,
            revealed < 2 && "opacity-20"
          )}
        >
          {signed(outer)}x
        </div>
        <div
          className={cn(
            "rounded-md border-2 p-3 font-mono transition-opacity",
            partials[3]!.color,
            revealed < 4 && "opacity-20"
          )}
        >
          {signed(last)}
        </div>
      </div>

      <div className="space-y-2">
        {partials.slice(0, revealed).map((p, i) => (
          <div key={i} className={cn("rounded-md border-2 p-2 text-sm", p.color)}>
            <span className="mr-2 font-semibold">{STEP_LABELS[i]}:</span>
            {p.value}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {revealed < 4 ? (
          <button
            type="button"
            onClick={() => {
              setRevealed((r) => r + 1);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Reveal {STEP_LABELS[revealed]} term <ArrowRight className="size-4" />
          </button>
        ) : (
          <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="mr-2 inline size-4" />
            Combine like terms: {resultText}
            {middle === 0 && " (the outer and inner terms cancel — a difference of squares)"}
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
    </div>
  );
}
