"use client";

import { useMemo, useState } from "react";
import { markStep } from "@/lib/progress-store";

const STATES = {
  solid: {
    label: "Solid",
    note: "Particles are tightly packed in fixed positions and only vibrate.",
    count: 36,
  },
  liquid: {
    label: "Liquid",
    note: "Particles remain close together but move past one another.",
    count: 30,
  },
  gas: {
    label: "Gas",
    note: "Particles are far apart and move quickly in random directions.",
    count: 14,
  },
} as const;

type StateKey = keyof typeof STATES;

export function DensityExplorer({ lessonId }: { lessonId: string }) {
  const [state, setState] = useState<StateKey>("solid");
  const [mass, setMass] = useState(250);
  const [volume, setVolume] = useState(200);
  const density = mass / volume;

  const behaviour = useMemo(() => {
    if (Math.abs(density - 1) < 0.02) return "remains suspended in water";
    return density < 1 ? "floats on water" : "sinks in water";
  }, [density]);

  function touched() {
    markStep(lessonId, "densityExplorer");
  }

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Particle model explorer</h4>
          <p className="text-sm text-muted-foreground">
            Change the state and compare particle spacing and movement.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(STATES) as StateKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setState(key);
                touched();
              }}
              className={`rounded-md border px-3 py-2 text-sm ${
                state === key ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              {STATES[key].label}
            </button>
          ))}
        </div>
        <ParticleBox state={state} />
        <p className="rounded-md bg-muted/40 p-3 text-sm text-muted-foreground">
          <strong className="text-foreground">{STATES[state].label}:</strong>{" "}
          {STATES[state].note}
        </p>
      </section>

      <section className="space-y-4 border-t pt-5">
        <div>
          <h4 className="font-semibold">Density and floating calculator</h4>
          <p className="text-sm text-muted-foreground">
            Water has a density of approximately 1 g/cm³. Adjust mass and volume to test an object.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Slider
            label="Mass"
            value={mass}
            unit="g"
            min={20}
            max={1000}
            step={10}
            onChange={(value) => {
              setMass(value);
              touched();
            }}
          />
          <Slider
            label="Volume"
            value={volume}
            unit="cm³"
            min={20}
            max={1000}
            step={10}
            onChange={(value) => {
              setVolume(value);
              touched();
            }}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Result label="Calculation" value={`${mass} ÷ ${volume}`} />
          <Result label="Density" value={`${density.toFixed(2)} g/cm³`} />
          <Result label="Prediction" value={`Object ${behaviour}`} />
        </div>
        <div className="relative mx-auto h-48 max-w-md overflow-hidden rounded-xl border bg-sky-500/5" role="img" aria-label={`An object with density ${density.toFixed(2)} grams per cubic centimetre ${behaviour}.`}>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-sky-500/20" />
          <div
            className="absolute left-1/2 size-16 -translate-x-1/2 rounded-lg border-2 border-primary bg-primary/30 transition-all"
            style={{ top: density < 1 ? 55 : Math.abs(density - 1) < 0.02 ? 95 : 125 }}
          />
          <span className="absolute left-3 top-3 text-xs text-muted-foreground">Water: 1.00 g/cm³</span>
        </div>
      </section>
    </div>
  );
}

function ParticleBox({ state }: { state: StateKey }) {
  const particles = Array.from({ length: STATES[state].count });
  return (
    <div
      className="relative h-52 overflow-hidden rounded-lg border bg-muted/30"
      role="img"
      aria-label={`${STATES[state].label} particle model. ${STATES[state].note}`}
    >
      {particles.map((_, index) => {
        const solidCols = 6;
        const solidX = 16 + (index % solidCols) * 14;
        const solidY = 20 + Math.floor(index / solidCols) * 14;
        const liquidX = 10 + ((index * 19) % 78);
        const liquidY = 48 + ((index * 23) % 45);
        const gasX = 6 + ((index * 31) % 88);
        const gasY = 8 + ((index * 47) % 82);
        const x = state === "solid" ? solidX : state === "liquid" ? liquidX : gasX;
        const y = state === "solid" ? solidY : state === "liquid" ? liquidY : gasY;
        return (
          <span
            key={index}
            className={`absolute size-3 rounded-full bg-primary ${state === "gas" ? "animate-pulse" : ""}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        );
      })}
    </div>
  );
}

function Slider({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="text-sm">
      {label}: <strong>{value} {unit}</strong>
      <input
        className="mt-2 w-full"
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

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
