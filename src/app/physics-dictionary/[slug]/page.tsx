import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  ChevronRight,
  Network,
  Search,
  Sigma,
  Tag,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  findRelatedPhysicsLessons,
  getPhysicsDictionaryEntry,
  getRelatedPhysicsTerms,
  PHYSICS_DICTIONARY,
} from "@/data/physics-dictionary";

export function generateStaticParams() {
  return PHYSICS_DICTIONARY.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPhysicsDictionaryEntry(slug);
  if (!entry) return { title: "Physics concept" };

  const description = `${entry.title}: ${entry.definition}`.slice(0, 158);
  return {
    title: `${entry.title} — Definition, Formula and Explanation`,
    description,
    keywords: [entry.title, ...entry.aliases, entry.category, "physics definition"],
    alternates: { canonical: `/physics-dictionary/${entry.slug}` },
    openGraph: {
      title: `${entry.title} | EduVerse Physics Dictionary`,
      description,
      type: "article",
    },
  };
}

export default async function PhysicsDictionaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPhysicsDictionaryEntry(slug);
  if (!entry) notFound();

  const relatedTerms = getRelatedPhysicsTerms(entry);
  const relatedLessons = findRelatedPhysicsLessons(entry);
  const index = PHYSICS_DICTIONARY.findIndex((item) => item.slug === entry.slug);
  const previous = index > 0 ? PHYSICS_DICTIONARY[index - 1] : undefined;
  const next = index < PHYSICS_DICTIONARY.length - 1 ? PHYSICS_DICTIONARY[index + 1] : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.title,
    description: entry.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "EduVerse Physics Dictionary",
      url: "/physics-dictionary",
    },
    ...(entry.aliases.length ? { alternateName: entry.aliases } : {}),
    url: `/physics-dictionary/${entry.slug}`,
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="border-b bg-gradient-to-br from-sky-500/10 via-background to-background">
          <div className="container py-9 sm:py-14">
            <Breadcrumbs
              items={[
                { label: "Physics Dictionary", href: "/physics-dictionary" },
                { label: entry.title },
              ]}
            />
            <div className="mt-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{entry.category}</Badge>
                {entry.priority === "high-interest" ? <Badge>High-interest concept</Badge> : null}
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                {entry.title}
              </h1>
              <p className="mt-5 text-balance text-xl leading-8 text-muted-foreground">
                {entry.definition}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={`/search?q=${encodeURIComponent(entry.title)}`}>
                    <Search className="size-4" aria-hidden="true" /> Search all EduVerse
                  </Link>
                </Button>
                {relatedLessons[0] ? (
                  <Button asChild variant="secondary">
                    <Link href={relatedLessons[0].href}>Practice this concept <ArrowRight className="size-4" /></Link>
                  </Button>
                ) : null}
                <Button asChild variant="outline">
                  <Link href="/physics-dictionary">
                    <ArrowLeft className="size-4" aria-hidden="true" /> Browse dictionary
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-6xl py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="min-w-0 space-y-10">
              <section aria-labelledby="definition-heading">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Atom className="size-5" aria-hidden="true" />
                  </span>
                  <h2 id="definition-heading" className="text-2xl font-bold">
                    Definition and explanation
                  </h2>
                </div>
                <p className="mt-5 text-lg leading-8">{entry.explanation}</p>
              </section>

              {entry.formula || entry.unit ? (
                <section aria-labelledby="formula-heading">
                  <Card>
                    <CardHeader>
                      <CardTitle id="formula-heading" className="flex items-center gap-2">
                        <Sigma className="size-5 text-primary" aria-hidden="true" />
                        Formula and unit
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                      {entry.formula ? (
                        <div className="rounded-xl bg-muted p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Common relation
                          </p>
                          <p className="mt-3 overflow-x-auto font-mono text-lg font-semibold">
                            {entry.formula}
                          </p>
                        </div>
                      ) : null}
                      {entry.unit ? (
                        <div className="rounded-xl bg-muted p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Unit
                          </p>
                          <p className="mt-3 font-mono text-lg font-semibold">{entry.unit}</p>
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </section>
              ) : null}

              {relatedLessons.length ? (
                <section aria-labelledby="lessons-heading">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
                      <BookOpen className="size-5" aria-hidden="true" />
                    </span>
                    <h2 id="lessons-heading" className="text-2xl font-bold">
                      Learn this concept in EduVerse
                    </h2>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {relatedLessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        href={lesson.href}
                        className="group rounded-xl border bg-card p-5 shadow-sm transition hover:border-primary/50 hover:shadow-md"
                      >
                        <p className="text-xs font-medium text-muted-foreground">
                          {lesson.chapterTitle} · {lesson.minutes} min
                        </p>
                        <h3 className="mt-2 font-semibold group-hover:text-primary">
                          {lesson.lessonTitle}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                          {lesson.summary.join(" · ")}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="font-semibold">Continue into the Physics curriculum</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explore the chapter sequence from foundations to university physics.
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/subjects/physics">
                        Physics lessons <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <section aria-labelledby="related-heading">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Network className="size-5" aria-hidden="true" />
                  </span>
                  <h2 id="related-heading" className="text-2xl font-bold">
                    Related physics concepts
                  </h2>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedTerms.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/physics-dictionary/${term.slug}`}
                      className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4 transition hover:border-primary/50"
                    >
                      <span>
                        <span className="block font-medium">{term.title}</span>
                        <span className="mt-1 line-clamp-1 block text-xs text-muted-foreground">
                          {term.definition}
                        </span>
                      </span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Reference details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Physics chapter</p>
                    <p className="mt-1 font-medium">{entry.category}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Dictionary position</p>
                    <p className="mt-1 font-medium">
                      {index + 1} of {PHYSICS_DICTIONARY.length}
                    </p>
                  </div>
                  {entry.aliases.length ? (
                    <div>
                      <p className="flex items-center gap-1.5 text-muted-foreground">
                        <Tag className="size-3.5" aria-hidden="true" /> Also searched as
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {entry.aliases.map((alias) => (
                          <Badge key={alias} variant="outline">
                            {alias}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Explore nearby terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {previous ? (
                    <Link
                      href={`/physics-dictionary/${previous.slug}`}
                      className="block rounded-lg border p-3 text-sm transition hover:border-primary/50"
                    >
                      <span className="text-xs text-muted-foreground">Previous</span>
                      <span className="mt-1 block font-medium">{previous.title}</span>
                    </Link>
                  ) : null}
                  {next ? (
                    <Link
                      href={`/physics-dictionary/${next.slug}`}
                      className="block rounded-lg border p-3 text-sm transition hover:border-primary/50"
                    >
                      <span className="text-xs text-muted-foreground">Next</span>
                      <span className="mt-1 block font-medium">{next.title}</span>
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
