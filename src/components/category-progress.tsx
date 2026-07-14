"use client";

import { useCompletedCount } from "@/lib/progress-store";

export function CategoryProgress({
  subjectSlug,
  chapterSlugs,
  totalLessons,
}: {
  subjectSlug: string;
  chapterSlugs: string[];
  totalLessons: number;
}) {
  const prefixes = chapterSlugs.map((c) => `${subjectSlug}/${c}/`);
  const done = useCompletedCount(prefixes);
  const pct = totalLessons ? Math.round((done / totalLessons) * 100) : 0;

  return (
    <div className="mt-2">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {done} of {totalLessons} lessons completed · {pct}%
      </p>
    </div>
  );
}
