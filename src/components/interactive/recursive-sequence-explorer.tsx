"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

export function RecursiveSequenceExplorer({ lessonId }: { lessonId: string }) {
  const [count, setCount] = useState(10);
  const [sigmaN, setSigmaN] = useState(5);
  const [sigmaFormula, setSigmaFormula] = useState<"n" | "n2" | "2n">("n");

  function record() {
    markStep(lessonId, "recursiveSequenceExplorer");
  }

  const fib: number[] = [1, 1];
  for (let i = 2; i < count; i++) fib.push(fib[i - 1]! + fib[i - 2]!);

  const ratios = fib.slice(1).map((f, i) => f / fib[i]!);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  function sigmaTerm(k: number): number {
    if (sigmaFormula === "n") return k;
    if (sigmaFormula === "n2") return k * k;
    return 2 * k;
  }
  const sigmaTerms = Array.from({ length: sigmaN }, (_, i) => sigmaTerm(i + 1));
  const sigmaSum = sigmaTerms.reduce((a, b) => a + b, 0);
  const sigmaLabel = sigmaFormula === "n" ? "k" : sigmaFormula === "n2" ? "k\u00b2" : "2k";

  return (
    <div className="space-y-8 rounded-xl border bg-card p-4 sm:p-6">
      <section className="space-y-4">
        <h4 className="font-semibold">Fibonacci sequence and the golden ratio</h4>
        <p className="text-sm text-muted-foreground">
          Each Fibonacci term is the sum of the two before it: F\u2099 = F\u2099\u208b\u2081 +
          F\u2099\u208b\u2082, starting from F\u2081=1, F\u2082=1. As n grows, the ratio of
          consecutive terms approaches the golden ratio, &phi; &asymp; 1.618.
        </p>
        <label className="block text-sm">
          Number of terms: <strong>{count}</strong>
          <input
            type="range"
            min={3}
            max={15}
            step={1}
            value={count}
            aria-label="Number of terms"
            onChange={(e) => {
              setCount(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full max-w-xs"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {fib.map((f, i) => (
            <div
              key={i}
              className="rounded-md border bg-muted/30 px-2.5 py-1.5 text-center font-mono text-sm"
            >
              {f}
            </div>
          ))}
        </div>
        <div className="rounded-md border p-3">
          <p className="text-xs text-muted-foreground">
            Ratio of the last two terms (F\u2099 / F\u2099\u208b\u2081)
          </p>
          <p className="text-lg font-bold">
            {ratios.length > 0 ? ratios[ratios.length - 1]!.toFixed(5) : "\u2014"} (golden ratio
            \u2248 {goldenRatio.toFixed(5)})
          </p>
        </div>
      </section>

      <section className="space-y-4 border-t pt-6">
        <h4 className="font-semibold">Sigma notation calculator</h4>
        <p className="text-sm text-muted-foreground">
          Sigma notation is shorthand for a sum. Choose a formula for each term and a number of
          terms to see the sum built up.
        </p>
        <div className="flex flex-wrap gap-2">
          {(["n", "n2", "2n"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setSigmaFormula(f);
                record();
              }}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium",
                sigmaFormula === f ? "border-primary bg-primary/10" : "hover:bg-muted"
              )}
            >
              term = {f === "n" ? "k" : f === "n2" ? "k\u00b2" : "2k"}
            </button>
          ))}
        </div>
        <label className="block text-sm">
          Number of terms (n): <strong>{sigmaN}</strong>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={sigmaN}
            aria-label="Number of terms"
            onChange={(e) => {
              setSigmaN(Number(e.target.value));
              record();
            }}
            className="mt-2 w-full max-w-xs"
          />
        </label>
        <div className="rounded-lg border bg-muted/30 p-4 text-center">
          <p className="text-lg font-bold text-primary">
            {sigmaTerms.join(" + ")} = {sigmaSum}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            This equals the sum, for k = 1 to {sigmaN}, of the term {sigmaLabel}.
          </p>
        </div>
      </section>
    </div>
  );
}
