"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

const DEVICES = [
  { name: "Battery torch", input: "Chemical", useful: "Light", wasted: "Thermal" },
  { name: "Electric fan", input: "Electrical", useful: "Kinetic", wasted: "Sound + thermal" },
  { name: "Solar panel", input: "Light", useful: "Electrical", wasted: "Thermal" },
  { name: "Car engine", input: "Chemical", useful: "Kinetic", wasted: "Thermal + sound" },
];

export function EnergyExplorer({ lessonId }: { lessonId: string }) {
  const [mass, setMass] = useState(50);
  const [height, setHeight] = useState(8);
  const [speed, setSpeed] = useState(6);
  const [device, setDevice] = useState(0);
  const gpe = mass * 9.8 * height;
  const ke = 0.5 * mass * speed * speed;
  const total = gpe + ke;

  function touched() { markStep(lessonId, "energyExplorer"); }

  return <div className="space-y-6 rounded-xl border p-5">
    <div className="space-y-3">
      <h4 className="font-semibold">Roller-coaster energy calculator</h4>
      <div className="relative h-44 overflow-hidden rounded-lg bg-muted/40" role="img" aria-label={`A ${mass} kilogram cart at ${height} metres moving at ${speed} metres per second.`}>
        <svg viewBox="0 0 600 180" className="h-full w-full" aria-hidden>
          <path d="M20 145 C120 20 220 20 310 120 S470 170 580 45" fill="none" stroke="currentColor" strokeWidth="7" opacity=".35" />
          <circle cx={60 + height * 18} cy={140 - height * 11} r="16" className="fill-primary" />
        </svg>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Slider label="Mass" value={mass} unit="kg" min={10} max={100} step={5} onChange={v=>{setMass(v);touched();}} />
        <Slider label="Height" value={height} unit="m" min={0} max={20} step={1} onChange={v=>{setHeight(v);touched();}} />
        <Slider label="Speed" value={speed} unit="m/s" min={0} max={20} step={1} onChange={v=>{setSpeed(v);touched();}} />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Result label="Gravitational PE" value={`${gpe.toFixed(0)} J`} />
        <Result label="Kinetic energy" value={`${ke.toFixed(0)} J`} />
        <Result label="Mechanical total" value={`${total.toFixed(0)} J`} />
      </div>
      <p className="text-sm text-muted-foreground">Try lowering height while increasing speed. In an ideal system, energy transfers between stores while the total remains constant.</p>
    </div>

    <div className="space-y-3 border-t pt-5">
      <h4 className="font-semibold">Energy transformation explorer</h4>
      <div className="flex flex-wrap gap-2">{DEVICES.map((d,i)=><button key={d.name} onClick={()=>{setDevice(i);touched();}} className={`rounded-md border px-3 py-2 text-sm ${device===i?"bg-primary text-primary-foreground":"bg-background"}`}>{d.name}</button>)}</div>
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-muted/40 p-5 text-center font-medium">
        <span>{DEVICES[device]?.input} energy</span><span aria-hidden>→</span><span>{DEVICES[device]?.useful} energy</span><span className="text-muted-foreground">+ {DEVICES[device]?.wasted} energy</span>
      </div>
    </div>
  </div>;
}

function Slider({label,value,unit,min,max,step,onChange}:{label:string;value:number;unit:string;min:number;max:number;step:number;onChange:(v:number)=>void}) { return <label className="text-sm">{label}: <strong>{value} {unit}</strong><input className="mt-2 w-full" type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}/></label>; }
function Result({label,value}:{label:string;value:string}) { return <div className="rounded-lg border p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="font-semibold">{value}</p></div>; }
