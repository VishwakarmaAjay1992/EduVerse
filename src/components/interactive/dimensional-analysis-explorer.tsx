"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Dim = { m: number; l: number; t: number };
type Equation = {
  label: string;
  left: { label: string; dim: Dim };
  right: { label: string; dim: Dim }[];
  valid: boolean;
  explanation: string;
};

const equations: Equation[] = [
  {
    label: "v = u + at",
    left: { label: "v", dim: { m: 0, l: 1, t: -1 } },
    right: [
      { label: "u", dim: { m: 0, l: 1, t: -1 } },
      { label: "at", dim: { m: 0, l: 1, t: -1 } },
    ],
    valid: true,
    explanation:
      "Velocity, initial velocity and acceleration × time all have dimensions [L][T]⁻¹.",
  },
  {
    label: "s = ut + ½at²",
    left: { label: "s", dim: { m: 0, l: 1, t: 0 } },
    right: [
      { label: "ut", dim: { m: 0, l: 1, t: 0 } },
      { label: "½at²", dim: { m: 0, l: 1, t: 0 } },
    ],
    valid: true,
    explanation:
      "Both right-hand terms reduce to length [L], matching displacement.",
  },
  {
    label: "F = ma",
    left: { label: "F", dim: { m: 1, l: 1, t: -2 } },
    right: [{ label: "ma", dim: { m: 1, l: 1, t: -2 } }],
    valid: true,
    explanation:
      "Mass × acceleration gives [M][L][T]⁻², the dimensions of force.",
  },
  {
    label: "KE = ½mv²",
    left: { label: "KE", dim: { m: 1, l: 2, t: -2 } },
    right: [{ label: "½mv²", dim: { m: 1, l: 2, t: -2 } }],
    valid: true,
    explanation:
      "The numerical factor ½ has no dimensions, so both sides are [M][L]²[T]⁻².",
  },
  {
    label: "P = F/A",
    left: { label: "P", dim: { m: 1, l: -1, t: -2 } },
    right: [{ label: "F/A", dim: { m: 1, l: -1, t: -2 } }],
    valid: true,
    explanation: "Dividing force [M][L][T]⁻² by area [L]² gives [M][L]⁻¹[T]⁻².",
  },
  {
    label: "v = u + at²",
    left: { label: "v", dim: { m: 0, l: 1, t: -1 } },
    right: [
      { label: "u", dim: { m: 0, l: 1, t: -1 } },
      { label: "at²", dim: { m: 0, l: 1, t: 0 } },
    ],
    valid: false,
    explanation:
      "The term at² has dimensions [L], so it cannot be added to velocity [L][T]⁻¹.",
  },
  {
    label: "s = u + at²",
    left: { label: "s", dim: { m: 0, l: 1, t: 0 } },
    right: [
      { label: "u", dim: { m: 0, l: 1, t: -1 } },
      { label: "at²", dim: { m: 0, l: 1, t: 0 } },
    ],
    valid: false,
    explanation:
      "Displacement and at² are lengths, but u is a velocity. Unlike dimensions cannot be added.",
  },
  {
    label: "F = mv",
    left: { label: "F", dim: { m: 1, l: 1, t: -2 } },
    right: [{ label: "mv", dim: { m: 1, l: 1, t: -1 } }],
    valid: false,
    explanation: "mv is momentum [M][L][T]⁻¹, not force [M][L][T]⁻².",
  },
];

const commonDimensions = [
  { name: "Dimensionless quantity", dim: { m: 0, l: 0, t: 0 } },
  { name: "Speed or velocity", dim: { m: 0, l: 1, t: -1 } },
  { name: "Acceleration", dim: { m: 0, l: 1, t: -2 } },
  { name: "Density", dim: { m: 1, l: -3, t: 0 } },
  { name: "Momentum", dim: { m: 1, l: 1, t: -1 } },
  { name: "Force", dim: { m: 1, l: 1, t: -2 } },
  { name: "Pressure", dim: { m: 1, l: -1, t: -2 } },
  { name: "Work or energy", dim: { m: 1, l: 2, t: -2 } },
  { name: "Power", dim: { m: 1, l: 2, t: -3 } },
  { name: "Frequency", dim: { m: 0, l: 0, t: -1 } },
];

function sameDim(a: Dim, b: Dim) {
  return a.m === b.m && a.l === b.l && a.t === b.t;
}

function exponentText(value: number) {
  if (value === 0) return "⁰";
  const map: Record<string, string> = {
    "-": "⁻",
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
  };
  return String(value)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}

