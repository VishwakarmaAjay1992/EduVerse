"use client";

import { useMemo, useState } from "react";
import { markStep } from "@/lib/progress-store";

export function ForceExplorer({ lessonId }: { lessonId: string }) {
  const [right, setRight] = useState(12);
  const [left, setLeft] = useState(7);
  const resultant = right - left;
  const direction = resultant > 0 ? "right" : resultant < 0 ? "left" : "none";
  const balanced = resultant === 0;
  const offset = useMemo(() => Math.max(-38, Math.min(38, resultant * 3)), [resultant]);

  function update(setter: (value: number) => void, value: number) {
    setter(value);
    markStep(lessonId, "forceExplorer");
  }

  return (
    <div className="space-y-5 rounded-xl border p-5">
      <div
        className="relative h-40 overflow-hidden rounded-lg bg-muted/40"
        role="img"
        aria-label={
          balanced
            ? `The forces are balanced at ${right} newtons in each direction.`
            : `The resultant force is ${Math.abs(resultant)} newtons to the ${direction}.`
        }
      >
        <div className="absolute bottom-8 left-[8%] right-[8%] h-1 rounded bg-border" />
        <div
          className="absolute bottom-9 left-1/2 -translate-x-1/2 text-5xl transition-transform"
          style={{ transform: `translateX(calc(-50% + ${offset}px))` }}
          aria-hidden
        >
          📦
        </div>
        <div className="absolute left-[10%] top-10 flex items-center gap-2 text-sm font-medium">
          <span aria-hidden>←</span> {left} N
        </div>
        <div className="absolute right-[10%] top-10 flex items-center gap-2 text-sm font-medium">
          {right} N <span aria-hidden>→</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Force to the left: <strong>{left} N</strong>
          <input
            className="mt-2 w-full"
            type="range"
            min="0"
            max="20"
            value={left}
            onChange={(event) => update(setLeft, Number(event.target.value))}
          />
        </label>
        <label className="text-sm">
          Force to the right: <strong>{right} N</strong>
          <input
            className="mt-2 w-full"
            type="range"
            min="0"
            max="20"
            value={right}
            onChange={(event) => update(setRight, Number(event.target.value))}
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Result label="Resultant force" value={`${Math.abs(resultant)} N`} />
        <Result label="Direction" value={balanced ? "No direction" : direction} />
        <Result label="Force condition" value={balanced ? "Balanced" : "Unbalanced"} />
      </div>

      <p className="text-sm text-muted-foreground">
        {balanced
          ? "Equal opposite forces cancel. The resultant force is zero, so the object's motion does not change."
          : `The larger force is toward the ${direction}. The unbalanced resultant force can change the object's velocity.`}
      </p>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold capitalize">{value}</p>
    </div>
  );
}
