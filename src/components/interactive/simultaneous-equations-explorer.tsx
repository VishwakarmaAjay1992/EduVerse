"use client";

import { useMemo, useState } from "react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

/** A line in the form ax + by = c. */
interface LineDef {
  a: number;
  b: number;
  c: number;
}

interface SystemPreset {
  id: string;
  label: string;
  line1: LineDef;
  line2: LineDef;
}

const PRESETS: SystemPreset[] = [
  {
    id: "unique-1",
    label: "x + y = 10 and x \u2212 y = 2",
    line1: { a: 1, b: 1, c: 10 },
    line2: { a: 1, b: -1, c: 2 },
  },
  {
    id: "unique-2",
    label: "2x + 3y = 13 and x + y = 5",
    line1: { a: 2, b: 3, c: 13 },
    line2: { a: 1, b: 1, c: 5 },
  },
  {
    id: "parallel",
    label: "x + y = 4 and x + y = 7 (parallel)",
    line1: { a: 1, b: 1, c: 4 },
    line2: { a: 1, b: 1, c: 7 },
  },
  {
    id: "coincident",
    label: "x + y = 4 and 2x + 2y = 8 (same line)",
    line1: { a: 1, b: 1, c: 4 },
    line2: { a: 2, b: 2, c: 8 },
  },
];

/** Solve a1x+b1y=c1, a2x+b2y=c2 using Cramer's rule; classify the result. */
function solveSystem(l1: LineDef, l2: LineDef) {
  const det = l1.a * l2.b - l2.a * l1.b;
  if (Math.abs(det) > 1e-9) {
    const x = (l1.c * l2.b - l2.c * l1.b) / det;
    const y = (l1.a * l2.c - l2.a * l1.c) / det;
    return { kind: "unique" as const, x, y };
  }
  // Lines are parallel or coincident: check if line2 is a multiple of line1
  const sameLine =
    Math.abs(l1.a * l2.c - l2.a * l1.c) < 1e-9 && Math.abs(l1.b * l2.c - l2.b * l1.c) < 1e-9;
  return sameLine ? { kind: "infinite" as const } : { kind: "none" as const };
}

function yFor(l: LineDef, x: number): number | null {
  if (l.b === 0) return null;
  return (l.c - l.a * x) / l.b;
}

