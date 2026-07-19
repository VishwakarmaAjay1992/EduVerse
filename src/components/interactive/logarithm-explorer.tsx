"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface LawPreset {
  id: string;
  law: string;
  example: string;
  steps: string[];
  result: string;
}

const LAW_PRESETS: LawPreset[] = [
  {
    id: "product",
    law: "Product law: log(ab) = log(a) + log(b)",
    example: "log\u2082(4) + log\u2082(8)",
    steps: [
      "log\u2082(4) = 2, since 2\u00b2 = 4",
      "log\u2082(8) = 3, since 2\u00b3 = 8",
      "Sum: 2 + 3 = 5",
      "Check with the product law: log\u2082(4\u00d78) = log\u2082(32) = 5, since 2\u2075 = 32",
    ],
    result: "log\u2082(4) + log\u2082(8) = 5",
  },
  {
    id: "quotient",
    law: "Quotient law: log(a/b) = log(a) \u2212 log(b)",
    example: "log\u2083(81) \u2212 log\u2083(9)",
    steps: [
      "log\u2083(81) = 4, since 3\u2074 = 81",
      "log\u2083(9) = 2, since 3\u00b2 = 9",
      "Difference: 4 \u2212 2 = 2",
      "Check with the quotient law: log\u2083(81/9) = log\u2083(9) = 2",
    ],
    result: "log\u2083(81) \u2212 log\u2083(9) = 2",
  },
  {
    id: "power",
    law: "Power law: log(a\u207f) = n \u00d7 log(a)",
    example: "log\u2082(8\u00b2)",
    steps: [
      "Apply the power law: log\u2082(8\u00b2) = 2 \u00d7 log\u2082(8)",
      "log\u2082(8) = 3, since 2\u00b3 = 8",
      "Multiply: 2 \u00d7 3 = 6",
      "Check directly: 8\u00b2 = 64, and log\u2082(64) = 6, since 2\u2076 = 64",
    ],
    result: "log\u2082(8\u00b2) = 6",
  },
];

export function LogarithmExplorer({ lessonId }: { lessonId: string }) {
  const [lawId, setLawId] = useState("product");
  const [revealed, setRevealed] = useState(0);
  const [base, setBase] = useState(2);
  const [value, setValue] = useState(8);

  function record() {
    markStep(lessonId, "logarithmExplorer");
  }

  const preset = LAW_PRESETS.find((p) => p.id === lawId)!;

  function selectLaw(id: string) {
    setLawId(id);
    setRevealed(0);
    record();
  }

  const naturalLog = Math.log(value);
  const changeOfBase = base > 0 && base !== 1 ? naturalLog / Math.log(base) : NaN;

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">The three log laws, step by step</h4>
        <label className="block text-sm font-medium">
          Choose a law
          <select
            value={lawId}
            onChange={(e) => selectLaw(e.target.value)}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
          >
            {LAW_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.law}
              </option>
            ))}
          </select>
        </label>
        <div className="rounded-lg border bg-muted/30 p-4 text-center">
          <p className="text-lg font-bold text-primary">{preset.example}</p>
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
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Reveal next step
            </button>
          ) : (
            <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              {preset.result}
            </div>
          )}
        </div>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">Change-of-base calculator</h4>
        <p className="text-sm text-muted-foreground">
          Most calculators only compute natural log (ln) or base-10 log directly. The change-of-base
          formula lets you calculate any log using either of those.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Value: <strong>{value}</strong>
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={value}
              aria-label="Value"
              onChange={(e) => {
                setValue(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            Base: <strong>{base}</strong>
            <input
              type="range"
              min={2}
              max={10}
              step={1}
              value={base}
              aria-label="Base"
              onChange={(e) => {
                setBase(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
        </div>
        <div className={cn("rounded-md border p-3")}>
          <p className="text-xs text-muted-foreground">
            log base {base} of {value} = ln({value}) / ln({base})
          </p>
          <p className="text-lg font-bold">{round4(changeOfBase)}</p>
        </div>
      </section>
    </div>
  );
}

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}
