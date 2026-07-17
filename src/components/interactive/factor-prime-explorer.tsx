"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

export type FactorPrimeExplorerMode = "factors" | "primes" | "hcfLcm";

function factorsOf(value: number): number[] {
  const factors: number[] = [];
  for (let candidate = 1; candidate <= Math.sqrt(value); candidate += 1) {
    if (value % candidate === 0) {
      factors.push(candidate);
      if (candidate !== value / candidate) factors.push(value / candidate);
    }
  }
  return factors.sort((a, b) => a - b);
}

function primeFactorization(value: number): Array<{ prime: number; exponent: number }> {
  let remaining = value;
  const result: Array<{ prime: number; exponent: number }> = [];
  for (let divisor = 2; divisor * divisor <= remaining; divisor += 1) {
    if (remaining % divisor !== 0) continue;
    let exponent = 0;
    while (remaining % divisor === 0) {
      remaining /= divisor;
      exponent += 1;
    }
    result.push({ prime: divisor, exponent });
  }
  if (remaining > 1) result.push({ prime: remaining, exponent: 1 });
  return result;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

function isPrime(value: number): boolean {
  if (value < 2) return false;
  for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
    if (value % divisor === 0) return false;
  }
  return true;
}

function factorString(value: number): string {
  return primeFactorization(value)
    .map(({ prime, exponent }) => (exponent === 1 ? `${prime}` : `${prime}^${exponent}`))
    .join(" × ");
}

const DIVISIBILITY_RULES = [
  { divisor: 2, rule: "The last digit is even: 0, 2, 4, 6 or 8." },
  { divisor: 3, rule: "The sum of the digits is divisible by 3." },
  { divisor: 4, rule: "The number formed by the last two digits is divisible by 4." },
  { divisor: 5, rule: "The last digit is 0 or 5." },
  { divisor: 6, rule: "The number is divisible by both 2 and 3." },
  { divisor: 8, rule: "The number formed by the last three digits is divisible by 8." },
  { divisor: 9, rule: "The sum of the digits is divisible by 9." },
  { divisor: 10, rule: "The last digit is 0." },
  { divisor: 11, rule: "The alternating digit sum is a multiple of 11, including 0." },
  { divisor: 12, rule: "The number is divisible by both 3 and 4." },
];

function FactorPairs({ value }: { value: number }) {
  const pairs = factorsOf(value)
    .filter((factor) => factor <= Math.sqrt(value))
    .map((factor) => [factor, value / factor] as const);

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {pairs.map(([left, right]) => (
        <div key={left} className="rounded-lg border bg-background p-3 text-center text-sm">
          <span className="font-semibold">{left}</span> ×{" "}
          <span className="font-semibold">{right}</span>
          <span className="text-muted-foreground"> = {value}</span>
        </div>
      ))}
    </div>
  );
}

