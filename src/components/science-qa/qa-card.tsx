"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QaDiagramView } from "./qa-diagram";
import type { ScienceQuestion } from "@/data/science-qa";

/** A single accordion-style science question card with a smooth expand/collapse answer panel. */
export function QaCard({ item }: { item: ScienceQuestion }) {
  const [open, setOpen] = useState(false);
  const panelId = `qa-panel-${item.id}`;

  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <span className="flex flex-col gap-1">
          <Badge variant="outline" className="w-fit text-[10px] font-medium">
            {item.category}
          </Badge>
          <span className="font-medium leading-6">{item.question}</span>
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t px-4 py-4">
            <p className="font-semibold text-primary">{item.shortAnswer}</p>
            <p className="text-sm leading-7 text-muted-foreground">{item.explanation}</p>
            {item.example && (
              <p className="rounded-md bg-muted/40 p-3 text-sm">
                <strong className="text-foreground">Example: </strong>
                <span className="text-muted-foreground">{item.example}</span>
              </p>
            )}
            {item.keyFacts && item.keyFacts.length > 0 && (
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Key terms
                </p>
                <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                  {item.keyFacts.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.diagram && <QaDiagramView diagram={item.diagram} />}
          </div>
        </div>
      </div>
    </article>
  );
}
