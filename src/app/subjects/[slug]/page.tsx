import type { Metadata } from "next";
import Link from "next/link";
import { Atom, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { PHYSICS_DICTIONARY } from "@/data/physics-dictionary";
import {
  SubjectCurriculumBrowser,
  type CurriculumBrowserCategory,
} from "@/components/subject-curriculum-browser";
import { getChapterThumbnail } from "@/data/chapter-thumbnails";
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
  if (!subject) return { title: "Subject" };
  const description = `${subject.tagline} Explore ${subject.stats.lessons} structured lessons across ${subject.stats.chapters} chapters.`;
  return {
    title: subject.name,
    description,
    alternates: { canonical: `/subjects/${subject.slug}` },
    openGraph: { title: subject.name, description, type: "website" },
  };
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const categories: CurriculumBrowserCategory[] = subject.categories.map((category) => {
    const chapterSlugs = category.chapters.map((chapter) => slugify(chapter.title));
    const lessonCount = category.chapters.reduce(
      (total, chapter) =>
        total + chapter.topics.reduce((topicTotal, topic) => topicTotal + topic.lessons.length, 0),
      0
    );

    return {
      title: category.title,
      level: category.level,
      lessonCount,
      chapterSlugs,
      chapters: category.chapters.map((chapter) => {
        const chapterSlug = slugify(chapter.title);
        const lessons = chapter.topics.flatMap((topic) => topic.lessons);
        const imagePath = getChapterThumbnail(subject.slug, category.title, chapter.title);
        return {
          title: chapter.title,
          href: `/subjects/${subject.slug}/${chapterSlug}`,
          slug: chapterSlug,
          lessonCount: lessons.length,
          ...(imagePath ? { imagePath } : {}),
          prerequisites: chapter.prereq,
          searchableText: `${chapter.title} ${chapter.prereq.join(" ")} ${lessons
            .flatMap((lesson) => [lesson.title, ...lesson.sub])
            .join(" ")}`.toLowerCase(),
        };
      }),
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${subject.name} Curriculum`,
    description: subject.tagline,
    provider: { "@type": "Organization", name: "EduVerse" },
    educationalLevel: "Beginner to university",
    timeRequired: `PT${subject.stats.hours}H`,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${subject.stats.hours}H`,
    },
  };

  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

        {subject.slug === "physics" ? (
          <div className="mb-10 overflow-hidden rounded-2xl border bg-gradient-to-r from-sky-500/10 via-card to-card shadow-sm">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex max-w-2xl items-start gap-4">
                <span className="rounded-xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-400">
                  <Atom className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">Physics Dictionary</h2>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    Search {PHYSICS_DICTIONARY.length} concepts with definitions, formulas, units,
                    aliases and links back to the lessons that teach them.
                  </p>
                </div>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/physics-dictionary">
                  Search concepts <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        ) : null}

        <SubjectCurriculumBrowser
          subjectSlug={subject.slug}
          accent={subject.accent}
          categories={categories}
        />
      </main>
    </>
  );
}