function FactorsMode({ lessonId }: { lessonId: string }) {
  const [value, setValue] = useState(72);
  const factors = useMemo(() => factorsOf(value), [value]);
  const multiples = useMemo(
    () => Array.from({ length: 12 }, (_, index) => value * (index + 1)),
    [value]
  );

  function update(next: number) {
    setValue(next);
    markStep(lessonId, "factorPrimeExplorer");
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_180px] sm:items-end">
        <label className="space-y-2 text-sm font-medium">
          Explore the number <span className="font-bold">{value}</span>
          <input
            type="range"
            min={2}
            max={150}
            value={value}
            onChange={(event) => update(Number(event.target.value))}
            className="w-full accent-primary"
            aria-label="Number to examine for factors and divisibility"
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          Enter a number
          <input
            type="number"
            min={2}
            max={99999}
            value={value}
            onChange={(event) =>
              update(Math.max(2, Math.min(99999, Number(event.target.value) || 2)))
            }
            className="w-full rounded-md border bg-background px-3 py-2"
          />
        </label>
      </div>

      <section className="space-y-3" aria-labelledby="factor-pairs-heading">
        <h4 id="factor-pairs-heading" className="font-semibold">
          Factor pairs
        </h4>
        <FactorPairs value={value} />
        <p className="text-sm text-muted-foreground">
          Complete factor list:{" "}
          <span className="font-medium text-foreground">{factors.join(", ")}</span>
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="multiples-heading">
        <h4 id="multiples-heading" className="font-semibold">
          First twelve positive multiples
        </h4>
        <div className="flex flex-wrap gap-2">
          {multiples.map((multiple, index) => (
            <span key={multiple} className="rounded-full border bg-muted/40 px-3 py-1 text-sm">
              {value} × {index + 1} = <strong>{multiple}</strong>
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="rules-heading">
        <h4 id="rules-heading" className="font-semibold">
          Divisibility-rule dashboard
        </h4>
        <div className="grid gap-3 md:grid-cols-2">
          {DIVISIBILITY_RULES.map(({ divisor, rule }) => {
            const passes = value % divisor === 0;
            return (
              <div
                key={divisor}
                className={cn(
                  "rounded-lg border p-4",
                  passes ? "border-emerald-500/40 bg-emerald-500/5" : "bg-muted/20"
                )}
              >
                <p className="flex items-center gap-2 font-semibold">
                  {passes ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
                  {passes ? "Divisible" : "Not divisible"} by {divisor}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{rule}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {value} ÷ {divisor}{" "}
                  {passes ? `= ${value / divisor}` : "does not give a whole number"}.
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function PrimesMode({ lessonId }: { lessonId: string }) {
  const [limit, setLimit] = useState(50);
  const [stage, setStage] = useState(7);
  const [value, setValue] = useState(84);
  const stagePrimes = [2, 3, 5, 7].filter((prime) => prime <= stage);
  const requiredSievePrime = [2, 3, 5, 7].filter((prime) => prime <= Math.sqrt(limit)).at(-1) ?? 2;
  const sieveComplete = stage >= requiredSievePrime;
  const cells = Array.from({ length: limit - 1 }, (_, index) => index + 2);
  const factorization = useMemo(() => primeFactorization(value), [value]);

  function record() {
    markStep(lessonId, "factorPrimeExplorer");
  }

  return (
    <div className="space-y-6">
      <section className="space-y-4" aria-labelledby="sieve-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h4 id="sieve-heading" className="font-semibold">
              Sieve of Eratosthenes
            </h4>
            <p className="text-sm text-muted-foreground">
              Cross out multiples of each selected prime. The uncrossed numbers are prime.
            </p>
          </div>
          <label className="space-y-1 text-sm font-medium">
            Grid limit
            <select
              value={limit}
              onChange={(event) => {
                setLimit(Number(event.target.value));
                record();
              }}
              className="ml-2 rounded-md border bg-background px-3 py-2"
            >
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Sieve stage">
          {[2, 3, 5, 7].map((prime) => (
            <button
              key={prime}
              type="button"
              onClick={() => {
                setStage(prime);
                record();
              }}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                stage === prime ? "border-primary bg-primary/10" : "hover:bg-muted"
              )}
            >
              Through multiples of {prime}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-7 gap-1 sm:grid-cols-10"
          aria-label={`Numbers from 2 to ${limit}`}
        >
          {cells.map((number) => {
            const crossed = stagePrimes.some((prime) => number !== prime && number % prime === 0);
            const confirmedPrime = isPrime(number) && (sieveComplete || number <= stage * stage);
            return (
              <div
                key={number}
                className={cn(
                  "flex aspect-square items-center justify-center rounded border text-xs font-semibold sm:text-sm",
                  crossed && "bg-muted text-muted-foreground line-through",
                  !crossed && confirmedPrime && "border-emerald-500 bg-emerald-500/10",
                  !crossed && !confirmedPrime && "bg-background"
                )}
                title={crossed ? `${number} is crossed out as a multiple` : `${number} remains`}
              >
                {number}
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          Crossed numbers are known composites. Once every prime at or below √{limit} has been
          processed, every remaining number is prime.
        </p>
      </section>

      <section
        className="space-y-4 rounded-lg border bg-muted/20 p-4"
        aria-labelledby="factorization-heading"
      >
        <div className="grid gap-4 sm:grid-cols-[1fr_150px] sm:items-end">
          <label className="space-y-2 text-sm font-medium">
            Factorize <span className="font-bold">{value}</span>
            <input
              type="range"
              min={2}
              max={240}
              value={value}
              onChange={(event) => {
                setValue(Number(event.target.value));
                record();
              }}
              className="w-full accent-primary"
            />
          </label>
          <input
            type="number"
            min={2}
            max={9999}
            value={value}
            onChange={(event) => {
              setValue(Math.max(2, Math.min(9999, Number(event.target.value) || 2)));
              record();
            }}
            className="rounded-md border bg-background px-3 py-2"
            aria-label="Number to prime factorize"
          />
        </div>
        <h4 id="factorization-heading" className="font-semibold">
          Prime-factor ladder
        </h4>
        <div className="flex flex-wrap items-center gap-2 text-lg">
          <strong>{value}</strong>
          <span>=</span>
          {factorization.map(({ prime, exponent }, index) => (
            <span key={prime} className="contents">
              {index > 0 && <span>×</span>}
              <span className="rounded-md border bg-background px-3 py-2 font-semibold">
                {prime}
                {exponent > 1 ? <sup>{exponent}</sup> : null}
              </span>
            </span>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {factorization.map(({ prime, exponent }) => (
            <div key={prime} className="rounded-md border bg-background p-3 text-sm">
              <strong>{prime}</strong> is used {exponent} {exponent === 1 ? "time" : "times"}.
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {isPrime(value)
            ? `${value} is already prime, so its prime factorization is simply ${value}.`
            : `Check: multiplying ${factorString(value)} gives ${value}.`}
        </p>
      </section>
    </div>
  );
}

function HcfLcmMode({ lessonId }: { lessonId: string }) {
  const [a, setA] = useState(24);
  const [b, setB] = useState(36);
  const aFactors = useMemo(() => factorsOf(a), [a]);
  const bFactors = useMemo(() => factorsOf(b), [b]);
  const commonFactors = aFactors.filter((factor) => bFactors.includes(factor));
  const hcf = gcd(a, b);
  const lcm = (a * b) / hcf;
  const timelineLimit = Math.min(lcm * 2, 240);
  const multiplesA = Array.from(
    { length: Math.floor(timelineLimit / a) },
    (_, index) => a * (index + 1)
  );
  const multiplesB = Array.from(
    { length: Math.floor(timelineLimit / b) },
    (_, index) => b * (index + 1)
  );

  function record() {
    markStep(lessonId, "factorPrimeExplorer");
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "First number", value: a, set: setA },
          { label: "Second number", value: b, set: setB },
        ].map((control) => (
          <label key={control.label} className="space-y-2 text-sm font-medium">
            {control.label}: <span className="font-bold">{control.value}</span>
            <input
              type="range"
              min={2}
              max={72}
              value={control.value}
              onChange={(event) => {
                control.set(Number(event.target.value));
                record();
              }}
              className="w-full accent-primary"
            />
          </label>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">HCF</p>
          <p className="mt-1 text-3xl font-bold">{hcf}</p>
          <p className="text-xs text-muted-foreground">largest shared factor</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">LCM</p>
          <p className="mt-1 text-3xl font-bold">{lcm}</p>
          <p className="text-xs text-muted-foreground">first shared positive multiple</p>
        </div>
        <div className="rounded-lg border p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Product check
          </p>
          <p className="mt-1 font-semibold">
            HCF × LCM = {hcf} × {lcm} = {hcf * lcm}
          </p>
          <p className="text-sm text-muted-foreground">
            {a} × {b} = {a * b}, so the identity holds.
          </p>
        </div>
      </div>

      <section className="space-y-3">
        <h4 className="font-semibold">Factor-list method</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4 text-sm">
            <strong>Factors of {a}</strong>
            <p className="mt-2 text-muted-foreground">{aFactors.join(", ")}</p>
          </div>
          <div className="rounded-lg border p-4 text-sm">
            <strong>Factors of {b}</strong>
            <p className="mt-2 text-muted-foreground">{bFactors.join(", ")}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Common factors:{" "}
          <span className="font-medium text-foreground">{commonFactors.join(", ")}</span>. The
          greatest is <strong>{hcf}</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h4 className="font-semibold">Prime-factor method</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border bg-muted/20 p-4">
            <strong>{a}</strong> = {factorString(a)}
          </div>
          <div className="rounded-lg border bg-muted/20 p-4">
            <strong>{b}</strong> = {factorString(b)}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          For the HCF, take each shared prime with its <strong>smaller</strong> exponent. For the
          LCM, take every prime with its <strong>larger</strong> exponent.
        </p>
      </section>

      <section className="space-y-3">
        <h4 className="font-semibold">Multiple meeting points</h4>
        <div className="overflow-x-auto rounded-lg border p-4">
          <div className="flex min-w-[680px] flex-wrap gap-2">
            {Array.from(new Set([...multiplesA, ...multiplesB]))
              .sort((x, y) => x - y)
              .map((multiple) => {
                const inA = multiplesA.includes(multiple);
                const inB = multiplesB.includes(multiple);
                return (
                  <span
                    key={multiple}
                    className={cn(
                      "rounded-md border px-3 py-2 text-sm",
                      inA && inB
                        ? "border-emerald-500 bg-emerald-500/10 font-semibold"
                        : "bg-muted/20"
                    )}
                  >
                    {multiple}
                    {inA && inB ? " · common" : inA ? ` · ${a}` : ` · ${b}`}
                  </span>
                );
              })}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          The first shared point is the LCM: <strong>{lcm}</strong>.
        </p>
      </section>

      <button
        type="button"
        onClick={() => {
          setA(24);
          setB(36);
          record();
        }}
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-4" /> Reset example
      </button>
    </div>
  );
}

export function FactorPrimeExplorer({
  lessonId,
  mode,
}: {
  lessonId: string;
  mode: FactorPrimeExplorerMode;
}) {
  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6">
      {mode === "factors" && <FactorsMode lessonId={lessonId} />}
      {mode === "primes" && <PrimesMode lessonId={lessonId} />}
      {mode === "hcfLcm" && <HcfLcmMode lessonId={lessonId} />}
    </div>
  );
}
