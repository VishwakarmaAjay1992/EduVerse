import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Lightbulb } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { QaDiagramView } from "@/components/science-qa/qa-diagram";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SCIENCE_QA } from "@/data/science-qa";
import { searchCurriculumLessons } from "@/lib/curriculum";
import { slugify } from "@/lib/slug";

export function generateStaticParams() {
  return SCIENCE_QA.map((item) => ({ slug: slugify(item.question) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = SCIENCE_QA.find((question) => slugify(question.question) === slug);
  if (!item) return { title: "Science question" };
  return {
    title: item.question,
    description: item.shortAnswer,
    alternates: { canonical: `/science-qa/${slug}` },
    openGraph: {
      title: item.question,
      description: item.shortAnswer,
      type: "article",
    },
  };
}

export default async function ScienceQuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = SCIENCE_QA.find((question) => slugify(question.question) === slug);
  if (!item) notFound();

  const index = SCIENCE_QA.findIndex((question) => question.id === item.id);
  const previous = index > 0 ? SCIENCE_QA[index - 1] : undefined;
  const next = index < SCIENCE_QA.length - 1 ? SCIENCE_QA[index + 1] : undefined;
  const related = (item.relatedQuestions ?? [])
    .map((id) => SCIENCE_QA.find((question) => question.id === id))
    .filter((question) => question !== undefined);
  const relatedLessons = searchCurriculumLessons(
    `${item.question} ${item.shortAnswer} ${(item.keyFacts ?? []).join(" ")}`,
    4
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.question,
    description: item.shortAnswer,
    articleSection: item.category,
    publisher: { "@type": "Organization", name: "EduVerse" },
    mainEntity: {
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.shortAnswer} ${item.explanation}`,
      },
    },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container max-w-4xl py-9 sm:py-16">
            <Breadcrumbs
              items={[
                { label: "Science Q&A", href: "/science-qa" },
                { label: item.question },
              ]}
            />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <HelpCircle className="size-4" aria-hidden="true" /> Question {item.id} of {SCIENCE_QA.length}
            </div>
            <Badge variant="outline" className="ml-2">
              {item.category}
            </Badge>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              {item.question}
            </h1>
            <p className="mt-5 text-lg font-semibold leading-7 text-primary sm:text-xl sm:leading-8">{item.shortAnswer}</p>
          </div>
        </section>

        <article className="container max-w-4xl space-y-8 py-9 sm:py-12">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg leading-8 text-muted-foreground">{item.explanation}</p>
          </div>

          {item.example && (
            <Card className="border-primary/25 bg-primary/5 shadow-sm">
              <CardContent className="flex items-start gap-3 p-5">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Example</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.example}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {item.keyFacts && item.keyFacts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">Key terms and facts</h2>
              <ul className="mt-4 space-y-3">
                {item.keyFacts.map((fact) => (
                  <li key={fact} className="rounded-lg border bg-card p-4 text-sm leading-6">
                    {fact}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {item.diagram && (
            <section>
              <h2 className="mb-4 text-2xl font-bold">Visual explanation</h2>
              <QaDiagramView diagram={item.diagram} />
            </section>
          )}

          {relatedLessons.length > 0 && (
            <section className="border-t pt-8">
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-primary" aria-hidden="true" />
                <h2 className="text-2xl font-bold">Continue with a full lesson</h2>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedLessons.map((lesson) => (
                  <Link
                    key={lesson.href}
                    href={lesson.href}
                    className="rounded-xl border bg-card p-4 transition hover:border-primary/50 hover:shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {lesson.subjectName} · {lesson.minutes} min
                    </p>
                    <h3 className="mt-2 font-semibold">{lesson.lessonTitle}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{lesson.chapterTitle}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold">Related questions</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((question) => (
                  <Link
                    key={question.id}
                    href={`/science-qa/${slugify(question.question)}`}
                    className="rounded-xl border bg-card p-4 text-sm font-semibold transition hover:border-primary/50 hover:shadow-sm"
                  >
                    {question.question}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={`/science-qa/${slugify(previous.question)}`}>
                  <ArrowLeft aria-hidden="true" /> Previous question
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button asChild className="w-full sm:w-auto">
                <Link href={`/science-qa/${slugify(next.question)}`}>
                  Next question <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            ) : (
              <Button asChild className="w-full sm:w-auto">
                <Link href="/science-qa">Browse all questions</Link>
              </Button>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
