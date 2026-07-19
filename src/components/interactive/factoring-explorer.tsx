"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface FactorPreset {
  id: string;
  technique: string;
  original: string;
  steps: string[];
  factored: string;
  checkExpansion: string;
}

const PRESETS: FactorPreset[] = [
  {
    id: "common",
    technique: "Common factor",
    original: "6x\u00b2 + 9x",
    steps: [
      "Find the GCF of the terms: GCF(6x\u00b2, 9x) = 3x.",
      "Divide each term by the GCF: 6x\u00b2 \u00f7 3x = 2x, and 9x \u00f7 3x = 3.",
      "Write the GCF outside a bracket containing the results: 3x(2x + 3).",
    ],
    factored: "3x(2x + 3)",
    checkExpansion: "3x(2x + 3) = 6x\u00b2 + 9x \u2713",
  },
  {
    id: "trinomial",
    technique: "Trinomial (x\u00b2 + bx + c)",
    original: "x\u00b2 + 7x + 12",
    steps: [
      "Look for two numbers that multiply to 12 and add to 7: those numbers are 3 and 4.",
      "Write the trinomial as two binomials using these numbers: (x + 3)(x + 4).",
    ],
    factored: "(x + 3)(x + 4)",
    checkExpansion: "(x + 3)(x + 4) = x\u00b2 + 4x + 3x + 12 = x\u00b2 + 7x + 12 \u2713",
  },
  {
    id: "diffsquares",
    technique: "Difference of squares",
    original: "x\u00b2 \u2212 25",
    steps: [
      "Recognise both terms as perfect squares: x\u00b2 = (x)\u00b2 and 25 = (5)\u00b2.",
      "Apply the pattern a\u00b2 \u2212 b\u00b2 = (a+b)(a-b) with a = x, b = 5: (x + 5)(x \u2212 5).",
    ],
    factored: "(x + 5)(x \u2212 5)",
    checkExpansion:
      "(x + 5)(x \u2212 5) = x\u00b2 \u2212 5x + 5x \u2212 25 = x\u00b2 \u2212 25 \u2713",
  },
  {
    id: "grouping",
    technique: "Grouping",
    original: "x\u00b3 + 3x\u00b2 + 2x + 6",
    steps: [
      "Split into two pairs: (x\u00b3 + 3x\u00b2) + (2x + 6).",
      "Factor each pair separately: x\u00b2(x + 3) + 2(x + 3).",
      "Both terms now share the factor (x + 3): (x + 3)(x\u00b2 + 2).",
    ],
    factored: "(x + 3)(x\u00b2 + 2)",
    checkExpansion:
      "(x + 3)(x\u00b2 + 2) = x\u00b3 + 2x + 3x\u00b2 + 6 = x\u00b3 + 3x\u00b2 + 2x + 6 \u2713",
  },
  {
    id: "cubes",
    technique: "Sum of cubes",
    original: "x\u00b3 + 8",
    steps: [
      "Recognise both terms as perfect cubes: x\u00b3 = (x)\u00b3 and 8 = (2)\u00b3.",
      "Apply the pattern a\u00b3+b\u00b3=(a+b)(a\u00b2-ab+b\u00b2) with a=x, b=2: (x + 2)(x\u00b2 \u2212 2x + 4).",
    ],
    factored: "(x + 2)(x\u00b2 \u2212 2x + 4)",
    checkExpansion:
      "(x + 2)(x\u00b2 \u2212 2x + 4) = x\u00b3 \u2212 2x\u00b2 + 4x + 2x\u00b2 \u2212 4x + 8 = x\u00b3 + 8 \u2713",
  },
];

export function FactoringExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("common");
  const [revealed, setRevealed] = useState(0);
  const [showCheck, setShowCheck] = useState(false);

  const preset = PRESETS.find((p) => p.id === presetId)!;

  function record() {
    markStep(lessonId, "factoringExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setRevealed(0);
    setShowCheck(false);
    record();
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <label className="block text-sm font-medium">
        Choose a factoring technique
        <select
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.technique} — {p.original}
            </option>
          ))}
        </select>
      </label>

      <div className="rounded-lg border bg-muted/30 p-4 text-center text-2xl font-bold text-primary">
        {preset.original}
      </div>

      <ol className="space-y-2">
        {preset.steps.slice(0, revealed).map((s, i) => (
          <li key={i} className="rounded-md border p-3 text-sm">
            <span className="mr-2 font-semibold text-primary">Step {i + 1}:</span>
            {s}
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap items-center gap-2">
        {revealed < preset.steps.length ? (
          <button
            type="button"
            onClick={() => {
              setRevealed((r) => r + 1);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Reveal next step <ArrowRight className="size-4" />
          </button>
        ) : (
          <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="mr-2 inline size-4" />
            Factored form: {preset.factored}
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

      {revealed === preset.steps.length && (
        <div className="space-y-2 border-t pt-4">
          <button
            type="button"
            onClick={() => {
              setShowCheck((s) => !s);
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              showCheck ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            {showCheck ? "Hide" : "Check by expanding back"}
          </button>
          {showCheck && (
            <p className="rounded-md bg-muted/40 p-3 font-mono text-sm text-muted-foreground">
              {preset.checkExpansion}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
