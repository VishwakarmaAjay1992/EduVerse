"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Scientist } from "@/data/scientists";
import { ScientistCard } from "@/components/scientists/scientist-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ScientistDirectory({ scientists }: { scientists: readonly Scientist[] }) {
  const [query, setQuery] = useState("");
  const [field, setField] = useState("All fields");

  const fields = useMemo(
    () =>
      [
        "All fields",
        ...Array.from(new Set(scientists.flatMap((scientist) => scientist.primaryFields))).sort(),
      ] as const,
    [scientists]
  );

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return scientists.filter((scientist) => {
      const matchesField = field === "All fields" || scientist.primaryFields.includes(field);
      const searchable = [
        scientist.fullName,
        scientist.headline,
        scientist.birthplace,
        ...scientist.primaryFields,
        ...scientist.knownFor,
      ]
        .join(" ")
        .toLowerCase();
      return matchesField && (!term || searchable.includes(term));
    });
  }, [field, query, scientists]);

  return (
    <section aria-labelledby="scientist-directory-heading">
      <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Curated collection
          </p>
          <h2 id="scientist-directory-heading" className="mt-2 text-3xl font-bold tracking-tight">
            Meet the expanded collection
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Search by a scientist, field or discovery. The collection is data-driven and designed to
            grow as new profiles are added.
          </p>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-[minmax(220px,1fr)_200px] lg:max-w-xl">
          <div className="space-y-1.5">
            <Label htmlFor="scientist-search" className="sr-only">
              Search scientists
            </Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="scientist-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search names or discoveries"
                className="pl-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="scientist-field" className="sr-only">
              Filter by field
            </Label>
            <div className="relative">
              <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <select
                id="scientist-field"
                value={field}
                onChange={(event) => setField(event.target.value)}
                className="flex h-9 w-full appearance-none rounded-md border border-input bg-background pl-9 pr-8 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {fields.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
        Showing {filtered.length} of {scientists.length} scientists
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((scientist) => (
            <ScientistCard key={scientist.slug} scientist={scientist} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <h3 className="font-semibold">No scientist matched your search</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a broader name, field or discovery term.
          </p>
        </div>
      )}
    </section>
  );
}
