"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Eye, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProfileQuiz } from "@/data/scientist-profiles/types";

type Tab = "mcq" | "trueFalse" | "written";

const TABS: { id: Tab; label: string }[] = [
  { id: "mcq", label: "Multiple choice" },
  { id: "trueFalse", label: "True / false" },
  { id: "written", label: "Written" },
];

export function ProfileQuiz({ quiz }: { quiz: ProfileQuiz }) {
  const [tab, setTab] = useState<Tab>("mcq");
  const [mcqPicks, setMcqPicks] = useState<Record<number, number>>({});
  const [tfPicks, setTfPicks] = useState<Record<number, boolean>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const mcqScore = quiz.mcq.reduce(
    (n, q, i) => n + (mcqPicks[i] === q.answer ? 1 : 0),
    0,
  );
  const tfScore = quiz.trueFalse.reduce(
    (n, q, i) => n + (tfPicks[i] === q.answer ? 1 : 0),
    0,
  );

  const mcqAnswered = Object.keys(mcqPicks).length;
  const tfAnswered = Object.keys(tfPicks).length;

  function reset() {
    setMcqPicks({});
    setTfPicks({});
    setRevealed({});
  }

  return (
    <div className="rounded-lg border">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                tab === t.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <Button variant="ghost" size="sm" onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Reset
        </Button>
      </div>

      {tab === "mcq" && (
        <div className="divide-y">
          <p className="px-4 py-3 text-sm text-muted-foreground" aria-live="polite">
            Score: <span className="font-semibold text-foreground">{mcqScore}</span> /{" "}
            {quiz.mcq.length} · {mcqAnswered} answered
          </p>
          {quiz.mcq.map((q, i) => {
            const picked = mcqPicks[i];
            const done = picked !== undefined;
            return (
              <div key={i} className="p-4">
                <p className="font-medium">
                  <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                  {q.question}
                </p>
                <div className="mt-3 grid gap-2">
                  {q.options.map((opt, oi) => {
                    const isPicked = picked === oi;
                    const isRight = oi === q.answer;
                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={done}
                        onClick={() => setMcqPicks((p) => ({ ...p, [i]: oi }))}
                        className={cn(
                          "flex items-start gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                          !done && "hover:bg-muted",
                          done && isRight && "border-green-600/50 bg-green-600/10",
                          done && isPicked && !isRight && "border-destructive/50 bg-destructive/10",
                          done && !isPicked && !isRight && "opacity-60",
                        )}
                      >
                        <span className="font-mono text-xs text-muted-foreground">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {done && isRight && (
                          <CheckCircle2 className="size-4 shrink-0 text-green-600" aria-hidden="true" />
                        )}
                        {done && isPicked && !isRight && (
                          <XCircle className="size-4 shrink-0 text-destructive" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {done && (
                  <p className="mt-3 rounded-md bg-muted/60 p-3 text-sm text-muted-foreground">
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {tab === "trueFalse" && (
        <div className="divide-y">
          <p className="px-4 py-3 text-sm text-muted-foreground" aria-live="polite">
            Score: <span className="font-semibold text-foreground">{tfScore}</span> /{" "}
            {quiz.trueFalse.length} · {tfAnswered} answered
          </p>
          {quiz.trueFalse.map((q, i) => {
            const picked = tfPicks[i];
            const done = picked !== undefined;
            return (
              <div key={i} className="p-4">
                <p className="font-medium">
                  <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                  {q.statement}
                </p>
                <div className="mt-3 flex gap-2">
                  {[true, false].map((val) => {
                    const isPicked = picked === val;
                    const isRight = val === q.answer;
                    return (
                      <button
                        key={String(val)}
                        type="button"
                        disabled={done}
                        onClick={() => setTfPicks((p) => ({ ...p, [i]: val }))}
                        className={cn(
                          "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                          !done && "hover:bg-muted",
                          done && isRight && "border-green-600/50 bg-green-600/10",
                          done && isPicked && !isRight && "border-destructive/50 bg-destructive/10",
                          done && !isPicked && !isRight && "opacity-60",
                        )}
                      >
                        {val ? "True" : "False"}
                      </button>
                    );
                  })}
                </div>
                {done && (
                  <p className="mt-3 rounded-md bg-muted/60 p-3 text-sm text-muted-foreground">
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {tab === "written" && (
        <div className="divide-y">
          {[
            { label: "Short answer", items: quiz.shortAnswer, key: "s" },
            { label: "Long answer", items: quiz.longAnswer, key: "l" },
          ].map((group) => (
            <div key={group.key} className="p-4">
              <h4 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {group.label}
              </h4>
              <div className="space-y-4">
                {group.items.map((q, i) => {
                  const id = `${group.key}-${i}`;
                  const open = revealed[id];
                  return (
                    <div key={id} className="rounded-md border p-3">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-medium">
                          <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                          {q.question}
                        </p>
                        <Badge variant="secondary" className="shrink-0">
                          {q.marks} marks
                        </Badge>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={() => setRevealed((r) => ({ ...r, [id]: !r[id] }))}
                      >
                        <Eye className="size-4" aria-hidden="true" />
                        {open ? "Hide model answer" : "Show model answer"}
                      </Button>
                      {open && (
                        <p className="mt-3 rounded-md bg-muted/60 p-3 text-sm leading-relaxed text-muted-foreground">
                          {q.modelAnswer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
