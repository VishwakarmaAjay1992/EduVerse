"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

function signName(value: number): string {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "zero";
}

function displayNumber(value: number): string {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

export function IntegerRulesExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"rules" | "powers">("rules");
  const [operation, setOperation] = useState<"multiply" | "divide">("multiply");
  const [a, setA] = useState(-6);
  const [b, setB] = useState(3);
  const [base, setBase] = useState(3);
  const [exponent, setExponent] = useState(2);
  const [parentheses, setParentheses] = useState(true);

  const safeB = b === 0 ? 1 : b;
  const result = operation === "multiply" ? a * b : a / safeB;
  const sameSign = signName(a) === signName(safeB);
  const powerValue = parentheses ? (-base) ** exponent : -(base ** exponent);

  const repeated = useMemo(() => {
    if (operation !== "multiply" || Math.abs(b) > 7 || b === 0) return null;
    const count = Math.abs(b);
    const term = b > 0 ? a : -a;
    return Array.from({ length: count }, () => `(${term})`).join(" + ");
  }, [a, b, operation]);

  function record() {
    markStep(lessonId, "integerRulesExplorer");
  }

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Integer rules explorer modes"
      >
        <TabButton
          active={tab === "rules"}
          onClick={() => {
            setTab("rules");
            record();
          }}
        >
          Multiply and divide
        </TabButton>
        <TabButton
          active={tab === "powers"}
          onClick={() => {
            setTab("powers");
            record();
          }}
        >
          Powers and parentheses
        </TabButton>
      </div>

      {tab === "rules" ? (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm font-medium">
              First integer: <span className="font-bold">{a}</span>
              <input
                type="range"
                min={-10}
                max={10}
                value={a}
                onChange={(event) => {
                  setA(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Operation
              <select
                value={operation}
                onChange={(event) => {
                  setOperation(event.target.value as "multiply" | "divide");
                  record();
                }}
                className="w-full rounded-md border bg-background px-3 py-2"
              >
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium">
              Second integer: <span className="font-bold">{b}</span>
              <input
                type="range"
                min={-10}
                max={10}
                value={b}
                onChange={(event) => {
                  setB(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
          </div>

          {operation === "divide" && b === 0 ? (
            <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4">
              <p className="font-medium text-destructive">Division by zero is undefined.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Move the second integer away from zero to calculate a quotient.
              </p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <SignCard number={a} />
              <span className="text-center text-2xl font-bold">
                {operation === "multiply" ? "×" : "÷"}
              </span>
              <SignCard number={safeB} />
              <span className="text-center text-2xl font-bold">=</span>
              <SignCard number={result} result />
            </div>
          )}

          {operation === "divide" && b === 0 ? null : (
            <div className="rounded-lg border bg-muted/30 p-4">
              <p className="text-lg font-semibold">
                {a} {operation === "multiply" ? "×" : "÷"} {safeB} = {displayNumber(result)}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {(operation === "multiply" && (a === 0 || b === 0)) ||
                (operation === "divide" && a === 0)
                  ? "Any integer multiplied by zero equals zero. Zero divided by a non-zero integer also equals zero."
                  : `${sameSign ? "The signs are the same" : "The signs are different"}, so the result is ${sameSign ? "positive" : "negative"}. Then calculate using the absolute values.`}
              </p>
              {repeated && (
                <p className="mt-2 overflow-x-auto rounded bg-background px-3 py-2 text-sm">
                  Repeated-addition view: {repeated} = {a * b}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["+ × + = +", "+ × − = −", "− × + = −", "− × − = +"].map((rule) => (
              <div key={rule} className="rounded-lg border p-3 text-center text-sm font-semibold">
                {rule}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm font-medium">
              Positive size of base: <span className="font-bold">{base}</span>
              <input
                type="range"
                min={2}
                max={6}
                value={base}
                onChange={(event) => {
                  setBase(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Exponent: <span className="font-bold">{exponent}</span>
              <input
                type="range"
                min={1}
                max={6}
                value={exponent}
                onChange={(event) => {
                  setExponent(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="flex items-center gap-3 rounded-lg border p-3 text-sm font-medium">
              <input
                type="checkbox"
                checked={parentheses}
                onChange={(event) => {
                  setParentheses(event.target.checked);
                  record();
                }}
                className="size-4 accent-primary"
              />
              Include the negative sign inside parentheses
            </label>
          </div>

          <div className="rounded-xl border bg-muted/30 p-5 text-center">
            <p className="text-3xl font-bold">
              {parentheses ? `(${-base})^${exponent}` : `−${base}^${exponent}`} = {powerValue}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {parentheses
                ? exponent % 2 === 0
                  ? "The negative base is multiplied an even number of times, so negatives pair up and the answer is positive."
                  : "The negative base is multiplied an odd number of times, leaving one unpaired negative sign, so the answer is negative."
                : "Exponents are evaluated before the leading negative sign. This means the expression is the negative of the positive power."}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">With parentheses</p>
              <p className="mt-1 text-sm text-muted-foreground">$(-3)^2 = (-3)(-3) = 9$</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Without parentheses</p>
              <p className="mt-1 text-sm text-muted-foreground">$-3^2 = -(3^2) = -9$</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setBase(3);
              setExponent(2);
              setParentheses(true);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="size-4" /> Reset example
          </button>
        </div>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active ? "border-primary bg-primary/10" : "hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}

function SignCard({ number, result = false }: { number: number; result?: boolean }) {
  return (
    <div
      className={cn("rounded-lg border p-4 text-center", result && "border-primary bg-primary/5")}
    >
      <Calculator className="mx-auto mb-2 size-5 text-primary" />
      <p className="text-2xl font-bold">{displayNumber(number)}</p>
      <p className="text-xs capitalize text-muted-foreground">{signName(number)}</p>
    </div>
  );
}
