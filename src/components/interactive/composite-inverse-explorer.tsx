"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

interface CompPreset {
  id: string;
  fLabel: string;
  gLabel: string;
  f: (x: number) => number;
  g: (x: number) => number;
  composeSteps: (x: number) => string[];
}

const COMP_PRESETS: CompPreset[] = [
  {
    id: "c1",
    fLabel: "f(x) = 2x + 1",
    gLabel: "g(x) = x \u2212 3",
    f: (x) => 2 * x + 1,
    g: (x) => x - 3,
    composeSteps: (x) => [
      `Start with g(${x}) = ${x} \u2212 3 = ${x - 3}`,
      `Now apply f to that result: f(${x - 3}) = 2(${x - 3}) + 1 = ${2 * (x - 3) + 1}`,
    ],
  },
  {
    id: "c2",
    fLabel: "f(x) = x\u00b2",
    gLabel: "g(x) = x + 2",
    f: (x) => x * x,
    g: (x) => x + 2,
    composeSteps: (x) => [
      `Start with g(${x}) = ${x} + 2 = ${x + 2}`,
      `Now apply f to that result: f(${x + 2}) = (${x + 2})\u00b2 = ${(x + 2) * (x + 2)}`,
    ],
  },
];

interface InvPreset {
  id: string;
  fLabel: string;
  steps: string[];
  inverse: string;
}

const INV_PRESETS: InvPreset[] = [
  {
    id: "i1",
    fLabel: "f(x) = 2x + 3",
    steps: [
      "Replace f(x) with y: y = 2x + 3",
      "Swap x and y: x = 2y + 3",
      "Solve for y: x \u2212 3 = 2y, so y = (x \u2212 3) / 2",
    ],
    inverse: "f\u207b\u00b9(x) = (x \u2212 3) / 2",
  },
  {
    id: "i2",
    fLabel: "f(x) = (x + 4) / 3",
    steps: [
      "Replace f(x) with y: y = (x + 4) / 3",
      "Swap x and y: x = (y + 4) / 3",
      "Solve for y: 3x = y + 4, so y = 3x \u2212 4",
    ],
    inverse: "f\u207b\u00b9(x) = 3x \u2212 4",
  },
];

export function CompositeInverseExplorer({ lessonId }: { lessonId: string }) {
  const [compId, setCompId] = useState("c1");
  const [x, setX] = useState(3);
  const [compRevealed, setCompRevealed] = useState(0);
  const [invId, setInvId] = useState("i1");
  const [invRevealed, setInvRevealed] = useState(0);

  function record() {
    markStep(lessonId, "compositeInverseExplorer");
  }

  const comp = COMP_PRESETS.find((p) => p.id === compId)!;
  const steps = comp.composeSteps(x);

  const inv = INV_PRESETS.find((p) => p.id === invId)!;

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">Composing functions: f(g(x))</h4>
        <label className="block text-sm font-medium">
          Choose f and g
          <select
            value={compId}
            onChange={(e) => {
              setCompId(e.target.value);
              setCompRevealed(0);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-xs"
          >
            {COMP_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.fLabel}, {p.gLabel}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          x = <strong>{x}</strong>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={x}
            aria-label="x value"
            onChange={(e) => {
              setX(Number(e.target.value));
              setCompRevealed(0);
              record();
            }}
            className="mt-2 w-full max-w-xs"
          />
        </label>
        <div className="rounded-lg border bg-muted/30 p-3 text-center text-sm">
          Computing f(g({x}))
        </div>
        <ol className="space-y-2">
          {steps.slice(0, compRevealed).map((s, i) => (
            <li key={i} className="rounded-md border p-3 text-sm">
              <span className="mr-2 font-semibold text-primary">Step {i + 1}:</span>
              {s}
            </li>
          ))}
        </ol>
        <button
          type="button"
          disabled={compRevealed >= steps.length}
          onClick={() => {
            setCompRevealed((r) => r + 1);
            record();
          }}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-40"
        >
          {compRevealed >= steps.length ? "Done" : "Reveal next step"}
        </button>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">Finding an inverse function</h4>
        <label className="block text-sm font-medium">
          Choose a function
          <select
            value={invId}
            onChange={(e) => {
              setInvId(e.target.value);
              setInvRevealed(0);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-xs"
          >
            {INV_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.fLabel}
              </option>
            ))}
          </select>
        </label>
        <ol className="space-y-2">
          {inv.steps.slice(0, invRevealed).map((s, i) => (
            <li key={i} className="rounded-md border p-3 text-sm">
              <span className="mr-2 font-semibold text-primary">Step {i + 1}:</span>
              {s}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap items-center gap-2">
          {invRevealed < inv.steps.length ? (
            <button
              type="button"
              onClick={() => {
                setInvRevealed((r) => r + 1);
                record();
              }}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Reveal next step
            </button>
          ) : (
            <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              {inv.inverse}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
