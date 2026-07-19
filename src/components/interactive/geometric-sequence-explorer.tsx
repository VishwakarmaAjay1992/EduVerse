"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function GeometricSequenceExplorer({ lessonId }: { lessonId: string }) {
  const [a1, setA1] = useState(2);
  const [r, setR] = useState(0.5);
  const [n, setN] = useState(5);

  function record() {
    markStep(lessonId, "geometricSequenceExplorer");
  }

  const terms = Array.from({ length: 8 }, (_, i) => a1 * Math.pow(r, i));
  const nthTerm = a1 * Math.pow(r, n - 1);
  const sumToN = r === 1 ? a1 * n : (a1 * (1 - Math.pow(r, n))) / (1 - r);
  const convergent = Math.abs(r) < 1;
  const infiniteSum = convergent ? a1 / (1 - r) : null;

  const maxAbs = Math.max(...terms.map((t) => Math.abs(t)), 1);
  const barWidth = 32;

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <p className="text-sm text-muted-foreground">
        Adjust the first term a\u2081 and common ratio r. When |r| &lt; 1, the terms shrink toward
        zero and the infinite sum converges to a finite value.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          First term a\u2081: <strong>{a1}</strong>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={a1}
            aria-label="First term"
            onChange={(e) => {
              setA1(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full"
          />
        </label>
        <label className="block text-sm">
          Common ratio r: <strong>{r.toFixed(2)}</strong>
          <input
            type="range"
            min={-2}
            max={2}
            step={0.1}
            value={r}
            aria-label="Common ratio"
            onChange={(e) => {
              setR(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full"
          />
        </label>
        <label className="block text-sm">
          n (term / number of terms): <strong>{n}</strong>
          <input
            type="range"
            min={1}
            max={8}
            step={1}
            value={n}
            aria-label="n"
            onChange={(e) => {
              setN(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${terms.length * barWidth + 20} 140`}
          className="h-32 w-full min-w-[320px]"
          role="img"
          aria-label={`Bar chart of the first 8 terms of the geometric sequence starting at ${a1} with common ratio ${r}.`}
        >
          {terms.map((term, i) => {
            const h = (Math.abs(term) / maxAbs) * 90;
            const y = term >= 0 ? 70 - h : 70;
            const isSelected = i + 1 === n;
            return (
              <g key={i}>
                <rect
                  x={10 + i * barWidth}
                  y={y}
                  width={barWidth - 6}
                  height={Math.max(h, 1)}
                  className={isSelected ? "fill-rose-500" : "fill-primary/50"}
                />
                <text
                  x={10 + i * barWidth + (barWidth - 6) / 2}
                  y={130}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[9px]"
                >
                  {round2(term)}
                </text>
              </g>
            );
          })}
          <line
            x1={5}
            y1={70}
            x2={terms.length * barWidth + 10}
            y2={70}
            className="stroke-muted-foreground"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border p-3">
          <p className="text-xs text-muted-foreground">
            nth term (a\u2099 = a\u2081 \u00d7 r\u207f\u207b\u00b9)
          </p>
          <p className="text-lg font-bold">a\u2099 = {round4(nthTerm)}</p>
        </div>
        <div className="rounded-md border p-3">
          <p className="text-xs text-muted-foreground">Sum of first n terms</p>
          <p className="text-lg font-bold">S\u2099 = {round4(sumToN)}</p>
        </div>
        <div className="rounded-md border p-3 sm:col-span-2">
          <p className="text-xs text-muted-foreground">
            Infinite sum (only exists when |r| &lt; 1)
          </p>
          <p className="text-lg font-bold">
            {convergent
              ? `S\u221e = ${round4(infiniteSum!)}`
              : "Diverges \u2014 no finite sum (|r| \u2265 1)"}
          </p>
        </div>
      </div>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}
