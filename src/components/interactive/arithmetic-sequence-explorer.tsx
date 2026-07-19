"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function ArithmeticSequenceExplorer({ lessonId }: { lessonId: string }) {
  const [a1, setA1] = useState(3);
  const [d, setD] = useState(4);
  const [n, setN] = useState(6);

  function record() {
    markStep(lessonId, "arithmeticSequenceExplorer");
  }

  const terms = Array.from({ length: 10 }, (_, i) => a1 + i * d);
  const nthTerm = a1 + (n - 1) * d;
  const sumToN = (n / 2) * (2 * a1 + (n - 1) * d);

  const maxAbs = Math.max(...terms.map((t) => Math.abs(t)), 1);
  const barWidth = 26;

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <p className="text-sm text-muted-foreground">
        Adjust the first term a\u2081 and common difference d, then watch the sequence, a chosen
        term, and the running sum update live.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          First term a\u2081: <strong>{a1}</strong>
          <input
            type="range"
            min={-10}
            max={20}
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
          Common difference d: <strong>{d}</strong>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={d}
            aria-label="Common difference"
            onChange={(e) => {
              setD(Number(e.target.value));
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
            max={10}
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
          aria-label={`Bar chart of the first 10 terms of the arithmetic sequence starting at ${a1} with common difference ${d}.`}
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
                  {term}
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
            nth term (a\u2099 = a\u2081 + (n\u22121)d)
          </p>
          <p className="text-lg font-bold">
            a\u2099 = {a1} + ({n}\u22121)({d}) = {nthTerm}
          </p>
        </div>
        <div className="rounded-md border p-3">
          <p className="text-xs text-muted-foreground">
            Sum of first n terms (S\u2099 = n/2 \u00d7 (2a\u2081 + (n\u22121)d))
          </p>
          <p className="text-lg font-bold">S\u2099 = {round2(sumToN)}</p>
        </div>
      </div>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
