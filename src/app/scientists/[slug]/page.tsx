import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  FlaskConical,
  Lightbulb,
  MapPin,
  Quote,
  Telescope,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScientistProfileSections } from "@/components/scientists/profile-sections";
import { ScientistImage } from "@/components/scientists/scientist-image";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getScientistProfile } from "@/data/scientist-profiles";
import { SCIENTISTS, getScientist } from "@/data/scientists";

export function generateStaticParams() {
  return SCIENTISTS.map((scientist) => ({ slug: scientist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scientist = getScientist(slug);
  if (!scientist) return { title: "Scientist" };

  return {
    title: scientist.fullName,
    description: `${scientist.headline} Explore ${scientist.fullName}'s major work, discoveries and historical artifacts.`,
  };
}

export default async function ScientistProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scientist = getScientist(slug);
  if (!scientist) notFound();
  const profile = getScientistProfile(slug);

  const index = SCIENTISTS.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? SCIENTISTS[index - 1] : undefined;
  const next = index < SCIENTISTS.length - 1 ? SCIENTISTS[index + 1] : undefined;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-muted/30">
          <div className="container py-8 sm:py-12">
            <Breadcrumbs
              items={[{ label: "Scientists", href: "/scientists" }, { label: scientist.fullName }]}
            />

            <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <ScientistImage
                image={scientist.portrait}
                width={1300}
                priority
                className="aspect-[4/3] max-h-[620px] shadow-lg"
              />

              <div className="py-2">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <Badge>Founding profile #{scientist.rank}</Badge>
                  {scientist.primaryFields.map((field) => (
                    <Badge key={field} variant="outline">
                      {field}
                    </Badge>
                  ))}
                </div>
                <h1 className="scientist-signature text-balance text-5xl leading-[1.05] sm:text-7xl">
                  {scientist.fullName}
                </h1>
                <p className="mt-5 max-w-2xl text-balance text-xl leading-8 text-muted-foreground">
                  {scientist.headline}
                </p>
                <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-lg border bg-background/70 p-3">
                    <CalendarDays className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-muted-foreground">Life</span>
                      <span className="font-medium">{scientist.life}</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border bg-background/70 p-3">
                    <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-muted-foreground">Born</span>
                      <span className="font-medium">{scientist.birthplace}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-6xl py-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0 space-y-14">
              <section aria-labelledby="overview-heading">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <BookOpen className="size-5" aria-hidden="true" />
                  </div>
                  <h2 id="overview-heading" className="text-2xl font-bold tracking-tight">
                    Life and scientific context
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  {scientist.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section aria-labelledby="deeper-story-heading">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Lightbulb className="size-5" aria-hidden="true" />
                  </div>
                  <h2 id="deeper-story-heading" className="text-2xl font-bold tracking-tight">
                    Early life, inspiration and historical challenges
                  </h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Background
                      </p>
                      <CardTitle className="text-xl leading-7">Early life</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {scientist.earlyLife.map((item) => (
                        <p key={item} className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Motivation
                      </p>
                      <CardTitle className="text-xl leading-7">What inspired the work</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {scientist.inspiration.map((item) => (
                        <p key={item} className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Context
                      </p>
                      <CardTitle className="text-xl leading-7">Challenges, politics and backlash</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {scientist.challenges.map((item) => (
                        <p key={item} className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Learn
                      </p>
                      <CardTitle className="text-xl leading-7">Key laws, theories and ideas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {scientist.lawsAndIdeas.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section aria-labelledby="contributions-heading">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <FlaskConical className="size-5" aria-hidden="true" />
                  </div>
                  <h2 id="contributions-heading" className="text-2xl font-bold tracking-tight">
                    Major scientific contributions
                  </h2>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {scientist.contributions.map((contribution) => (
                    <Card key={contribution.title} className="shadow-sm">
                      <CardHeader className="pb-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                          {contribution.period}
                        </p>
                        <CardTitle className="text-lg leading-6">{contribution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {contribution.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section aria-labelledby="defining-work-heading">
                <Card className="overflow-hidden shadow-sm">
                  <div className="grid md:grid-cols-[180px_1fr]">
                    <div className="flex min-h-44 items-center justify-center bg-primary p-8 text-primary-foreground">
                      <Quote className="size-16 opacity-75" aria-hidden="true" />
                    </div>
                    <div>
                      <CardHeader>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Defining work · {scientist.definingWork.date}
                        </p>
                        <CardTitle id="defining-work-heading" className="text-2xl leading-8">
                          {scientist.definingWork.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="leading-7 text-muted-foreground">
                          {scientist.definingWork.description}
                        </p>
                        <div className="rounded-lg border-l-4 border-primary bg-muted/55 p-4">
                          <p className="text-sm font-semibold">Why it matters</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {scientist.definingWork.significance}
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </section>

              <section aria-labelledby="artifact-heading">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Telescope className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {scientist.artifact.kind}
                    </p>
                    <h2 id="artifact-heading" className="text-2xl font-bold tracking-tight">
                      Prototype or primary artifact
                    </h2>
                  </div>
                </div>
                <div className="grid overflow-hidden rounded-xl border shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
                  <ScientistImage
                    image={scientist.artifact.image}
                    width={1400}
                    className="h-full min-h-[320px] rounded-none border-0"
                    imageClassName="min-h-[320px]"
                  />
                  <div className="bg-card p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {scientist.artifact.date}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{scientist.artifact.title}</h3>
                    <p className="mt-4 leading-7 text-muted-foreground">
                      {scientist.artifact.description}
                    </p>
                    <div className="mt-6 rounded-lg bg-muted/55 p-4">
                      <p className="text-sm font-semibold">Historical significance</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {scientist.artifact.significance}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="legacy-heading">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Lightbulb className="size-5" aria-hidden="true" />
                  </div>
                  <h2 id="legacy-heading" className="text-2xl font-bold tracking-tight">
                    Enduring legacy
                  </h2>
                </div>
                <div className="grid gap-4">
                  {scientist.legacy.map((item, itemIndex) => (
                    <div key={item} className="flex gap-4 rounded-xl border p-5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {itemIndex + 1}
                      </span>
                      <p className="pt-1 text-sm leading-6 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {profile ? <ScientistProfileSections profile={profile} /> : null}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Known for</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {scientist.knownFor.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Research sources</CardTitle>
                  <p className="text-xs leading-5 text-muted-foreground">
                    Open the institutional references used to prepare this profile.
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {scientist.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-lg border p-3 transition-colors hover:bg-muted"
                    >
                      <span className="flex items-start justify-between gap-2 text-sm font-medium">
                        {source.label}
                        <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {source.publisher}
                      </span>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="w-full">
                <Link href="/scientists">
                  <ArrowLeft aria-hidden="true" /> All scientists
                </Link>
              </Button>
            </aside>
          </div>

          <nav
            aria-label="Scientist profile navigation"
            className="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/scientists/${previous.slug}`}
                className="group rounded-xl border p-5 transition-colors hover:bg-muted"
              >
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowLeft className="size-4" /> Previous profile
                </span>
                <span className="scientist-signature mt-2 block text-2xl">{previous.fullName}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/scientists/${next.slug}`}
                className="group rounded-xl border p-5 text-right transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                  Next profile <ArrowRight className="size-4" />
                </span>
                <span className="scientist-signature mt-2 block text-2xl">{next.fullName}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </main>
    </>
  );
}
