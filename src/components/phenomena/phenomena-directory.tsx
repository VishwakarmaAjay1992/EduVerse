"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Shuffle } from "lucide-react";
import { PHENOMENA, PHENOMENON_CATEGORIES } from "@/data/phenomena";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhenomenonArt } from "./phenomenon-art";

export function PhenomenaDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const visible = useMemo(
    () =>
      PHENOMENA.filter(
        (phenomenon) =>
          (category === "All" || phenomenon.category === category) &&
          `${phenomenon.title} ${phenomenon.summary} ${phenomenon.scientificName}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );

  function surprise() {
    const pick = PHENOMENA[Math.floor(Math.random() * PHENOMENA.length)];
    if (pick) location.href = `/phenomena/${pick.slug}`;
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 rounded-2xl border bg-card p-4 shadow-sm lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Search phenomena</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search light, clouds, tides…"
            className="h-11 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <select
          aria-label="Filter by category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-11 min-w-0 rounded-md border bg-background px-3 text-sm"
        >
          <option>All</option>
          {PHENOMENON_CATEGORIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <Button type="button" variant="outline" onClick={surprise} className="w-full lg:w-auto">
          <Shuffle aria-hidden="true" /> Surprise me
        </Button>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        Showing {visible.length} of {PHENOMENA.length} phenomena
      </p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((phenomenon) => (
          <article
            key={phenomenon.slug}
            className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <PhenomenonArt slug={phenomenon.slug} title={phenomenon.title} className="w-full" />
            <div className="p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <Badge variant="outline">#{phenomenon.id}</Badge>
                <span className="text-xs text-muted-foreground">
                  {phenomenon.readingTime} min · {phenomenon.difficulty}
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">{phenomenon.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{phenomenon.summary}</p>
              <p className="mt-3 text-xs font-medium text-primary">{phenomenon.category}</p>
              <Button asChild className="mt-5 w-full">
                <Link href={`/phenomena/${phenomenon.slug}`}>
                  Explore phenomenon <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
