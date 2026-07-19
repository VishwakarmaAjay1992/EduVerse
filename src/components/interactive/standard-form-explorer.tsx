"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

/**
 * Interactive laboratory for standard form (scientific notation): a
 * powers-of-ten slider that moves the decimal point, plus a converter that
 * shows the ordinary form of a × 10^n live.
 */
export function StandardFormExplorer({ lessonId }: { lessonId: string }) {
  const [mantissa, setMantissa] = useState(3.6);
  const [exponent, setExponent] = useState(4);

  function touched() {
    markStep(lessonId, "standardFormExplorer");
  }

  const value = mantissa * Math.pow(10, exponent);
  const ordinary = formatOrdinary(mantissa, exponent);
  const direction =
    exponent > 0
      ? `the decimal point moves ${exponent} place${exponent === 1 ? "" : "s"} to the right`
      : exponent < 0
        ? `the decimal point moves ${Math.abs(exponent)} place${Math.abs(exponent) === 1 ? "" : "s"} to the left`
        : "the decimal point does not move";

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Powers-of-ten laboratory</h4>
          <p className="text-sm text-muted-foreground">
            Build a number of the form a × 10ⁿ, where a is at least 1 and less than 10, then watch
            where the decimal point lands in the ordinary number.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Mantissa a: <strong>{mantissa.toFixed(1)}</strong>
            <input
              className="mt-2 w-full"
              type="range"
              min={1}
              max={9.9}
              step={0.1}
              value={mantissa}
              aria-label="Mantissa a between 1 and 9.9"
              onChange={(e) => {
                setMantissa(Number(e.target.value));
                touched();
              }}
            />
          </label>
          <label className="block text-sm">
            Exponent n: <strong>{exponent}</strong>
            <input
              className="mt-2 w-full"
              type="range"
              min={-6}
              max={9}
              step={1}
              value={exponent}
              aria-label="Exponent n between minus 6 and 9"
              onChange={(e) => {
                setExponent(Number(e.target.value));
                touched();
              }}
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Result label="Standard form" value={`${mantissa.toFixed(1)} × 10^${exponent}`} />
          <Result label="Ordinary number" value={ordinary} />
          <Result label="Size" value={exponent >= 0 ? "Large (n ≥ 0)" : "Small (n < 0)"} />
        </div>
        <p className="rounded-md bg-muted/40 p-3 text-sm text-muted-foreground">
          Multiplying by 10^{exponent} means {direction}. As a decimal, the value is approximately{" "}
          <strong className="text-foreground">{value.toExponential(1)}</strong> in exponential
          notation.
        </p>
        <DecimalShift mantissa={mantissa} exponent={exponent} />
      </section>
    </div>
  );
}

/** Visual strip showing digits and the moving decimal point. */
function DecimalShift({ mantissa, exponent }: { mantissa: number; exponent: number }) {
  const ordinary = formatOrdinary(mantissa, exponent);
  const chars = ordinary.split("");
  return (
    <div
      className="flex flex-wrap items-end gap-1 rounded-lg border bg-muted/30 p-3"
      role="img"
      aria-label={`The number ${mantissa.toFixed(1)} times ten to the power ${exponent} written out as ${ordinary}.`}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className={
            c === "."
              ? "rounded bg-primary px-1.5 py-1 font-mono text-sm font-bold text-primary-foreground"
              : c === ","
                ? "px-0.5 font-mono text-sm text-muted-foreground"
                : "rounded border bg-background px-1.5 py-1 font-mono text-sm"
          }
        >
          {c}
        </span>
      ))}
      <span className="ml-2 text-xs text-muted-foreground">decimal point highlighted</span>
    </div>
  );
}

/**
 * Write a × 10^n as an exact ordinary decimal string with thousands
 * separators. The mantissa always has exactly one decimal place, so the
 * value equals (10a) × 10^(n-1) with 10a a whole number.
 */
function formatOrdinary(mantissa: number, exponent: number): string {
  const scaled = Math.round(mantissa * 10); // whole number between 10 and 99
  const e = exponent - 1; // value = scaled × 10^e
  const s = String(scaled);
  if (e >= 0) return withCommas(s + "0".repeat(e));
  const shift = -e; // digits after the decimal point
  if (shift < s.length) {
    const head = s.slice(0, s.length - shift);
    const tail = s.slice(s.length - shift).replace(/0+$/, "");
    return tail ? `${withCommas(head)}.${tail}` : withCommas(head);
  }
  const frac = ("0".repeat(shift - s.length) + s).replace(/0+$/, "");
  return `0.${frac}`;
}

function withCommas(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
