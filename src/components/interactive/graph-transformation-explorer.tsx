"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function GraphTransformationExplorer({ lessonId }: { lessonId: string }) {
  const [a, setA] = useState(1);
  const [h, setH] = useState(0);
  const [k, setK] = useState(0);
  const [reflectX, setReflectX] = useState(false);

  function record() {
    markStep(lessonId, "graphTransformationExplorer");
  }

  const range = 6;
  const W = 300;
  const H = 300;
  const pad = 20;
  const usable = W - pad * 2;
  const scaleX = (x: number) => pad + ((x + range) / (2 * range)) * usable;
  const scaleY = (y: number) => H - pad - ((y + range) / (2 * range)) * usable;

  function base(x: number): number {
    return x * x;
  }
  function transformed(x: number): number {
    const sign = reflectX ? -1 : 1;
    return sign * a * base(x - h) + k;
  }

  const basePoints: string[] = [];
  const transPoints: string[] = [];
  for (let px = -range; px <= range; px += 0.15) {
    const by = base(px);
    if (Math.abs(by) <= range + 1) basePoints.push(`${scaleX(px)},${scaleY(by)}`);
    const ty = transformed(px);
    if (Math.abs(ty) <= range + 1) transPoints.push(`${scaleX(px)},${scaleY(ty)}`);
  }

  const ticks = [-6, -4, -2, 0, 2, 4, 6];

  function describeTransform(): string {
    const parts: string[] = [];
    if (h !== 0) parts.push(`shifted ${h > 0 ? "right" : "left"} by ${Math.abs(h)}`);
    if (k !== 0) parts.push(`shifted ${k > 0 ? "up" : "down"} by ${Math.abs(k)}`);
    if (Math.abs(a) > 1) parts.push(`stretched vertically by a factor of ${Math.abs(a)}`);
    if (Math.abs(a) < 1 && a !== 0)
      parts.push(`compressed vertically by a factor of ${Math.abs(a)}`);
    if (reflectX) parts.push("reflected across the x-axis");
    return parts.length === 0
      ? "no transformation applied (identical to the base graph)"
      : parts.join(", ");
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <p className="text-sm text-muted-foreground">
        Starting from the base graph y = x\u00b2 (grey), adjust a, h and k in y = a(x \u2212
        h)\u00b2 + k and toggle a reflection to see how each transformation moves and reshapes the
        graph.
      </p>
      <div className="grid gap-6 sm:grid-cols-[1fr_240px]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto h-auto w-full max-w-sm rounded-lg border bg-muted/20"
          role="img"
          aria-label={`Graph showing the base function y = x squared in grey, and the transformed function y = ${a}(x - ${h}) squared ${k >= 0 ? "+" : "-"} ${Math.abs(k)}${reflectX ? ", reflected across the x-axis," : ""} in colour.`}
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
          {basePoints.length > 1 && (
            <polyline
              points={basePoints.join(" ")}
              className="fill-none stroke-muted-foreground"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
          )}
          {transPoints.length > 1 && (
            <polyline
              points={transPoints.join(" ")}
              className="fill-none stroke-primary"
              strokeWidth="2.5"
            />
          )}
        </svg>
        <div className="space-y-3">
          <label className="block text-sm">
            a: <strong>{a}</strong>
            <input
              type="range"
              min={-3}
              max={3}
              step={1}
              value={a}
              aria-label="a"
              onChange={(e) => {
                setA(Number(e.target.value) || 1);
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            h (horizontal shift): <strong>{h}</strong>
            <input
              type="range"
              min={-4}
              max={4}
              step={1}
              value={h}
              aria-label="h"
              onChange={(e) => {
                setH(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            k (vertical shift): <strong>{k}</strong>
            <input
              type="range"
              min={-4}
              max={4}
              step={1}
              value={k}
              aria-label="k"
              onChange={(e) => {
                setK(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={reflectX}
              onChange={(e) => {
                setReflectX(e.target.checked);
                record();
              }}
              className="accent-primary"
            />
            Reflect across the x-axis
          </label>
          <p className="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground">
            This graph is {describeTransform()}.
          </p>
        </div>
      </div>
    </div>
  );
}
