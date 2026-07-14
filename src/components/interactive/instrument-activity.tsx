"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { LessonIcon } from "@/components/lesson-icon";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";
import type { InstrumentScenario } from "@/lib/lesson-content-types";

export function InstrumentActivity({
  lessonId,
  scenarios,
}: {
  lessonId: string;
  scenarios: InstrumentScenario[];
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState<Set<number>>(new Set());

  const s = scenarios[i]!;
  const correct = picked === s.answer;
  const allDone = done.size === scenarios.length;

  function check() {
    if (picked === null) return;
    setChecked(true);
    if (picked === s.answer) {
      const next = new Set(done).add(i);
      setDone(next);
      if (next.size === scenarios.length) markStep(lessonId, "instrument");
    }
  }

  function advance() {
    const nextIndex = (i + 1) % scenarios.length;
    setI(nextIndex);
    setPicked(null);
    setChecked(false);
  }

  return (
    <div className="rounded-xl border p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium">
          {s.icon && <LessonIcon name={s.icon} className="mr-2 inline size-4 text-primary" />}
          {s.scenario}
        </span>
        <span className="text-xs text-muted-foreground">
          {done.size} of {scenarios.length} completed
        </span>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {s.options.map((opt, oi) => (
          <button
            key={oi}
            disabled={checked && correct}
            onClick={() => {
              setPicked(oi);
              setChecked(false);
            }}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
              picked === oi ? "border-primary bg-primary/5" : "hover:border-primary/40",
              checked && oi === s.answer && "border-emerald-500 bg-emerald-500/10",
              checked && picked === oi && !correct && "border-destructive bg-destructive/10"
            )}
          >
            <LessonIcon name={opt.toLowerCase()} className="size-4 text-muted-foreground" />
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {!checked || !correct ? (
          <button
            onClick={check}
            disabled={picked === null}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
          >
            Check answer
          </button>
        ) : (
          <button
            onClick={advance}
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            {allDone ? "Review again" : "Next scenario"}
          </button>
        )}
        {checked && (
          <p
            className={cn(
              "flex items-center gap-1.5 text-sm",
              correct ? "text-emerald-600" : "text-destructive"
            )}
          >
            {correct ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
            {correct ? s.why : "Not quite — try another instrument."}
          </p>
        )}
      </div>

      {allDone && (
        <p className="mt-4 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">
          Activity complete — you matched every instrument correctly.
        </p>
      )}
    </div>
  );
}
