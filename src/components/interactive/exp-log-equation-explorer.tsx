"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { markStep } from "@/lib/progress-store";

interface EqPreset {
  id: string;
  category: string;
  display: string;
  steps: string[];
  answer: string;
}

const EXP_PRESETS: EqPreset[] = [
  {
    id: "e1",
    category: "Matching bases",
    display: "2\u02e3 = 32",
    steps: [
      "Rewrite 32 as a power of 2: 32 = 2\u2075",
      "Now the bases match: 2\u02e3 = 2\u2075",
      "Since the bases are equal, the exponents must be equal: x = 5",
    ],
    answer: "x = 5",
  },
  {
    id: "e2",
    category: "Taking logs of both sides",
    display: "3\u02e3 = 20",
    steps: [
      "The bases can't be matched easily, so take the log of both sides: log(3\u02e3) = log(20)",
      "Apply the power law: x\u00b7log(3) = log(20)",
      "Divide both sides by log(3): x = log(20) / log(3)",
      "Evaluate: x \u2248 2.727",
    ],
    answer: "x \u2248 2.727",
  },
  {
    id: "e3",
    category: "Exponential decay model",
    display: "500(0.9)\u02e3 = 200",
    steps: [
      "Divide both sides by 500: 0.9\u02e3 = 0.4",
      "Take the log of both sides: x\u00b7log(0.9) = log(0.4)",
      "Divide by log(0.9): x = log(0.4) / log(0.9)",
      "Evaluate: x \u2248 8.70",
    ],
    answer: "x \u2248 8.70",
  },
];

const LOG_PRESETS: EqPreset[] = [
  {
    id: "l1",
    category: "Simple log equation",
    display: "log\u2082(x) = 5",
    steps: ["Convert to exponential form: x = 2\u2075", "Evaluate: x = 32"],
    answer: "x = 32",
  },
  {
    id: "l2",
    category: "Log equation with a coefficient",
    display: "3\u00b7log(x) = 6",
    steps: [
      "Divide both sides by 3: log(x) = 2",
      "Convert to exponential form (base 10): x = 10\u00b2",
      "Evaluate: x = 100",
    ],
    answer: "x = 100",
  },
  {
    id: "l3",
    category: "Combining logs first",
    display: "log(x) + log(x \u2212 3) = 1",
    steps: [
      "Combine using the product law: log(x(x\u22123)) = 1",
      "Convert to exponential form: x(x\u22123) = 10\u00b9 = 10",
      "Expand and rearrange: x\u00b2 \u2212 3x \u2212 10 = 0",
      "Factor: (x\u22125)(x+2) = 0, so x = 5 or x = \u22122",
      "Reject x = \u22122 since log of a negative number is undefined \u2014 x must keep x>0 and x\u22123>0",
    ],
    answer: "x = 5 (x = \u22122 is rejected)",
  },
];

export function ExpLogEquationExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"exp" | "log">("exp");
  const [presetId, setPresetId] = useState("e1");
  const [revealed, setRevealed] = useState(0);

  function record() {
    markStep(lessonId, "expLogEquationExplorer");
  }

  const presets = tab === "exp" ? EXP_PRESETS : LOG_PRESETS;
  const preset = presets.find((p) => p.id === presetId) ?? presets[0]!;

  function switchTab(t: "exp" | "log") {
    setTab(t);
    setPresetId(t === "exp" ? EXP_PRESETS[0]!.id : LOG_PRESETS[0]!.id);
    setRevealed(0);
    record();
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setRevealed(0);
    record();
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Equation type">
        <button
          type="button"
          onClick={() => switchTab("exp")}
          className={`rounded-md border px-3 py-2 text-sm font-medium ${tab === "exp" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
        >
          Exponential equations
        </button>
        <button
          type="button"
          onClick={() => switchTab("log")}
          className={`rounded-md border px-3 py-2 text-sm font-medium ${tab === "log" ? "border-primary bg-primary/10" : "hover:bg-muted"}`}
        >
          Logarithmic equations
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

      <div className="rounded-lg border bg-muted/30 p-4 text-center text-xl font-bold text-primary">
        {preset.display}
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
            {preset.answer}
          </div>
        )}
      </div>
    </div>
  );
}