function LineGraph({
  line1,
  line2,
  solution,
}: {
  line1: LineDef;
  line2: LineDef;
  solution: ReturnType<typeof solveSystem>;
}) {
  const range = 12;
  const w = 320;
  const scale = (n: number) => 160 + (n / range) * 140;
  const scaleY = (n: number) => 160 - (n / range) * 140;

  function pathFor(l: LineDef): string | null {
    const pts: { x: number; y: number }[] = [];
    if (l.b !== 0) {
      pts.push({ x: -range, y: yFor(l, -range)! });
      pts.push({ x: range, y: yFor(l, range)! });
    } else if (l.a !== 0) {
      const x = l.c / l.a;
      pts.push({ x, y: -range });
      pts.push({ x, y: range });
    } else {
      return null;
    }
    return `M ${scale(pts[0]!.x)} ${scaleY(pts[0]!.y)} L ${scale(pts[1]!.x)} ${scaleY(pts[1]!.y)}`;
  }

  const p1 = pathFor(line1);
  const p2 = pathFor(line2);

  return (
    <svg
      viewBox={`0 0 ${w} 320`}
      className="mx-auto h-auto w-full max-w-sm"
      role="img"
      aria-label={
        solution.kind === "unique"
          ? `Two intersecting lines meeting at the point ${solution.x}, ${solution.y}.`
          : solution.kind === "none"
            ? "Two parallel lines that never intersect, meaning there is no solution."
            : "Two lines that overlap exactly, meaning there are infinitely many solutions."
      }
    >
      <line
        x1="20"
        y1="160"
        x2="300"
        y2="160"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
      />
      <line
        x1="160"
        y1="20"
        x2="160"
        y2="300"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
      />
      <text x="295" y="152" className="fill-muted-foreground text-[10px]">
        x
      </text>
      <text x="166" y="30" className="fill-muted-foreground text-[10px]">
        y
      </text>
      {p1 && <path d={p1} className="stroke-sky-500" strokeWidth="2.5" fill="none" />}
      {p2 && (
        <path
          d={p2}
          className={solution.kind === "infinite" ? "stroke-rose-500" : "stroke-emerald-500"}
          strokeWidth="2.5"
          strokeDasharray={solution.kind === "infinite" ? "6 4" : undefined}
          fill="none"
        />
      )}
      {solution.kind === "unique" && (
        <>
          <circle
            cx={scale(solution.x)}
            cy={scaleY(solution.y)}
            r="6"
            className="fill-primary stroke-background"
            strokeWidth="2"
          />
          <text
            x={scale(solution.x) + 10}
            y={scaleY(solution.y) - 8}
            className="fill-primary text-xs font-bold"
          >
            ({round2(solution.x)}, {round2(solution.y)})
          </text>
        </>
      )}
    </svg>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function SimultaneousEquationsExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("unique-1");
  const [custom, setCustom] = useState<LineDef[]>([
    { a: 1, b: 1, c: 10 },
    { a: 1, b: -1, c: 2 },
  ]);
  const [useCustom, setUseCustom] = useState(false);
  const [method, setMethod] = useState<"substitution" | "elimination">("elimination");

  const preset = PRESETS.find((p) => p.id === presetId)!;
  const line1 = useCustom ? custom[0]! : preset.line1;
  const line2 = useCustom ? custom[1]! : preset.line2;
  const solution = useMemo(() => solveSystem(line1, line2), [line1, line2]);

  function record() {
    markStep(lessonId, "simultaneousEquationsExplorer");
  }

  function updateCustom(index: 0 | 1, field: keyof LineDef, value: number) {
    setCustom((prev) => {
      const next: LineDef[] = [prev[0]!, prev[1]!];
      next[index] = { ...next[index]!, [field]: value };
      return next;
    });
    record();
  }

  function eqText(l: LineDef): string {
    const bTerm =
      l.b === 0
        ? ""
        : l.b === 1
          ? " + y"
          : l.b === -1
            ? " \u2212 y"
            : l.b > 0
              ? ` + ${l.b}y`
              : ` \u2212 ${Math.abs(l.b)}y`;
    const aTerm = l.a === 0 ? "" : l.a === 1 ? "x" : l.a === -1 ? "\u2212x" : `${l.a}x`;
    return `${aTerm}${bTerm} = ${l.c}`;
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose equations">
        <button
          type="button"
          onClick={() => {
            setUseCustom(false);
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            !useCustom ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Preset systems
        </button>
        <button
          type="button"
          onClick={() => {
            setUseCustom(true);
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            useCustom ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Enter your own
        </button>
      </div>

      {!useCustom ? (
        <label className="block text-sm font-medium">
          System
          <select
            value={presetId}
            onChange={(e) => {
              setPresetId(e.target.value);
              record();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
          >
            {PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <div className="space-y-3">
          {([0, 1] as const).map((i) => (
            <div key={i} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="w-16 font-medium">Line {i + 1}:</span>
              <NumberField
                label="a"
                value={custom[i]!.a}
                onChange={(v) => updateCustom(i, "a", v)}
              />
              <span>x +</span>
              <NumberField
                label="b"
                value={custom[i]!.b}
                onChange={(v) => updateCustom(i, "b", v)}
              />
              <span>y =</span>
              <NumberField
                label="c"
                value={custom[i]!.c}
                onChange={(v) => updateCustom(i, "c", v)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
        <LineGraph line1={line1} line2={line2} solution={solution} />
        <div className="space-y-2 text-sm">
          <p className="font-mono text-sky-600 dark:text-sky-400">{eqText(line1)}</p>
          <p
            className={cn(
              "font-mono",
              solution.kind === "infinite"
                ? "text-rose-600 dark:text-rose-400"
                : "text-emerald-600 dark:text-emerald-400"
            )}
          >
            {eqText(line2)}
          </p>
          <div className="rounded-md border p-3">
            {solution.kind === "unique" && (
              <p>
                <strong>One solution:</strong> x = {round2(solution.x)}, y = {round2(solution.y)} —
                the lines cross at exactly one point.
              </p>
            )}
            {solution.kind === "none" && (
              <p>
                <strong>No solution:</strong> the lines are parallel (same slope, different
                intercept) and never meet.
              </p>
            )}
            {solution.kind === "infinite" && (
              <p>
                <strong>Infinitely many solutions:</strong> the two equations describe the same
                line, so every point on it satisfies both.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t pt-5">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Solving method">
          <button
            type="button"
            onClick={() => {
              setMethod("substitution");
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              method === "substitution" ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            Substitution
          </button>
          <button
            type="button"
            onClick={() => {
              setMethod("elimination");
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              method === "elimination" ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            Elimination
          </button>
        </div>
        {method === "substitution" ? (
          <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li>Rearrange one equation to make x or y the subject.</li>
            <li>Substitute that expression into the other equation, leaving one variable.</li>
            <li>Solve the resulting one-variable equation.</li>
            <li>Substitute the value found back in to get the second variable.</li>
          </ol>
        ) : (
          <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li>
              Multiply one or both equations so a variable has matching (or opposite) coefficients.
            </li>
            <li>Add or subtract the equations to eliminate that variable.</li>
            <li>Solve the resulting one-variable equation.</li>
            <li>Substitute back into either original equation to get the second variable.</li>
          </ol>
        )}
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="number"
      aria-label={`Coefficient ${label}`}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-16 rounded-md border bg-background px-2 py-1 text-center"
    />
  );
}
