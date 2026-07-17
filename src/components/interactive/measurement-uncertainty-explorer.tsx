"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RefreshCw, XCircle } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Area = "vernier" | "micrometer" | "repeated" | "sigfig";
const fixedErrors = [-0.82, 0.35, 0.91, -0.24, 0.58, -0.63, 0.12, 0.73];

export function MeasurementUncertaintyExplorer({
  lessonId,
}: {
  lessonId: string;
}) {
  const [tab, setTab] = useState<Area>("vernier");
  const [used, setUsed] = useState<Set<Area>>(new Set());

  function touched(area: Area) {
    setUsed((previous) => {
      const next = new Set(previous);
      next.add(area);
      if (next.size === 4) markStep(lessonId, "measurementExplorer");
      return next;
    });
  }

  return (
    <div className="space-y-5 rounded-xl border p-4 sm:p-5">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Measurement laboratory activities"
      >
        {(
          [
            ["vernier", "Vernier caliper"],
            ["micrometer", "Micrometer"],
            ["repeated", "Repeated readings"],
            ["sigfig", "Significant figures"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              tab === value
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-muted",
              used.has(value) && tab !== value && "border-emerald-500/50",
            )}
          >
            {label}
            {used.has(value) ? " ✓" : ""}
          </button>
        ))}
      </div>

      {tab === "vernier" && (
        <VernierLab onInteract={() => touched("vernier")} />
      )}
      {tab === "micrometer" && (
        <MicrometerLab onInteract={() => touched("micrometer")} />
      )}
      {tab === "repeated" && (
        <RepeatedLab onInteract={() => touched("repeated")} />
      )}
      {tab === "sigfig" && <SigFigLab onInteract={() => touched("sigfig")} />}

      <p className="text-xs text-muted-foreground">
        Use all four laboratory activities to complete the interactive
        requirement for this lesson.
      </p>
    </div>
  );
}

