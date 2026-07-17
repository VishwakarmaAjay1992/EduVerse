"use client";

import { useState } from "react";
import { CheckCircle2, Divide, Sigma, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Sample = {
  label: string;
  value: number;
  smallest: "Natural" | "Whole" | "Integer" | "Rational" | "Irrational";
  reason: string;
};

const SAMPLES: Sample[] = [
  { label: "7", value: 7, smallest: "Natural", reason: "7 is a counting number." },
  {
    label: "0",
    value: 0,
    smallest: "Whole",
    reason:
      "0 is whole but is not included in the 1, 2, 3, ... natural-number convention used here.",
  },
  {
    label: "−5",
    value: -5,
    smallest: "Integer",
    reason: "−5 is a negative whole number and can also be written as −5/1.",
  },
  {
    label: "3/8",
    value: 3 / 8,
    smallest: "Rational",
    reason: "It is already written as a ratio of integers with a non-zero denominator.",
  },
  {
    label: "0.272727…",
    value: 3 / 11,
    smallest: "Rational",
    reason: "A repeating decimal is rational; 0.272727… = 3/11.",
  },
  {
    label: "√2",
    value: Math.SQRT2,
    smallest: "Irrational",
    reason: "Its decimal never terminates or repeats, and it cannot be expressed as p/q.",
  },
  {
    label: "π",
    value: Math.PI,
    smallest: "Irrational",
    reason: "π is a non-terminating, non-repeating decimal.",
  },
];

const CATEGORIES = ["Natural", "Whole", "Integer", "Rational", "Irrational"] as const;

export function RationalNumberExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"classify" | "density" | "roots">("classify");
  const [sampleIndex, setSampleIndex] = useState(3);
  const [guess, setGuess] = useState<string>("");
  const [left, setLeft] = useState(-1.5);
  const [right, setRight] = useState(2.5);
  const [rootN, setRootN] = useState(12);

  const sample = SAMPLES[sampleIndex]!;
  const midpoint = (left + right) / 2;
  const quarter1 = (left + midpoint) / 2;
  const quarter2 = (midpoint + right) / 2;
  const perfectRoot = Number.isInteger(Math.sqrt(rootN));

  function record() {
    markStep(lessonId, "rationalNumberExplorer");
  }

  function selectTab(next: typeof tab) {
    setTab(next);
    record();
  }

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Rational number explorer modes"
      >
        <TabButton active={tab === "classify"} onClick={() => selectTab("classify")}>
          Classify numbers
        </TabButton>
        <TabButton active={tab === "density"} onClick={() => selectTab("density")}>
          Numbers between numbers
        </TabButton>
        <TabButton active={tab === "roots"} onClick={() => selectTab("roots")}>
          Square-root explorer
        </TabButton>
      </div>

      {tab === "classify" && (
        <div className="space-y-5">
          <NumberSetDiagram sample={sample} />
          <div className="flex flex-wrap gap-2" aria-label="Choose a number to classify">
            {SAMPLES.map((item, index) => (
              <button
                type="button"
                key={item.label}
                onClick={() => {
                  setSampleIndex(index);
                  setGuess("");
                  record();
                }}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  index === sampleIndex ? "border-primary bg-primary/10" : "hover:bg-muted"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="rounded-lg border p-4">
            <p className="font-medium">What is the smallest set that contains {sample.label}?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => {
                    setGuess(category);
                    record();
                  }}
                  className={cn(
                    "rounded-md border px-3 py-2 text-sm",
                    guess === category &&
                      category === sample.smallest &&
                      "border-emerald-500 bg-emerald-500/10",
                    guess === category &&
                      category !== sample.smallest &&
                      "border-destructive bg-destructive/10",
                    guess !== category && "hover:bg-muted"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            {guess && (
              <div
                className={cn(
                  "mt-3 flex items-start gap-2 text-sm",
                  guess === sample.smallest ? "text-emerald-600" : "text-destructive"
                )}
              >
                {guess === sample.smallest ? (
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                ) : (
                  <XCircle className="mt-0.5 size-4 shrink-0" />
                )}
                <span>
                  {guess === sample.smallest
                    ? "Correct. "
                    : `The smallest set is ${sample.smallest}. `}
                  {sample.reason}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "density" && (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Left rational number: <span className="font-bold">{left.toFixed(1)}</span>
              <input
                type="range"
                min={-5}
                max={4}
                step={0.5}
                value={left}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  setLeft(Math.min(next, right - 0.5));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Right rational number: <span className="font-bold">{right.toFixed(1)}</span>
              <input
                type="range"
                min={-4}
                max={5}
                step={0.5}
                value={right}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  setRight(Math.max(next, left + 0.5));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
          </div>

          <DensityLine values={[left, quarter1, midpoint, quarter2, right]} />

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="flex items-center gap-2 font-semibold">
              <Divide className="size-4 text-primary" /> Midpoint method
            </p>
            <p className="mt-2 text-lg">
              ({left.toFixed(1)} + {right.toFixed(1)}) ÷ 2 = <strong>{midpoint.toFixed(2)}</strong>
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The midpoint is rational and lies strictly between the endpoints. Repeat the same
              process in either smaller interval to find another rational number. Therefore, there
              is no “next” rational number.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[quarter1, midpoint, quarter2].map((value, index) => (
              <div key={index} className="rounded-lg border p-3 text-center">
                <p className="text-xs text-muted-foreground">A rational number between</p>
                <p className="mt-1 text-lg font-semibold">{value.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "roots" && (
        <div className="space-y-5">
          <label className="block space-y-2 text-sm font-medium">
            Choose an integer under the square root: <span className="font-bold">{rootN}</span>
            <input
              type="range"
              min={1}
              max={30}
              value={rootN}
              onChange={(event) => {
                setRootN(Number(event.target.value));
                record();
              }}
              className="w-full accent-primary"
            />
          </label>

          <RootLine value={Math.sqrt(rootN)} />

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-4 text-center">
              <p className="text-xs text-muted-foreground">Exact form</p>
              <p className="mt-1 text-2xl font-bold">√{rootN}</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <p className="text-xs text-muted-foreground">Decimal approximation</p>
              <p className="mt-1 text-2xl font-bold">{Math.sqrt(rootN).toFixed(6)}</p>
            </div>
            <div
              className={cn(
                "rounded-lg border p-4 text-center",
                perfectRoot ? "border-emerald-500/50" : "border-primary/50"
              )}
            >
              <p className="text-xs text-muted-foreground">Classification</p>
              <p className="mt-1 text-xl font-bold">{perfectRoot ? "Rational" : "Irrational"}</p>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/30 p-4 text-sm leading-6">
            <p className="flex items-center gap-2 font-semibold">
              <Sigma className="size-4 text-primary" /> Why?
            </p>
            <p className="mt-1 text-muted-foreground">
              {perfectRoot
                ? `${rootN} is a perfect square, so √${rootN} = ${Math.sqrt(rootN)} and can be written as ${Math.sqrt(rootN)}/1.`
                : `${rootN} is not a perfect square. The decimal expansion of √${rootN} continues without terminating or repeating, so it is irrational.`}
            </p>
          </div>
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

function NumberSetDiagram({ sample }: { sample: Sample }) {
  const rational = sample.smallest !== "Irrational";
  const integer = ["Natural", "Whole", "Integer"].includes(sample.smallest);
  const whole = ["Natural", "Whole"].includes(sample.smallest);
  const natural = sample.smallest === "Natural";
  return (
    <svg
      viewBox="0 0 760 330"
      className="h-auto w-full"
      role="img"
      aria-label={`Nested real number sets showing ${sample.label}`}
    >
      <rect
        x="18"
        y="15"
        width="724"
        height="295"
        rx="18"
        className="fill-muted/20 stroke-border"
        strokeWidth="2"
      />
      <text x="38" y="45" className="fill-foreground font-semibold" fontSize="16">
        Real numbers
      </text>
      <rect
        x="45"
        y="62"
        width="485"
        height="224"
        rx="16"
        className={cn("stroke-border", rational ? "fill-primary/10" : "fill-muted/20")}
        strokeWidth="2"
      />
      <text x="66" y="90" className="fill-foreground font-semibold" fontSize="15">
        Rational numbers
      </text>
      <rect
        x="82"
        y="108"
        width="368"
        height="155"
        rx="14"
        className={cn("stroke-border", integer ? "fill-primary/15" : "fill-background/60")}
        strokeWidth="2"
      />
      <text x="101" y="134" className="fill-foreground font-semibold" fontSize="14">
        Integers
      </text>
      <rect
        x="124"
        y="150"
        width="250"
        height="90"
        rx="12"
        className={cn("stroke-border", whole ? "fill-primary/20" : "fill-background/70")}
        strokeWidth="2"
      />
      <text x="143" y="176" className="fill-foreground font-semibold" fontSize="13">
        Whole numbers
      </text>
      <rect
        x="180"
        y="187"
        width="142"
        height="40"
        rx="10"
        className={cn("stroke-border", natural ? "fill-primary/30" : "fill-background/80")}
        strokeWidth="2"
      />
      <text
        x="251"
        y="212"
        textAnchor="middle"
        className="fill-foreground font-semibold"
        fontSize="13"
      >
        Natural numbers
      </text>
      <rect
        x="555"
        y="62"
        width="160"
        height="224"
        rx="16"
        className={cn("stroke-border", !rational ? "fill-primary/15" : "fill-muted/20")}
        strokeWidth="2"
      />
      <text
        x="635"
        y="91"
        textAnchor="middle"
        className="fill-foreground font-semibold"
        fontSize="15"
      >
        Irrational
      </text>
      <text
        x={rational ? (natural ? 251 : whole ? 245 : integer ? 280 : 390) : 635}
        y={rational ? (natural ? 210 : whole ? 215 : integer ? 205 : 180) : 185}
        textAnchor="middle"
        className="fill-primary font-bold"
        fontSize="22"
      >
        {sample.label}
      </text>
    </svg>
  );
}

function DensityLine({ values }: { values: number[] }) {
  const min = Math.min(...values) - 0.5;
  const max = Math.max(...values) + 0.5;
  const x = (value: number) => 45 + ((value - min) / (max - min)) * 670;
  return (
    <svg
      viewBox="0 0 760 150"
      className="h-auto w-full"
      role="img"
      aria-label="Number line showing rational numbers between two rational endpoints"
    >
      <line x1="40" y1="78" x2="720" y2="78" className="stroke-foreground" strokeWidth="2" />
      {values.map((value, index) => (
        <g key={`${value}-${index}`}>
          <circle
            cx={x(value)}
            cy="78"
            r={index === 0 || index === values.length - 1 ? 7 : 5}
            className={index === 2 ? "fill-primary" : "fill-muted-foreground"}
          />
          <text
            x={x(value)}
            y={index % 2 === 0 ? 55 : 110}
            textAnchor="middle"
            fontSize="12"
            className={index === 2 ? "fill-primary font-semibold" : "fill-muted-foreground"}
          >
            {value.toFixed(2)}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RootLine({ value }: { value: number }) {
  const max = 6;
  const x = (n: number) => 45 + (n / max) * 670;
  return (
    <svg
      viewBox="0 0 760 135"
      className="h-auto w-full"
      role="img"
      aria-label={`Number line locating square root at approximately ${value.toFixed(3)}`}
    >
      <line x1="45" y1="72" x2="715" y2="72" className="stroke-foreground" strokeWidth="2" />
      {Array.from({ length: 7 }, (_, n) => (
        <g key={n}>
          <line x1={x(n)} y1="64" x2={x(n)} y2="80" className="stroke-muted-foreground" />
          <text
            x={x(n)}
            y="101"
            textAnchor="middle"
            fontSize="12"
            className="fill-muted-foreground"
          >
            {n}
          </text>
        </g>
      ))}
      <line
        x1={x(value)}
        y1="30"
        x2={x(value)}
        y2="65"
        className="stroke-primary"
        strokeWidth="2"
      />
      <circle cx={x(value)} cy="72" r="7" className="fill-primary" />
      <text
        x={x(value)}
        y="23"
        textAnchor="middle"
        fontSize="13"
        className="fill-primary font-semibold"
      >
        {value.toFixed(3)}
      </text>
    </svg>
  );
}
