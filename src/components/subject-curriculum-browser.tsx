"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import { CategoryProgress } from "@/components/category-progress";
import { ChapterThumbnailCard } from "@/components/chapter-thumbnail-card";
import { LevelBadge } from "@/components/level-badge";
import { Input } from "@/components/ui/input";

export interface CurriculumBrowserChapter {
  title: string;
  href: string;
  slug: string;
  lessonCount: number;
  imagePath?: string;
  prerequisites: string[];
  searchableText: string;
}

export interface CurriculumBrowserCategory {
  title: string;
  level: string;
  lessonCount: number;
  chapterSlugs: string[];
  chapters: CurriculumBrowserChapter[];
}

export function SubjectCurriculumBrowser({
  subjectSlug,
  accent,
  categories,
}: {
  subjectSlug: string;
  accent: string;
  categories: CurriculumBrowserCategory[];
}) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set([categories[0]?.title ?? ""]));

  const levels = useMemo(() => Array.from(new Set(categories.map((item) => item.level))), [categories]);
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      categories.flatMap((category) => {
        if (level !== "all" && category.level !== level) return [];
        const categoryMatches = category.title.toLowerCase().includes(normalizedQuery);
        const chapters = normalizedQuery
          ? category.chapters.filter(
              (chapter) => categoryMatches || chapter.searchableText.includes(normalizedQuery)
            )
          : category.chapters;
        return chapters.length ? [{ ...category, chapters }] : [];
      }),
    [categories, level, normalizedQuery]
  );

  const visibleChapterCount = filtered.reduce((total, category) => total + category.chapters.length, 0);

  return (
    <div>
      <div className="mb-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search curriculum</span>
            <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" aria-hidden="true" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search chapters, lessons or skills…"
              className="pl-9"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2" aria-label="Filter by learning level">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Filter className="size-3.5" aria-hidden="true" /> Level
            </span>
            {["all", ...levels].map((item) => {
              const active = level === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLevel(item)}
                  aria-pressed={active}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition ${
                    active ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Showing {visibleChapterCount} chapters across {filtered.length} categories
        </p>
      </div>

      <div className="space-y-5">
        {filtered.map((category) => {
          const forceOpen = Boolean(normalizedQuery);
          const isOpen = forceOpen || expanded.has(category.title);
          return (
            <details
              key={category.title}
              open={isOpen}
              onToggle={(event) => {
                if (forceOpen) return;
                const next = new Set(expanded);
                if (event.currentTarget.open) next.add(category.title);
                else next.delete(category.title);
                setExpanded(next);
              }}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 marker:hidden sm:p-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold">{category.title}</h2>
                    <LevelBadge level={category.level} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.chapters.length} visible chapters · {category.lessonCount} lessons in this category
                  </p>
                  <CategoryProgress
                    subjectSlug={subjectSlug}
                    chapterSlugs={category.chapterSlugs}
                    totalLessons={category.lessonCount}
                  />
                </div>
                <ChevronDown className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <div className="border-t p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {category.chapters.map((chapter) =>
                    chapter.imagePath ? (
                      <div key={chapter.title} className="space-y-2">
                        <ChapterThumbnailCard
                          href={chapter.href}
                          title={chapter.title}
                          lessonCount={chapter.lessonCount}
                          imagePath={chapter.imagePath}
                          accent={accent}
                        />
                        {chapter.prerequisites.length > 0 && (
                          <p className="px-1 text-xs text-muted-foreground">
                            Prerequisite: {chapter.prerequisites.join(", ")}
                          </p>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={chapter.title}
                        href={chapter.href}
                        className="rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                      >
                        <h3 className="font-semibold">{chapter.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {chapter.lessonCount} lessons
                        </p>
                        {chapter.prerequisites.length > 0 && (
                          <p className="mt-3 text-xs leading-5 text-muted-foreground">
                            Prerequisite: {chapter.prerequisites.join(", ")}
                          </p>
                        )}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </details>
          );
        })}

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed p-10 text-center">
            <p className="font-semibold">No curriculum items match your search.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a broader term or select a different level.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
