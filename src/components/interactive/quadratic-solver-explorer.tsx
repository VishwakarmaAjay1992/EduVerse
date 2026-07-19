"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";

interface FactorStep {
  action: string;
  text: string;
}

interface FactorPreset {
  id: string;
  display: string;
  category: string;
  steps: FactorStep[];
  roots: string;
}

const FACTOR_PRESETS: FactorPreset[] = [
  {
    id: "f1",
    display: "x\u00b2 + 5x + 6 = 0",
    category: "Factorable, both roots negative",
    steps: [
      { action: "Start", text: "x\u00b2 + 5x + 6 = 0" },
      {
        action: "Factor the trinomial (2 and 3 multiply to 6, add to 5)",
        text: "(x + 2)(x + 3) = 0",
      },
      { action: "Apply the zero product property", text: "x + 2 = 0  or  x + 3 = 0" },
      { action: "Solve each one-step equation", text: "x = \u22122  or  x = \u22123" },
    ],
    roots: "x = \u22122 or x = \u22123",
  },
  {
    id: "f2",
    display: "x\u00b2 \u2212 x \u2212 12 = 0",
    category: "Factorable, mixed signs",
    steps: [
      { action: "Start", text: "x\u00b2 \u2212 x \u2212 12 = 0" },
      {
        action: "Factor (\u22124 and 3 multiply to \u221212, add to \u22121)",
        text: "(x \u2212 4)(x + 3) = 0",
      },
      { action: "Apply the zero product property", text: "x \u2212 4 = 0  or  x + 3 = 0" },
      { action: "Solve each one-step equation", text: "x = 4  or  x = \u22123" },
    ],
    roots: "x = 4 or x = \u22123",
  },
  {
    id: "f3",
    display: "2x\u00b2 + 7x + 3 = 0",
    category: "Leading coefficient \u2260 1",
    steps: [
      { action: "Start", text: "2x\u00b2 + 7x + 3 = 0" },
      { action: "Factor (6 and 1 multiply to ac=6, add to b=7)", text: "(2x + 1)(x + 3) = 0" },
      { action: "Apply the zero product property", text: "2x + 1 = 0  or  x + 3 = 0" },
      { action: "Solve each equation", text: "x = \u22120.5  or  x = \u22123" },
    ],
    roots: "x = \u22120.5 or x = \u22123",
  },
  {
    id: "f4",
    display: "x\u00b2 \u2212 9 = 0",
    category: "Difference of squares",
    steps: [
      { action: "Start", text: "x\u00b2 \u2212 9 = 0" },
      { action: "Factor as a difference of squares", text: "(x + 3)(x \u2212 3) = 0" },
      { action: "Apply the zero product property", text: "x + 3 = 0  or  x \u2212 3 = 0" },
      { action: "Solve each one-step equation", text: "x = \u22123  or  x = 3" },
    ],
    roots: "x = \u22123 or x = 3",
  },
];

interface RootPreset {
  id: string;
  display: string;
  category: string;
  steps: FactorStep[];
  roots: string;
}

const ROOT_PRESETS: RootPreset[] = [
  {
    id: "r1",
    display: "x\u00b2 = 25",
    category: "Simple square root method",
    steps: [
      { action: "Start", text: "x\u00b2 = 25" },
      { action: "Take the square root of both sides (\u00b1)", text: "x = \u00b1\u221a25" },
      { action: "Simplify", text: "x = \u00b15" },
    ],
    roots: "x = 5 or x = \u22125",
  },
  {
    id: "r2",
    display: "(x \u2212 3)\u00b2 = 16",
    category: "Binomial squared",
    steps: [
      { action: "Start", text: "(x \u2212 3)\u00b2 = 16" },
      {
        action: "Take the square root of both sides (\u00b1)",
        text: "x \u2212 3 = \u00b1\u221a16",
      },
      { action: "Simplify the root", text: "x \u2212 3 = \u00b14" },
      { action: "Add 3 to both sides", text: "x = 3 \u00b1 4  \u2192  x = 7 or x = \u22121" },
    ],
    roots: "x = 7 or x = \u22121",
  },
  {
    id: "r3",
    display: "2x\u00b2 = 50",
    category: "Divide first, then root",
    steps: [
      { action: "Start", text: "2x\u00b2 = 50" },
      { action: "Divide both sides by 2", text: "x\u00b2 = 25" },
      {
        action: "Take the square root of both sides (\u00b1)",
        text: "x = \u00b1\u221a25 = \u00b15",
      },
    ],
    roots: "x = 5 or x = \u22125",
  },
  {
    id: "r4",
    display: "x\u00b2 + 4 = 0",
    category: "No real solution",
    steps: [
      { action: "Start", text: "x\u00b2 + 4 = 0" },
      { action: "Subtract 4 from both sides", text: "x\u00b2 = \u22124" },
      { action: "A square can never be negative", text: "No real solution exists" },
    ],
    roots: "No real solution (x\u00b2 cannot equal a negative number)",
  },
];

export function QuadraticSolverExplorer({ lessonId }: { lessonId: string }) {
  const [method, setMethod] = useState<"factoring" | "roots">("factoring");
  const [presetId, setPresetId] = useState("f1");
  const [stepIndex, setStepIndex] = useState(0);

  const presets = method === "factoring" ? FACTOR_PRESETS : ROOT_PRESETS;
  const preset = presets.find((p) => p.id === presetId) ?? presets[0]!;
  const current = preset.steps[stepIndex]!;
  const atEnd = stepIndex === preset.steps.length - 1;

  function record() {
    markStep(lessonId, "quadraticSolverExplorer");
  }

  function switchMethod(m: "factoring" | "roots") {
    setMethod(m);
    setPresetId(m === "factoring" ? FACTOR_PRESETS[0]!.id : ROOT_PRESETS[0]!.id);
    setStepIndex(0);
    record();
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setStepIndex(0);
    record();
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Solving method">
        <button
          type="button"
          onClick={() => switchMethod("factoring")}
          className={`rounded-md border px-3 py-2 text-sm font-medium ${method === "factoring" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
        >
          Factoring (zero product property)
        </button>
        <button
          type="button"
          onClick={() => switchMethod("roots")}
          className={`rounded-md border px-3 py-2 text-sm font-medium ${method === "roots" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
        >
          Square root method
        </button>
      </div>

      <label className="block text-sm font-medium">
        Choose an equation
        <select
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {presets.map((p) => (
            <option key={p.id} value={p.id}>
              {p.display} — {p.category}
            </option>
          ))}
        </select>
      </label>

      <div className="rounded-lg border bg-muted/30 p-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {current.action}
        </p>
        <p className="mt-1 text-xl font-bold text-primary">{current.text}</p>
      </div>

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
            {preset.roots}
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
