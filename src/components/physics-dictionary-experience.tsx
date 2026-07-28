"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ArrowRight, Atom, Search, Sigma } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import type {
  PhysicsDictionaryCategory,
  PhysicsDictionaryEntry,
} from "@/data/physics-dictionary";

type DictionaryListItem = Pick<
  PhysicsDictionaryEntry,
  | "title"
  | "slug"
  | "category"
  | "categorySlug"
  | "definition"
  | "formula"
  | "unit"
  | "aliases"
  | "priority"
>;

const STOP_WORDS = new Set(["a", "an", "the", "is", "are", "what", "define", "explain", "meaning", "please"]);

const QUERY_ALIASES: Record<string, string> = {
  "angle of banking": "banking angle",
  "bending light": "refraction",
  "center weight": "center of gravity",
  "centre weight": "center of gravity",
  "quantity of motion": "momentum",
  "turning force": "torque",
  "electric flow": "electric current",
  "light bending around obstacle": "diffraction",
};

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function normalizeQuery(value: string): string {
  const normalized = normalize(value);
  const withoutStopWords = normalized
    .split(" ")
    .filter((word) => word && !STOP_WORDS.has(word))
    .join(" ");
  return QUERY_ALIASES[withoutStopWords] ?? withoutStopWords;
}

function scoreItem(item: DictionaryListItem, query: string): number {
  const normalizedQuery = normalizeQuery(query);
  if (!normalizedQuery) return item.priority === "high-interest" ? 10 : 1;
  const title = normalize(item.title);
  const normalizedAliases = item.aliases.map(normalize);
  const aliases = normalizedAliases.join(" ");
  const definition = normalize(item.definition);
  const category = normalize(item.category);
  const formula = normalize(item.formula ?? "");
  const words = normalizedQuery.split(" ").filter(Boolean);

  let score = 0;
  if (title === normalizedQuery) score += 160;
  if (normalizedAliases.includes(normalizedQuery)) score += 130;
  if (title.startsWith(normalizedQuery)) score += 90;
  if (title.includes(normalizedQuery)) score += 65;
  if (aliases.includes(normalizedQuery)) score += 55;
  if (definition.includes(normalizedQuery)) score += 28;
  if (formula.includes(normalizedQuery)) score += 18;

  for (const word of words) {
    if (title.split(" ").includes(word)) score += 22;
    else if (title.includes(word)) score += 12;
    if (normalizedAliases.some((alias) => alias.split(" ").includes(word))) score += 10;
    if (category.includes(word)) score += 5;
    if (definition.includes(word)) score += 3;
  }
  if (item.priority === "high-interest") score += 3;
  return score;
}

export function PhysicsDictionaryExperience({
  items,
  categories,
}: {
  items: DictionaryListItem[];
  categories: PhysicsDictionaryCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [highInterestOnly, setHighInterestOnly] = useState(false);
  const [visible, setVisible] = useState(60);
  const searchTimer = useRef<number | undefined>(undefined);

  const results = useMemo(() => {
    return items
      .filter((item) => category === "all" || item.categorySlug === category)
      .filter((item) => !highInterestOnly || item.priority === "high-interest")
      .map((item) => ({ item, score: scoreItem(item, query) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
  }, [category, highInterestOnly, items, query]);

  const shown = results.slice(0, visible);

  function updateQuery(value: string) {
    setQuery(value);
    setVisible(60);
    if (searchTimer.current) window.clearTimeout(searchTimer.current);
    if (value.trim().length >= 2) {
      searchTimer.current = window.setTimeout(
        () => trackEvent("physics_dictionary_search", { query: value.trim(), category }),
        700
      );
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border bg-card p-4 shadow-sm sm:p-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search angle of banking, center of gravity, entropy…"
            aria-label="Search physics dictionary"
            className="h-14 rounded-xl pl-12 text-base"
          />
        </div>
        <select
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            setVisible(60);
          }}
          aria-label="Filter physics concepts by chapter"
          className="h-14 min-w-0 rounded-xl border bg-background px-4 text-sm"
        >
          <option value="all">All physics chapters ({items.length})</option>
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title} ({item.count})
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {results.length} concept{results.length === 1 ? "" : "s"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Definitions, formulas, units, aliases and related learning paths.
          </p>
        </div>
        <Button
          type="button"
          variant={highInterestOnly ? "default" : "outline"}
          onClick={() => {
            setHighInterestOnly((value) => !value);
            setVisible(60);
          }}
          className="w-full sm:w-auto"
        >
          <Atom className="size-4" aria-hidden="true" />
          High-interest concepts
        </Button>
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shown.map(({ item }) => (
            <Link
              key={item.slug}
              href={`/physics-dictionary/${item.slug}`}
              onClick={() =>
                trackEvent("physics_dictionary_term_opened", {
                  term: item.title,
                  source: "dictionary_index",
                })
              }
              className="group flex h-full flex-col rounded-xl border bg-card p-4 sm:p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{item.category}</Badge>
                {item.priority === "high-interest" ? <Badge>Popular</Badge> : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{item.title}</h3>
              <p className="mt-2 line-clamp-4 text-sm leading-6 text-muted-foreground">
                {item.definition}
              </p>
              {item.formula ? (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-2 font-mono text-xs">
                  <Sigma className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="truncate">{item.formula}</span>
                  {item.unit ? <span className="ml-auto text-muted-foreground">{item.unit}</span> : null}
                </div>
              ) : null}
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary">
                Read explanation <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <Search className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-semibold">No matching physics concept</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a shorter term, an alternative spelling, or select all chapters.
          </p>
        </div>
      )}

      {visible < results.length ? (
        <div className="text-center">
          <Button type="button" variant="outline" onClick={() => setVisible((value) => value + 60)}>
            Show 60 more concepts
          </Button>
        </div>
      ) : null}
    </div>
  );
}
