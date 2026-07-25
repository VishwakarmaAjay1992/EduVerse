"use client";

import { useState } from "react";
import type { ChangeEvent, ReactNode } from "react";

export type CurrentElectricityMode =
  | "current-flow"
  | "drift-mobility"
  | "ohms-law"
  | "resistance-temperature"
  | "resistor-network"
  | "cells"
  | "kirchhoff"
  | "bridge-meter"
  | "instruments"
  | "potentiometer"
  | "power-heating"
  | "current-review";

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
        <strong>{value.toLocaleString(undefined, { maximumFractionDigits: 4 })}{unit}</strong>
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

function Metric({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-lg bg-muted/40 p-3">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
      {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

const electronCharge = 1.602176634e-19;
const electronMass = 9.1093837e-31;

export function CurrentElectricityExplorer({ mode }: { mode: CurrentElectricityMode }) {
  const [charge, setCharge] = useState(12);
  const [time, setTime] = useState(4);
  const [areaMm2, setAreaMm2] = useState(2);
  const [carrierDensityPower, setCarrierDensityPower] = useState(28.5);
  const [electricField, setElectricField] = useState(0.25);
  const [relaxationFs, setRelaxationFs] = useState(25);
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(6);
  const [length, setLength] = useState(2);
  const [rhoNano, setRhoNano] = useState(17);
  const [temperature, setTemperature] = useState(20);
  const [alphaMilli, setAlphaMilli] = useState(3.9);
  const [r1, setR1] = useState(4);
  const [r2, setR2] = useState(6);
  const [r3, setR3] = useState(12);
  const [parallel, setParallel] = useState(false);
  const [emf, setEmf] = useState(12);
  const [internalR, setInternalR] = useState(1);
  const [loadR, setLoadR] = useState(5);
  const [cellSeries, setCellSeries] = useState(2);
  const [cellRows, setCellRows] = useState(1);
  const [e1, setE1] = useState(10);
  const [e2, setE2] = useState(4);
  const [loopR1, setLoopR1] = useState(3);
  const [loopR2, setLoopR2] = useState(5);
  const [sharedR, setSharedR] = useState(2);
  const [bridgeP, setBridgeP] = useState(4);
  const [bridgeQ, setBridgeQ] = useState(6);
  const [bridgeR, setBridgeR] = useState(8);
  const [bridgeS, setBridgeS] = useState(12);
  const [balanceLength, setBalanceLength] = useState(60);
  const [standardR, setStandardR] = useState(5);
  const [galvanometerR, setGalvanometerR] = useState(100);
  const [fullScaleMa, setFullScaleMa] = useState(1);
  const [targetA, setTargetA] = useState(5);
  const [targetV, setTargetV] = useState(10);
  const [wireLength, setWireLength] = useState(10);
  const [driverVoltage, setDriverVoltage] = useState(5);
  const [potBalance, setPotBalance] = useState(6);
  const [duration, setDuration] = useState(120);
  const [reviewChoice, setReviewChoice] = useState<number | null>(null);

  const current = charge / Math.max(time, 0.001);
  const area = areaMm2 * 1e-6;
  const currentDensity = current / area;
  const carrierDensity = Math.pow(10, carrierDensityPower);
  const relaxationTime = relaxationFs * 1e-15;
  const mobility = (electronCharge * relaxationTime) / electronMass;
  const driftVelocity = mobility * electricField;
  const driftCurrent = carrierDensity * electronCharge * area * driftVelocity;
  const ohmCurrent = voltage / Math.max(resistance, 0.001);
  const rho = rhoNano * 1e-9;
  const baseResistance = (rho * length) / area;
  const temperatureResistance = baseResistance * (1 + alphaMilli * 1e-3 * (temperature - 20));
  const networkEq = parallel
    ? 1 / (1 / r1 + 1 / r2 + 1 / r3)
    : r1 + r2 + r3;
  const equivalentEmf = cellSeries * emf;
  const equivalentInternal = (cellSeries * internalR) / Math.max(cellRows, 1);
  const cellCurrent = equivalentEmf / (loadR + equivalentInternal);
  const terminalVoltage = cellCurrent * loadR;
  const cellPower = cellCurrent * cellCurrent * loadR;
  const determinant = (loopR1 + sharedR) * (loopR2 + sharedR) - sharedR * sharedR;
  const loopI1 = ((e1 * (loopR2 + sharedR)) + sharedR * e2) / determinant;
  const loopI2 = ((e2 * (loopR1 + sharedR)) + sharedR * e1) / determinant;
  const sharedCurrent = loopI1 - loopI2;
  const bridgeRatioLeft = bridgeP / bridgeQ;
  const bridgeRatioRight = bridgeR / bridgeS;
  const bridgeError = Math.abs(bridgeRatioLeft - bridgeRatioRight);
  const unknownBridgeR = standardR * balanceLength / Math.max(100 - balanceLength, 0.1);
  const ig = fullScaleMa * 1e-3;
  const shunt = targetA > ig ? (ig * galvanometerR) / (targetA - ig) : Infinity;
  const seriesMultiplier = targetV / ig - galvanometerR;
  const gradient = driverVoltage / wireLength;
  const measuredEmf = gradient * potBalance;
  const power = voltage * ohmCurrent;
  const energy = power * duration;

  const reset = () => {
    setCharge(12); setTime(4); setAreaMm2(2); setCarrierDensityPower(28.5);
    setElectricField(0.25); setRelaxationFs(25); setVoltage(12); setResistance(6);
    setLength(2); setRhoNano(17); setTemperature(20); setAlphaMilli(3.9);
    setR1(4); setR2(6); setR3(12); setParallel(false); setEmf(12);
    setInternalR(1); setLoadR(5); setCellSeries(2); setCellRows(1);
    setE1(10); setE2(4); setLoopR1(3); setLoopR2(5); setSharedR(2);
    setBridgeP(4); setBridgeQ(6); setBridgeR(8); setBridgeS(12);
    setBalanceLength(60); setStandardR(5); setGalvanometerR(100);
    setFullScaleMa(1); setTargetA(5); setTargetV(10); setWireLength(10);
    setDriverVoltage(5); setPotBalance(6); setDuration(120); setReviewChoice(null);
  };

  if (mode === "current-flow") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Charge transferred" value={charge} min={0.5} max={50} step={0.5} unit=" C" onChange={setCharge} />
            <Slider label="Time interval" value={time} min={0.2} max={20} step={0.2} unit=" s" onChange={setTime} />
            <Slider label="Conductor area" value={areaMm2} min={0.2} max={10} step={0.1} unit=" mm²" onChange={setAreaMm2} />
          </div>
          <svg viewBox="0 0 760 270" className="w-full" role="img" aria-label="Charge carriers moving through a conductor cross-section">
            <rect x="70" y="75" width="620" height="120" rx="55" className="fill-sky-50 stroke-slate-700 dark:fill-slate-900" strokeWidth="3" />
            <ellipse cx="610" cy="135" rx={Math.max(24, Math.min(65, 18 + areaMm2 * 5))} ry="55" className="fill-sky-100 stroke-sky-700 dark:fill-sky-950" strokeWidth="3" />
            {Array.from({ length: 15 }, (_, index) => (
              <g key={index}>
                <circle cx={110 + (index % 8) * 62} cy={105 + Math.floor(index / 8) * 55} r="8" className="fill-blue-600">
                  <animate attributeName="cx" values={`${110 + (index % 8) * 62};${610};${110 + (index % 8) * 62}`} dur={`${Math.max(1.2, 4 - current / 5)}s`} repeatCount="indefinite" />
                </circle>
                <text x={105 + (index % 8) * 62} y={110 + Math.floor(index / 8) * 55} fontSize="11" fill="white">-</text>
              </g>
            ))}
            <line x1="130" y1="42" x2="610" y2="42" className="stroke-rose-500" strokeWidth="5" markerEnd="url(#currentArrow)" />
            <text x="270" y="30" fill="currentColor">conventional current</text>
            <text x="530" y="240" fill="currentColor">cross-sectional area A</text>
            <defs><marker id="currentArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor" /></marker></defs>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Current I = Q/t" value={`${current.toFixed(3)} A`} />
            <Metric label="Current density J = I/A" value={`${currentDensity.toExponential(3)} A m⁻²`} />
            <Metric label="Electrons per second" value={`${(current / electronCharge).toExponential(3)} s⁻¹`} />
          </div>
          <p className="text-sm text-muted-foreground">The conventional-current arrow is opposite to electron drift, even though current itself is treated as a scalar circuit quantity.</p>
          <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset</button>
        </div>
      </Panel>
    );
  }

  if (mode === "drift-mobility") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="log₁₀ carrier density" value={carrierDensityPower} min={26} max={29.5} step={0.1} unit=" m⁻³" onChange={setCarrierDensityPower} />
            <Slider label="Electric field" value={electricField} min={0.01} max={2} step={0.01} unit=" V m⁻¹" onChange={setElectricField} />
            <Slider label="Relaxation time" value={relaxationFs} min={2} max={80} step={1} unit=" fs" onChange={setRelaxationFs} />
          </div>
          <svg viewBox="0 0 760 280" className="w-full" role="img" aria-label="Random electron motion with a small net drift opposite to the electric field">
            <rect x="45" y="35" width="670" height="205" rx="16" className="fill-muted/30 stroke-slate-700" strokeWidth="3" />
            {Array.from({ length: 28 }, (_, index) => {
              const x = 75 + (index % 9) * 72;
              const y = 65 + Math.floor(index / 9) * 58;
              return <path key={index} d={`M${x} ${y} q18 -20 36 0 q18 20 36 0`} fill="none" className="stroke-sky-500" strokeWidth="2" opacity="0.7" />;
            })}
            <line x1="110" y1="260" x2="640" y2="260" className="stroke-rose-500" strokeWidth="5" markerEnd="url(#fieldArrow)" />
            <text x="330" y="278" fill="currentColor">electric field E</text>
            <line x1="640" y1="22" x2="190" y2="22" className="stroke-blue-600" strokeWidth="5" markerEnd="url(#driftArrow)" />
            <text x="330" y="17" fill="currentColor">electron drift v₍d₎</text>
            <defs>
              <marker id="fieldArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor" /></marker>
              <marker id="driftArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor" /></marker>
            </defs>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Mobility μ = eτ/m" value={`${mobility.toExponential(3)} m² V⁻¹ s⁻¹`} />
            <Metric label="Drift speed v₍d₎ = μE" value={`${driftVelocity.toExponential(3)} m s⁻¹`} />
            <Metric label="Current I = neAv₍d₎" value={`${driftCurrent.toExponential(3)} A`} />
          </div>
          <p className="text-sm text-muted-foreground">Thermal electron speeds are much larger than drift speed. The electric signal propagates rapidly through the electromagnetic field while individual electrons drift slowly.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "ohms-law") {
    const lineEndY = 240 - Math.min(190, ohmCurrent * 18);
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <Slider label="Potential difference" value={voltage} min={0} max={30} step={0.5} unit=" V" onChange={setVoltage} />
            <Slider label="Resistance" value={resistance} min={0.5} max={30} step={0.5} unit=" Ω" onChange={setResistance} />
          </div>
          <svg viewBox="0 0 720 320" className="w-full" role="img" aria-label="Ohmic current-voltage graph and simple resistor circuit">
            <line x1="60" y1="260" x2="350" y2="260" className="stroke-foreground" strokeWidth="2" />
            <line x1="60" y1="260" x2="60" y2="40" className="stroke-foreground" strokeWidth="2" />
            <line x1="60" y1="260" x2="320" y2={lineEndY} className="stroke-sky-600" strokeWidth="5" />
            <circle cx="320" cy={lineEndY} r="8" className="fill-amber-500" />
            <text x="290" y="290" fill="currentColor">V</text><text x="20" y="55" fill="currentColor">I</text>
            <path d="M440 90 h50 l12 -20 l22 40 l22 -40 l22 40 l22 -40 l12 20 h55" fill="none" className="stroke-violet-600" strokeWidth="4" />
            <line x1="440" y1="90" x2="440" y2="220" className="stroke-foreground" strokeWidth="3" />
            <line x1="657" y1="90" x2="657" y2="220" className="stroke-foreground" strokeWidth="3" />
            <line x1="440" y1="220" x2="525" y2="220" className="stroke-foreground" strokeWidth="3" />
            <line x1="570" y1="220" x2="657" y2="220" className="stroke-foreground" strokeWidth="3" />
            <line x1="525" y1="200" x2="525" y2="240" className="stroke-rose-500" strokeWidth="5" />
            <line x1="570" y1="190" x2="570" y2="250" className="stroke-rose-500" strokeWidth="3" />
            <text x="493" y="55" fill="currentColor">R = {resistance.toFixed(1)} Ω</text>
            <text x="515" y="285" fill="currentColor">V = {voltage.toFixed(1)} V</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Current I = V/R" value={`${ohmCurrent.toFixed(3)} A`} />
            <Metric label="Conductance G = 1/R" value={`${(1 / resistance).toFixed(4)} S`} />
            <Metric label="Power P = VI" value={`${power.toFixed(3)} W`} />
          </div>
        </div>
      </Panel>
    );
  }

  if (mode === "resistance-temperature") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            <Slider label="Length" value={length} min={0.2} max={10} step={0.1} unit=" m" onChange={setLength} />
            <Slider label="Area" value={areaMm2} min={0.2} max={10} step={0.1} unit=" mm²" onChange={setAreaMm2} />
            <Slider label="Resistivity" value={rhoNano} min={1} max={1000} step={1} unit=" nΩ m" onChange={setRhoNano} />
            <Slider label="Temperature" value={temperature} min={-50} max={300} step={5} unit=" °C" onChange={setTemperature} />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Temperature coefficient" value={alphaMilli} min={-5} max={8} step={0.1} unit=" ×10⁻³ °C⁻¹" onChange={setAlphaMilli} />
            <Metric label="R at 20°C" value={`${baseResistance.toFixed(4)} Ω`} note="R = ρL/A" />
            <Metric label={`R at ${temperature}°C`} value={`${temperatureResistance.toFixed(4)} Ω`} note="R = R₂₀[1 + α(T - 20)]" />
          </div>
          <svg viewBox="0 0 720 270" className="w-full" role="img" aria-label="Resistance versus temperature graph">
            <line x1="70" y1="230" x2="650" y2="230" className="stroke-foreground" strokeWidth="2" />
            <line x1="70" y1="230" x2="70" y2="35" className="stroke-foreground" strokeWidth="2" />
            <line x1="80" y1={alphaMilli >= 0 ? 210 : 70} x2="630" y2={alphaMilli >= 0 ? 60 : 210} className={alphaMilli >= 0 ? "stroke-rose-500" : "stroke-sky-600"} strokeWidth="5" />
            <text x="555" y="255" fill="currentColor">temperature</text><text x="10" y="55" fill="currentColor">resistance</text>
            <text x="360" y="35" fill="currentColor">{alphaMilli >= 0 ? "positive temperature coefficient" : "negative temperature coefficient"}</text>
          </svg>
        </div>
      </Panel>
    );
  }

  if (mode === "resistor-network") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="R₁" value={r1} min={1} max={30} step={1} unit=" Ω" onChange={setR1} />
            <Slider label="R₂" value={r2} min={1} max={30} step={1} unit=" Ω" onChange={setR2} />
            <Slider label="R₃" value={r3} min={1} max={30} step={1} unit=" Ω" onChange={setR3} />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Network configuration">
            <button type="button" onClick={() => setParallel(false)} className={`rounded-md border px-3 py-2 text-sm ${!parallel ? "border-primary bg-primary/10" : ""}`}>Series</button>
            <button type="button" onClick={() => setParallel(true)} className={`rounded-md border px-3 py-2 text-sm ${parallel ? "border-primary bg-primary/10" : ""}`}>Parallel</button>
          </div>
          <svg viewBox="0 0 760 310" className="w-full" role="img" aria-label={`${parallel ? "Parallel" : "Series"} resistor network`}>
            {parallel ? (
              <>
                <line x1="110" y1="55" x2="110" y2="255" className="stroke-foreground" strokeWidth="4" />
                <line x1="650" y1="55" x2="650" y2="255" className="stroke-foreground" strokeWidth="4" />
                {[90,155,220].map((y,index) => <g key={y}><line x1="110" y1={y} x2="250" y2={y} className="stroke-foreground" strokeWidth="3" /><path d={`M250 ${y} h35 l12 -18 l22 36 l22 -36 l22 36 l12 -18 h35`} fill="none" className="stroke-sky-600" strokeWidth="4" /><line x1="390" y1={y} x2="650" y2={y} className="stroke-foreground" strokeWidth="3" /><text x="315" y={y-25} fill="currentColor">R{index+1}</text></g>)}
              </>
            ) : (
              <>
                <line x1="70" y1="155" x2="150" y2="155" className="stroke-foreground" strokeWidth="3" />
                {[160,360,560].map((x,index) => <g key={x}><path d={`M${x} 155 h25 l12 -22 l22 44 l22 -44 l22 44 l12 -22 h25`} fill="none" className="stroke-violet-600" strokeWidth="4" /><text x={x+58} y="115" fill="currentColor">R{index+1}</text></g>)}
              </>
            )}
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Equivalent resistance" value={`${networkEq.toFixed(4)} Ω`} />
            <Metric label="Current at 12 V" value={`${(12 / networkEq).toFixed(4)} A`} />
            <Metric label="Total power at 12 V" value={`${(144 / networkEq).toFixed(3)} W`} />
          </div>
          <p className="text-sm text-muted-foreground">A series equivalent is greater than every individual resistance. A parallel equivalent is smaller than the smallest branch resistance.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "cells") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="EMF per cell" value={emf} min={0.5} max={15} step={0.5} unit=" V" onChange={setEmf} />
            <Slider label="Internal resistance per cell" value={internalR} min={0.05} max={5} step={0.05} unit=" Ω" onChange={setInternalR} />
            <Slider label="External load" value={loadR} min={0.2} max={30} step={0.2} unit=" Ω" onChange={setLoadR} />
            <Slider label="Cells in each series row" value={cellSeries} min={1} max={10} step={1} onChange={setCellSeries} />
            <Slider label="Parallel rows" value={cellRows} min={1} max={10} step={1} onChange={setCellRows} />
          </div>
          <svg viewBox="0 0 760 250" className="w-full" role="img" aria-label="Cells with internal resistance supplying an external load">
            {Array.from({ length: Math.min(8, cellSeries) }, (_, index) => <g key={index}><line x1={80+index*65} y1="80" x2={80+index*65} y2="160" className="stroke-sky-700" strokeWidth="5" /><line x1={95+index*65} y1="95" x2={95+index*65} y2="145" className="stroke-sky-700" strokeWidth="3" /></g>)}
            <path d="M60 80 H600 V170 H540 l12 -20 l20 40 l20 -40 l20 40 l12 -20 H690 V80 H600" fill="none" className="stroke-foreground" strokeWidth="3" />
            <text x="535" y="220" fill="currentColor">external load R</text>
            <text x="65" y="45" fill="currentColor">effective EMF = {equivalentEmf.toFixed(1)} V</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-4">
            <Metric label="Equivalent internal r" value={`${equivalentInternal.toFixed(3)} Ω`} />
            <Metric label="Circuit current" value={`${cellCurrent.toFixed(3)} A`} />
            <Metric label="Terminal voltage" value={`${terminalVoltage.toFixed(3)} V`} />
            <Metric label="Load power" value={`${cellPower.toFixed(3)} W`} note={Math.abs(loadR-equivalentInternal)<0.25 ? "Near maximum-power condition R = r" : "Maximum power occurs when R = r"} />
          </div>
        </div>
      </Panel>
    );
  }

  if (mode === "kirchhoff") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-5">
            <Slider label="E₁" value={e1} min={0} max={20} step={1} unit=" V" onChange={setE1} />
            <Slider label="E₂" value={e2} min={0} max={20} step={1} unit=" V" onChange={setE2} />
            <Slider label="R₁" value={loopR1} min={1} max={15} step={1} unit=" Ω" onChange={setLoopR1} />
            <Slider label="R₂" value={loopR2} min={1} max={15} step={1} unit=" Ω" onChange={setLoopR2} />
            <Slider label="Shared R₃" value={sharedR} min={1} max={15} step={1} unit=" Ω" onChange={setSharedR} />
          </div>
          <svg viewBox="0 0 760 330" className="w-full" role="img" aria-label="Two-loop Kirchhoff circuit with a shared resistor">
            <path d="M110 70 H650 V260 H110 Z" fill="none" className="stroke-foreground" strokeWidth="3" />
            <line x1="380" y1="70" x2="380" y2="260" className="stroke-foreground" strokeWidth="3" />
            <path d="M190 70 h25 l12 -18 l22 36 l22 -36 l22 36 l12 -18 h25" fill="none" className="stroke-sky-600" strokeWidth="4" />
            <path d="M470 70 h25 l12 -18 l22 36 l22 -36 l22 36 l12 -18 h25" fill="none" className="stroke-violet-600" strokeWidth="4" />
            <path d="M380 125 v20 l-18 12 l36 22 l-36 22 l18 12 v20" fill="none" className="stroke-amber-500" strokeWidth="4" />
            <line x1="110" y1="135" x2="110" y2="190" className="stroke-rose-500" strokeWidth="5" /><line x1="125" y1="145" x2="125" y2="180" className="stroke-rose-500" strokeWidth="3" />
            <line x1="650" y1="135" x2="650" y2="190" className="stroke-rose-500" strokeWidth="5" /><line x1="635" y1="145" x2="635" y2="180" className="stroke-rose-500" strokeWidth="3" />
            <text x="210" y="45" fill="currentColor">R₁</text><text x="505" y="45" fill="currentColor">R₂</text><text x="400" y="175" fill="currentColor">R₃</text>
            <text x="70" y="170" fill="currentColor">E₁</text><text x="675" y="170" fill="currentColor">E₂</text>
          </svg>
          <div className="rounded-lg bg-muted/40 p-4 text-sm leading-7">
            <p>Loop 1: ({loopR1}+{sharedR})I₁ - {sharedR}I₂ = {e1}</p>
            <p>Loop 2: -{sharedR}I₁ + ({loopR2}+{sharedR})I₂ = {e2}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Loop current I₁" value={`${loopI1.toFixed(4)} A`} />
            <Metric label="Loop current I₂" value={`${loopI2.toFixed(4)} A`} />
            <Metric label="Shared-branch current I₁ - I₂" value={`${sharedCurrent.toFixed(4)} A`} note={sharedCurrent >= 0 ? "Direction follows the I₁ assumption" : "Actual direction is opposite the I₁ assumption"} />
          </div>
        </div>
      </Panel>
    );
  }

  if (mode === "bridge-meter") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            <Slider label="P" value={bridgeP} min={1} max={20} step={1} unit=" Ω" onChange={setBridgeP} />
            <Slider label="Q" value={bridgeQ} min={1} max={20} step={1} unit=" Ω" onChange={setBridgeQ} />
            <Slider label="R" value={bridgeR} min={1} max={20} step={1} unit=" Ω" onChange={setBridgeR} />
            <Slider label="S" value={bridgeS} min={1} max={20} step={1} unit=" Ω" onChange={setBridgeS} />
          </div>
          <svg viewBox="0 0 760 340" className="w-full" role="img" aria-label="Wheatstone bridge and meter-bridge balance">
            <polygon points="170,165 350,55 530,165 350,275" fill="none" className="stroke-foreground" strokeWidth="4" />
            <line x1="170" y1="165" x2="530" y2="165" className="stroke-sky-600" strokeWidth="3" />
            <circle cx="350" cy="165" r="22" className="fill-muted stroke-violet-600" strokeWidth="3" /><text x="341" y="171" fill="currentColor">G</text>
            <text x="235" y="92" fill="currentColor">P</text><text x="450" y="92" fill="currentColor">Q</text><text x="235" y="255" fill="currentColor">R</text><text x="450" y="255" fill="currentColor">S</text>
            <line x1="570" y1="55" x2="710" y2="55" className="stroke-foreground" strokeWidth="4" />
            <circle cx={570 + 1.4 * balanceLength} cy="55" r="9" className="fill-amber-500" />
            <text x="580" y="95" fill="currentColor">meter wire, balance at {balanceLength.toFixed(1)} cm</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="P/Q" value={bridgeRatioLeft.toFixed(4)} />
            <Metric label="R/S" value={bridgeRatioRight.toFixed(4)} />
            <Metric label="Bridge status" value={bridgeError < 0.01 ? "Balanced" : "Unbalanced"} note="Balanced when P/Q = R/S" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <Slider label="Meter-bridge standard resistance" value={standardR} min={0.5} max={20} step={0.5} unit=" Ω" onChange={setStandardR} />
            <Slider label="Balance length" value={balanceLength} min={5} max={95} step={1} unit=" cm" onChange={setBalanceLength} />
          </div>
          <Metric label="Unknown resistance X = Rl/(100-l)" value={`${unknownBridgeR.toFixed(4)} Ω`} />
        </div>
      </Panel>
    );
  }

  if (mode === "instruments") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-4">
            <Slider label="Galvanometer resistance G" value={galvanometerR} min={5} max={500} step={5} unit=" Ω" onChange={setGalvanometerR} />
            <Slider label="Full-scale current i₍g₎" value={fullScaleMa} min={0.1} max={10} step={0.1} unit=" mA" onChange={setFullScaleMa} />
            <Slider label="Ammeter range" value={targetA} min={0.02} max={20} step={0.02} unit=" A" onChange={setTargetA} />
            <Slider label="Voltmeter range" value={targetV} min={1} max={100} step={1} unit=" V" onChange={setTargetV} />
          </div>
          <svg viewBox="0 0 760 320" className="w-full" role="img" aria-label="Galvanometer converted into an ammeter and a voltmeter">
            <circle cx="185" cy="150" r="62" className="fill-muted stroke-sky-700" strokeWidth="4" /><text x="168" y="160" fontSize="28" fill="currentColor">G</text>
            <path d="M60 150 H120 M250 150 H320 M120 150 V250 H250 V150" fill="none" className="stroke-foreground" strokeWidth="3" />
            <rect x="150" y="230" width="70" height="40" rx="8" className="fill-amber-100 stroke-amber-600" strokeWidth="3" /><text x="175" y="255" fill="currentColor">S</text>
            <text x="105" y="300" fill="currentColor">ammeter: low shunt in parallel</text>
            <circle cx="530" cy="150" r="62" className="fill-muted stroke-violet-700" strokeWidth="4" /><text x="512" y="160" fontSize="28" fill="currentColor">G</text>
            <path d="M365 150 H468 M592 150 H690" fill="none" className="stroke-foreground" strokeWidth="3" />
            <rect x="375" y="125" width="75" height="50" rx="8" className="fill-sky-100 stroke-sky-600" strokeWidth="3" /><text x="405" y="155" fill="currentColor">R</text>
            <text x="430" y="300" fill="currentColor">voltmeter: high resistance in series</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-2">
            <Metric label="Required ammeter shunt" value={Number.isFinite(shunt) ? `${shunt.toFixed(6)} Ω` : "Increase target range"} />
            <Metric label="Required voltmeter series resistance" value={`${Math.max(0, seriesMultiplier).toFixed(2)} Ω`} />
          </div>
          <p className="text-sm text-muted-foreground">An ideal ammeter has zero resistance and is connected in series. An ideal voltmeter has infinite resistance and is connected in parallel.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "potentiometer") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Potentiometer-wire length" value={wireLength} min={1} max={20} step={0.5} unit=" m" onChange={setWireLength} />
            <Slider label="Potential drop along wire" value={driverVoltage} min={0.5} max={12} step={0.1} unit=" V" onChange={setDriverVoltage} />
            <Slider label="Balance length" value={potBalance} min={0.1} max={wireLength} step={0.1} unit=" m" onChange={setPotBalance} />
          </div>
          <svg viewBox="0 0 760 290" className="w-full" role="img" aria-label="Potentiometer wire with a movable jockey at the null point">
            <line x1="80" y1="130" x2="680" y2="130" className="stroke-sky-700" strokeWidth="8" />
            {Array.from({ length: 11 }, (_, index) => <line key={index} x1={80 + index * 60} y1="115" x2={80 + index * 60} y2="145" className="stroke-foreground" strokeWidth="2" />)}
            <circle cx={80 + 600 * Math.min(1, potBalance / wireLength)} cy="130" r="13" className="fill-amber-500" />
            <line x1={80 + 600 * Math.min(1, potBalance / wireLength)} y1="130" x2={80 + 600 * Math.min(1, potBalance / wireLength)} y2="45" className="stroke-violet-600" strokeWidth="4" />
            <text x="300" y="190" fill="currentColor">uniform resistance wire AB</text>
            <text x="270" y="30" fill="currentColor">jockey at null point</text>
            <text x="75" y="235" fill="currentColor">A</text><text x="675" y="235" fill="currentColor">B</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label="Potential gradient k = V/L" value={`${gradient.toFixed(4)} V m⁻¹`} />
            <Metric label="Measured EMF E = kl" value={`${measuredEmf.toFixed(4)} V`} />
            <Metric label="Null-method current from test cell" value="0 A" note="At balance, the potentiometer does not load the cell" />
          </div>
          <p className="text-sm text-muted-foreground">For two cells on the same wire, $E_1/E_2=l_1/l_2$. Greater sensitivity requires a smaller potential gradient.</p>
        </div>
      </Panel>
    );
  }

  if (mode === "power-heating") {
    return (
      <Panel>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <Slider label="Voltage" value={voltage} min={1} max={240} step={1} unit=" V" onChange={setVoltage} />
            <Slider label="Resistance" value={resistance} min={1} max={100} step={1} unit=" Ω" onChange={setResistance} />
            <Slider label="Operating time" value={duration} min={1} max={3600} step={1} unit=" s" onChange={setDuration} />
          </div>
          <svg viewBox="0 0 760 300" className="w-full" role="img" aria-label="Electrical resistor converting electrical energy to heat">
            <path d="M100 150 h80 l18 -30 l30 60 l30 -60 l30 60 l30 -60 l30 60 l18 -30 h190" fill="none" className="stroke-rose-500" strokeWidth="6" />
            {Array.from({ length: 8 }, (_, index) => <path key={index} d={`M${250 + index * 35} ${95 - (index%2)*15} q12 -18 24 0`} fill="none" className="stroke-amber-500" strokeWidth="3" />)}
            <text x="260" y="240" fill="currentColor">electrical energy → thermal energy</text>
          </svg>
          <div className="grid gap-3 sm:grid-cols-4">
            <Metric label="Current" value={`${ohmCurrent.toFixed(3)} A`} />
            <Metric label="Power P = VI" value={`${power.toFixed(3)} W`} />
            <Metric label="Energy/heat H = Pt" value={`${energy.toFixed(2)} J`} />
            <Metric label="Energy in kWh" value={`${(energy / 3.6e6).toFixed(6)} kWh`} />
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm leading-7">
            <strong>Safety:</strong> fuses and circuit breakers interrupt excessive current. A fuse is placed in series and must be replaced by the correct rated device, never by ordinary wire.
          </div>
        </div>
      </Panel>
    );
  }

  const reviewOptions = ["Current density is a scalar", "Kirchhoff's junction law follows charge conservation", "A voltmeter is connected in series", "At potentiometer balance, the test cell supplies large current"];
  return (
    <Panel>
      <div className="space-y-5">
        <div className="grid gap-3 md:grid-cols-3">
          <Metric label="Charge transport" value="I = dQ/dt" note="J = I/A and I = neAv₍d₎" />
          <Metric label="Circuit laws" value="ΣI = 0, ΣΔV = 0" note="Charge and energy conservation" />
          <Metric label="Electrical power" value="P = VI = I²R = V²/R" note="Energy E = Pt" />
        </div>
        <div className="rounded-lg bg-muted/40 p-4">
          <p className="font-semibold">Concept check</p>
          <p className="mt-1 text-sm text-muted-foreground">Which statement is correct?</p>
          <div className="mt-3 grid gap-2">
            {reviewOptions.map((option, index) => (
              <button key={option} type="button" onClick={() => setReviewChoice(index)} className={`rounded-md border p-3 text-left text-sm ${reviewChoice === index ? "border-primary bg-primary/10" : ""}`}>{option}</button>
            ))}
          </div>
          {reviewChoice !== null && <p className={`mt-3 text-sm ${reviewChoice === 1 ? "text-emerald-600" : "text-destructive"}`}>{reviewChoice === 1 ? "Correct. Junction law expresses conservation of charge at a node." : "Review the instrument connection and vector/scalar definitions, then try again."}</p>}
        </div>
        <button type="button" onClick={reset} className="rounded-md border px-3 py-2 text-sm">Reset all laboratory values</button>
      </div>
    </Panel>
  );
}
