"use client";

import { useMemo, useState } from "react";
import { markStep } from "@/lib/progress-store";

export function MotionExplorer({ lessonId }: { lessonId: string }) {
  const [out, setOut] = useState(30);
  const [back, setBack] = useState(10);
  const [time, setTime] = useState(8);
  const distance = out + back;
  const displacement = out - back;
  const speed = distance / time;
  const velocity = displacement / time;
  const pct = Math.max(8, Math.min(92, 8 + ((out - back) / 50) * 84));
  const completed = useMemo(() => out !== 30 || back !== 10 || time !== 8, [out, back, time]);

  function record() {
    markStep(lessonId, "motionExplorer");
  }

  return (
    <div className="rounded-xl border p-5 space-y-5">
      <div className="relative h-24 overflow-hidden rounded-lg bg-muted/40" aria-label={`Object is ${displacement} metres east of its starting point`}>
        <div className="absolute left-[8%] right-[8%] top-14 h-1 rounded bg-border" />
        <div className="absolute left-[8%] top-10 text-xs font-medium">Start</div>
        <div className="absolute top-8 -translate-x-1/2 text-3xl transition-all" style={{ left: `${pct}%` }} aria-hidden>🚗</div>
        <div className="absolute bottom-2 left-[8%] text-xs text-muted-foreground">east →</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm">Travel east: <strong>{out} m</strong><input className="mt-2 w-full" type="range" min="10" max="50" value={out} onChange={(e)=>{setOut(+e.target.value);record();}} /></label>
        <label className="text-sm">Return west: <strong>{back} m</strong><input className="mt-2 w-full" type="range" min="0" max="30" value={back} onChange={(e)=>{setBack(+e.target.value);record();}} /></label>
        <label className="text-sm">Total time: <strong>{time} s</strong><input className="mt-2 w-full" type="range" min="2" max="20" value={time} onChange={(e)=>{setTime(+e.target.value);record();}} /></label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Result label="Distance" value={`${distance} m`} note="whole path" />
        <Result label="Displacement" value={`${displacement} m east`} note="start to finish" />
        <Result label="Average speed" value={`${speed.toFixed(2)} m/s`} note="distance ÷ time" />
        <Result label="Average velocity" value={`${velocity.toFixed(2)} m/s east`} note="displacement ÷ time" />
      </div>
      {completed && <p className="text-sm text-emerald-600">Explorer activity recorded.</p>}
    </div>
  );
}
function Result({label,value,note}:{label:string;value:string;note:string}){return <div className="rounded-lg border p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="font-semibold">{value}</p><p className="text-xs text-muted-foreground">{note}</p></div>}
