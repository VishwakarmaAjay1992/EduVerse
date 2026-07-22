"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Download, Lightbulb, RotateCcw, Search, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURE_GUIDES } from "@/data/feature-guides";
import { PERIODIC_ELEMENTS } from "@/data/periodic-elements";

export function FeatureExperience({ slug }: { slug: string }) {
  switch (slug) {
    case "virtual-science-laboratory":
      return <MotionLab />;
    case "myth-vs-science":
      return <MythLab />;
    case "formula-explorer":
      return <FormulaExplorer />;
    case "unit-converter":
      return <UnitConverter />;
    case "interactive-graph-laboratory":
      return <GraphLab />;
    case "science-calculators":
      return <ScienceCalculator />;
    case "periodic-table-explorer":
      return <PeriodicExplorer />;
    case "daily-science-challenge":
      return <DailyChallenge />;
    case "science-quiz-arena":
      return <QuizArena />;
    case "achievement-system":
      return <Achievements />;
    case "ask-predict-reveal":
      return <PredictReveal />;
    case "science-puzzle-room":
      return <PuzzleRoom />;
    case "science-dictionary":
      return <ScienceDictionary />;
    case "mistake-analyzer":
      return <MistakeAnalyzer />;
    case "study-paths":
      return <StudyPathBuilder />;
    case "downloadable-study-materials":
      return <DownloadLibrary />;
    case "english-arabic-learning":
      return <BilingualScience />;
    case "great-inventions":
      return <InventionsGateway />;
    default:
      return <KnowledgeGuide slug={slug} />;
  }
}

function InventionsGateway() {
  return (
    <Panel
      title="Inventions in Human History"
      description="The full, research-based invention collection now has its own scalable section."
    >
      <div className="rounded-xl border bg-muted/30 p-6">
        <p className="max-w-2xl leading-7 text-muted-foreground">
          Begin with the Steam Engine: trace the mine-drainage problem, the work of Papin, Savery,
          Newcomen, Watt, Boulton and Trevithick, and the evolution from atmospheric engines to
          modern steam turbines.
        </p>
        <Button asChild className="mt-5">
          <Link href="/inventions">Open the inventions collection</Link>
        </Button>
      </div>
    </Panel>
  );
}

function Panel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="border-b bg-muted/35 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-medium">
        <span>{label}</span>
        <strong>
          {value} {unit}
        </strong>
      </span>
      <input
        className="w-full accent-primary"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function MotionLab() {
  const [lab, setLab] = useState<"motion" | "density" | "waves">("motion");
  const [force, setForce] = useState(12),
    [mass, setMass] = useState(4),
    [friction, setFriction] = useState(2);
  const [sampleMass, setSampleMass] = useState(5),
    [volume, setVolume] = useState(0.006);
  const [frequency, setFrequency] = useState(5),
    [wavelength, setWavelength] = useState(2);
  const net = Math.max(0, force - friction),
    acceleration = net / mass;
  const density = sampleMass / volume,
    waveSpeed = frequency * wavelength;
  return (
    <Panel
      title="Virtual science laboratory"
      description="Choose an investigation, change one variable at a time and interpret the model."
    >
      <div className="mb-7 flex flex-wrap gap-2">
        {(["motion", "density", "waves"] as const).map((item) => (
          <Button
            key={item}
            variant={lab === item ? "default" : "outline"}
            onClick={() => setLab(item)}
          >
            {item === "motion"
              ? "Motion and forces"
              : item === "density"
                ? "Density and floating"
                : "Wave builder"}
          </Button>
        ))}
      </div>
      {lab === "motion" && (
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div className="space-y-6">
            <Slider
              label="Applied force"
              value={force}
              min={0}
              max={30}
              unit="N"
              onChange={setForce}
            />
            <Slider label="Cart mass" value={mass} min={1} max={10} unit="kg" onChange={setMass} />
            <Slider
              label="Friction force"
              value={friction}
              min={0}
              max={15}
              unit="N"
              onChange={setFriction}
            />
          </div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <div className="relative h-28 overflow-hidden border-b border-white/30">
              <div
                className="absolute bottom-2 flex h-12 w-20 items-end justify-center rounded-lg bg-sky-500 transition-all duration-500"
                style={{ left: `${Math.min(75, acceleration * 12)}%` }}
              >
                <span className="mb-2 text-xs font-bold">{mass} kg</span>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Result label="Net force" value={`${net.toFixed(1)} N`} />
              <Result label="Acceleration" value={`${acceleration.toFixed(2)} m/s²`} />
            </dl>
            <p className="mt-4 text-xs leading-5 text-white/65">
              Model assumption: straight-line motion on a level surface, with friction represented
              as a constant opposing force.
            </p>
          </div>
        </div>
      )}
      {lab === "density" && (
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div className="space-y-6">
            <Slider
              label="Sample mass"
              value={sampleMass}
              min={1}
              max={20}
              step={0.5}
              unit="kg"
              onChange={setSampleMass}
            />
            <Slider
              label="Sample volume"
              value={volume}
              min={0.002}
              max={0.02}
              step={0.001}
              unit="m³"
              onChange={setVolume}
            />
          </div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <div className="relative h-32 overflow-hidden rounded-xl bg-sky-700">
              <div className="absolute inset-x-0 top-5 border-t border-white/50" />
              <div
                className="absolute left-1/2 h-14 w-20 -translate-x-1/2 rounded bg-amber-400 transition-all"
                style={{ top: density < 1000 ? "5px" : "58px" }}
              />
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Result label="Sample density" value={`${density.toFixed(0)} kg/m³`} />
              <Result
                label="In fresh water"
                value={density < 1000 ? "Floats" : density === 1000 ? "Neutral" : "Sinks"}
              />
            </dl>
            <p className="mt-4 text-xs leading-5 text-white/65">
              Simplified model: uniform sample, fresh water density 1000 kg/m³, no trapped air or
              surface-tension effects.
            </p>
          </div>
        </div>
      )}
      {lab === "waves" && (
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div className="space-y-6">
            <Slider
              label="Frequency"
              value={frequency}
              min={1}
              max={20}
              unit="Hz"
              onChange={setFrequency}
            />
            <Slider
              label="Wavelength"
              value={wavelength}
              min={0.5}
              max={5}
              step={0.5}
              unit="m"
              onChange={setWavelength}
            />
          </div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <svg viewBox="0 0 300 100" className="w-full" role="img" aria-label="Sine wave model">
              <polyline
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
                points={Array.from(
                  { length: 61 },
                  (_, index) =>
                    `${index * 5},${50 - Math.sin((index / 60) * Math.PI * 2 * (5 / wavelength)) * 30}`
                ).join(" ")}
              />
            </svg>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Result label="Wave speed" value={`${waveSpeed.toFixed(1)} m/s`} />
              <Result label="Relationship" value="v = fλ" />
            </dl>
            <p className="mt-4 text-xs leading-5 text-white/65">
              This mathematical display is not a material string simulation. Real wave speed depends
              on the medium.
            </p>
          </div>
        </div>
      )}
    </Panel>
  );
}

