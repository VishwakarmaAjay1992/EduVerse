import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LessonBody } from "@/components/lesson-body";
import { LessonSidebarNav } from "@/components/lesson-sidebar-nav";
import { OnThisPage } from "@/components/on-this-page";
import { SiteHeader } from "@/components/site-header";
import { richText } from "@/components/math";
import { Badge } from "@/components/ui/badge";
import { findLesson, flattenChapterLessons, getChapter, lessonParams } from "@/lib/curriculum";
import { getLessonContent, lessonOutline } from "@/lib/lesson-content";

export function generateStaticParams() {
  return lessonParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; chapter: string; lesson: string }>;
}): Promise<Metadata> {
  const { slug, chapter, lesson } = await params;
  const location = findLesson(slug, chapter, lesson);
  return { title: location ? location.lesson.title : "Lesson" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; chapter: string; lesson: string }>;
}) {
  const { slug, chapter, lesson } = await params;
  const location = findLesson(slug, chapter, lesson);
  if (!location) notFound();

  const content = getLessonContent(slug, chapter, lesson);
  const outline = content ? lessonOutline(content) : [];

  // Previous / next lesson within the chapter
  const detail = getChapter(slug, chapter);
  const siblings = detail ? flattenChapterLessons(detail.chapter) : [];
  const idx = siblings.findIndex((l) => l.slug === lesson);
  const prev = idx > 0 ? siblings[idx - 1] : undefined;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : undefined;

  return (
    <>
      <SiteHeader />
      <div className="container max-w-7xl py-8">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)_240px] lg:gap-10">
          {/* Left rail: chapter navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8">
              <LessonSidebarNav subjectSlug={slug} chapterSlug={chapter} currentSlug={lesson} />
            </div>
          </aside>

          {/* Center: the lesson */}
          <article className="min-w-0 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Subjects", href: "/subjects" },
                { label: location.subject.name, href: `/subjects/${slug}` },
                { label: location.chapter.title, href: `/subjects/${slug}/${chapter}` },
                { label: location.lesson.title },
              ]}
            />

            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <Badge variant="secondary">Level {location.lesson.d}</Badge>
                <Badge variant="outline">{location.lesson.min} min</Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{location.lesson.title}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{location.topic.title}</p>
            </div>

            {content ? (
              <>
                <div className="mb-8 rounded-lg border bg-muted/40 p-5">
                  <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Learning objectives
                  </h2>
                  <ul className="ml-5 list-disc space-y-1 text-sm">
                    {content.objectives.map((o, i) => (
                      <li key={i}>{richText(o)}</li>
                    ))}
                  </ul>
                </div>
                <LessonBody sections={content.sections} lessonId={`${slug}/${chapter}/${lesson}`} />
              </>
            ) : (
              <div>
                <h2 className="mb-3 text-lg font-semibold">In this lesson</h2>
                <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                  {location.lesson.sub.map((s) => (
                    <li key={s} className="leading-7">
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 rounded-lg border border-dashed p-5 text-sm text-muted-foreground">
                  Full teaching content for this lesson is coming soon. The outline above shows what
                  it will cover.
                </p>
              </div>
            )}

            {/* Previous / next navigation */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t pt-6">
              {prev ? (
                <Link
                  href={`/subjects/${slug}/${chapter}/${prev.slug}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="size-4" />
                  <span>
                    <span className="block text-xs">Previous</span>
                    <span className="font-medium text-foreground">{prev.title}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/subjects/${slug}/${chapter}/${next.slug}`}
                  className="group flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>
                    <span className="block text-xs">Next</span>
                    <span className="font-medium text-foreground">{next.title}</span>
                  </span>
                  <ArrowRight className="size-4" />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </article>

          {/* Right rail: on this page */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8">
              <OnThisPage items={outline} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
