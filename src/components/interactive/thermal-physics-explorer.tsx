"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";

export type ThermalPhysicsMode =
  | "brownian-motion"
  | "gas-model"
  | "gas-pressure"
  | "rms-energy"
  | "boltzmann-population"
  | "stellar-equilibrium"
  | "stellar-evolution"
  | "neutron-star-pulsar"
  | "thermal-review";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (value: number) => void;
};

function Slider({ label, value, min, max, step, unit = "", onChange }: SliderProps) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="flex items-center justify-between gap-3">
        <span>{label}</span>
        <strong>{value.toLocaleString(undefined, { maximumFractionDigits: 3 })}{unit}</strong>
      </span>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value))}
        className="w-full accent-sky-600"
      />
    </label>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-xl border bg-card p-4 shadow-sm sm:p-5">{children}</div>;
}

function ParticleBox({ count, speed, large = false }: { count: number; speed: number; large?: boolean }) {
  const particles = useMemo(
    () => Array.from({ length: count }, (_, index) => ({
      x: 25 + ((index * 71) % 610),
      y: 25 + ((index * 47) % 220),
      dx: ((index % 5) - 2) * speed,
      dy: (((index * 3) % 5) - 2) * speed,
    })),
    [count, speed]
  );
  return (
    <svg viewBox="0 0 680 280" className="w-full" role="img" aria-label="Gas particles moving randomly inside a container">
      <rect x="8" y="8" width="664" height="264" rx="16" className="fill-sky-50 stroke-slate-700 dark:fill-slate-900" strokeWidth="3" />
      {particles.map((particle, index) => (
        <g key={index}>
          <circle cx={particle.x} cy={particle.y} r={large && index === 0 ? 13 : 5} className={large && index === 0 ? "fill-amber-500" : "fill-sky-500"}>
            <animate attributeName="cx" values={`${particle.x};${Math.max(15, Math.min(665, particle.x + particle.dx * 22))};${particle.x}`} dur={`${Math.max(0.8, 3.3 - speed * 0.35)}s`} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${particle.y};${Math.max(15, Math.min(265, particle.y + particle.dy * 18))};${particle.y}`} dur={`${Math.max(0.9, 3.5 - speed * 0.3)}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

export function ThermalPhysicsExplorer({ mode }: { mode: ThermalPhysicsMode }) {
  const [temperature, setTemperature] = useState(300);
  const [molarMass, setMolarMass] = useState(0.029);
  const [volume, setVolume] = useState(0.025);
  const [moles, setMoles] = useState(1);
  const [particleSize, setParticleSize] = useState(5);
  const [viscosity, setViscosity] = useState(1);
  const [energyGap, setEnergyGap] = useState(0.08);
  const [stellarMass, setStellarMass] = useState(1);
  const [stellarRadius, setStellarRadius] = useState(1);
  const [stellarPressure, setStellarPressure] = useState(1.1e14);
  const [stage, setStage] = useState(0);

  const reset = () => {
    setTemperature(300);
    setMolarMass(0.029);
    setVolume(0.025);
    setMoles(1);
    setParticleSize(5);
    setViscosity(1);
    setEnergyGap(0.08);
    setStellarMass(1);
    setStellarRadius(1);
    setStellarPressure(1.1e14);
    setStage(0);
  };

  const R = 8.314462618;
  const k = 1.380649e-23;
  const pressure = (moles * R * temperature) / volume;
  const vrms = Math.sqrt((3 * R * temperature) / molarMass);
  const meanKe = 1.5 * k * temperature;
  const brownianScore = (temperature / 300) / (particleSize * viscosity);
  const populationRatio = Math.exp(-(energyGap * 1.602176634e-19) / (k * temperature));
  const solarMass = 1.989e30;
  const solarRadius = 6.957e8;
  const G = 6.6743e-11;
  const massKg = stellarMass * solarMass;
  const radiusM = stellarRadius * solarRadius;
  const gravityPressure = (G * massKg * massKg) / (8 * Math.PI * Math.pow(radiusM, 4));
  const equilibriumRatio = stellarPressure / gravityPressure;

  if (mode === "brownian-motion") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Temperature" value={temperature} min={150} max={600} step={10} unit=" K" onChange={setTemperature} />
            <Slider label="Suspended-particle size" value={particleSize} min={1} max={12} step={1} unit=" relative" onChange={setParticleSize} />
            <Slider label="Fluid viscosity" value={viscosity} min={0.3} max={4} step={0.1} unit=" relative" onChange={setViscosity} />
          </div>
          <ParticleBox count={38} speed={Math.min(7, 1.5 + brownianScore * 18)} large />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-muted/40 p-3"><strong>Temperature</strong><p className="text-sm text-muted-foreground">Higher temperature increases molecular speeds and collision impulses.</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><strong>Particle size</strong><p className="text-sm text-muted-foreground">Smaller suspended particles show more visible random motion.</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><strong>Viscosity</strong><p className="text-sm text-muted-foreground">A more viscous fluid damps the motion more strongly.</p></div>
          </div>
          <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset</button>
        </div>
      </Panel>
    );
  }

  if (mode === "gas-model") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Temperature" value={temperature} min={100} max={900} step={10} unit=" K" onChange={setTemperature} />
            <Slider label="Amount of gas" value={moles} min={0.1} max={3} step={0.1} unit=" mol" onChange={setMoles} />
            <Slider label="Container volume" value={volume} min={0.005} max={0.08} step={0.001} unit=" m³" onChange={setVolume} />
          </div>
          <ParticleBox count={Math.max(12, Math.round(moles * 24))} speed={Math.sqrt(temperature / 100)} />
          <div className="rounded-lg bg-muted/40 p-4 text-sm leading-7">
            <p><strong>Ideal-gas calculation:</strong> P = nRT / V</p>
            <p>P = ({moles.toFixed(2)} mol)({R.toFixed(3)} J mol⁻¹ K⁻¹)({temperature} K) / {volume.toFixed(3)} m³</p>
            <p className="font-semibold">P = {pressure.toExponential(3)} Pa</p>
          </div>
          <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset</button>
        </div>
      </Panel>
    );
  }

  if (mode === "gas-pressure") {
    const density = (moles * molarMass) / volume;
    const kineticPressure = (density * vrms * vrms) / 3;
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Temperature" value={temperature} min={100} max={1000} step={10} unit=" K" onChange={setTemperature} />
            <Slider label="Molar mass" value={molarMass} min={0.002} max={0.12} step={0.001} unit=" kg mol⁻¹" onChange={setMolarMass} />
            <Slider label="Volume" value={volume} min={0.005} max={0.08} step={0.001} unit=" m³" onChange={setVolume} />
          </div>
          <svg viewBox="0 0 720 310" className="w-full" role="img" aria-label="A molecule colliding elastically with a container wall">
            <rect x="70" y="35" width="580" height="240" rx="14" className="fill-sky-50 stroke-slate-700 dark:fill-slate-900" strokeWidth="3" />
            <line x1="530" y1="150" x2="635" y2="150" className="stroke-rose-500" strokeWidth="5" markerEnd="url(#arrowThermal)" />
            <line x1="530" y1="150" x2="420" y2="85" className="stroke-sky-600" strokeWidth="5" markerEnd="url(#arrowThermal)" />
            <circle cx="530" cy="150" r="12" className="fill-amber-500" />
            <text x="505" y="190" fill="currentColor">elastic collision</text>
            <text x="442" y="75" fill="currentColor">reversed x-momentum</text>
            <text x="555" y="135" fill="currentColor">wall impulse</text>
            <defs><marker id="arrowThermal" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor" /></marker></defs>
          </svg>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-muted/40 p-3"><span className="text-sm text-muted-foreground">Density</span><p className="font-semibold">{density.toFixed(3)} kg m⁻³</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><span className="text-sm text-muted-foreground">RMS speed</span><p className="font-semibold">{vrms.toFixed(1)} m s⁻¹</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><span className="text-sm text-muted-foreground">P = ⅓ρv²</span><p className="font-semibold">{kineticPressure.toExponential(3)} Pa</p></div>
          </div>
          <p className="text-sm text-muted-foreground">The kinetic-theory result agrees with the ideal-gas pressure for the same molecular model.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "rms-energy") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <Slider label="Absolute temperature" value={temperature} min={50} max={2000} step={10} unit=" K" onChange={setTemperature} />
            <Slider label="Molar mass" value={molarMass} min={0.002} max={0.15} step={0.001} unit=" kg mol⁻¹" onChange={setMolarMass} />
          </div>
          <svg viewBox="0 0 700 300" className="w-full" role="img" aria-label="RMS speed and kinetic energy increase with temperature">
            <line x1="70" y1="250" x2="650" y2="250" className="stroke-foreground" strokeWidth="2" />
            <line x1="70" y1="250" x2="70" y2="35" className="stroke-foreground" strokeWidth="2" />
            <path d={`M70 245 Q260 ${220 - Math.min(120, temperature / 10)} 630 ${240 - Math.min(190, temperature / 7)}`} fill="none" className="stroke-sky-600" strokeWidth="5" />
            <text x="470" y="55" fill="currentColor">higher T → broader, faster distribution</text>
            <text x="590" y="280" fill="currentColor">speed</text>
            <text x="16" y="60" fill="currentColor">population</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">v<sub>rms</sub> = √(3RT/M)</p><p className="text-2xl font-semibold">{vrms.toFixed(1)} m s⁻¹</p></div>
            <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">Average translational KE = 3kT/2</p><p className="text-2xl font-semibold">{meanKe.toExponential(3)} J</p></div>
          </div>
          <p className="text-sm text-muted-foreground">At the same temperature, every ideal-gas species has the same mean translational kinetic energy, but lighter molecules have greater RMS speed.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "boltzmann-population") {
    const low = 100;
    const high = Math.max(1, Math.round(low * populationRatio));
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <Slider label="Temperature" value={temperature} min={50} max={2000} step={10} unit=" K" onChange={setTemperature} />
            <Slider label="Energy gap" value={energyGap} min={0.005} max={0.4} step={0.005} unit=" eV" onChange={setEnergyGap} />
          </div>
          <svg viewBox="0 0 720 330" className="w-full" role="img" aria-label="Boltzmann populations of two energy levels">
            <line x1="120" y1="245" x2="600" y2="245" className="stroke-sky-700" strokeWidth="5" />
            <line x1="120" y1="100" x2="600" y2="100" className="stroke-violet-600" strokeWidth="5" />
            <text x="65" y="250" fill="currentColor">E₁</text><text x="65" y="105" fill="currentColor">E₂</text>
            {Array.from({ length: 20 }, (_, index) => <circle key={`l${index}`} cx={150 + (index % 10) * 42} cy={220 - Math.floor(index / 10) * 25} r="8" className="fill-sky-500" />)}
            {Array.from({ length: Math.min(20, Math.max(1, Math.round(high / 5))) }, (_, index) => <circle key={`h${index}`} cx={150 + (index % 10) * 42} cy={75 - Math.floor(index / 10) * 25} r="8" className="fill-violet-500" />)}
            <line x1="630" y1="240" x2="630" y2="105" className="stroke-amber-500" strokeWidth="3" />
            <text x="640" y="180" fill="currentColor">ΔE</text>
          </svg>
          <div className="rounded-lg bg-muted/40 p-4 text-sm leading-7">
            <p>N₂/N₁ = exp(-ΔE/kT)</p>
            <p className="font-semibold">Population ratio = {populationRatio.toExponential(3)}</p>
            <p>For an illustrative lower-level population of {low}, the expected upper-level population is about {high}.</p>
          </div>
        </div>
      </Panel>
    );
  }

  if (mode === "stellar-equilibrium") {
    const state = equilibriumRatio > 1.15 ? "Expansion favoured" : equilibriumRatio < 0.85 ? "Contraction favoured" : "Near hydrostatic equilibrium";
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Stellar mass" value={stellarMass} min={0.2} max={20} step={0.1} unit=" M☉" onChange={setStellarMass} />
            <Slider label="Stellar radius" value={stellarRadius} min={0.2} max={20} step={0.1} unit=" R☉" onChange={setStellarRadius} />
            <Slider label="Representative internal pressure" value={stellarPressure} min={1e10} max={5e15} step={1e10} unit=" Pa" onChange={setStellarPressure} />
          </div>
          <svg viewBox="0 0 720 330" className="w-full" role="img" aria-label="Gravity inward balanced by gas pressure outward in a star">
            <circle cx="360" cy="165" r="110" className="fill-amber-200 stroke-amber-600 dark:fill-amber-950" strokeWidth="4" />
            {[0,45,90,135,180,225,270,315].map((angle) => {
              const radians = angle * Math.PI / 180;
              const x1 = 360 + 118 * Math.cos(radians);
              const y1 = 165 + 118 * Math.sin(radians);
              const x2 = 360 + 170 * Math.cos(radians);
              const y2 = 165 + 170 * Math.sin(radians);
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-sky-600" strokeWidth="4" />;
            })}
            {[22,67,112,157,202,247,292,337].map((angle) => {
              const radians = angle * Math.PI / 180;
              const x1 = 360 + 205 * Math.cos(radians);
              const y1 = 165 + 205 * Math.sin(radians);
              const x2 = 360 + 140 * Math.cos(radians);
              const y2 = 165 + 140 * Math.sin(radians);
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-violet-600" strokeWidth="4" />;
            })}
            <text x="290" y="170" fill="currentColor">pressure outward</text>
            <text x="275" y="310" fill="currentColor">gravity inward</text>
          </svg>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-muted/40 p-3"><p className="text-sm text-muted-foreground">Gravity-pressure scale</p><p className="font-semibold">{gravityPressure.toExponential(3)} Pa</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><p className="text-sm text-muted-foreground">Pressure ratio</p><p className="font-semibold">{equilibriumRatio.toFixed(3)}</p></div>
            <div className={`rounded-lg p-3 ${equilibriumRatio > 1.15 ? "bg-sky-100 dark:bg-sky-950" : equilibriumRatio < 0.85 ? "bg-violet-100 dark:bg-violet-950" : "bg-emerald-100 dark:bg-emerald-950"}`}><p className="text-sm text-muted-foreground">Model result</p><p className="font-semibold">{state}</p></div>
          </div>
          <p className="text-xs text-muted-foreground">This is a simplified order-of-magnitude model. Real stars require a radial pressure profile, composition, radiation pressure and detailed equations of state.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "stellar-evolution") {
    const stages = [
      ["Nebula", "A cold molecular cloud begins to contract under gravity."],
      ["Protostar", "Contraction raises density and temperature; fusion has not yet become sustained."],
      ["Main sequence", "Hydrogen fusion supports long-lived hydrostatic equilibrium."],
      ["Giant or supergiant", "Core fuel changes and outer layers expand."],
      ["Final remnant", stellarMass < 8 ? "A white dwarf remains after the outer layers are shed." : "Core collapse can produce a neutron star or, for sufficient mass, a black hole."],
    ] as const;
    const activeStage = stages[stage] ?? stages[0];
    return (
      <Panel>
        <div className="space-y-4">
          <Slider label="Initial stellar mass" value={stellarMass} min={0.5} max={25} step={0.5} unit=" M☉" onChange={setStellarMass} />
          <div className="grid gap-2 sm:grid-cols-5" role="list" aria-label="Stellar evolution stages">
            {stages.map(([name], index) => <button role="listitem" type="button" key={name} onClick={() => setStage(index)} className={`rounded-lg border px-3 py-2 text-sm ${stage === index ? "border-primary bg-primary/10" : ""}`}>{name}</button>)}
          </div>
          <div className="rounded-xl bg-muted/40 p-4"><h4 className="font-semibold">{activeStage[0]}</h4><p className="mt-1 text-sm leading-7 text-muted-foreground">{activeStage[1]}</p></div>
          <svg viewBox="0 0 760 250" className="w-full" role="img" aria-label="Simplified stellar life cycle">
            {stages.map(([name], index) => {
              const x = 80 + index * 150;
              const radius = 22 + index * 3;
              return <g key={name}><circle cx={x} cy="110" r={radius} className={stage === index ? "fill-amber-500" : "fill-sky-400"} /><text x={x - 50} y="175" fill="currentColor">{name}</text>{index < stages.length - 1 && <line x1={x + radius + 8} y1="110" x2={x + 120} y2="110" className="stroke-slate-500" strokeWidth="3" />}</g>;
            })}
          </svg>
          <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset</button>
        </div>
      </Panel>
    );
  }

  if (mode === "neutron-star-pulsar") {
    const rotationRate = Math.max(1, Math.round(12 / Math.sqrt(stellarRadius)));
    return (
      <Panel>
        <div className="space-y-4">
          <Slider label="Relative remnant radius" value={stellarRadius} min={0.05} max={1} step={0.05} unit=" relative" onChange={setStellarRadius} />
          <svg viewBox="0 0 720 360" className="w-full" role="img" aria-label="Rotating neutron star with magnetic beams">
            <circle cx="360" cy="180" r={45 + stellarRadius * 25} className="fill-violet-700 stroke-violet-300" strokeWidth="4" />
            <ellipse cx="360" cy="180" rx="145" ry="55" fill="none" className="stroke-sky-500" strokeWidth="4" transform="rotate(-25 360 180)" />
            <line x1="360" y1="180" x2="210" y2="45" className="stroke-amber-500" strokeWidth="16" opacity="0.45" />
            <line x1="360" y1="180" x2="510" y2="315" className="stroke-amber-500" strokeWidth="16" opacity="0.45" />
            <line x1="360" y1="40" x2="360" y2="320" className="stroke-slate-500" strokeWidth="3" strokeDasharray="8 6" />
            <text x="375" y="55" fill="currentColor">rotation axis</text>
            <text x="130" y="40" fill="currentColor">magnetic radiation beam</text>
            <text x="290" y="190" fill="white">neutron star</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-muted/40 p-3"><strong>Extreme density</strong><p className="text-sm text-muted-foreground">Matter is compressed to nuclear-scale density.</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><strong>Rapid rotation</strong><p className="text-sm text-muted-foreground">Illustrative pulse rate: {rotationRate} per second.</p></div>
            <div className="rounded-lg bg-muted/40 p-3"><strong>Strong magnetic field</strong><p className="text-sm text-muted-foreground">Beamed radiation sweeps across space like a lighthouse.</p></div>
          </div>
        </div>
      </Panel>
    );
  }

  const numberDensity = pressure / (k * temperature);
  return (
    <Panel>
      <div className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <Slider label="Temperature" value={temperature} min={100} max={1500} step={10} unit=" K" onChange={setTemperature} />
          <Slider label="Molar mass" value={molarMass} min={0.002} max={0.15} step={0.001} unit=" kg mol⁻¹" onChange={setMolarMass} />
          <Slider label="Volume" value={volume} min={0.005} max={0.08} step={0.001} unit=" m³" onChange={setVolume} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">Ideal-gas pressure</p><p className="font-semibold">{pressure.toExponential(3)} Pa</p></div>
          <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">RMS speed</p><p className="font-semibold">{vrms.toFixed(1)} m s⁻¹</p></div>
          <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">Mean KE per molecule</p><p className="font-semibold">{meanKe.toExponential(3)} J</p></div>
          <div className="rounded-lg bg-muted/40 p-4"><p className="text-sm text-muted-foreground">Number density</p><p className="font-semibold">{numberDensity.toExponential(3)} m⁻³</p></div>
        </div>
        <div className="rounded-lg border p-4 text-sm leading-7">
          <p><strong>Consistency checks</strong></p>
          <p>• Doubling absolute temperature at fixed amount and volume doubles pressure.</p>
          <p>• RMS speed changes as √T and as 1/√M.</p>
          <p>• Mean translational kinetic energy depends on temperature, not molecular species.</p>
        </div>
        <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset</button>
      </div>
    </Panel>
  );
}
