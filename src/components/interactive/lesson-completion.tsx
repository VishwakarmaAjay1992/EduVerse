"use client";

import { useEffect } from "react";
import { CheckCircle2, Circle, Trophy } from "lucide-react";
import { computeComplete, setCompleted, setOpened, useLessonProgress } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

export function LessonCompletion({
  lessonId,
  steps,
  requireQuizPass = true,
}: {
  lessonId: string;
  steps: { key: string; label: string }[];
  requireQuizPass?: boolean;
}) {
  const p = useLessonProgress(lessonId);

  // Mark the lesson as opened on first mount.
  useEffect(() => {
    setOpened(lessonId);
  }, [lessonId]);

  const rules = { steps: steps.map((s) => s.key), requireQuizPass };
  const ready = computeComplete(p, rules);

  // Auto-persist completion once requirements are met (no manual override).
  useEffect(() => {
    if (ready && !p.completed) setCompleted(lessonId, true);
  }, [ready, p.completed, lessonId]);

  const rows = [
    { key: "__opened", label: "Opened the lesson", ok: p.opened },
    ...steps.map((s) => ({ key: s.key, label: s.label, ok: !!p.steps[s.key] })),
    ...(requireQuizPass
      ? [{ key: "__quiz", label: "Scored at least 60% in the quiz", ok: !!p.quiz?.passed }]
      : []),
  ];

  return (
    <div
      className={cn(
        "rounded-xl border p-5",
        p.completed && "border-emerald-500/40 bg-emerald-500/5"
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <Trophy
          className={cn("size-5", p.completed ? "text-emerald-500" : "text-muted-foreground")}
        />
        <h3 className="text-lg font-semibold">
          {p.completed ? "Lesson complete" : "Complete this lesson"}
        </h3>
      </div>

      {!p.completed && (
        <p className="mb-3 text-sm text-muted-foreground">
          Finish these steps and the lesson marks itself complete:
        </p>
      )}

      <ul className="space-y-1.5">
        {rows.map((r) => (
          <li key={r.key} className="flex items-center gap-2 text-sm">
            {r.ok ? (
              <CheckCircle2 className="size-4 text-emerald-500" />
            ) : (
              <Circle className="size-4 text-muted-foreground" />
            )}
            <span className={r.ok ? "text-foreground" : "text-muted-foreground"}>{r.label}</span>
          </li>
        ))}
      </ul>

      {p.completed && (
        <p className="mt-4 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">
          Well done! Your progress is saved and the next lesson is unlocked.
        </p>
      )}
    </div>
  );
}
