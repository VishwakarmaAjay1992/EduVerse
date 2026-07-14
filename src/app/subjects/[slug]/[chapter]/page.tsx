import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LevelBadge } from "@/components/level-badge";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chapterParams, getChapter } from "@/lib/curriculum";
import { hasLessonContent } from "@/lib/lesson-content";
import { slugify } from "@/lib/slug";

export function generateStaticParams() {
  return chapterParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>;
}): Promise<Metadata> {
  const { slug, chapter } = await params;
  const detail = getChapter(slug, chapter);
  return { title: detail ? detail.chapter.title : "Chapter" };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>;
}) {
  const { slug, chapter } = await params;
  const detail = getChapter(slug, chapter);
  if (!detail) notFound();

  return (
    <>
      <SiteHeader />
      <main className="container max-w-4xl py-12">
        <Breadcrumbs
          items={[
            { label: "Subjects", href: "/subjects" },
            { label: detail.subject.name, href: `/subjects/${slug}` },
            { label: detail.chapter.title },
          ]}
        />
        <div className="mb-8">
          <div className="mb-2">
            <LevelBadge level={detail.categoryLevel} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{detail.chapter.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{detail.categoryTitle}</p>
        </div>

        <div className="space-y-6">
          {detail.chapter.topics.map((topic) => (
            <Card key={topic.title}>
              <CardHeader>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {topic.lessons.map((lesson) => {
                  const ready = hasLessonContent(slug, slugify(lesson.title));
                  return (
                    <Link
                      key={lesson.title}
                      href={`/subjects/${slug}/${chapter}/${slugify(lesson.title)}`}
                      className="group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      <span className="flex items-center gap-2">
                        {ready && <Check className="size-4 text-primary" />}
                        {lesson.title}
                      </span>
                      <span className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-xs">
                          Level {lesson.d} · {lesson.min} min
                        </span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
