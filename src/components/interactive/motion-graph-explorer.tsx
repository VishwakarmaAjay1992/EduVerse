"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function MotionGraphExplorer({ lessonId }: { lessonId: string }) {
  const [u,setU]=useState(2), [v,setV]=useState(14), [t,setT]=useState(6);
  const a=(v-u)/t;
  const y1=180-u*8, y2=180-v*8;
  const state=a>0.05?"accelerating":a<-.05?"decelerating":"constant velocity";
  const update=(fn:(n:number)=>void,n:number)=>{fn(n);markStep(lessonId,"graphExplorer")};
  return <div className="rounded-xl border p-5 space-y-4">
    <svg viewBox="0 0 520 230" className="w-full" role="img" aria-label={`Velocity changes from ${u} to ${v} metres per second in ${t} seconds`}>
      <line x1="55" y1="190" x2="495" y2="190" stroke="currentColor"/><line x1="55" y1="20" x2="55" y2="190" stroke="currentColor"/>
      {[0,5,10,15,20].map(n=><g key={n}><line x1="50" x2="495" y1={190-n*8} y2={190-n*8} stroke="currentColor" opacity=".12"/><text x="25" y={194-n*8} fontSize="12" fill="currentColor">{n}</text></g>)}
      <line x1="55" y1={y1} x2="455" y2={y2} stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="55" cy={y1} r="6" fill="#0ea5e9"/><circle cx="455" cy={y2} r="6" fill="#0ea5e9"/>
      <text x="230" y="220" fontSize="13" fill="currentColor">time (s)</text><text x="8" y="15" fontSize="13" fill="currentColor">velocity (m/s)</text>
    </svg>
    <div className="grid gap-4 sm:grid-cols-3">
      <label className="text-sm">Initial velocity: <strong>{u} m/s</strong><input className="mt-2 w-full" type="range" min="0" max="18" value={u} onChange={e=>update(setU,+e.target.value)}/></label>
      <label className="text-sm">Final velocity: <strong>{v} m/s</strong><input className="mt-2 w-full" type="range" min="0" max="20" value={v} onChange={e=>update(setV,+e.target.value)}/></label>
      <label className="text-sm">Time: <strong>{t} s</strong><input className="mt-2 w-full" type="range" min="1" max="12" value={t} onChange={e=>update(setT,+e.target.value)}/></label>
    </div>
    <div className="rounded-lg bg-muted p-4 text-sm"><strong>Acceleration = {a.toFixed(2)} m/s².</strong> The object is {state}. The gradient of a velocity–time graph is acceleration.</div>
  </div>
}
