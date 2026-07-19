"use client";

import { useState } from "react";
import { richText } from "@/components/math";

export function Flashcards({ cards }: { cards: { front: string; back: string }[] }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map((card, i) => {
        const show = flipped.has(i);
        return (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="min-h-24 rounded-lg border bg-card p-4 text-left transition-colors hover:border-primary/50"
          >
            <span className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">
              {show ? "Answer" : "Tap to reveal"}
            </span>
            <span className="text-sm">{richText(show ? card.back : card.front)}</span>
          </button>
        );
      })}
    </div>
  );
}