function VernierLab({ onInteract }: { onInteract: () => void }) {
  const [trueReading, setTrueReading] = useState(2.36); // cm
  const [zeroError, setZeroError] = useState(0); // cm
  const leastCount = 0.01;
  const observed = trueReading + zeroError;
  const main = Math.floor((observed + 1e-8) * 10) / 10;
  const coincidence = Math.round((observed - main) / leastCount);
  const correction = -zeroError;
  const corrected = observed + correction;
  const observedMm = observed * 10;
  const origin = 30;
  const pxPerMm = 18;
  const vernierZero = origin + observedMm * pxPerMm;

  return (
    <section className="space-y-4" aria-labelledby="vernier-heading">
      <div>
        <h4 id="vernier-heading" className="font-semibold">
          Interactive vernier caliper
        </h4>
        <p className="text-sm text-muted-foreground">
          This model has 1 mm main-scale divisions and a least count of 0.1 mm
          (0.01 cm).
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-muted/20 p-3">
        <svg
          viewBox="0 0 1140 205"
          className="min-w-[720px]"
          role="img"
          aria-label={`Vernier caliper showing an observed reading of ${observed.toFixed(2)} centimetres. Main-scale reading ${main.toFixed(1)} centimetres and vernier coincidence ${coincidence}.`}
        >
          <rect
            x="18"
            y="35"
            width="1085"
            height="45"
            rx="8"
            className="fill-background stroke-border"
            strokeWidth="2"
          />
          <line
            x1={origin}
            y1="35"
            x2="1090"
            y2="35"
            className="stroke-foreground"
            strokeWidth="2"
          />
          {Array.from({ length: 61 }, (_, mm) => {
            const x = origin + mm * pxPerMm;
            const major = mm % 10 === 0;
            const mid = mm % 5 === 0;
            return (
              <g key={mm}>
                <line
                  x1={x}
                  y1="35"
                  x2={x}
                  y2={major ? 65 : mid ? 57 : 51}
                  className="stroke-foreground"
                  strokeWidth={major ? 2 : 1}
                />
                {major && (
                  <text
                    x={x - 4}
                    y="76"
                    className="fill-foreground text-[12px]"
                  >
                    {mm / 10}
                  </text>
                )}
              </g>
            );
          })}
          <text x="31" y="98" className="fill-muted-foreground text-[12px]">
            main scale (cm)
          </text>

          <path
            d="M28 28 V142 H68 V112 H88 V28"
            fill="none"
            className="stroke-primary"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d={`M${vernierZero + 28} 28 V142 H${vernierZero - 12} V112 H${vernierZero - 32} V28`}
            fill="none"
            className="stroke-primary"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <rect
            x="88"
            y="101"
            width={Math.max(8, vernierZero - 120)}
            height="34"
            rx="6"
            className="fill-amber-500/30 stroke-amber-600"
            strokeWidth="2"
          />
          <text
            x={(88 + Math.max(88, vernierZero - 32)) / 2 - 28}
            y="123"
            className="fill-foreground text-[13px]"
          >
            object
          </text>

          <line
            x1={vernierZero}
            y1="116"
            x2={vernierZero + 162}
            y2="116"
            className="stroke-primary"
            strokeWidth="3"
          />
          {Array.from({ length: 11 }, (_, n) => {
            const x = vernierZero + n * pxPerMm * 0.9;
            const coincides = n === coincidence;
            return (
              <g key={n}>
                <line
                  x1={x}
                  y1="116"
                  x2={x}
                  y2={coincides ? 164 : n % 5 === 0 ? 154 : 146}
                  className={
                    coincides ? "stroke-emerald-600" : "stroke-foreground"
                  }
                  strokeWidth={coincides ? 4 : 1.5}
                />
                {(n === 0 || n === 5 || n === 10) && (
                  <text
                    x={x - 4}
                    y="178"
                    className="fill-foreground text-[12px]"
                  >
                    {n}
                  </text>
                )}
              </g>
            );
          })}
          <text
            x={vernierZero}
            y="198"
            className="fill-muted-foreground text-[12px]"
          >
            vernier scale
          </text>
        </svg>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Object width: <strong>{trueReading.toFixed(2)} cm</strong>
          <input
            type="range"
            min="0.50"
            max="5.00"
            step="0.01"
            value={trueReading}
            onChange={(event) => {
              setTrueReading(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full accent-primary"
          />
        </label>
        <label className="text-sm">
          Instrument zero error
          <select
            value={zeroError}
            onChange={(event) => {
              setZeroError(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2"
          >
            <option value={0}>No zero error</option>
            <option value={0.03}>+0.03 cm positive zero error</option>
            <option value={-0.02}>−0.02 cm negative zero error</option>
          </select>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Result label="Main-scale reading" value={`${main.toFixed(1)} cm`} />
        <Result
          label="Vernier contribution"
          value={`${coincidence} × 0.01 = ${(coincidence * leastCount).toFixed(2)} cm`}
        />
        <Result label="Observed reading" value={`${observed.toFixed(2)} cm`} />
        <Result
          label="Corrected reading"
          value={`${observed.toFixed(2)} + (${correction.toFixed(2)}) = ${corrected.toFixed(2)} cm`}
        />
      </div>
    </section>
  );
}

function MicrometerLab({ onInteract }: { onInteract: () => void }) {
  const [trueReading, setTrueReading] = useState(5.37);
  const [zeroError, setZeroError] = useState(0);
  const pitch = 0.5;
  const divisions = 50;
  const leastCount = pitch / divisions;
  const observed = trueReading + zeroError;
  const sleeve = Math.floor((observed + 1e-8) / pitch) * pitch;
  let circular = Math.round((observed - sleeve) / leastCount);
  if (circular === divisions) circular = 0;
  const corrected = observed - zeroError;
  const spindleX = 145 + trueReading * 24;

  return (
    <section className="space-y-4" aria-labelledby="micrometer-heading">
      <div>
        <h4 id="micrometer-heading" className="font-semibold">
          Interactive micrometer screw gauge
        </h4>
        <p className="text-sm text-muted-foreground">
          Pitch = 0.50 mm, circular divisions = 50, so least count = 0.01 mm.
        </p>
      </div>

      <div className="rounded-lg border bg-muted/20 p-3">
        <svg
          viewBox="0 0 720 260"
          className="h-auto w-full"
          role="img"
          aria-label={`Micrometer showing observed reading ${observed.toFixed(2)} millimetres and corrected reading ${corrected.toFixed(2)} millimetres.`}
        >
          <path
            d="M120 48 C30 48 30 212 120 212 H185 V174 H130 C82 174 82 86 130 86 H185 V48 Z"
            fill="none"
            className="stroke-primary"
            strokeWidth="14"
          />
          <rect
            x="174"
            y="99"
            width="34"
            height="62"
            rx="4"
            className="fill-background stroke-foreground"
            strokeWidth="3"
          />
          <text x="165" y="188" className="fill-muted-foreground text-[13px]">
            anvil
          </text>
          <rect
            x={spindleX - 20}
            y="108"
            width="36"
            height="44"
            className="fill-background stroke-foreground"
            strokeWidth="3"
          />
          <line
            x1="208"
            y1="130"
            x2={spindleX - 20}
            y2="130"
            className="stroke-amber-600"
            strokeWidth="22"
          />
          <text
            x={(208 + spindleX - 20) / 2 - 18}
            y="135"
            className="fill-foreground text-[12px]"
          >
            object
          </text>
          <rect
            x={spindleX + 16}
            y="94"
            width="205"
            height="72"
            rx="8"
            className="fill-background stroke-foreground"
            strokeWidth="3"
          />
          <line
            x1={spindleX + 28}
            y1="130"
            x2={spindleX + 205}
            y2="130"
            className="stroke-foreground"
            strokeWidth="2"
          />
          {Array.from({ length: 12 }, (_, i) => {
            const x = spindleX + 34 + i * 14;
            return (
              <line
                key={i}
                x1={x}
                y1="130"
                x2={x}
                y2={i % 2 === 0 ? 108 : 146}
                className="stroke-foreground"
                strokeWidth="1.5"
              />
            );
          })}
          <rect
            x={spindleX + 195}
            y="80"
            width="125"
            height="100"
            rx="12"
            className="fill-primary/15 stroke-primary"
            strokeWidth="3"
          />
          <line
            x1={spindleX + 208}
            y1="130"
            x2={spindleX + 306}
            y2="130"
            className="stroke-primary"
            strokeWidth="2"
          />
          {Array.from({ length: 9 }, (_, i) => {
            const y = 91 + i * 10;
            return (
              <line
                key={i}
                x1={spindleX + 196}
                y1={y}
                x2={spindleX + (i === 4 ? 236 : 220)}
                y2={y}
                className={i === 4 ? "stroke-emerald-600" : "stroke-foreground"}
                strokeWidth={i === 4 ? 3 : 1.5}
              />
            );
          })}
          <rect
            x={spindleX + 315}
            y="91"
            width="48"
            height="78"
            rx="12"
            className="fill-muted stroke-foreground"
            strokeWidth="3"
          />
          <text
            x={spindleX + 205}
            y="202"
            className="fill-muted-foreground text-[13px]"
          >
            thimble
          </text>
          <text
            x={spindleX + 320}
            y="202"
            className="fill-muted-foreground text-[13px]"
          >
            ratchet
          </text>
        </svg>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Object thickness: <strong>{trueReading.toFixed(2)} mm</strong>
          <input
            type="range"
            min="0.50"
            max="10.00"
            step="0.01"
            value={trueReading}
            onChange={(event) => {
              setTrueReading(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full accent-primary"
          />
        </label>
        <label className="text-sm">
          Instrument zero error
          <select
            value={zeroError}
            onChange={(event) => {
              setZeroError(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2"
          >
            <option value={0}>No zero error</option>
            <option value={0.02}>+0.02 mm positive zero error</option>
            <option value={-0.03}>−0.03 mm negative zero error</option>
          </select>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Result
          label="Least count"
          value={`${pitch.toFixed(2)} ÷ ${divisions} = ${leastCount.toFixed(2)} mm`}
        />
        <Result label="Pitch-scale reading" value={`${sleeve.toFixed(2)} mm`} />
        <Result
          label="Circular contribution"
          value={`${circular} × ${leastCount.toFixed(2)} = ${(circular * leastCount).toFixed(2)} mm`}
        />
        <Result
          label="Corrected reading"
          value={`${observed.toFixed(2)} − (${zeroError.toFixed(2)}) = ${corrected.toFixed(2)} mm`}
        />
      </div>
    </section>
  );
}

function RepeatedLab({ onInteract }: { onInteract: () => void }) {
  const [trueValue, setTrueValue] = useState(12.4);
  const [randomSize, setRandomSize] = useState(0.08);
  const [systematic, setSystematic] = useState(false);
  const [phase, setPhase] = useState(0);
  const offset = systematic ? 0.18 : 0;
  const readings = useMemo(
    () =>
      fixedErrors.map((_, i) =>
        Number(
          (
            trueValue +
            fixedErrors[(i + phase) % fixedErrors.length]! * randomSize +
            offset
          ).toFixed(2),
        ),
      ),
    [trueValue, randomSize, offset, phase],
  );
  const mean =
    readings.reduce((sum, value) => sum + value, 0) / readings.length;
  const maximum = Math.max(...readings);
  const minimum = Math.min(...readings);
  const range = maximum - minimum;
  const halfRange = range / 2;

  return (
    <section className="space-y-4" aria-labelledby="repeated-heading">
      <div>
        <h4 id="repeated-heading" className="font-semibold">
          Repeated measurement simulator
        </h4>
        <p className="text-sm text-muted-foreground">
          Compare random spread with a systematic shift that averaging cannot
          remove.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm">
          True value: <strong>{trueValue.toFixed(2)} cm</strong>
          <input
            type="range"
            min="10"
            max="15"
            step="0.05"
            value={trueValue}
            onChange={(event) => {
              setTrueValue(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full accent-primary"
          />
        </label>
        <label className="text-sm">
          Random-error size: <strong>±{randomSize.toFixed(2)} cm</strong>
          <input
            type="range"
            min="0"
            max="0.30"
            step="0.01"
            value={randomSize}
            onChange={(event) => {
              setRandomSize(Number(event.target.value));
              onInteract();
            }}
            className="mt-2 w-full accent-primary"
          />
        </label>
        <label className="flex items-center gap-2 rounded-lg border p-3 text-sm">
          <input
            type="checkbox"
            checked={systematic}
            onChange={(event) => {
              setSystematic(event.target.checked);
              onInteract();
            }}
            className="accent-primary"
          />
          Apply +0.18 cm systematic offset
        </label>
      </div>

      <div className="rounded-lg border p-4">
        <div
          className="relative h-24 overflow-hidden rounded bg-muted/30"
          role="img"
          aria-label={`Dot plot of eight readings centred near ${mean.toFixed(2)} centimetres. True value ${trueValue.toFixed(2)} centimetres.`}
        >
          <div className="absolute bottom-6 left-4 right-4 h-px bg-foreground" />
          <div
            className="absolute bottom-3 top-3 w-0.5 bg-emerald-600"
            style={{ left: `${10 + ((trueValue - 9.7) / 5.8) * 80}%` }}
          >
            <span className="absolute -left-8 -top-1 whitespace-nowrap text-[10px] text-emerald-700 dark:text-emerald-400">
              true value
            </span>
          </div>
          {readings.map((value, i) => (
            <div
              key={`${value}-${i}`}
              className="absolute size-3 rounded-full border-2 border-primary bg-background"
              style={{
                left: `${10 + ((value - 9.7) / 5.8) * 80}%`,
                bottom: `${27 + (i % 3) * 17}px`,
              }}
              title={`${value.toFixed(2)} cm`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setPhase((value) => (value + 1) % fixedErrors.length);
            onInteract();
          }}
          className="mt-3 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <RefreshCw className="size-4" />
          Generate another controlled set
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {readings.map((_, i) => (
                <th key={i} className="px-2 py-2">
                  R{i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              {readings.map((value, i) => (
                <td
                  key={i}
                  className="px-2 py-2 text-center text-muted-foreground"
                >
                  {value.toFixed(2)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Result label="Mean" value={`${mean.toFixed(3)} cm`} />
        <Result
          label="Range"
          value={`${maximum.toFixed(2)} − ${minimum.toFixed(2)} = ${range.toFixed(2)} cm`}
        />
        <Result
          label="Half-range uncertainty"
          value={`±${halfRange.toFixed(2)} cm`}
        />
        <Result
          label="Report"
          value={`(${mean.toFixed(2)} ± ${halfRange.toFixed(2)}) cm`}
        />
      </div>
      <p className="rounded-lg border bg-muted/20 p-3 text-sm text-muted-foreground">
        {systematic
          ? `The readings are collectively shifted upward. Their mean is ${(mean - trueValue).toFixed(2)} cm from the true value, showing that averaging does not remove systematic error.`
          : "The readings spread around the true value. Repetition and averaging reduce the influence of random fluctuations."}
      </p>
    </section>
  );
}

const sigQuestions = [
  {
    number: "0.00450",
    count: "3",
    target: 2,
    rounded: "0.0045",
    explanation:
      "Leading zeros are placeholders; 4, 5 and the trailing decimal zero are significant.",
  },
  {
    number: "100.20",
    count: "5",
    target: 4,
    rounded: "100.2",
    explanation:
      "Zeros between significant digits and trailing zeros after a decimal point are significant.",
  },
  {
    number: "3000",
    count: "Ambiguous",
    target: 2,
    rounded: "3.0×10^3",
    explanation:
      "Without a decimal point or scientific notation, the intended significant figures in 3000 are ambiguous.",
  },
  {
    number: "3.000 × 10³",
    count: "4",
    target: 3,
    rounded: "3.00×10^3",
    explanation:
      "The coefficient 3.000 contains four significant figures; the power of ten does not change the count.",
  },
  {
    number: "1.0200",
    count: "5",
    target: 3,
    rounded: "1.02",
    explanation:
      "The zero between 1 and 2 and both trailing decimal zeros are significant.",
  },
];

function normalizeNumber(value: string) {
  return value
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/×/g, "x")
    .replace(/\*10\^/g, "x10^");
}

function SigFigLab({ onInteract }: { onInteract: () => void }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState("");
  const [rounded, setRounded] = useState("");
  const [checked, setChecked] = useState(false);
  const question = sigQuestions[index]!;
  const countCorrect = count === question.count;
  const roundedCorrect =
    normalizeNumber(rounded) === normalizeNumber(question.rounded);

  function next() {
    setIndex((value) => (value + 1) % sigQuestions.length);
    setCount("");
    setRounded("");
    setChecked(false);
  }

  return (
    <section className="space-y-4" aria-labelledby="sigfig-heading">
      <div>
        <h4 id="sigfig-heading" className="font-semibold">
          Significant figures trainer
        </h4>
        <p className="text-sm text-muted-foreground">
          Question {index + 1} of {sigQuestions.length}
        </p>
      </div>
      <div className="rounded-xl border p-4 sm:p-5">
        <p className="text-sm text-muted-foreground">Number</p>
        <p className="mt-1 text-3xl font-semibold">{question.number}</p>

        <fieldset className="mt-5">
          <legend className="text-sm font-medium">
            How many significant figures does it show?
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5", "Ambiguous"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setCount(option);
                  setChecked(false);
                  onInteract();
                }}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  count === option
                    ? "border-primary bg-primary/10"
                    : "hover:bg-muted",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="mt-5 block text-sm font-medium">
          Round it to {question.target} significant figures
          <input
            value={rounded}
            onChange={(event) => {
              setRounded(event.target.value);
              setChecked(false);
              onInteract();
            }}
            placeholder="Enter the rounded value"
            className="mt-2 w-full rounded-md border bg-background px-3 py-2"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setChecked(true);
              onInteract();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Check answer
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-md border px-4 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Next example
          </button>
        </div>

        {checked && (
          <div
            className={cn(
              "mt-4 rounded-lg border p-3",
              countCorrect && roundedCorrect
                ? "border-emerald-500/40 bg-emerald-500/5"
                : "border-destructive/40 bg-destructive/5",
            )}
          >
            <p className="flex items-center gap-2 font-medium">
              {countCorrect && roundedCorrect ? (
                <CheckCircle2 className="size-5 text-emerald-600" />
              ) : (
                <XCircle className="size-5 text-destructive" />
              )}
              {countCorrect && roundedCorrect
                ? "Both answers are correct"
                : "Review the significant digits"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Count: {question.count}. Rounded value: {question.rounded}.{" "}
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
