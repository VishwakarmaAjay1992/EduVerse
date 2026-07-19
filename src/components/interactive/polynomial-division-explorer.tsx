"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

/** Divides polynomial (coeffs, highest degree first) by (x − root) using synthetic division. */
function syntheticDivide(
  coeffs: number[],
  root: number
): { steps: number[][]; quotient: number[]; remainder: number } {
  const result: number[] = [coeffs[0]!];
  const rows: number[][] = [[coeffs[0]!]];
  for (let i = 1; i < coeffs.length; i++) {
    const multiplied = result[result.length - 1]! * root;
    const next = coeffs[i]! + multiplied;
    result.push(next);
    rows.push([multiplied, next]);
  }
  const remainder = result[result.length - 1]!;
  const quotient = result.slice(0, -1);
  return { steps: rows, quotient, remainder };
}

function polyToString(coeffs: number[], varName = "x"): string {
  const degree = coeffs.length - 1;
  const parts: string[] = [];
  coeffs.forEach((c, i) => {
    if (c === 0) return;
    const power = degree - i;
    const abs = Math.abs(c);
    const sign = c < 0 ? "\u2212" : parts.length === 0 ? "" : "+";
    const varPart = power === 0 ? "" : power === 1 ? varName : `${varName}\u00b2`;
    const coeffPart = abs === 1 && power !== 0 ? "" : `${abs}`;
    parts.push(`${sign} ${coeffPart}${varPart}`.trim());
  });
  return parts.join(" ").replace(/^\+ /, "");
}

function evalPoly(coeffs: number[], x: number): number {
  return coeffs.reduce((acc, c) => acc * x + c, 0);
}

interface DivPreset {
  id: string;
  label: string;
  coeffs: number[]; // dividend, highest degree first
  root: number; // divisor is (x - root)
}

const PRESETS: DivPreset[] = [
  { id: "d1", label: "(x\u00b2 + 5x + 6) \u00f7 (x + 2)", coeffs: [1, 5, 6], root: -2 },
  { id: "d2", label: "(2x\u00b2 + 3x \u2212 2) \u00f7 (x + 2)", coeffs: [2, 3, -2], root: -2 },
  {
    id: "d3",
    label: "(x\u00b3 \u2212 4x\u00b2 + 5x \u2212 2) \u00f7 (x \u2212 1)",
    coeffs: [1, -4, 5, -2],
    root: 1,
  },
  {
    id: "d4",
    label: "(x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6) \u00f7 (x \u2212 2)",
    coeffs: [1, 2, -5, -6],
    root: 2,
  },
];

export function PolynomialDivisionExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("d1");
  const [revealed, setRevealed] = useState(1);
  const [tab, setTab] = useState<"synthetic" | "remainder">("synthetic");

  const preset = PRESETS.find((p) => p.id === presetId)!;
  const { steps, quotient, remainder } = syntheticDivide(preset.coeffs, preset.root);
  const evaluated = evalPoly(preset.coeffs, preset.root);

  function record() {
    markStep(lessonId, "polynomialDivisionExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setRevealed(1);
    record();
  }

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <label className="block text-sm font-medium">
        Choose a division
        <select
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Division method">
        <button
          type="button"
          onClick={() => {
            setTab("synthetic");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            tab === "synthetic" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Synthetic division
        </button>
        <button
          type="button"
          onClick={() => {
            setTab("remainder");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium",
            tab === "remainder" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Remainder theorem check
        </button>
      </div>

      {tab === "synthetic" && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Synthetic division divides by x − r using only the coefficients. Here r = {preset.root}.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-center font-mono text-sm">
              <tbody>
                <tr>
                  <td className="w-10 border-r p-2 font-bold">{preset.root}</td>
                  {preset.coeffs.map((c, i) => (
                    <td key={i} className="border p-2">
                      {c}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-r p-2" />
                  {preset.coeffs.map((_c, i) => (
                    <td
                      key={i}
                      className={cn(
                        "border p-2 text-muted-foreground",
                        i > revealed && "opacity-20"
                      )}
                    >
                      {i === 0 ? "" : (steps[i]?.[0] ?? "")}
                    </td>
                  ))}
                </tr>
                <tr className="font-semibold">
                  <td className="border-r p-2" />
                  {preset.coeffs.map((_c, i) => (
                    <td key={i} className={cn("border p-2", i > revealed && "opacity-20")}>
                      {steps[i]?.[i === 0 ? 0 : 1] ?? steps[i]?.[0]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {revealed < preset.coeffs.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  setRevealed((r) => r + 1);
                  record();
                }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Bring down next column <ArrowRight className="size-4" />
              </button>
            ) : (
              <div className="rounded-md border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="mr-2 inline size-4" />
                Quotient: {polyToString(quotient)}, remainder {remainder}
              </div>
            )}
            <button
              type="button"
              onClick={() => selectPreset(presetId)}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <RefreshCcw className="size-4" /> Reset
            </button>
          </div>
        </div>
      )}

      {tab === "remainder" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            The remainder theorem says dividing a polynomial p(x) by (x − r) leaves a remainder
            equal to p(r) — no division required.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Remainder from division</p>
              <p className="text-lg font-bold">{remainder}</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">p({preset.root}) evaluated directly</p>
              <p className="text-lg font-bold">{evaluated}</p>
            </div>
          </div>
          <p
            className={cn(
              "rounded-md border p-3 text-sm font-medium",
              remainder === evaluated
                ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                : "border-destructive/40 bg-destructive/5 text-destructive"
            )}
          >
            {remainder === evaluated
              ? `They match — confirming the remainder theorem. ${remainder === 0 ? `Since the remainder is 0, (x − ${preset.root}) is a factor of the polynomial (the factor theorem).` : ""}`
              : "These should always match — this would indicate a calculation error."}
          </p>
        </div>
      )}
    </div>
  );
}
