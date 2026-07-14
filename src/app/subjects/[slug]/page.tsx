import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { CategoryProgress } from "@/components/category-progress";
import { LevelBadge } from "@/components/level-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSubject, subjectSlugs } from "@/lib/curriculum";
import { slugify } from "@/lib/slug";

export function generateStaticParams() {
  return subjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  return { title: subject ? subject.name : "Subject" };
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <div className="mb-10">
          <div
            className="mb-3 inline-flex rounded-lg px-3 py-1 text-sm font-medium"
            style={{ backgroundColor: `${subject.accent}1a`, color: subject.accent }}
          >
            Subject
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{subject.name}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{subject.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {subject.stats.categories} categories · {subject.stats.chapters} chapters ·{" "}
            {subject.stats.lessons} lessons · ~{subject.stats.hours} hours
          </p>
        </div>

        <div className="space-y-6">
          {subject.categories.map((category) => {
            const lessons = category.chapters.reduce(
              (n, c) => n + c.topics.reduce((m, t) => m + t.lessons.length, 0),
              0
            );
            return (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <LevelBadge level={category.level} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.chapters.length} chapters · {lessons} lessons
                  </p>
                  <CategoryProgress
                    subjectSlug={subject.slug}
                    chapterSlugs={category.chapters.map((c) => slugify(c.title))}
                    totalLessons={lessons}
                  />
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {category.chapters.map((chapter) => (
                      <li key={chapter.title}>
                        <Link
                          href={`/subjects/${subject.slug}/${slugify(chapter.title)}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {chapter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
