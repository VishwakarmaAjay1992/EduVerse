"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { InventionCard } from "./invention-card";
import type { Invention } from "@/data/inventions";

export function InventionDirectory({ inventions }: { inventions: Invention[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [period, setPeriod] = useState("all");
  const categories = [...new Set(inventions.map((item) => item.category))];
  const periods = [...new Set(inventions.map((item) => item.historicalPeriod))];
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return inventions.filter((item) => {
      const matchesQuery = !normalized || [item.title, item.summary, item.category, ...item.keywords].join(" ").toLowerCase().includes(normalized);
      return matchesQuery && (category === "all" || item.category === category) && (period === "all" || item.historicalPeriod === period);
    });
  }, [category, inventions, period, query]);

  return (
    <section aria-labelledby="directory-heading">
      <h2 id="directory-heading" className="text-2xl font-bold tracking-tight">Browse inventions</h2>
      <div className="mt-6 grid gap-3 rounded-xl border bg-card p-4 md:grid-cols-[1fr_220px_260px]">
        <label className="relative block">
          <span className="sr-only">Search inventions</span>
          <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search inventions" className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
        </label>
        <label>
          <span className="sr-only">Filter by category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="all">All categories</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by historical period</span>
          <select value={period} onChange={(event) => setPeriod(event.target.value)} className="h-10 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="all">All historical periods</option>
            {periods.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">{filtered.length} invention{filtered.length === 1 ? "" : "s"}</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => <InventionCard key={item.slug} invention={item} />)}
      </div>
    </section>
  );
}