const FORMULA_MODELS = {
  force: {
    title: "Newton’s second law",
    formula: "F = ma",
    x: "Mass (m)",
    xu: "kg",
    y: "Acceleration (a)",
    yu: "m/s²",
    out: "N",
    calculate: (x: number, y: number) => x * y,
    note: "Force is directly proportional to both mass and acceleration.",
  },
  kinetic: {
    title: "Kinetic energy",
    formula: "Eₖ = ½mv²",
    x: "Mass (m)",
    xu: "kg",
    y: "Speed (v)",
    yu: "m/s",
    out: "J",
    calculate: (x: number, y: number) => 0.5 * x * y * y,
    note: "Doubling speed multiplies kinetic energy by four.",
  },
  potential: {
    title: "Gravitational potential energy",
    formula: "Eₚ = mgh",
    x: "Mass (m)",
    xu: "kg",
    y: "Height (h)",
    yu: "m",
    out: "J",
    calculate: (x: number, y: number) => x * 9.81 * y,
    note: "This near-Earth model uses g = 9.81 m/s².",
  },
  wave: {
    title: "Wave speed",
    formula: "v = fλ",
    x: "Frequency (f)",
    xu: "Hz",
    y: "Wavelength (λ)",
    yu: "m",
    out: "m/s",
    calculate: (x: number, y: number) => x * y,
    note: "In a fixed medium, frequency and wavelength adjust while wave speed is set by the medium.",
  },
  voltage: {
    title: "Ohm’s law",
    formula: "V = IR",
    x: "Current (I)",
    xu: "A",
    y: "Resistance (R)",
    yu: "Ω",
    out: "V",
    calculate: (x: number, y: number) => x * y,
    note: "This simple relationship applies to ohmic behaviour under stable physical conditions.",
  },
  pressure: {
    title: "Pressure",
    formula: "p = F/A",
    x: "Force (F)",
    xu: "N",
    y: "Area (A)",
    yu: "m²",
    out: "Pa",
    calculate: (x: number, y: number) => x / y,
    note: "The same force produces more pressure when applied over a smaller area.",
  },
};

