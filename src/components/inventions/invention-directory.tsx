"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { HistoricalImage } from "@/components/inventions/historical-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Invention } from "@/data/inventions";

export function InventionDirectory({ inventions }: { inventions: readonly Invention[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return inventions;

    return inventions.filter((invention) => {
      const searchable = [
        invention.title,
        invention.subtitle,
        invention.category,
        invention.era,
        invention.origin,
        invention.statusLine,
        ...invention.people.map((person) => `${person.name} ${person.role}`),
        ...invention.glossary.map((entry) => `${entry.term} ${entry.definition}`),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalized);
    });
  }, [inventions, query]);

  return (
    <div>
      <div className="relative mx-auto mb-8 max-w-xl">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search inventions, people, concepts or eras…"
          className="pl-9"
          aria-label="Search inventions"
        />
      </div>

      {filtered.length === 0 ? (
        <Card className="mx-auto max-w-xl">
          <CardContent className="p-8 text-center">
            <p className="font-semibold">No invention matches “{query}”.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a broader term such as steam, mining, Gutenberg, type, pressure or printing.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-7 lg:grid-cols-2">
          {filtered.map((invention) => (
            <Link
              key={invention.slug}
              href={`/inventions/${invention.slug}`}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <HistoricalImage
                image={invention.heroImage}
                width={1100}
                className="h-72 rounded-none border-0 border-b"
                imageClassName="transition duration-700 group-hover:scale-[1.035]"
                showCaption={false}
              />
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{invention.category}</Badge>
                  <Badge variant="secondary">{invention.era}</Badge>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">{invention.title}</h2>
                <p className="mt-2 text-base font-medium text-foreground/80">{invention.subtitle}</p>
                <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">
                  {invention.summary[0]}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm">
                  <span className="text-muted-foreground">{invention.statusLine}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                    Open deep dive
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
