"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface CTSPreset {
  id: string;
  display: string;
  a: number;
  b: number;
  c: number;
  steps: string[];
}

const CTS_PRESETS: CTSPreset[] = [
  {
    id: "cts1",
    display: "x\u00b2 + 6x + 5 = 0",
    a: 1,
    b: 6,
    c: 5,
    steps: [
      "Move the constant to the right: x\u00b2 + 6x = \u22125",
      "Halve the x-coefficient (6 \u00f7 2 = 3) and square it (3\u00b2 = 9); add to both sides: x\u00b2 + 6x + 9 = \u22125 + 9",
      "Left side is now a perfect square: (x + 3)\u00b2 = 4",
      "Take the square root of both sides: x + 3 = \u00b12",
      "Solve: x = \u22121 or x = \u22125",
    ],
  },
  {
    id: "cts2",
    display: "x\u00b2 \u2212 4x \u2212 1 = 0",
    a: 1,
    b: -4,
    c: -1,
    steps: [
      "Move the constant to the right: x\u00b2 \u2212 4x = 1",
      "Halve the x-coefficient (\u22124 \u00f7 2 = \u22122) and square it (4); add to both sides: x\u00b2 \u2212 4x + 4 = 1 + 4",
      "Left side is now a perfect square: (x \u2212 2)\u00b2 = 5",
      "Take the square root of both sides: x \u2212 2 = \u00b1\u221a5",
      "Solve: x = 2 + \u221a5 \u2248 4.24 or x = 2 \u2212 \u221a5 \u2248 \u22120.24",
    ],
  },
];

export function QuadraticFormulaExplorer({ lessonId }: { lessonId: string }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);
  const [ctsId, setCtsId] = useState("cts1");
  const [ctsStep, setCtsStep] = useState(0);

  function record() {
    markStep(lessonId, "quadraticFormulaExplorer");
  }

  const discriminant = b * b - 4 * a * c;
  const nature =
    a === 0
      ? "Not a quadratic (a cannot be 0)"
      : discriminant > 0
        ? "Two distinct real roots"
        : discriminant === 0
          ? "One repeated real root"
          : "No real roots (two complex roots)";

  let rootsText = "";
  if (a !== 0) {
    if (discriminant > 0) {
      const sqrtD = Math.sqrt(discriminant);
      const r1 = (-b + sqrtD) / (2 * a);
      const r2 = (-b - sqrtD) / (2 * a);
      rootsText = `x = ${round2(r1)} or x = ${round2(r2)}`;
    } else if (discriminant === 0) {
      const r = -b / (2 * a);
      rootsText = `x = ${round2(r)}`;
    } else {
      const real = round2(-b / (2 * a));
      const imag = round2(Math.sqrt(-discriminant) / (2 * a));
      rootsText = `x = ${real} \u00b1 ${imag}i`;
    }
  }

  const ctsPreset = CTS_PRESETS.find((p) => p.id === ctsId)!;

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">Discriminant and quadratic formula laboratory</h4>
        <p className="text-sm text-muted-foreground">
          Adjust a, b and c in ax\u00b2 + bx + c = 0 to see how the discriminant changes the number
          and type of roots.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberSlider
            label="a"
            value={a}
            min={-5}
            max={5}
            onChange={(v) => {
              setA(v);
              record();
            }}
          />
          <NumberSlider
            label="b"
            value={b}
            min={-10}
            max={10}
            onChange={(v) => {
              setB(v);
              record();
            }}
          />
          <NumberSlider
            label="c"
            value={c}
            min={-10}
            max={10}
            onChange={(v) => {
              setC(v);
              record();
            }}
          />
        </div>
        <div className="rounded-lg border bg-muted/30 p-4 text-center">
          <p className="text-lg font-bold text-primary">
            {a}x\u00b2 {b >= 0 ? "+" : "\u2212"} {Math.abs(b)}x {c >= 0 ? "+" : "\u2212"}{" "}
            {Math.abs(c)} = 0
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Result label="Discriminant (b\u00b2 \u2212 4ac)" value={String(discriminant)} />
          <Result label="Nature of roots" value={nature} />
          <Result label="Roots" value={a === 0 ? "\u2014" : rootsText} />
        </div>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">Completing the square, step by step</h4>
        <label className="block text-sm font-medium">
          Choose an equation
          <select
            value={ctsId}
            onChange={(e) => {
              setCtsId(e.target.value);
              setCtsStep(0);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
          >
            {CTS_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.display}
              </option>
            ))}
          </select>
        </label>
        <ol className="space-y-2">
          {ctsPreset.steps.slice(0, ctsStep + 1).map((s, i) => (
            <li key={i} className="rounded-md border p-3 text-sm">
              <span className="mr-2 font-semibold text-primary">Step {i + 1}:</span>
              {s}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={ctsStep >= ctsPreset.steps.length - 1}
            onClick={() => {
              setCtsStep((s) => Math.min(ctsPreset.steps.length - 1, s + 1));
              record();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-40"
          >
            Reveal next step
          </button>
          <button
            type="button"
            onClick={() => {
              setCtsStep(0);
              record();
            }}
            className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function NumberSlider({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block text-sm">
      {label}: <strong>{value}</strong>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
    </label>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className={cn("rounded-lg border p-3")}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