function FormulaExplorer() {
  const [modelKey, setModelKey] = useState<keyof typeof FORMULA_MODELS>("force");
  const [x, setX] = useState(5),
    [y, setY] = useState(3);
  const model = FORMULA_MODELS[modelKey];
  const answer = model.calculate(x, y);
  return (
    <Panel
      title="Interactive formula explorer"
      description="Choose a relationship, move its variables and observe how the result responds."
    >
      <label className="mb-7 block text-sm font-medium">
        Formula
        <select
          className="mt-2 h-11 w-full rounded-md border bg-background px-3"
          value={modelKey}
          onChange={(event) => {
            setModelKey(event.target.value as keyof typeof FORMULA_MODELS);
            setX(5);
            setY(3);
          }}
        >
          {Object.entries(FORMULA_MODELS).map(([key, item]) => (
            <option key={key} value={key}>
              {item.title} · {item.formula}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-7">
          <Slider
            label={model.x}
            value={x}
            min={1}
            max={20}
            step={0.5}
            unit={model.xu}
            onChange={setX}
          />
          <Slider
            label={model.y}
            value={y}
            min={0.5}
            max={20}
            step={0.5}
            unit={model.yu}
            onChange={setY}
          />
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-primary p-7 text-primary-foreground">
          <p className="text-4xl font-bold">{model.formula}</p>
          <p className="mt-5 text-lg">
            Inputs: {x} {model.xu} and {y} {model.yu}
          </p>
          <p className="mt-2 text-3xl font-bold">
            {Number.isFinite(answer)
              ? answer.toLocaleString(undefined, { maximumFractionDigits: 3 })
              : "Undefined"}{" "}
            {model.out}
          </p>
          <p className="mt-4 text-sm opacity-75">{model.note}</p>
        </div>
      </div>
    </Panel>
  );
}

const conversions = {
  length: {
    label: "Length · metres to feet",
    from: "metres",
    to: "feet",
    convert: (n: number) => n * 3.28084,
    working: "metres × 3.28084",
  },
  lengthReverse: {
    label: "Length · feet to metres",
    from: "feet",
    to: "metres",
    convert: (n: number) => n / 3.28084,
    working: "feet ÷ 3.28084",
  },
  area: {
    label: "Area · m² to ft²",
    from: "m²",
    to: "ft²",
    convert: (n: number) => n * 10.7639,
    working: "m² × 10.7639",
  },
  volume: {
    label: "Volume · litres to m³",
    from: "litres",
    to: "m³",
    convert: (n: number) => n / 1000,
    working: "litres ÷ 1000",
  },
  mass: {
    label: "Mass · kilograms to pounds",
    from: "kg",
    to: "lb",
    convert: (n: number) => n * 2.20462,
    working: "kg × 2.20462",
  },
  time: {
    label: "Time · hours to seconds",
    from: "hours",
    to: "seconds",
    convert: (n: number) => n * 3600,
    working: "hours × 3600",
  },
  speed: {
    label: "Speed · km/h to m/s",
    from: "km/h",
    to: "m/s",
    convert: (n: number) => n / 3.6,
    working: "km/h ÷ 3.6",
  },
  temperature: {
    label: "Temperature · °C to °F",
    from: "°C",
    to: "°F",
    convert: (n: number) => (n * 9) / 5 + 32,
    working: "(°C × 9/5) + 32",
  },
  energy: {
    label: "Energy · kWh to MJ",
    from: "kWh",
    to: "MJ",
    convert: (n: number) => n * 3.6,
    working: "kWh × 3.6",
  },
  force: {
    label: "Force · newtons to kilonewtons",
    from: "N",
    to: "kN",
    convert: (n: number) => n / 1000,
    working: "N ÷ 1000",
  },
  pressure: {
    label: "Pressure · pascals to kilopascals",
    from: "Pa",
    to: "kPa",
    convert: (n: number) => n / 1000,
    working: "Pa ÷ 1000",
  },
  power: {
    label: "Power · watts to kilowatts",
    from: "W",
    to: "kW",
    convert: (n: number) => n / 1000,
    working: "W ÷ 1000",
  },
};

function UnitConverter() {
  const [kind, setKind] = useState<keyof typeof conversions>("length"),
    [value, setValue] = useState(1);
  const item = conversions[kind],
    answer = item.convert(value);
  return (
    <Panel
      title="Transparent unit converter"
      description="The conversion factor stays visible so you can learn the method."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <label className="text-sm font-medium">
          Quantity
          <select
            className="mt-2 h-11 w-full rounded-md border bg-background px-3"
            value={kind}
            onChange={(e) => setKind(e.target.value as keyof typeof conversions)}
          >
            {Object.entries(conversions).map(([key, entry]) => (
              <option key={key} value={key}>
                {entry.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Value in {item.from}
          <input
            className="mt-2 h-11 w-full rounded-md border bg-background px-3"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
        <div className="rounded-xl bg-muted p-4">
          <span className="text-xs text-muted-foreground">Result in {item.to}</span>
          <strong className="mt-1 block text-2xl">
            {Number.isFinite(answer)
              ? answer.toLocaleString(undefined, { maximumFractionDigits: 5 })
              : "—"}
          </strong>
        </div>
      </div>
      <p className="mt-5 rounded-lg border p-4 text-sm">
        <strong>Working:</strong> {value} {item.from} → {item.working} ={" "}
        {answer.toLocaleString(undefined, { maximumFractionDigits: 5 })} {item.to}
      </p>
    </Panel>
  );
}

function GraphLab() {
  const [kind, setKind] = useState<"linear" | "quadratic" | "sine">("quadratic");
  const [a, setA] = useState(1),
    [c, setC] = useState(0);
  const points = Array.from({ length: 81 }, (_, index) => {
    const x = -4 + index / 10;
    const y = kind === "linear" ? a * x + c : kind === "sine" ? a * Math.sin(x) + c : a * x * x + c;
    return `${50 + x * 11},${95 - y * 5}`;
  }).join(" ");
  const equation =
    kind === "linear"
      ? `y = ${a}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`
      : kind === "sine"
        ? `y = ${a} sin(x) ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`
        : `y = ${a}x² ${c >= 0 ? "+" : "−"} ${Math.abs(c)}`;
  return (
    <Panel
      title="Function graph laboratory"
      description="Compare linear, quadratic and sine relationships while changing their parameters."
    >
      <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div className="space-y-6">
          <label className="block text-sm font-medium">
            Graph family
            <select
              className="mt-2 h-11 w-full rounded-md border bg-background px-3"
              value={kind}
              onChange={(event) => setKind(event.target.value as typeof kind)}
            >
              <option value="linear">Linear</option>
              <option value="quadratic">Quadratic</option>
              <option value="sine">Sine wave</option>
            </select>
          </label>
          <Slider
            label="Coefficient a"
            value={a}
            min={-3}
            max={3}
            step={0.25}
            unit=""
            onChange={setA}
          />
          <Slider label="Vertical shift c" value={c} min={-6} max={6} unit="" onChange={setC} />
          <p className="rounded-lg border p-4 font-mono">{equation}</p>
          <p className="text-sm leading-6 text-muted-foreground">
            {kind === "linear"
              ? "a controls gradient; c is the y-intercept."
              : kind === "quadratic"
                ? "a controls opening direction and width; c shifts the vertex vertically."
                : "a controls amplitude; c moves the midline vertically."}
          </p>
        </div>
        <svg
          viewBox="0 0 100 110"
          className="w-full rounded-xl bg-slate-950"
          role="img"
          aria-label={`Graph of y equals ${a} x squared plus ${c}`}
        >
          <path d="M50 5V105M5 95H95" stroke="white" strokeOpacity=".35" strokeWidth=".7" />
          <polyline points={points} fill="none" stroke="#38bdf8" strokeWidth="1.8" />
          <circle cx="50" cy={95 - c * 5} r="2" fill="#fbbf24" />
        </svg>
      </div>
    </Panel>
  );
}

const calculators = {
  speed: {
    label: "Speed",
    a: "Distance",
    au: "m",
    b: "Time",
    bu: "s",
    result: "Speed",
    unit: "m/s",
    formula: "v = d ÷ t",
    calculate: (a: number, b: number) => a / b,
  },
  acceleration: {
    label: "Acceleration",
    a: "Change in velocity",
    au: "m/s",
    b: "Time",
    bu: "s",
    result: "Acceleration",
    unit: "m/s²",
    formula: "a = Δv ÷ t",
    calculate: (a: number, b: number) => a / b,
  },
  force: {
    label: "Force",
    a: "Mass",
    au: "kg",
    b: "Acceleration",
    bu: "m/s²",
    result: "Force",
    unit: "N",
    formula: "F = m × a",
    calculate: (a: number, b: number) => a * b,
  },
  kinetic: {
    label: "Kinetic energy",
    a: "Mass",
    au: "kg",
    b: "Speed",
    bu: "m/s",
    result: "Kinetic energy",
    unit: "J",
    formula: "Eₖ = ½mv²",
    calculate: (a: number, b: number) => 0.5 * a * b * b,
  },
  potential: {
    label: "Potential energy",
    a: "Mass",
    au: "kg",
    b: "Height",
    bu: "m",
    result: "Potential energy",
    unit: "J",
    formula: "Eₚ = mgh",
    calculate: (a: number, b: number) => a * 9.81 * b,
  },
  density: {
    label: "Density",
    a: "Mass",
    au: "kg",
    b: "Volume",
    bu: "m³",
    result: "Density",
    unit: "kg/m³",
    formula: "ρ = m ÷ V",
    calculate: (a: number, b: number) => a / b,
  },
  pressure: {
    label: "Pressure",
    a: "Force",
    au: "N",
    b: "Area",
    bu: "m²",
    result: "Pressure",
    unit: "Pa",
    formula: "p = F ÷ A",
    calculate: (a: number, b: number) => a / b,
  },
  wave: {
    label: "Wave speed",
    a: "Frequency",
    au: "Hz",
    b: "Wavelength",
    bu: "m",
    result: "Wave speed",
    unit: "m/s",
    formula: "v = f × λ",
    calculate: (a: number, b: number) => a * b,
  },
  ohm: {
    label: "Ohm’s law",
    a: "Current",
    au: "A",
    b: "Resistance",
    bu: "Ω",
    result: "Voltage",
    unit: "V",
    formula: "V = I × R",
    calculate: (a: number, b: number) => a * b,
  },
  power: {
    label: "Electrical power",
    a: "Voltage",
    au: "V",
    b: "Current",
    bu: "A",
    result: "Power",
    unit: "W",
    formula: "P = V × I",
    calculate: (a: number, b: number) => a * b,
  },
};

function ScienceCalculator() {
  const [kind, setKind] = useState<keyof typeof calculators>("speed"),
    [a, setA] = useState(100),
    [b, setB] = useState(10);
  const item = calculators[kind],
    answer = item.calculate(a, b);
  return (
    <Panel
      title="Worked science calculator"
      description="Select a relationship, enter known values and inspect the substitution."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        <label className="text-sm font-medium">
          Calculator
          <select
            className="mt-2 h-11 w-full rounded-md border bg-background px-3"
            value={kind}
            onChange={(e) => setKind(e.target.value as keyof typeof calculators)}
          >
            {Object.entries(calculators).map(([key, calc]) => (
              <option key={key} value={key}>
                {calc.label}
              </option>
            ))}
          </select>
        </label>
        <NumberField label={`${item.a} (${item.au})`} value={a} setValue={setA} />
        <NumberField label={`${item.b} (${item.bu})`} value={b} setValue={setB} />
      </div>
      <div className="mt-6 grid gap-4 rounded-xl bg-slate-950 p-6 text-white sm:grid-cols-3">
        <Result label="Formula" value={item.formula} />
        <Result label="Substitution" value={`${a} and ${b}`} />
        <Result
          label={item.result}
          value={
            Number.isFinite(answer)
              ? `${answer.toLocaleString(undefined, { maximumFractionDigits: 4 })} ${item.unit}`
              : "Undefined"
          }
        />
      </div>
    </Panel>
  );
}

function NumberField({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <input
        className="mt-2 h-11 w-full rounded-md border bg-background px-3"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </label>
  );
}
function Result({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs opacity-60">{label}</dt>
      <dd className="mt-1 font-bold">{value}</dd>
    </div>
  );
}

function PeriodicExplorer() {
  const [selected, setSelected] = useState(PERIODIC_ELEMENTS[0]!);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PERIODIC_ELEMENTS.map((element) => element.category)))],
    []
  );
  const visible = useMemo(() => {
    const needle = query.toLowerCase();
    return PERIODIC_ELEMENTS.filter(
      (element) =>
        (category === "All" || element.category === category) &&
        `${element.atomicNumber} ${element.symbol} ${element.name}`.toLowerCase().includes(needle)
    );
  }, [category, query]);
  return (
    <Panel
      title="Complete 118-element explorer"
      description="Search by name, symbol or atomic number, then filter by broad element family."
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_240px]">
        <label className="relative">
          <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
          <span className="sr-only">Search elements</span>
          <input
            className="h-10 w-full rounded-md border bg-background pl-9 pr-3"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search oxygen, Fe or 79…"
          />
        </label>
        <select
          className="h-10 rounded-md border bg-background px-3 text-sm"
          aria-label="Filter element category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 xl:grid-cols-10">
          {visible.map((element) => (
            <button
              key={element.atomicNumber}
              onClick={() => setSelected(element)}
              className={`aspect-square rounded-lg border p-1 text-center transition hover:border-primary ${selected.atomicNumber === element.atomicNumber ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              <span className="block text-[10px] opacity-65">{element.atomicNumber}</span>
              <strong className="text-lg">{element.symbol}</strong>
            </button>
          ))}
        </div>
        <div className="rounded-xl bg-muted p-5">
          <span className="text-sm text-muted-foreground">
            Atomic number {selected.atomicNumber}
          </span>
          <p className="mt-2 text-4xl font-bold">{selected.symbol}</p>
          <p className="mt-2 text-xl font-semibold">{selected.name}</p>
          <Badge className="mt-4" variant="outline">
            {selected.category}
          </Badge>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Element names and symbols follow the IUPAC periodic table. Some category boundaries,
            particularly for the heaviest elements, are represented here using broad educational
            families rather than disputed fine classifications.
          </p>
        </div>
      </div>
    </Panel>
  );
}

const challengeQuestions = [
  {
    q: "Why do astronauts appear weightless while orbiting Earth?",
    options: [
      "There is no gravity",
      "They and their spacecraft are continuously falling together",
      "Space removes mass",
    ],
    answer: 1,
    why: "Gravity remains strong in low Earth orbit. Astronauts and the spacecraft share the same free fall, producing apparent weightlessness.",
  },
  {
    q: "Which colour of visible light has the shortest wavelength?",
    options: ["Red", "Green", "Violet"],
    answer: 2,
    why: "Violet light has a shorter visible wavelength than green or red light.",
  },
  {
    q: "A force of 12 N acts on a 3 kg object. What is its acceleration?",
    options: ["4 m/s²", "9 m/s²", "36 m/s²"],
    answer: 0,
    why: "Using a = F/m gives 12 ÷ 3 = 4 m/s².",
  },
  {
    q: "Why does a rainbow appear opposite the Sun?",
    options: [
      "Droplets emit their own light",
      "The viewing geometry sends internally reflected sunlight back toward the observer",
      "Earth’s magnetic field bends the colours",
    ],
    answer: 1,
    why: "Refraction, dispersion and internal reflection in droplets direct the primary bow toward an observer facing away from the Sun.",
  },
  {
    q: "Which quantity is measured in pascals?",
    options: ["Pressure", "Energy", "Electric charge"],
    answer: 0,
    why: "One pascal equals one newton of force distributed over one square metre.",
  },
  {
    q: "What happens to kinetic energy if speed doubles while mass stays constant?",
    options: ["It doubles", "It becomes four times as large", "It stays constant"],
    answer: 1,
    why: "Kinetic energy contains speed squared: Eₖ = ½mv².",
  },
  {
    q: "Why can sound not travel through a perfect vacuum?",
    options: [
      "Sound needs particles to transmit mechanical disturbance",
      "Vacuum absorbs all frequencies",
      "Gravity stops sound",
    ],
    answer: 0,
    why: "Sound is a mechanical wave and requires matter whose particles can interact.",
  },
  {
    q: "A 2 kg object occupies 0.5 m³. What is its density?",
    options: ["1 kg/m³", "4 kg/m³", "2.5 kg/m³"],
    answer: 1,
    why: "Density is mass divided by volume: 2 ÷ 0.5 = 4 kg/m³.",
  },
  {
    q: "Which statement about boiling water is accurate?",
    options: [
      "It always boils at exactly 100°C",
      "Its boiling temperature depends on pressure",
      "Salt always lowers the boiling temperature",
    ],
    answer: 1,
    why: "Boiling occurs when vapour pressure matches surrounding pressure, so altitude and pressure affect boiling temperature.",
  },
  {
    q: "What does the slope of a distance–time graph represent?",
    options: ["Speed", "Force", "Mass"],
    answer: 0,
    why: "Slope is change in distance divided by change in time, which is speed.",
  },
];

function DailyChallenge() {
  const index = Math.floor(Date.now() / 86400000) % challengeQuestions.length,
    item = challengeQuestions[index]!;
  return (
    <QuestionCard
      storageKey={`daily-${index}`}
      title="Today’s challenge"
      question={item.q}
      options={item.options}
      answer={item.answer}
      explanation={item.why}
    />
  );
}

function QuizArena() {
  const items = challengeQuestions;
  const [answers, setAnswers] = useState<Record<number, number>>({}),
    [checked, setChecked] = useState(false);
  const score = items.filter((item, index) => answers[index] === item.answer).length;
  const submit = () => {
    setChecked(true);
    const previous = Number(localStorage.getItem("eduverse:quiz-arena-best") ?? "0");
    localStorage.setItem("eduverse:quiz-arena-best", String(Math.max(previous, score)));
  };
  return (
    <Panel
      title="Ten-question science quiz"
      description="Answer every question, then review a scientific explanation for each result."
    >
      <div className="space-y-5">
        {items.map((item, index) => (
          <fieldset key={item.q} className="rounded-xl border p-4">
            <legend className="px-2 font-semibold">
              {index + 1}. {item.q}
            </legend>
            <div className="mt-3 grid gap-2">
              {item.options.map((option, optionIndex) => (
                <label
                  key={option}
                  className="flex cursor-pointer gap-3 rounded-lg border p-3 text-sm hover:bg-muted"
                >
                  <input
                    type="radio"
                    name={`arena-${index}`}
                    checked={answers[index] === optionIndex}
                    onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                  />
                  {option}
                </label>
              ))}
            </div>
            {checked && (
              <p
                className={`mt-3 rounded-lg p-3 text-sm ${answers[index] === item.answer ? "bg-emerald-500/10" : "bg-destructive/10"}`}
              >
                <strong>
                  {answers[index] === item.answer
                    ? "Correct. "
                    : `Correct answer: ${item.options[item.answer]}. `}
                </strong>
                {item.why}
              </p>
            )}
          </fieldset>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <Button disabled={Object.keys(answers).length < items.length} onClick={submit}>
          Check answers
        </Button>
        {checked && (
          <>
            <Badge className="text-sm">
              {score}/{items.length}
            </Badge>
            <Button
              variant="ghost"
              onClick={() => {
                setAnswers({});
                setChecked(false);
              }}
            >
              <RotateCcw /> Retry
            </Button>
          </>
        )}
      </div>
    </Panel>
  );
}

function QuestionCard({
  storageKey,
  title,
  question,
  options,
  answer,
  explanation,
}: {
  storageKey: string;
  title: string;
  question: string;
  options: readonly string[];
  answer: number;
  explanation: string;
}) {
  const [choice, setChoice] = useState<number | null>(null),
    [revealed, setRevealed] = useState(false);
  useEffect(() => {
    setRevealed(localStorage.getItem(`eduverse:${storageKey}`) === "done");
  }, [storageKey]);
  const check = () => {
    setRevealed(true);
    localStorage.setItem(`eduverse:${storageKey}`, "done");
  };
  return (
    <Panel title={title} description="Choose before revealing the explanation.">
      <p className="text-lg font-semibold">{question}</p>
      <div className="mt-5 grid gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            onClick={() => setChoice(index)}
            className={`rounded-xl border p-4 text-left text-sm transition ${choice === index ? "border-primary bg-primary/5" : "hover:bg-muted"}`}
          >
            {option}
          </button>
        ))}
      </div>
      <Button className="mt-5" disabled={choice === null} onClick={check}>
        Reveal answer
      </Button>
      {revealed && (
        <div
          className={`mt-5 rounded-xl p-4 ${choice === answer ? "bg-emerald-500/10" : "bg-amber-500/10"}`}
        >
          <strong>
            {choice === answer
              ? "Your prediction is supported."
              : `Best answer: ${options[answer]}`}
          </strong>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{explanation}</p>
        </div>
      )}
    </Panel>
  );
}

const PREDICTIONS = [
  {
    key: "feather",
    question:
      "In a vacuum, a hammer and a feather are released together from the same height. Which reaches the floor first?",
    options: ["The hammer", "The feather", "They arrive together"],
    answer: 2,
    explanation:
      "Without air resistance, both objects have the same gravitational acceleration. Apollo 15 astronaut David Scott demonstrated this on the Moon.",
  },
  {
    key: "ice",
    question:
      "A floating ice cube melts in a completely full glass of water. What happens to the water level?",
    options: ["It rises and overflows", "It falls", "It stays essentially the same"],
    answer: 2,
    explanation:
      "Floating ice displaces a weight of water equal to its own weight. When it melts, it produces that same weight—and therefore the same volume—of liquid water.",
  },
  {
    key: "tracks",
    question:
      "Two identical balls start and finish at the same heights. One track dips steeply before rising; the other is gently curved. Which may arrive first?",
    options: [
      "The steeper dipping track can",
      "They must arrive together",
      "The gentler track always does",
    ],
    answer: 0,
    explanation:
      "The ball on the deeper track can gain speed earlier and maintain a higher average speed, even though it travels farther.",
  },
  {
    key: "balloon",
    question: "A rubbed balloon is brought near tiny neutral paper pieces. What happens?",
    options: [
      "Nothing, because paper is neutral",
      "The paper can be attracted",
      "The paper must be repelled",
    ],
    answer: 1,
    explanation:
      "The balloon’s electric field polarizes charge in the paper, making opposite charge slightly closer and producing net attraction.",
  },
  {
    key: "pressure",
    question:
      "The same force is applied using a flat shoe and a narrow heel. Which produces greater pressure?",
    options: ["The flat shoe", "The narrow heel", "They are equal"],
    answer: 1,
    explanation:
      "Pressure equals force divided by area. A smaller contact area produces greater pressure for the same force.",
  },
] as const;

function PredictReveal() {
  const [index, setIndex] = useState(0);
  const item = PREDICTIONS[index]!;
  return (
    <div className="space-y-4">
      <QuestionCard
        key={item.key}
        storageKey={`predict-${item.key}`}
        title={`Prediction ${index + 1} of ${PREDICTIONS.length}`}
        question={item.question}
        options={item.options}
        answer={item.answer}
        explanation={item.explanation}
      />
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => setIndex((current) => (current + 1) % PREDICTIONS.length)}
        >
          Next prediction
        </Button>
      </div>
    </div>
  );
}

function MythLab() {
  const myths = [
    [
      "Lightning never strikes the same place twice.",
      "Tall or exposed structures can be struck repeatedly. Lightning protection is designed with this real risk in mind.",
    ],
    [
      "There is no gravity in space.",
      "Gravity acts throughout space. Orbiting astronauts appear weightless because they are in continuous free fall with their spacecraft.",
    ],
    [
      "Water always boils at exactly 100°C.",
      "Boiling temperature depends on pressure and dissolved substances. 100°C applies approximately to pure water at standard atmospheric pressure.",
    ],
    [
      "Heavier objects always fall faster.",
      "Without significant air resistance, objects near Earth share the same gravitational acceleration regardless of mass.",
    ],
    [
      "The seasons occur because Earth moves closer to and farther from the Sun.",
      "Earth’s axial tilt changes sunlight angle and day length. The two hemispheres have opposite seasons despite sharing nearly the same Earth–Sun distance.",
    ],
    [
      "Glass is a liquid that flows slowly at room temperature.",
      "Ordinary window glass is an amorphous solid. Uneven old panes mainly reflect historical manufacturing methods.",
    ],
    [
      "A moving object needs a continuous net force to keep moving.",
      "A net force is needed to change velocity. With no net force, an object maintains constant velocity.",
    ],
    [
      "The ocean is blue only because it reflects the sky.",
      "Sky reflection can contribute, but water also selectively absorbs longer visible wavelengths and scatters shorter wavelengths.",
    ],
    [
      "Humans use only ten percent of the brain.",
      "Brain imaging and clinical evidence show that functions are distributed across the brain; the ten-percent claim has no scientific basis.",
    ],
    [
      "The Great Wall of China is easily visible from the Moon with the unaided eye.",
      "At lunar distance its narrow width is far below normal unaided-eye resolution, and astronauts have not confirmed the popular claim.",
    ],
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Panel
      title="Myth clinic"
      description="Select a claim to uncover the missing condition or mistaken model."
    >
      <div className="space-y-3">
        {myths.map(([myth, reality], index) => (
          <div key={myth} className="overflow-hidden rounded-xl border">
            <button
              className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>Myth: {myth}</span>
              <Lightbulb className="size-5 shrink-0 text-amber-500" />
            </button>
            {open === index && (
              <p className="border-t bg-muted/30 p-4 text-sm leading-6 text-muted-foreground">
                <strong className="text-foreground">Reality:</strong> {reality}
              </p>
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}

const PUZZLES = [
  {
    title: "The cooling cups",
    story:
      "Equal amounts of hot water are poured into a wide shallow cup and a narrow tall cup. Both are uncovered in the same room.",
    clue: "A larger exposed surface can increase evaporation and heat transfer.",
    question: "Which is more likely to cool faster?",
    options: ["Wide cup", "Tall cup"],
    answer: 0,
    explanation:
      "The wide cup is expected to cool faster in this simplified comparison. Airflow, material and exact geometry also matter.",
  },
  {
    title: "The mystery circuit",
    story:
      "Two identical lamps are connected in series to a battery. A third identical lamp is added in series.",
    clue: "Adding series resistance reduces current from an ideal fixed-voltage source.",
    question: "What happens to the lamps?",
    options: ["They become dimmer", "They become brighter", "Nothing changes"],
    answer: 0,
    explanation:
      "With greater total resistance, current falls. Each identical lamp receives less power in the simple model.",
  },
  {
    title: "The sealed balance",
    story: "A candle burns inside a completely sealed transparent container resting on a balance.",
    clue: "Matter cannot enter or leave the sealed system.",
    question: "What happens to total measured mass?",
    options: ["It decreases", "It stays essentially constant", "It doubles"],
    answer: 1,
    explanation:
      "Wax and oxygen become other substances, but the total mass of the closed system remains essentially constant.",
  },
  {
    title: "The two shadows",
    story:
      "A small object is illuminated by two separated lamps and casts overlapping shadows on a screen.",
    clue: "Each lamp can be blocked independently.",
    question: "Where is the darkest region?",
    options: ["Where both lamps are blocked", "Where only one is blocked", "Everywhere equally"],
    answer: 0,
    explanation:
      "The umbra receiving light from neither lamp is darkest; regions receiving one lamp form lighter partial shadows.",
  },
  {
    title: "The floating block",
    story: "A floating wooden block is moved from fresh water into denser salt water.",
    clue: "It must displace fluid whose weight equals its own.",
    question: "How does it float in salt water?",
    options: ["Lower", "At the same depth", "Higher"],
    answer: 2,
    explanation:
      "Denser salt water provides the required buoyant force with a smaller displaced volume, so less of the block is submerged.",
  },
] as const;

function PuzzleRoom() {
  const [index, setIndex] = useState(0),
    [answer, setAnswer] = useState<number | null>(null);
  const puzzle = PUZZLES[index]!,
    correct = answer === puzzle.answer;
  return (
    <Panel
      title={`${puzzle.title} · Room ${index + 1}/${PUZZLES.length}`}
      description="Use the clue and scientific model, not intuition alone."
    >
      <div className="rounded-xl bg-muted p-5 text-sm leading-7">
        <p>{puzzle.story}</p>
        <p className="mt-3">
          <strong>Clue:</strong> {puzzle.clue}
        </p>
      </div>
      <p className="mt-5 font-semibold">{puzzle.question}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {puzzle.options.map((option, optionIndex) => (
          <Button
            key={option}
            variant={answer === optionIndex ? "default" : "outline"}
            onClick={() => setAnswer(optionIndex)}
          >
            {option}
          </Button>
        ))}
      </div>
      {answer !== null && (
        <p
          className={`mt-5 rounded-xl p-4 text-sm ${correct ? "bg-emerald-500/10" : "bg-amber-500/10"}`}
        >
          <strong>
            {correct ? "Room unlocked. " : `Best answer: ${puzzle.options[puzzle.answer]}. `}
          </strong>
          {puzzle.explanation}
        </p>
      )}
      <div className="mt-5 flex justify-end">
        <Button
          variant="ghost"
          onClick={() => {
            setIndex((current) => (current + 1) % PUZZLES.length);
            setAnswer(null);
          }}
        >
          Next room
        </Button>
      </div>
    </Panel>
  );
}

function Achievements() {
  const [progress, setProgress] = useState({ completed: 0, daily: 0, predictions: 0, quizBest: 0 });
  useEffect(() => {
    let completed = 0,
      daily = 0,
      predictions = 0;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key?.startsWith("phen-done-") && localStorage.getItem(key) === "1") completed += 1;
      if (key?.startsWith("eduverse:daily-") && localStorage.getItem(key) === "done") daily += 1;
      if (key?.startsWith("eduverse:predict-") && localStorage.getItem(key) === "done")
        predictions += 1;
    }
    setProgress({
      completed,
      daily,
      predictions,
      quizBest: Number(localStorage.getItem("eduverse:quiz-arena-best") ?? "0"),
    });
  }, []);
  const badges = [
    { name: "First Discovery", earned: progress.completed >= 1, note: "Complete one phenomenon" },
    { name: "Nature Detective", earned: progress.completed >= 5, note: "Complete five phenomena" },
    {
      name: "Phenomena Explorer",
      earned: progress.completed >= 25,
      note: "Complete all 25 phenomena",
    },
    { name: "Daily Thinker", earned: progress.daily >= 3, note: "Finish three daily challenges" },
    {
      name: "Prediction Scientist",
      earned: progress.predictions >= 5,
      note: "Reveal all five prediction models",
    },
    {
      name: "Perfect Quiz",
      earned: progress.quizBest >= challengeQuestions.length,
      note: "Score 10/10 in the Quiz Arena",
    },
  ];
  return (
    <Panel title="Your local achievements" description="Progress stays private in this browser.">
      <p className="mb-5 text-sm text-muted-foreground">
        Progress detected:{" "}
        <strong className="text-foreground">
          {progress.completed} phenomena · {progress.daily} daily challenges · best quiz{" "}
          {progress.quizBest}/10
        </strong>
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className={`rounded-xl border p-5 ${badge.earned ? "border-amber-500/50 bg-amber-500/10" : "opacity-55"}`}
          >
            <Trophy
              className={`size-7 ${badge.earned ? "text-amber-500" : "text-muted-foreground"}`}
            />
            <strong className="mt-3 block">{badge.name}</strong>
            <span className="mt-1 block text-xs text-muted-foreground">{badge.note}</span>
            {badge.earned && <Badge className="mt-3">Earned</Badge>}
          </div>
        ))}
      </div>
    </Panel>
  );
}

const dictionary = [
  ["Acceleration", "The rate at which velocity changes with time.", "m/s²"],
  [
    "Amplitude",
    "The maximum displacement of an oscillation from its equilibrium position.",
    "metres or context-dependent",
  ],
  ["Atom", "The smallest unit of an element that retains that element’s chemical identity.", "—"],
  ["Buoyancy", "The upward resultant force a fluid exerts on an immersed or floating object.", "N"],
  ["Condensation", "A phase change in which a gas becomes a liquid.", "—"],
  ["Density", "Mass per unit volume.", "kg/m³"],
  [
    "Displacement",
    "Change in position, including direction, from an initial point to a final point.",
    "m",
  ],
  ["Electric field", "A region in which an electric charge experiences a force.", "N/C or V/m"],
  [
    "Energy",
    "A conserved quantity that can be transferred or transformed and is associated with the capacity for change.",
    "J",
  ],
  ["Force", "An interaction capable of changing an object’s momentum.", "N"],
  ["Frequency", "The number of cycles or events per unit time.", "Hz"],
  [
    "Friction",
    "A contact interaction that opposes relative sliding or attempted sliding between surfaces.",
    "N",
  ],
  [
    "Gradient",
    "The change in a vertical quantity divided by the corresponding change in a horizontal quantity.",
    "depends on axes",
  ],
  ["Hypothesis", "A testable proposed explanation or prediction based on existing knowledge.", "—"],
  [
    "Inertia",
    "The tendency of an object to resist a change in velocity; mass measures translational inertia.",
    "kg",
  ],
  ["Mass", "A measure of an object’s inertia and a source of gravitational interaction.", "kg"],
  ["Model", "A simplified representation used to describe, explain or predict a system.", "—"],
  ["Momentum", "The product of mass and velocity for a classical particle.", "kg·m/s"],
  ["Period", "The time required for one complete cycle.", "s"],
  ["Power", "The rate of energy transfer or work done.", "W"],
  ["Pressure", "Normal force distributed per unit area.", "Pa"],
  [
    "Refraction",
    "A change in direction caused by a wave changing speed as it enters a different medium.",
    "—",
  ],
  ["Scalar", "A quantity described by magnitude without direction.", "depends on quantity"],
  ["Speed", "Distance travelled per unit time; the magnitude of velocity.", "m/s"],
  [
    "Temperature",
    "A state variable related to thermal equilibrium and average microscopic energy distributions.",
    "K or °C",
  ],
  [
    "Uncertainty",
    "A quantified range expressing reasonable doubt about a measurement result.",
    "same unit as measurement",
  ],
  ["Vector", "A quantity with both magnitude and direction.", "depends on quantity"],
  ["Velocity", "The rate of change of displacement with time.", "m/s"],
  ["Voltage", "Electric potential difference: transferred energy per unit charge.", "V"],
  [
    "Wavelength",
    "The spatial distance between corresponding points on successive cycles of a wave.",
    "m",
  ],
  [
    "Work",
    "Energy transferred when a force acts through a displacement; for constant force, W = Fs cos θ.",
    "J",
  ],
] as const;

function ScienceDictionary() {
  const [query, setQuery] = useState("");
  const visible = useMemo(
    () =>
      dictionary.filter((item) =>
        `${item[0]} ${item[1]}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );
  return (
    <Panel
      title="Search the science dictionary"
      description="Plain definitions are paired with symbols or units where useful."
    >
      <label className="relative block">
        <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
        <span className="sr-only">Search terms</span>
        <input
          className="h-10 w-full rounded-md border bg-background pl-9 pr-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search refraction, vector, uncertainty…"
        />
      </label>
      <dl className="mt-5 grid gap-3 md:grid-cols-2">
        {visible.map(([term, definition, unit]) => (
          <div key={term} className="rounded-xl border p-4">
            <dt className="font-bold">{term}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted-foreground">{definition}</dd>
            <dd className="mt-2 text-xs">
              <strong>Unit/symbol:</strong> {unit}
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}

const MISTAKE_CASES = [
  {
    title: "Formula selection",
    question: "A runner travels 150 m in 5 s. What is the average speed?",
    unit: "m/s",
    correct: "30",
    review: "Speed, distance and time",
    feedback: {
      "30": "Correct: speed = distance ÷ time = 150 ÷ 5.",
      "750": "You multiplied distance by time. Recheck v = d/t.",
      "0.033": "You reversed the division and calculated time ÷ distance.",
    },
  },
  {
    title: "Unit conversion",
    question: "Convert 72 km/h to metres per second.",
    unit: "m/s",
    correct: "20",
    review: "Converting speed units",
    feedback: {
      "20": "Correct: divide km/h by 3.6.",
      "259.2": "You multiplied by 3.6 instead of dividing.",
      "72": "The number cannot stay unchanged because the unit size changed.",
    },
  },
  {
    title: "Squared variable",
    question: "A 2 kg object moves at 3 m/s. What is its kinetic energy?",
    unit: "J",
    correct: "9",
    review: "Kinetic energy",
    feedback: {
      "9": "Correct: ½ × 2 × 3² = 9 J.",
      "3": "You did not square the speed in Eₖ = ½mv².",
      "18": "You used mv² but omitted the factor of one half.",
    },
  },
  {
    title: "Graph interpretation",
    question: "A distance–time graph rises from 0 m at 0 s to 40 m at 10 s. What is its slope?",
    unit: "m/s",
    correct: "4",
    review: "Distance–time graph gradient",
    feedback: {
      "4": "Correct: change in distance ÷ change in time = 40 ÷ 10.",
      "400": "You multiplied the coordinate changes instead of dividing.",
      "0.25": "You inverted the gradient and calculated time ÷ distance.",
    },
  },
] as const;

function MistakeAnalyzer() {
  const [caseIndex, setCaseIndex] = useState(0),
    [choice, setChoice] = useState("");
  const item = MISTAKE_CASES[caseIndex]!;
  return (
    <Panel
      title="Diagnose a worked mistake"
      description="Select the answer a learner gave to receive targeted feedback."
    >
      <label className="mb-5 block text-sm font-medium">
        Practice case
        <select
          className="mt-2 h-11 w-full rounded-md border bg-background px-3"
          value={caseIndex}
          onChange={(event) => {
            setCaseIndex(Number(event.target.value));
            setChoice("");
          }}
        >
          {MISTAKE_CASES.map((entry, index) => (
            <option key={entry.title} value={index}>
              {entry.title}
            </option>
          ))}
        </select>
      </label>
      <p className="font-semibold">{item.question}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.keys(item.feedback).map((option) => (
          <Button
            key={option}
            variant={choice === option ? "default" : "outline"}
            onClick={() => setChoice(option)}
          >
            {option} {item.unit}
          </Button>
        ))}
      </div>
      {choice && (
        <div
          className={`mt-5 rounded-xl p-4 text-sm leading-6 ${choice === item.correct ? "bg-emerald-500/10" : "bg-amber-500/10"}`}
        >
          <div className="flex items-center gap-2 font-semibold">
            {choice === item.correct && <CheckCircle2 className="size-5" />}
            {choice === item.correct ? "Correct method" : "Likely misconception"}
          </div>
          <p className="mt-2 text-muted-foreground">
            {item.feedback[choice as keyof typeof item.feedback]}
          </p>
          {choice !== item.correct && (
            <p className="mt-3 font-medium">Recommended review: {item.review}.</p>
          )}
        </div>
      )}
    </Panel>
  );
}

function KnowledgeGuide({ slug }: { slug: string }) {
  const topics = FEATURE_GUIDES[slug] ?? [];
  if (!topics.length) return null;
  return (
    <div className="space-y-5">
      {topics.map((topic, index) => (
        <article key={topic.title} className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[220px_1fr]">
            <div
              className="flex min-h-40 flex-col justify-between p-6 text-white"
              style={{
                background: `linear-gradient(145deg, hsl(${205 + index * 55} 75% 35%), hsl(${230 + index * 40} 65% 18%))`,
              }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                {topic.eyebrow}
              </span>
              <span className="mt-8 text-5xl font-bold text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-bold">{topic.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{topic.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {topic.keyIdeas.map((idea) => (
                  <li
                    key={idea}
                    className="flex gap-2 rounded-lg bg-muted/50 p-3 text-sm leading-6"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                    {idea}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border-l-4 border-primary bg-primary/5 p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Think scientifically
                </span>
                <p className="mt-2 font-medium">{topic.question}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

const STUDY_PATHS = {
  beginner: {
    title: "Curious beginner",
    duration: "4 weeks · 3 sessions per week",
    steps: [
      "Measurement and scientific quantities",
      "Forces and everyday motion",
      "Energy and its transformations",
      "Five selected natural phenomena",
      "Beginner knowledge check",
    ],
  },
  exam: {
    title: "Physics examination revision",
    duration: "6 weeks · 5 sessions per week",
    steps: [
      "Build a formula and unit checklist",
      "Review motion graphs and equations",
      "Practise forces, pressure and energy",
      "Complete timed topic quizzes",
      "Analyze mistakes and repeat weak questions",
    ],
  },
  mathematics: {
    title: "Mathematics foundations",
    duration: "5 weeks · 4 sessions per week",
    steps: [
      "Whole numbers and operations",
      "Fractions and decimals",
      "Ratio and proportion",
      "Algebraic expressions and equations",
      "Graphs, coordinates and geometry",
    ],
  },
};

function StudyPathBuilder() {
  const [path, setPath] = useState<keyof typeof STUDY_PATHS>("beginner");
  const selected = STUDY_PATHS[path];
  return (
    <Panel
      title="Build your guided route"
      description="Choose a goal to receive a sensible learning sequence."
    >
      <div className="flex flex-wrap gap-2">
        {Object.entries(STUDY_PATHS).map(([key, item]) => (
          <Button
            key={key}
            variant={path === key ? "default" : "outline"}
            onClick={() => setPath(key as keyof typeof STUDY_PATHS)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border bg-muted/30 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-2xl font-bold">{selected.title}</h4>
          <Badge variant="outline">{selected.duration}</Badge>
        </div>
        <ol className="mt-6 space-y-3">
          {selected.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-4 rounded-xl bg-background p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="font-medium">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Your lesson completion and quiz results remain stored privately in this browser. The
          sequence can later connect to student accounts without changing the learning content.
        </p>
      </div>
    </Panel>
  );
}

const DOWNLOADS = [
  {
    title: "Physics Formula and Units Sheet",
    description: "Mechanics, matter, waves and electricity formulas with SI units.",
    href: "/downloads/eduverse-physics-formula-sheet.pdf",
    pages: 3,
  },
  {
    title: "Safe Experiment Planner",
    description: "Question, variables, safety, method, results and conclusion templates.",
    href: "/downloads/eduverse-experiment-planner.pdf",
    pages: 4,
  },
  {
    title: "Natural Phenomena Revision Pack",
    description: "Illustrated review prompts, myth checks and a separate answer section.",
    href: "/downloads/eduverse-phenomena-revision-pack.pdf",
    pages: 6,
  },
];

function DownloadLibrary() {
  return (
    <Panel
      title="Printable EduVerse library"
      description="These PDF resources are ready for classroom, home study or offline revision."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {DOWNLOADS.map((item) => (
          <div key={item.href} className="flex flex-col rounded-xl border p-5">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Download className="size-5" />
            </span>
            <h4 className="mt-4 text-lg font-bold">{item.title}</h4>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">PDF · {item.pages} pages</p>
            <Button asChild className="mt-4">
              <a href={item.href} download>
                Download PDF <Download />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </Panel>
  );
}

const BILINGUAL_TERMS = [
  ["Force", "القوة", "A push or pull that can change motion."],
  ["Energy", "الطاقة", "The capacity of a system to cause change or do work."],
  ["Mass", "الكتلة", "A measure of the amount of matter and inertia of an object."],
  ["Velocity", "السرعة المتجهة", "Speed together with direction."],
  ["Acceleration", "التسارع", "The rate at which velocity changes."],
  ["Refraction", "الانكسار", "A change in wave direction caused by a change in speed."],
  ["Wavelength", "الطول الموجي", "The distance between corresponding points on successive waves."],
  ["Electric current", "التيار الكهربائي", "The rate of flow of electric charge."],
] as const;

function BilingualScience() {
  const [language, setLanguage] = useState<"both" | "english" | "arabic">("both");
  return (
    <Panel
      title="English–Arabic science support"
      description="Compare reviewed core terms while equations and symbols remain left-to-right."
    >
      <div className="flex flex-wrap gap-2">
        <Button
          variant={language === "both" ? "default" : "outline"}
          onClick={() => setLanguage("both")}
        >
          Both languages
        </Button>
        <Button
          variant={language === "english" ? "default" : "outline"}
          onClick={() => setLanguage("english")}
        >
          English
        </Button>
        <Button
          variant={language === "arabic" ? "default" : "outline"}
          onClick={() => setLanguage("arabic")}
        >
          العربية
        </Button>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {BILINGUAL_TERMS.map(([english, arabic, definition]) => (
          <div key={english} className="rounded-xl border p-5">
            {language !== "arabic" && <h4 className="text-lg font-bold">{english}</h4>}
            {language !== "english" && (
              <p dir="rtl" lang="ar" className="mt-1 text-right text-xl font-bold text-primary">
                {arabic}
              </p>
            )}
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{definition}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-muted p-4 text-sm leading-6">
        <strong>Layout rule:</strong> Arabic paragraphs use right-to-left direction, while equations
        such as{" "}
        <span dir="ltr" className="mx-1 inline-block font-mono">
          F = ma
        </span>{" "}
        retain their mathematical order.
      </div>
    </Panel>
  );
}
