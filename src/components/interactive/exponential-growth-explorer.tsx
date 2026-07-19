"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function ExponentialGrowthExplorer({ lessonId }: { lessonId: string }) {
  const [a, setA] = useState(100);
  const [b, setB] = useState(1.2);
  const [t, setT] = useState(5);
  const [compoundMode, setCompoundMode] = useState(false);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [timesPerYear, setTimesPerYear] = useState(1);
  const [principal, setPrincipal] = useState(1000);

  function record() {
    markStep(lessonId, "exponentialGrowthExplorer");
  }

  const value = a * Math.pow(b, t);
  const isGrowth = b > 1;

  const compoundValue = principal * Math.pow(1 + rate / 100 / timesPerYear, timesPerYear * years);
  const continuousValue = principal * Math.exp((rate / 100) * years);

  // ---- graph ----
  const range = 8;
  const W = 300;
  const H = 220;
  const pad = 24;
  const maxY = Math.max(a * Math.pow(b, range), a) * 1.1;
  const scaleX = (x: number) => pad + (x / range) * (W - 2 * pad);
  const scaleY = (y: number) => H - pad - (y / maxY) * (H - 2 * pad);

  const points: string[] = [];
  for (let px = 0; px <= range; px += 0.2) {
    const py = a * Math.pow(b, px);
    if (py <= maxY * 1.2) points.push(`${scaleX(px)},${scaleY(py)}`);
  }

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">
          Exponential function grapher: y = a &middot; b<sup>t</sup>
        </h4>
        <p className="text-sm text-muted-foreground">
          Adjust a (starting value) and b (growth factor) to see growth (b &gt; 1) or decay (0 &lt;
          b &lt; 1).
        </p>
        <div className="grid gap-6 sm:grid-cols-[1fr_220px]">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mx-auto h-auto w-full max-w-sm rounded-lg border bg-muted/20"
            role="img"
            aria-label={`Graph of y = ${a} times ${b} to the power t, ${isGrowth ? "showing exponential growth" : "showing exponential decay"}.`}
          >
            <line
              x1={pad}
              y1={H - pad}
              x2={W - pad}
              y2={H - pad}
              className="stroke-muted-foreground"
              strokeWidth="1.5"
            />
            <line
              x1={pad}
              y1={pad}
              x2={pad}
              y2={H - pad}
              className="stroke-muted-foreground"
              strokeWidth="1.5"
            />
            {points.length > 1 && (
              <polyline
                points={points.join(" ")}
                className="fill-none stroke-primary"
                strokeWidth="2.5"
              />
            )}
            <circle
              cx={scaleX(t)}
              cy={scaleY(value)}
              r="5"
              className="fill-rose-500 stroke-background"
              strokeWidth="1.5"
            />
          </svg>
          <div className="space-y-3">
            <label className="block text-sm">
              a (start value): <strong>{a}</strong>
              <input
                type="range"
                min={10}
                max={200}
                step={10}
                value={a}
                aria-label="a"
                onChange={(e) => {
                  setA(Number(e.target.value));
                  record();
                }}
                className="mt-2 w-full"
              />
            </label>
            <label className="block text-sm">
              b (growth factor): <strong>{b.toFixed(2)}</strong>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.1}
                value={b}
                aria-label="b"
                onChange={(e) => {
                  setB(Number(e.target.value));
                  record();
                }}
                className="mt-2 w-full"
              />
            </label>
            <label className="block text-sm">
              t (time): <strong>{t}</strong>
              <input
                type="range"
                min={0}
                max={8}
                step={0.5}
                value={t}
                aria-label="t"
                onChange={(e) => {
                  setT(Number(e.target.value));
                  record();
                }}
                className="mt-2 w-full"
              />
            </label>
            <div className="rounded-md border p-3 text-sm">
              <p className="text-xs text-muted-foreground">Value at t = {t}</p>
              <p className="font-semibold">{round2(value)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {isGrowth ? "Exponential growth (b > 1)" : "Exponential decay (0 < b < 1)"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">Compound interest calculator</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            Principal (currency): <strong>{principal}</strong>
            <input
              type="range"
              min={100}
              max={5000}
              step={100}
              value={principal}
              aria-label="Principal"
              onChange={(e) => {
                setPrincipal(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            Annual rate (%): <strong>{rate}</strong>
            <input
              type="range"
              min={1}
              max={15}
              step={1}
              value={rate}
              aria-label="Annual rate"
              onChange={(e) => {
                setRate(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            Years: <strong>{years}</strong>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              aria-label="Years"
              onChange={(e) => {
                setYears(Number(e.target.value));
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
          <label className="block text-sm">
            Compounds per year: <strong>{timesPerYear}</strong>
            <input
              type="range"
              min={1}
              max={365}
              step={1}
              value={timesPerYear}
              aria-label="Compounds per year"
              onChange={(e) => {
                setTimesPerYear(Number(e.target.value));
                setCompoundMode(true);
                record();
              }}
              className="mt-2 w-full"
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border p-3">
            <p className="text-xs text-muted-foreground">Compound value (n times/year)</p>
            <p className="text-lg font-bold">{round2(compoundValue)}</p>
          </div>
          <div className="rounded-md border p-3">
            <p className="text-xs text-muted-foreground">Continuous compounding (using e)</p>
            <p className="text-lg font-bold">{round2(continuousValue)}</p>
          </div>
        </div>
        {compoundMode && (
          <p className="text-xs text-muted-foreground">
            As the number of compounds per year grows very large, the compound value approaches the
            continuous compounding value \u2014 this is why the number e (\u2248 2.71828) appears
            naturally in continuous growth.
          </p>
        )}
      </section>
    </div>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
