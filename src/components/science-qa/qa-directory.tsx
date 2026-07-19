"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SCIENCE_QA, SCIENCE_QA_CATEGORIES } from "@/data/science-qa";
import { QaCard } from "./qa-card";

export function QaDirectory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const list = useMemo(
    () =>
      SCIENCE_QA.filter(
        (item) =>
          (cat === "All" || item.category === cat) &&
          `${item.question} ${item.shortAnswer}`.toLowerCase().includes(q.toLowerCase())
      ),
    [q, cat]
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border bg-card p-4 shadow-sm lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
          <span className="sr-only">Search science questions</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search photosynthesis, gravity, vaccines…"
            className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <select
          aria-label="Filter by category"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="h-10 rounded-md border bg-background px-3 text-sm"
        >
          <option>All</option>
          {SCIENCE_QA_CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        Showing {list.length} of {SCIENCE_QA.length} questions
      </p>
      <div className="space-y-3">
        {list.map((item) => (
          <QaCard key={item.id} item={item} />
        ))}
        {list.length === 0 && (
          <p className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
            No questions match your search yet.
          </p>
        )}
      </div>
    </div>
  );
}
