"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Beaker,
  BookOpen,
  ExternalLink,
  Hammer,
  HelpCircle,
  Microscope,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import type { SearchIndexItem, SearchKind } from "@/lib/search-index";
import { cn } from "@/lib/utils";

const KINDS: Array<SearchKind | "All"> = [
  "All",
  "Lesson",
  "Science Q&A",
  "Scientist",
  "Phenomenon",
  "Invention",
  "Learning tool",
];

const SYNONYMS: Record<string, string[]> = {
  "speed change": ["acceleration"],
  "bending light": ["refraction"],
  "two unknown equation": ["simultaneous linear equations", "pair of linear equations"],
  "line equation": ["linear equation", "slope", "intercept"],
  "falling object": ["gravity", "free fall"],
  "electric flow": ["current electricity"],
};

const ICONS = {
  Lesson: BookOpen,
  Scientist: Microscope,
  Phenomenon: Sparkles,
  Invention: Hammer,
  "Science Q&A": HelpCircle,
  "Learning tool": Wrench,
} satisfies Record<SearchKind, typeof BookOpen>;

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function expandedTerms(query: string): string[] {
  const normalized = normalize(query);
  const words = normalized.split(" ").filter(Boolean);
  const aliases = Object.entries(SYNONYMS)
    .filter(([phrase]) => normalized.includes(phrase))
    .flatMap(([, values]) => values.flatMap((value) => normalize(value).split(" ")));
  return Array.from(new Set([...words, ...aliases]));
}

function scoreItem(item: SearchIndexItem, query: string): number {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return 0;
  const title = normalize(item.title);
  const description = normalize(item.description);
  const eyebrow = normalize(item.eyebrow);
  const keywords = normalize(item.keywords);
  const terms = expandedTerms(query);

  let score = 0;
  if (title === normalizedQuery) score += 120;
  if (title.startsWith(normalizedQuery)) score += 70;
  if (title.includes(normalizedQuery)) score += 45;
  if (keywords.includes(normalizedQuery)) score += 24;

  for (const term of terms) {
    if (title.split(" ").includes(term)) score += 18;
    else if (title.includes(term)) score += 11;
    if (eyebrow.includes(term)) score += 5;
    if (description.includes(term)) score += 4;
    if (keywords.includes(term)) score += 2;
  }

  return score;
}

export function SearchExperience({
  items,
  initialQuery = "",
}: {
  items: SearchIndexItem[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<SearchKind | "All">("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) return;
    const timeout = window.setTimeout(() => {
      trackEvent("search_performed", { query: query.trim(), filter: kind });
    }, 700);
    return () => window.clearTimeout(timeout);
  }, [query, kind]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    return items
      .filter((item) => kind === "All" || item.kind === kind)
      .map((item) => ({ item, score: scoreItem(item, query) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 60);
  }, [items, kind, query]);

  const counts = useMemo(() => {
    return KINDS.reduce<Record<string, number>>((acc, current) => {
      acc[current] =
        current === "All" ? items.length : items.filter((item) => item.kind === current).length;
      return acc;
    }, {});
  }, [items]);

  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-3xl">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search lessons, questions, scientists, inventions and tools…"
          aria-label="Search all EduVerse content"
          className="h-14 rounded-xl bg-background pl-12 pr-16 text-base shadow-sm"
        />
        <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border bg-muted px-2 py-1 text-xs text-muted-foreground sm:inline">
          /
        </kbd>
      </div>

      <div className="flex flex-wrap justify-center gap-2" aria-label="Search filters">
        {KINDS.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant={kind === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setKind(filter)}
          >
            {filter} <span className="opacity-70">{counts[filter]}</span>
          </Button>
        ))}
      </div>

      {query.trim().length < 2 ? (
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Find a lesson",
              text: "Try “linear equations”, “refraction” or “calculus”.",
            },
            {
              icon: Beaker,
              title: "Ask naturally",
              text: "Try “why is the sky blue?” or “how does gravity work?”.",
            },
            {
              icon: Sparkles,
              title: "Discover connections",
              text: "Search a scientist, formula, invention or natural phenomenon.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border bg-card p-5 shadow-sm">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-semibold">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      ) : results.length > 0 ? (
        <section className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">
              {results.length} result{results.length === 1 ? "" : "s"}
            </h2>
            <p className="text-sm text-muted-foreground">Best matches first</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {results.map(({ item }) => {
              const Icon = ICONS[item.kind];
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() =>
                    trackEvent("search_result_clicked", {
                      query: query.trim(),
                      result_id: item.id,
                      result_kind: item.kind,
                    })
                  }
                  className="group rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                      <span className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">{item.kind}</Badge>
                          <span className="text-xs text-muted-foreground">{item.eyebrow}</span>
                        </div>
                        <h3 className="mt-2 font-semibold group-hover:text-primary">{item.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="mx-auto max-w-xl rounded-xl border border-dashed p-8 text-center">
          <Search className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-semibold">No matching content yet</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Try fewer words, a related scientific term, or remove the selected content filter.
          </p>
          <Button className="mt-4" variant="outline" onClick={() => setKind("All")}>
            Search everything
          </Button>
        </div>
      )}
    </div>
  );
}