function formatDim(dim: Dim) {
  const parts = (
    [
      ["M", dim.m],
      ["L", dim.l],
      ["T", dim.t],
    ] as const
  )
    .filter(([, power]) => power !== 0)
    .map(
      ([symbol, power]) => `${symbol}${power === 1 ? "" : exponentText(power)}`,
    );
  return parts.length ? `[${parts.join("][")}]` : "[1]";
}

export function DimensionalAnalysisExplorer({
  lessonId,
}: {
  lessonId: string;
}) {
  const [tab, setTab] = useState<"checker" | "builder" | "pendulum">("checker");
  const [equationIndex, setEquationIndex] = useState(0);
  const [powers, setPowers] = useState<Dim>({ m: 1, l: 1, t: -2 });
  const [pendulumStep, setPendulumStep] = useState(0);
  const equation = equations[equationIndex]!;
  const match = useMemo(
    () => commonDimensions.find((item) => sameDim(item.dim, powers))?.name,
    [powers],
  );

  function touched() {
    markStep(lessonId, "dimensionalExplorer");
  }

  function selectTab(next: typeof tab) {
    setTab(next);
    touched();
  }

  function updatePower(key: keyof Dim, value: number) {
    setPowers((previous) => ({ ...previous, [key]: value }));
    touched();
  }

  return (
    <div className="space-y-5 rounded-xl border p-4 sm:p-5">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Dimensional analysis activities"
      >
        {(
          [
            ["checker", "Equation checker"],
            ["builder", "Formula builder"],
            ["pendulum", "Pendulum relation"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => selectTab(value)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              tab === value
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "checker" && (
        <section className="space-y-4" aria-labelledby="equation-checker-title">
          <div>
            <h4 id="equation-checker-title" className="font-semibold">
              Equation dimension checker
            </h4>
            <p className="text-sm text-muted-foreground">
              Choose an equation and compare the powers of mass, length and time
              term by term.
            </p>
          </div>
          <label className="block text-sm font-medium">
            Physical equation
            <select
              value={equationIndex}
              onChange={(event) => {
                setEquationIndex(Number(event.target.value));
                touched();
              }}
              className="mt-2 w-full rounded-md border bg-background px-3 py-2"
            >
              {equations.map((item, index) => (
                <option key={item.label} value={index}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-3 lg:grid-cols-[1fr_auto_1.4fr] lg:items-stretch">
            <DimensionTerm
              title="Left-hand side"
              label={equation.left.label}
              dim={equation.left.dim}
            />
            <div className="hidden items-center text-xl text-muted-foreground lg:flex">
              =
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {equation.right.map((term) => (
                <DimensionTerm
                  key={term.label}
                  title="Right-hand term"
                  label={term.label}
                  dim={term.dim}
                />
              ))}
            </div>
          </div>

          <div
            className={cn(
              "rounded-lg border p-4",
              equation.valid
                ? "border-emerald-500/40 bg-emerald-500/5"
                : "border-destructive/40 bg-destructive/5",
            )}
          >
            <div className="flex items-center gap-2 font-semibold">
              {equation.valid ? (
                <CheckCircle2
                  className="size-5 text-emerald-600"
                  aria-hidden="true"
                />
              ) : (
                <XCircle
                  className="size-5 text-destructive"
                  aria-hidden="true"
                />
              )}
              {equation.valid
                ? "Dimensionally homogeneous"
                : "Not dimensionally homogeneous"}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {equation.explanation}
            </p>
          </div>
        </section>
      )}

      {tab === "builder" && (
        <section className="space-y-4" aria-labelledby="formula-builder-title">
          <div>
            <h4 id="formula-builder-title" className="font-semibold">
              Build a dimensional formula
            </h4>
            <p className="text-sm text-muted-foreground">
              Adjust the exponents in [M]ᵃ[L]ᵇ[T]ᶜ and identify the physical
              quantity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {(["m", "l", "t"] as const).map((key) => (
              <label key={key} className="rounded-lg border p-3 text-sm">
                Exponent of {key.toUpperCase()}: <strong>{powers[key]}</strong>
                <input
                  className="mt-3 w-full accent-primary"
                  type="range"
                  min="-4"
                  max="4"
                  step="1"
                  value={powers[key]}
                  aria-label={`Exponent of ${key.toUpperCase()}`}
                  onChange={(event) =>
                    updatePower(key, Number(event.target.value))
                  }
                />
              </label>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground">
                Your dimensional formula
              </p>
              <p className="mt-2 text-2xl font-semibold">{formatDim(powers)}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                M exponent {powers.m}, L exponent {powers.l}, T exponent{" "}
                {powers.t}
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-xs text-muted-foreground">
                Closest common match
              </p>
              <p className="mt-2 font-semibold">
                {match ?? "No common introductory quantity matched"}
              </p>
              <button
                type="button"
                onClick={() => {
                  setPowers({ m: 0, l: 0, t: 0 });
                  touched();
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <RotateCcw className="size-4" aria-hidden="true" /> Reset
              </button>
            </div>
          </div>
        </section>
      )}

      {tab === "pendulum" && (
        <section className="space-y-4" aria-labelledby="pendulum-title">
          <div>
            <h4 id="pendulum-title" className="font-semibold">
              Derive the pendulum relationship
            </h4>
            <p className="text-sm text-muted-foreground">
              Reveal each step for the assumption T ∝ Lᵃgᵇ.
            </p>
          </div>

          <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
            <div
              className="mb-5 flex items-center justify-center"
              role="img"
              aria-label="A simple pendulum with length L and period T"
            >
              <svg
                viewBox="0 0 320 180"
                className="h-auto w-full max-w-md"
                aria-hidden="true"
              >
                <line
                  x1="70"
                  y1="25"
                  x2="250"
                  y2="25"
                  className="stroke-foreground"
                  strokeWidth="5"
                />
                <circle cx="160" cy="27" r="6" className="fill-primary" />
                <line
                  x1="160"
                  y1="30"
                  x2="210"
                  y2="132"
                  className="stroke-foreground"
                  strokeWidth="3"
                />
                <circle
                  cx="210"
                  cy="142"
                  r="16"
                  className="fill-primary/70 stroke-primary"
                  strokeWidth="2"
                />
                <path
                  d="M160 62 A90 90 0 0 1 210 142"
                  fill="none"
                  className="stroke-muted-foreground"
                  strokeDasharray="6 6"
                  strokeWidth="2"
                />
                <text x="190" y="82" className="fill-foreground text-sm">
                  L
                </text>
                <text x="113" y="118" className="fill-muted-foreground text-xs">
                  period T
                </text>
              </svg>
            </div>

            <ol className="space-y-3">
              <RevealStep
                visible={pendulumStep >= 0}
                number={1}
                text="Assume T ∝ Lᵃgᵇ."
              />
              <RevealStep
                visible={pendulumStep >= 1}
                number={2}
                text="Dimensions: [T] = [L]ᵃ([L][T]⁻²)ᵇ = [L]ᵃ⁺ᵇ[T]⁻²ᵇ."
              />
              <RevealStep
                visible={pendulumStep >= 2}
                number={3}
                text="Equate time powers: 1 = −2b, so b = −½."
              />
              <RevealStep
                visible={pendulumStep >= 3}
                number={4}
                text="Equate length powers: 0 = a + b, so a = ½."
              />
              <RevealStep
                visible={pendulumStep >= 4}
                number={5}
                text="Therefore T ∝ L¹ᐟ²g⁻¹ᐟ² = √(L/g)."
              />
            </ol>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                disabled={pendulumStep >= 4}
                onClick={() => {
                  setPendulumStep((step) => Math.min(4, step + 1));
                  touched();
                }}
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Reveal next step
              </button>
              <button
                type="button"
                onClick={() => {
                  setPendulumStep(0);
                  touched();
                }}
                className="rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Start again
              </button>
            </div>
          </div>

          <p className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-sm text-muted-foreground">
            Dimensional analysis finds the dependence √(L/g), but it cannot find
            the dimensionless numerical factor 2π.
          </p>
        </section>
      )}
    </div>
  );
}

function DimensionTerm({
  title,
  label,
  dim,
}: {
  title: string;
  label: string;
  dim: Dim;
}) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="mt-1 font-semibold">
        {label} = {formatDim(dim)}
      </p>
      <div
        className="mt-3 grid grid-cols-3 gap-2"
        aria-label={`M exponent ${dim.m}, L exponent ${dim.l}, T exponent ${dim.t}`}
      >
        <ExponentChip symbol="M" value={dim.m} />
        <ExponentChip symbol="L" value={dim.l} />
        <ExponentChip symbol="T" value={dim.t} />
      </div>
    </div>
  );
}

function ExponentChip({ symbol, value }: { symbol: string; value: number }) {
  return (
    <div className="rounded-md bg-muted px-2 py-2 text-center text-sm">
      <span className="text-muted-foreground">{symbol}</span>
      <span className="ml-1 font-semibold">{value}</span>
    </div>
  );
}

function RevealStep({
  visible,
  number,
  text,
}: {
  visible: boolean;
  number: number;
  text: string;
}) {
  return (
    <li
      className={cn(
        "flex gap-3 rounded-lg border p-3 transition-opacity",
        !visible && "opacity-25",
      )}
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
        {number}
      </span>
      <span className="text-sm leading-6">
        {visible ? text : "Reveal this step to continue."}
      </span>
    </li>
  );
}
