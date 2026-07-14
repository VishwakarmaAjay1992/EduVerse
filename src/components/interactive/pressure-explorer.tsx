"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

export function PressureExplorer({ lessonId }: { lessonId: string }) {
  const [force, setForce] = useState(200);
  const [area, setArea] = useState(0.5);
  const pressure = force / area;
  const footprint = 35 + Math.min(90, area * 70);

  function updateForce(value: number) {
    setForce(value);
    markStep(lessonId, "pressureExplorer");
  }
  function updateArea(value: number) {
    setArea(value);
    markStep(lessonId, "pressureExplorer");
  }

  return (
    <div className="space-y-5 rounded-xl border p-5">
      <div className="relative flex h-48 items-end justify-center overflow-hidden rounded-lg bg-muted/40 pb-8">
        <div className="absolute bottom-7 left-[10%] right-[10%] h-1 bg-border" />
        <div className="flex flex-col items-center" role="img" aria-label={`A ${force} newton force acts over ${area.toFixed(2)} square metres, producing ${pressure.toFixed(0)} pascals.`}>
          <span className="mb-2 text-sm font-medium">↓ {force} N</span>
          <div className="flex h-16 items-center justify-center rounded-t-md border bg-background px-6 text-3xl" aria-hidden>
            📦
          </div>
          <div className="h-3 rounded-b bg-primary/70 transition-all" style={{ width: `${footprint}px` }} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Perpendicular force: <strong>{force} N</strong>
          <input className="mt-2 w-full" type="range" min="50" max="500" step="10" value={force} onChange={(event) => updateForce(Number(event.target.value))} />
        </label>
        <label className="text-sm">
          Contact area: <strong>{area.toFixed(2)} m²</strong>
          <input className="mt-2 w-full" type="range" min="0.1" max="2" step="0.1" value={area} onChange={(event) => updateArea(Number(event.target.value))} />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Result label="Force" value={`${force} N`} />
        <Result label="Area" value={`${area.toFixed(2)} m²`} />
        <Result label="Pressure" value={`${pressure.toFixed(0)} Pa`} />
      </div>
      <p className="text-sm text-muted-foreground">
        Increase the force to increase pressure. Increase the contact area to spread the same force and reduce pressure.
      </p>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="font-semibold">{value}</p></div>;
}
