"use client";

import { useMemo, useState } from "react";
import { markStep } from "@/lib/progress-store";

type Mode = "suvat" | "vector" | "projectile";

export function KinematicsExplorer({ lessonId, mode }: { lessonId: string; mode: Mode }) {
  if (mode === "suvat") return <Suvat lessonId={lessonId} />;
  if (mode === "vector") return <Vector lessonId={lessonId} />;
  return <Projectile lessonId={lessonId} />;
}

function Suvat({ lessonId }: { lessonId: string }) {
  const [u, setU] = useState(5);
  const [a, setA] = useState(2);
  const [t, setT] = useState(4);
  const v = u + a * t;
  const s = u * t + 0.5 * a * t * t;
  const touch = () => markStep(lessonId, "kinematicsExplorer");
  return <Panel title="SUVAT motion calculator" note="Adjust initial velocity, acceleration and time. The explorer calculates final velocity and displacement.">
    <div className="grid gap-4 sm:grid-cols-3">
      <Slider label="Initial velocity, u" value={u} min={0} max={30} step={1} unit="m/s" onChange={(x)=>{setU(x);touch();}} />
      <Slider label="Acceleration, a" value={a} min={-5} max={10} step={0.5} unit="m/s²" onChange={(x)=>{setA(x);touch();}} />
      <Slider label="Time, t" value={t} min={1} max={15} step={1} unit="s" onChange={(x)=>{setT(x);touch();}} />
    </div>
    <div className="grid gap-3 sm:grid-cols-2"><Result label="Final velocity: v = u + at" value={`${v.toFixed(1)} m/s`} /><Result label="Displacement: s = ut + ½at²" value={`${s.toFixed(1)} m`} /></div>
    <div className="relative h-36 overflow-hidden rounded-lg border bg-muted/30" role="img" aria-label={`Object starts at ${u} metres per second, accelerates at ${a} metres per second squared for ${t} seconds, travels ${s.toFixed(1)} metres and finishes at ${v.toFixed(1)} metres per second.`}>
      <div className="absolute inset-x-4 bottom-8 h-1 bg-foreground/30" />
      <div className="absolute bottom-9 size-8 -translate-x-1/2 rounded bg-primary transition-all" style={{left:`${Math.min(92, 8 + Math.abs(s) / 4)}%`}} />
    </div>
  </Panel>;
}

function Vector({ lessonId }: { lessonId: string }) {
  const [magnitude, setMagnitude] = useState(20);
  const [angle, setAngle] = useState(35);
  const rad = angle * Math.PI / 180;
  const x = magnitude * Math.cos(rad);
  const y = magnitude * Math.sin(rad);
  const touch = () => markStep(lessonId, "kinematicsExplorer");
  return <Panel title="Vector components explorer" note="Resolve a vector into perpendicular horizontal and vertical components.">
    <div className="grid gap-4 sm:grid-cols-2">
      <Slider label="Vector magnitude" value={magnitude} min={1} max={50} step={1} unit="units" onChange={(n)=>{setMagnitude(n);touch();}} />
      <Slider label="Angle above horizontal" value={angle} min={0} max={90} step={1} unit="°" onChange={(n)=>{setAngle(n);touch();}} />
    </div>
    <div className="grid gap-3 sm:grid-cols-2"><Result label="Horizontal: R cos θ" value={x.toFixed(2)} /><Result label="Vertical: R sin θ" value={y.toFixed(2)} /></div>
    <svg viewBox="0 0 420 230" className="mx-auto w-full max-w-xl rounded-lg border bg-muted/20" role="img" aria-label={`Vector magnitude ${magnitude} at ${angle} degrees has horizontal component ${x.toFixed(2)} and vertical component ${y.toFixed(2)}.`}>
      <line x1="50" y1="190" x2="380" y2="190" stroke="currentColor" opacity=".35" />
      <line x1="50" y1="190" x2="50" y2="25" stroke="currentColor" opacity=".35" />
      <line x1="50" y1="190" x2={50+x*5} y2={190-y*5} stroke="currentColor" strokeWidth="5" />
      <line x1="50" y1="190" x2={50+x*5} y2="190" stroke="currentColor" strokeDasharray="7 5" />
      <line x1={50+x*5} y1="190" x2={50+x*5} y2={190-y*5} stroke="currentColor" strokeDasharray="7 5" />
      <text x="210" y="215" fontSize="14">horizontal component</text><text x="8" y="95" fontSize="14" transform="rotate(-90 18 95)">vertical component</text>
    </svg>
  </Panel>;
}

function Projectile({ lessonId }: { lessonId: string }) {
  const [speed, setSpeed] = useState(24);
  const [angle, setAngle] = useState(40);
  const g = 9.81;
  const rad = angle * Math.PI / 180;
  const ux = speed * Math.cos(rad), uy = speed * Math.sin(rad);
  const flight = 2 * uy / g;
  const range = ux * flight;
  const height = uy * uy / (2*g);
  const points = useMemo(()=>Array.from({length:31},(_,i)=>{const t=flight*i/30;return {x:ux*t,y:uy*t-.5*g*t*t};}),[ux,uy,flight]);
  const maxX = Math.max(range,1), maxY=Math.max(height,1);
  const path=points.map((p,i)=>`${i?"L":"M"} ${25+p.x/maxX*370} ${205-p.y/maxY*165}`).join(" ");
  const touch = () => markStep(lessonId, "kinematicsExplorer");
  return <Panel title="Projectile motion explorer" note="Air resistance is ignored and launch and landing are at the same height.">
    <div className="grid gap-4 sm:grid-cols-2"><Slider label="Launch speed" value={speed} min={5} max={50} step={1} unit="m/s" onChange={(n)=>{setSpeed(n);touch();}}/><Slider label="Launch angle" value={angle} min={5} max={85} step={1} unit="°" onChange={(n)=>{setAngle(n);touch();}}/></div>
    <div className="grid gap-3 sm:grid-cols-3"><Result label="Time of flight" value={`${flight.toFixed(2)} s`}/><Result label="Maximum height" value={`${height.toFixed(2)} m`}/><Result label="Range" value={`${range.toFixed(2)} m`}/></div>
    <svg viewBox="0 0 420 230" className="w-full rounded-lg border bg-muted/20" role="img" aria-label={`Projectile launched at ${speed} metres per second at ${angle} degrees travels ${range.toFixed(2)} metres, rises ${height.toFixed(2)} metres and remains airborne ${flight.toFixed(2)} seconds.`}><line x1="20" y1="205" x2="405" y2="205" stroke="currentColor" opacity=".35"/><path d={path} fill="none" stroke="currentColor" strokeWidth="4"/><circle cx="25" cy="205" r="6" className="fill-primary"/></svg>
  </Panel>;
}

function Panel({title,note,children}:{title:string;note:string;children:React.ReactNode}){return <div className="space-y-5 rounded-xl border p-5"><div><h4 className="font-semibold">{title}</h4><p className="text-sm text-muted-foreground">{note}</p></div>{children}</div>}
function Slider({label,value,min,max,step,unit,onChange}:{label:string;value:number;min:number;max:number;step:number;unit:string;onChange:(v:number)=>void}){return <label className="text-sm">{label}: <strong>{value} {unit}</strong><input className="mt-2 w-full" type="range" value={value} min={min} max={max} step={step} onChange={e=>onChange(Number(e.target.value))}/></label>}
function Result({label,value}:{label:string;value:string}){return <div className="rounded-lg border p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="font-semibold">{value}</p></div>}
