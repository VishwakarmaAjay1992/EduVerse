"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Family = "linear" | "quadratic" | "cubic" | "reciprocal" | "absolute" | "piecewise";

const FAMILIES: { id: Family; label: string; eq: string }[] = [
  { id: "linear", label: "Linear", eq: "y = x" },
  { id: "quadratic", label: "Quadratic", eq: "y = x\u00b2" },
  { id: "cubic", label: "Cubic", eq: "y = x\u00b3" },
  { id: "reciprocal", label: "Reciprocal", eq: "y = 1/x" },
  { id: "absolute", label: "Absolute value", eq: "y = |x|" },
  { id: "piecewise", label: "Piecewise", eq: "y = \u2212x (x<0), x\u00b2 (x\u22650)" },
];

function evaluate(family: Family, x: number): number | null {
  switch (family) {
    case "linear":
      return x;
    case "quadratic":
      return x * x;
    case "cubic":
      return x * x * x;
    case "reciprocal":
      return x === 0 ? null : 1 / x;
    case "absolute":
      return Math.abs(x);
    case "piecewise":
      return x < 0 ? -x : x * x;
  }
}

export function FunctionFamiliesExplorer({ lessonId }: { lessonId: string }) {
  const [family, setFamily] = useState<Family>("linear");

  function record() {
    markStep(lessonId, "functionFamiliesExplorer");
  }

  const range = 4;
  const W = 280;
  const H = 280;
  const pad = 20;
  const usable = W - pad * 2;
  const scaleX = (x: number) => pad + ((x + range) / (2 * range)) * usable;
  const scaleY = (y: number) => H - pad - ((y + range) / (2 * range)) * usable;

  const segments: string[][] = [[]];
  const step = 0.1;
  for (let px = -range; px <= range; px += step) {
    const py = evaluate(family, Math.round(px * 100) / 100);
    if (py === null || Math.abs(py) > range + 1) {
      if (segments[segments.length - 1]!.length > 0) segments.push([]);
      continue;
    }
    segments[segments.length - 1]!.push(`${scaleX(px)},${scaleY(py)}`);
  }

  const ticks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <p className="text-sm text-muted-foreground">
        Choose a family of functions and see its characteristic graph shape.
      </p>
      <div className="flex flex-wrap gap-2">
        {FAMILIES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setFamily(f.id);
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium",
              family === f.id ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="rounded-lg border bg-muted/30 p-3 text-center text-lg font-bold text-primary">
        {FAMILIES.find((f) => f.id === family)!.eq}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto h-auto w-full max-w-xs rounded-lg border bg-muted/20"
        role="img"
        aria-label={`Graph of the ${family} function family: ${FAMILIES.find((f) => f.id === family)!.eq}.`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={scaleX(t)}
              y1={pad}
              x2={scaleX(t)}
              y2={H - pad}
              className="stroke-border"
              strokeWidth="0.5"
            />
            <line
              x1={pad}
              y1={scaleY(t)}
              x2={W - pad}
              y2={scaleY(t)}
              className="stroke-border"
              strokeWidth="0.5"
            />
          </g>
        ))}
        <line
          x1={pad}
          y1={scaleY(0)}
          x2={W - pad}
          y2={scaleY(0)}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
        />
        <line
          x1={scaleX(0)}
          y1={pad}
          x2={scaleX(0)}
          y2={H - pad}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
        />
        {segments
          .filter((s) => s.length > 1)
          .map((seg, i) => (
            <polyline
              key={i}
              points={seg.join(" ")}
              className="fill-none stroke-primary"
              strokeWidth="2.5"
            />
          ))}
      </svg>
    </div>
  );
}
