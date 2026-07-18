"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { HUB_FEATURES, HUB_GROUPS, type HubGroup } from "@/data/learning-hub";
import { HubIcon } from "@/components/learning-hub/hub-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function LearningHubDirectory() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<"All" | HubGroup>("All");
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return HUB_FEATURES.filter((feature) => {
      const matchesGroup = group === "All" || feature.group === group;
      const haystack =
        `${feature.title} ${feature.tagline} ${feature.description} ${feature.collections.flatMap((item) => item.examples).join(" ")}`.toLowerCase();
      return matchesGroup && (!needle || haystack.includes(needle));
    });
  }, [group, query]);

  return (
    <div>
      <div className="mb-8 rounded-2xl border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <Search
              className="absolute left-3 top-3 size-4 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="sr-only">Search the learning hub</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search calculators, experiments, space, quizzes…"
              className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <div className="flex flex-wrap gap-2" aria-label="Filter by collection">
            {(["All", ...HUB_GROUPS] as const).map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={group === item ? "default" : "outline"}
                onClick={() => setGroup(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Showing {visible.length} of {HUB_FEATURES.length} learning experiences
        </p>
        <p className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
          <Sparkles className="size-3.5" /> Designed to grow
        </p>
      </div>

      {visible.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((feature) => (
            <article
              key={feature.slug}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: feature.accent }}
              />
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex size-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${feature.accent}18`, color: feature.accent }}
                >
                  <HubIcon name={feature.icon} className="size-6" />
                </span>
                <div className="flex flex-wrap justify-end gap-2">
                  <Badge variant="outline">{feature.group}</Badge>
                  {feature.interactive && <Badge>Interactive</Badge>}
                </div>
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Experience {String(feature.id).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.tagline}</p>
              <Button asChild variant="ghost" className="-ml-3 mt-5">
                <Link href={`/learning-hub/${feature.slug}`}>
                  Open experience{" "}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <p className="font-semibold">No learning experiences match that search.</p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => {
              setQuery("");
              setGroup("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
