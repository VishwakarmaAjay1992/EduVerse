"use client";

import { useMemo, useState } from "react";
import { Boxes, CheckCircle2, Combine, RefreshCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

const EXPANSION_PRESETS = [
  { factor: 2, variableCoefficient: 1, constant: 3, variable: "x" },
  { factor: 3, variableCoefficient: 2, constant: -4, variable: "x" },
  { factor: -2, variableCoefficient: 3, constant: 5, variable: "y" },
  { factor: 4, variableCoefficient: -1, constant: -2, variable: "a" },
];

const FACTOR_PRESETS = [
  {
    expression: "6x + 9",
    options: ["3(2x + 3)", "6(x + 9)", "9(6x + 1)"],
    answer: 0,
    hcf: 3,
    explanation: "The highest common factor of 6 and 9 is 3. Dividing each term by 3 gives 2x + 3.",
  },
  {
    expression: "8y − 12",
    options: ["2(4y − 12)", "4(2y − 3)", "8(y − 12)"],
    answer: 1,
    hcf: 4,
    explanation: "The HCF is 4: 8y ÷ 4 = 2y and −12 ÷ 4 = −3.",
  },
  {
    expression: "15a + 10",
    options: ["5(3a + 2)", "10(15a + 1)", "5(3a + 10)"],
    answer: 0,
    hcf: 5,
    explanation: "Both terms share 5. Taking it outside leaves 3a + 2.",
  },
];

function signedTerm(coefficient: number, variable: string, first = false): string {
  if (coefficient === 0) return "";
  const sign = coefficient < 0 ? "−" : first ? "" : "+";
  const magnitude = Math.abs(coefficient);
  const coeff = magnitude === 1 ? "" : String(magnitude);
  return `${sign}${first ? "" : " "}${coeff}${variable}`;
}

function signedConstant(value: number, first = false): string {
  if (value === 0) return "";
  const sign = value < 0 ? "−" : first ? "" : "+";
  return `${sign}${first ? "" : " "}${Math.abs(value)}`;
}

function expressionText(a: number, b: number, c: number, d: number): string {
  const parts = [
    signedTerm(a, "x", true),
    signedTerm(b, "x", a === 0),
    signedConstant(c, a === 0 && b === 0),
    signedConstant(d, a === 0 && b === 0 && c === 0),
  ].filter(Boolean);
  return parts.join("") || "0";
}

function simplifiedText(coefficient: number, constant: number): string {
  const variablePart = signedTerm(coefficient, "x", true);
  const constantPart = signedConstant(constant, coefficient === 0);
  return `${variablePart}${constantPart}` || "0";
}

export function SimplifyingExpressionsExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"combine" | "expand" | "factor">("combine");
  const [a, setA] = useState(4);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(3);
  const [d, setD] = useState(5);
  const [expansionIndex, setExpansionIndex] = useState(0);
  const [factorIndex, setFactorIndex] = useState(0);
  const [factorChoice, setFactorChoice] = useState<number | null>(null);

  const combinedCoefficient = a + b;
  const combinedConstant = c + d;
  const expansion = EXPANSION_PRESETS[expansionIndex]!;
  const factor = FACTOR_PRESETS[factorIndex]!;
  const expandedVariableCoefficient = expansion.factor * expansion.variableCoefficient;
  const expandedConstant = expansion.factor * expansion.constant;
  const expanded = useMemo(
    () =>
      `${signedTerm(expandedVariableCoefficient, expansion.variable, true)}${signedConstant(
        expandedConstant,
        expandedVariableCoefficient === 0
      )}`,
    [expandedConstant, expandedVariableCoefficient, expansion.variable]
  );
  const combineControls: { label: string; value: number; setValue: (value: number) => void }[] = [
    { label: "First x coefficient", value: a, setValue: setA },
    { label: "Second x coefficient", value: b, setValue: setB },
    { label: "First constant", value: c, setValue: setC },
    { label: "Second constant", value: d, setValue: setD },
  ];

  function record() {
    markStep(lessonId, "simplifyingExpressionsExplorer");
  }

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Expression simplification activities"
      >
        {[
          ["combine", "Collect like terms"],
          ["expand", "Expand brackets"],
          ["factor", "Factorise"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => {
              setTab(value as typeof tab);
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              tab === value ? "border-primary bg-primary/10" : "hover:bg-muted"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "combine" && (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {combineControls.map(({ label, value, setValue }) => (
              <label key={label} className="space-y-2 text-sm font-medium">
                {label}: <span className="font-bold">{String(value)}</span>
                <input
                  type="range"
                  min={-6}
                  max={8}
                  value={Number(value)}
                  onChange={(event) => {
                    setValue(Number(event.target.value));
                    record();
                  }}
                  className="w-full accent-primary"
                />
              </label>
            ))}
          </div>

          <div className="rounded-lg border bg-muted/30 p-5 text-center">
            <p className="text-sm text-muted-foreground">Original expression</p>
            <p className="mt-2 text-2xl font-bold">{expressionText(a, b, c, d)}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-semibold">
                <Combine className="size-4 text-primary" /> Combine x terms
              </p>
              <p className="mt-2 text-lg">
                ({a})x + ({b})x = ({a} {b >= 0 ? "+" : "−"} {Math.abs(b)})x = {combinedCoefficient}x
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-semibold">
                <Combine className="size-4 text-primary" /> Combine constants
              </p>
              <p className="mt-2 text-lg">
                {c} {d >= 0 ? "+" : "−"} {Math.abs(d)} = {combinedConstant}
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">Simplified expression</p>
            <p className="mt-1 text-2xl font-bold text-primary">
              {simplifiedText(combinedCoefficient, combinedConstant)}
            </p>
          </div>
        </div>
      )}

      {tab === "expand" && (
        <div className="space-y-5">
          <label className="block space-y-2 text-sm font-medium">
            Example
            <select
              value={expansionIndex}
              onChange={(event) => {
                setExpansionIndex(Number(event.target.value));
                record();
              }}
              className="w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
            >
              {EXPANSION_PRESETS.map((item, index) => (
                <option key={index} value={index}>
                  {item.factor}({signedTerm(item.variableCoefficient, item.variable, true)}
                  {signedConstant(item.constant)})
                </option>
              ))}
            </select>
          </label>

          <svg
            viewBox="0 0 760 240"
            className="h-auto w-full"
            role="img"
            aria-label="Area model showing the outside factor multiplying both terms inside a bracket"
          >
            <rect
              x="165"
              y="42"
              width="410"
              height="145"
              rx="10"
              className="fill-muted/60 stroke-border"
              strokeWidth="2"
            />
            <line x1="395" y1="42" x2="395" y2="187" className="stroke-border" strokeWidth="2" />
            <rect
              x="165"
              y="42"
              width="230"
              height="145"
              rx="10"
              className="fill-primary/10 stroke-primary"
              strokeWidth="2"
            />
            <text x="280" y="120" textAnchor="middle" className="fill-primary text-xl font-bold">
              {expansion.factor} ×{" "}
              {signedTerm(expansion.variableCoefficient, expansion.variable, true)}
            </text>
            <text x="485" y="120" textAnchor="middle" className="fill-foreground text-xl font-bold">
              {expansion.factor} × ({expansion.constant})
            </text>
            <text x="370" y="222" textAnchor="middle" className="fill-muted-foreground text-sm">
              The outside factor multiplies every term inside the bracket.
            </text>
            <text x="112" y="118" textAnchor="middle" className="fill-foreground text-xl font-bold">
              {expansion.factor}
            </text>
            <text
              x="280"
              y="28"
              textAnchor="middle"
              className="fill-foreground text-base font-semibold"
            >
              {signedTerm(expansion.variableCoefficient, expansion.variable, true)}
            </text>
            <text
              x="485"
              y="28"
              textAnchor="middle"
              className="fill-foreground text-base font-semibold"
            >
              {expansion.constant >= 0
                ? `+ ${expansion.constant}`
                : `− ${Math.abs(expansion.constant)}`}
            </text>
          </svg>

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="flex items-center gap-2 font-semibold">
              <Boxes className="size-5 text-primary" /> Distributive calculation
            </p>
            <p className="mt-2 leading-7">
              {expansion.factor}(
              {signedTerm(expansion.variableCoefficient, expansion.variable, true)}
              {signedConstant(expansion.constant)}) = ({expansion.factor} ×{" "}
              {signedTerm(expansion.variableCoefficient, expansion.variable, true)}) + (
              {expansion.factor} × {expansion.constant}) = <strong>{expanded}</strong>
            </p>
          </div>
        </div>
      )}

      {tab === "factor" && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-5 text-center">
            <p className="text-sm text-muted-foreground">Factorise completely</p>
            <p className="mt-2 text-3xl font-bold">{factor.expression}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {factor.options.map((option, index) => {
              const answered = factorChoice !== null;
              const correct = index === factor.answer;
              return (
                <button
                  key={option}
                  type="button"
                  disabled={answered}
                  onClick={() => {
                    setFactorChoice(index);
                    record();
                  }}
                  className={cn(
                    "rounded-lg border p-3 text-left font-medium",
                    !answered && "hover:border-primary/50",
                    answered && correct && "border-emerald-500 bg-emerald-500/10",
                    factorChoice === index && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {factorChoice !== null && (
            <div className="rounded-lg border p-4 text-sm">
              <p className="flex items-center gap-2 font-semibold">
                {factorChoice === factor.answer ? (
                  <CheckCircle2 className="size-4 text-emerald-600" />
                ) : (
                  <XCircle className="size-4 text-destructive" />
                )}
                Highest common factor: {factor.hcf}
              </p>
              <p className="mt-1 text-muted-foreground">{factor.explanation}</p>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setFactorIndex((current) => (current + 1) % FACTOR_PRESETS.length);
              setFactorChoice(null);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <RefreshCcw className="size-4" /> New expression
          </button>
        </div>
      )}
    </div>
  );
}
