import Link from "next/link";
import { Check } from "lucide-react";
import { flattenChapterLessons, getChapter } from "@/lib/curriculum";
import { hasLessonContent } from "@/lib/lesson-content";
import { cn } from "@/lib/utils";

export function LessonSidebarNav({
  subjectSlug,
  chapterSlug,
  currentSlug,
}: {
  subjectSlug: string;
  chapterSlug: string;
  currentSlug: string;
}) {
  const detail = getChapter(subjectSlug, chapterSlug);
  if (!detail) return null;
  const lessons = flattenChapterLessons(detail.chapter);

  return (
    <nav className="text-sm">
      <Link
        href={`/subjects/${subjectSlug}/${chapterSlug}`}
        className="mb-3 block text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
      >
        {detail.chapter.title}
      </Link>
      <ul className="space-y-1">
        {lessons.map((lesson) => {
          const active = lesson.slug === currentSlug;
          const ready = hasLessonContent(subjectSlug, lesson.slug);
          return (
            <li key={lesson.slug}>
              <Link
                href={`/subjects/${subjectSlug}/${chapterSlug}/${lesson.slug}`}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors",
                  active
                    ? "bg-accent font-medium text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {ready && <Check className="size-3.5 shrink-0 text-primary" />}
                <span className={cn(!ready && "pl-[1.375rem]")}>{lesson.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
