"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface FnPreset {
  id: string;
  label: string;
  fn: (x: number) => number;
  notation: string;
}

const FN_PRESETS: FnPreset[] = [
  { id: "m1", label: "f(x) = 2x + 3", fn: (x) => 2 * x + 3, notation: "f" },
  { id: "m2", label: "f(x) = x\u00b2 \u2212 1", fn: (x) => x * x - 1, notation: "f" },
  { id: "m3", label: "f(x) = 3(x \u2212 1)", fn: (x) => 3 * (x - 1), notation: "f" },
];

interface VLTPreset {
  id: string;
  label: string;
  isFunction: boolean;
  /** For each x-tick, the y-value(s) at that x. Multiple values means the vertical line hits more than once. */
  points: { x: number; ys: number[] }[];
}

const VLT_PRESETS: VLTPreset[] = [
  {
    id: "v1",
    label: "y = x + 1 (a straight line)",
    isFunction: true,
    points: [-2, -1, 0, 1, 2].map((x) => ({ x, ys: [x + 1] })),
  },
  {
    id: "v2",
    label: "y = x\u00b2 (a parabola)",
    isFunction: true,
    points: [-2, -1, 0, 1, 2].map((x) => ({ x, ys: [x * x] })),
  },
  {
    id: "v3",
    label: "x = y\u00b2 (a sideways parabola)",
    isFunction: false,
    points: [0, 1, 2, 3, 4].map((x) => ({ x, ys: [Math.sqrt(x), -Math.sqrt(x)] })),
  },
  {
    id: "v4",
    label: "A circle: x\u00b2 + y\u00b2 = 9",
    isFunction: false,
    points: [-3, -2, -1, 0, 1, 2, 3].map((x) => {
      const under = 9 - x * x;
      const r = Math.sqrt(Math.max(0, under));
      return { x, ys: r === 0 ? [0] : [r, -r] };
    }),
  },
];

export function FunctionMachineExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("m1");
  const [input, setInput] = useState(4);
  const [vltId, setVltId] = useState("v1");
  const [vltAnswer, setVltAnswer] = useState<boolean | null>(null);

  function record() {
    markStep(lessonId, "functionMachineExplorer");
  }

  const preset = FN_PRESETS.find((p) => p.id === presetId)!;
  const output = preset.fn(input);

  const vlt = VLT_PRESETS.find((p) => p.id === vltId)!;
  const w = 220;
  const hgt = 220;
  const range = 4.5;
  const scaleX = (x: number) => w / 2 + (x / range) * (w / 2 - 20);
  const scaleY = (y: number) => hgt / 2 - (y / range) * (hgt / 2 - 20);

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">Function machine</h4>
        <p className="text-sm text-muted-foreground">
          A function takes an input, applies a rule, and produces exactly one output. Choose a rule
          and try different inputs.
        </p>
        <label className="block text-sm font-medium">
          Rule
          <select
            value={presetId}
            onChange={(e) => {
              setPresetId(e.target.value);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-xs"
          >
            {FN_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-lg border p-3 text-center">
            <p className="text-xs text-muted-foreground">Input</p>
            <p className="text-xl font-bold">{input}</p>
          </div>
          <ArrowRight className="size-5 text-muted-foreground" />
          <div className="rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground">{preset.notation}(x)</p>
            <p className="text-sm font-semibold">{preset.label.split("=")[1]}</p>
          </div>
          <ArrowRight className="size-5 text-muted-foreground" />
          <div className="rounded-lg border p-3 text-center">
            <p className="text-xs text-muted-foreground">Output</p>
            <p className="text-xl font-bold text-primary">
              {preset.notation}({input}) = {round2(output)}
            </p>
          </div>
        </div>
        <label className="block text-sm">
          Input value: <strong>{input}</strong>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={input}
            aria-label="Input value"
            onChange={(e) => {
              setInput(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full max-w-xs"
          />
        </label>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">The vertical line test</h4>
        <p className="text-sm text-muted-foreground">
          If any vertical line crosses a graph more than once, the graph does NOT represent a
          function — the input would have more than one output.
        </p>
        <label className="block text-sm font-medium">
          Choose a graph
          <select
            value={vltId}
            onChange={(e) => {
              setVltId(e.target.value);
              setVltAnswer(null);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-xs"
          >
            {VLT_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <svg
          viewBox={`0 0 ${w} ${hgt}`}
          className="mx-auto h-auto w-full max-w-[220px] rounded-lg border bg-muted/20"
          role="img"
          aria-label={`Graph of ${vlt.label}, ${vlt.isFunction ? "which passes the vertical line test" : "which fails the vertical line test"}.`}
        >
          <line
            x1={0}
            y1={hgt / 2}
            x2={w}
            y2={hgt / 2}
            className="stroke-muted-foreground"
            strokeWidth="1"
          />
          <line
            x1={w / 2}
            y1={0}
            x2={w / 2}
            y2={hgt}
            className="stroke-muted-foreground"
            strokeWidth="1"
          />
          {vlt.points.flatMap((p) =>
            p.ys.map((y, i) => (
              <circle
                key={`${p.x}-${i}`}
                cx={scaleX(p.x)}
                cy={scaleY(y)}
                r="4"
                className="fill-primary"
              />
            ))
          )}
          {/* sample vertical test line at x = 1 (or the relevant column) */}
          <line
            x1={scaleX(vlt.points[Math.min(3, vlt.points.length - 1)]!.x)}
            y1={10}
            x2={scaleX(vlt.points[Math.min(3, vlt.points.length - 1)]!.x)}
            y2={hgt - 10}
            className="stroke-amber-500"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        </svg>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setVltAnswer(true);
              record();
            }}
            disabled={vltAnswer !== null}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              vltAnswer !== null && vlt.isFunction && "border-emerald-500 bg-emerald-500/10",
              vltAnswer === true && !vlt.isFunction && "border-destructive bg-destructive/10"
            )}
          >
            This is a function
          </button>
          <button
            type="button"
            onClick={() => {
              setVltAnswer(false);
              record();
            }}
            disabled={vltAnswer !== null}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              vltAnswer !== null && !vlt.isFunction && "border-emerald-500 bg-emerald-500/10",
              vltAnswer === false && vlt.isFunction && "border-destructive bg-destructive/10"
            )}
          >
            This is NOT a function
          </button>
        </div>
        {vltAnswer !== null && (
          <p className="flex items-center gap-2 rounded-md border p-3 text-sm">
            {(vltAnswer === vlt.isFunction && (
              <CheckCircle2 className="size-4 text-emerald-600" />
            )) || <XCircle className="size-4 text-destructive" />}
            {vlt.isFunction
              ? "Correct — every vertical line crosses this graph at most once, so it is a function."
              : "Correct — some vertical line crosses this graph more than once, so it is NOT a function."}
          </p>
        )}
      </section>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
