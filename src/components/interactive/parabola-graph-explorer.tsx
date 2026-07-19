"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function ParabolaGraphExplorer({ lessonId }: { lessonId: string }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  function record() {
    markStep(lessonId, "parabolaGraphExplorer");
  }

  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;
  const discriminant = b * b - 4 * a * c;
  const roots =
    a === 0
      ? []
      : discriminant > 0
        ? [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
        : discriminant === 0
          ? [-b / (2 * a)]
          : [];

  // ---- SVG coordinate plane ----
  const range = 10;
  const W = 340;
  const H = 340;
  const pad = 20;
  const usable = W - pad * 2;
  const scaleX = (x: number) => pad + ((x + range) / (2 * range)) * usable;
  const scaleY = (y: number) => H - pad - ((y + range) / (2 * range)) * usable;

  const points: string[] = [];
  for (let px = -range; px <= range; px += 0.25) {
    const py = a * px * px + b * px + c;
    if (py >= -range - 2 && py <= range + 2) {
      points.push(`${scaleX(px)},${scaleY(py)}`);
    }
  }

  const ticks = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <p className="text-sm text-muted-foreground">
        Adjust a, b and c in y = ax\u00b2 + bx + c and watch the parabola, its vertex, axis of
        symmetry and x-intercepts update live.
      </p>
      <div className="grid gap-6 sm:grid-cols-[1fr_260px]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto h-auto w-full max-w-sm rounded-lg border bg-muted/20"
          role="img"
          aria-label={`Graph of y = ${a}x squared + ${b}x + ${c}, with vertex at (${round2(vertexX)}, ${round2(vertexY)}).`}
        >
          {/* grid ticks */}
          {ticks.map((t) => (
            <g key={`v${t}`}>
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
          {/* axes */}
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
          {/* axis of symmetry */}
          <line
            x1={scaleX(vertexX)}
            y1={pad}
            x2={scaleX(vertexX)}
            y2={H - pad}
            className="stroke-amber-500"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          {/* parabola curve */}
          {points.length > 1 && (
            <polyline
              points={points.join(" ")}
              className="fill-none stroke-primary"
              strokeWidth="2.5"
            />
          )}
          {/* x-intercepts */}
          {roots.map((r, i) => (
            <circle
              key={i}
              cx={scaleX(r)}
              cy={scaleY(0)}
              r="5"
              className="fill-emerald-500 stroke-background"
              strokeWidth="1.5"
            />
          ))}
          {/* y-intercept */}
          <circle
            cx={scaleX(0)}
            cy={scaleY(c)}
            r="5"
            className="fill-sky-500 stroke-background"
            strokeWidth="1.5"
          />
          {/* vertex */}
          <circle
            cx={scaleX(vertexX)}
            cy={scaleY(vertexY)}
            r="6"
            className="fill-rose-500 stroke-background"
            strokeWidth="2"
          />
        </svg>

        <div className="space-y-3">
          {(
            [
              ["a", a, -5, 5],
              ["b", b, -10, 10],
              ["c", c, -10, 10],
            ] as const
          ).map(([label, value, min, max]) => (
            <label key={label} className="block text-sm">
              {label}: <strong>{value}</strong>
              <input
                type="range"
                min={min}
                max={max}
                step={1}
                value={value}
                aria-label={label}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (label === "a") setA(v === 0 ? 1 : v);
                  if (label === "b") setB(v);
                  if (label === "c") setC(v);
                  record();
                }}
                className="mt-2 w-full"
              />
            </label>
          ))}
          <div className="space-y-2 pt-2 text-sm">
            <p>
              <span className="mr-1.5 inline-block size-2.5 rounded-full bg-rose-500" /> Vertex: (
              {round2(vertexX)}, {round2(vertexY)})
            </p>
            <p>
              <span className="mr-1.5 inline-block size-2.5 rounded-full border-2 border-amber-500" />{" "}
              Axis of symmetry: x = {round2(vertexX)}
            </p>
            <p>
              <span className="mr-1.5 inline-block size-2.5 rounded-full bg-sky-500" /> y-intercept:
              (0, {c})
            </p>
            <p>
              <span className="mr-1.5 inline-block size-2.5 rounded-full bg-emerald-500" />{" "}
              x-intercept
              {roots.length === 1 ? "" : "s"}:{" "}
              {roots.length === 0
                ? "none (parabola doesn't cross the x-axis)"
                : roots.map((r) => round2(r)).join(", ")}
            </p>
            <p className="text-muted-foreground">
              Opens {a > 0 ? "upward (minimum)" : "downward (maximum)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
