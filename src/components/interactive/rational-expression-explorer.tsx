"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface RationalPreset {
  id: string;
  label: string;
  numeratorFactored: string;
  denominatorFactored: string;
  cancelled: string;
  simplified: string;
  /** Roots of the ORIGINAL denominator (before cancelling) — these are always excluded. */
  restrictions: number[];
}

const PRESETS: RationalPreset[] = [
  {
    id: "r1",
    label: "(x\u00b2 \u2212 9) / (x\u00b2 + x \u2212 6)",
    numeratorFactored: "(x + 3)(x \u2212 3)",
    denominatorFactored: "(x + 3)(x \u2212 2)",
    cancelled: "(x + 3)",
    simplified: "(x \u2212 3) / (x \u2212 2)",
    restrictions: [-3, 2],
  },
  {
    id: "r2",
    label: "(x\u00b2 + 5x + 6) / (x\u00b2 \u2212 4)",
    numeratorFactored: "(x + 2)(x + 3)",
    denominatorFactored: "(x + 2)(x \u2212 2)",
    cancelled: "(x + 2)",
    simplified: "(x + 3) / (x \u2212 2)",
    restrictions: [-2, 2],
  },
  {
    id: "r3",
    label: "(2x\u00b2 \u2212 8) / (x\u00b2 \u2212 x \u2212 6)",
    numeratorFactored: "2(x + 2)(x \u2212 2)",
    denominatorFactored: "(x \u2212 3)(x + 2)",
    cancelled: "(x + 2)",
    simplified: "2(x \u2212 2) / (x \u2212 3)",
    restrictions: [3, -2],
  },
];

export function RationalExpressionExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("r1");
  const [stage, setStage] = useState(0); // 0 unfactored, 1 factored, 2 cancelled, 3 simplified
  const [restrictionInput, setRestrictionInput] = useState("");
  const [restrictionFeedback, setRestrictionFeedback] = useState<string | null>(null);

  const preset = PRESETS.find((p) => p.id === presetId)!;

  function record() {
    markStep(lessonId, "rationalExpressionExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setStage(0);
    setRestrictionInput("");
    setRestrictionFeedback(null);
    record();
  }

  function checkRestrictions() {
    record();
    const submitted = restrictionInput
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !Number.isNaN(n));
    const sortedSubmitted = [...submitted].sort((a, b) => a - b);
    const sortedCorrect = [...preset.restrictions].sort((a, b) => a - b);
    const matches =
      sortedSubmitted.length === sortedCorrect.length &&
      sortedSubmitted.every((v, i) => v === sortedCorrect[i]);
    setRestrictionFeedback(
      matches
        ? `Correct — x cannot equal ${sortedCorrect.join(" or ")}, since those values make the original denominator zero.`
        : `Not quite. Set the ORIGINAL (unfactored) denominator equal to zero and solve — the excluded values are x = ${sortedCorrect.join(" and x = ")}.`
    );
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <label className="block text-sm font-medium">
        Choose an expression
        <select
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <div className="space-y-3">
        <div className="rounded-lg border bg-muted/30 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Original expression
          </p>
          <p className="mt-1 text-xl font-bold text-primary">{preset.label}</p>
        </div>
        {stage >= 1 && (
          <div className="rounded-lg border p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Factor top and bottom
            </p>
            <p className="mt-1 font-mono text-lg">
              {preset.numeratorFactored} / {preset.denominatorFactored}
            </p>
          </div>
        )}
        {stage >= 2 && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Cancel the common factor
            </p>
            <p className="mt-1 font-mono text-lg">
              Cancel {preset.cancelled} from top and bottom (valid as long as {preset.cancelled} ≠
              0)
            </p>
          </div>
        )}
        {stage >= 3 && (
          <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Simplified
            </p>
            <p className="mt-1 text-xl font-bold text-emerald-700 dark:text-emerald-400">
              {preset.simplified}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {stage < 3 ? (
          <button
            type="button"
            onClick={() => {
              setStage((s) => s + 1);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {stage === 0 && "Factor numerator and denominator"}
            {stage === 1 && "Cancel the common factor"}
            {stage === 2 && "Show simplified form"}
            <ArrowRight className="size-4" />
          </button>
        ) : (
          <CheckCircle2 className="size-5 text-emerald-600" />
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
        <p className="text-sm font-semibold">Find the domain restrictions</p>
        <p className="text-xs text-muted-foreground">
          Enter every value of x that makes the ORIGINAL denominator zero (comma-separated) — these
          values must be excluded, even after simplifying.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={restrictionInput}
            onChange={(e) => setRestrictionInput(e.target.value)}
            placeholder="e.g. -3, 2"
            className="w-40 rounded-md border bg-background px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={checkRestrictions}
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
          >
            Check
          </button>
        </div>
        {restrictionFeedback && (
          <p
            className={cn(
              "rounded-md border p-3 text-sm",
              restrictionFeedback.startsWith("Correct")
                ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                : "border-destructive/40 bg-destructive/5 text-destructive"
            )}
          >
            {restrictionFeedback}
          </p>
        )}
      </div>
    </div>
  );
}
