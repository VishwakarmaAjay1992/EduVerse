import Link from "next/link";
import { ArrowRight, Compass, Hammer, Microscope, Sparkles, Telescope } from "lucide-react";
import { HistoricalImage } from "@/components/inventions/historical-image";
import { ScientistImage } from "@/components/scientists/scientist-image";
import { SiteHeader } from "@/components/site-header";
import { SubjectCard } from "@/components/subject-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SCIENTISTS } from "@/data/scientists";
import { listSubjects } from "@/lib/curriculum";
import { HUB_FEATURES, HUB_GROUPS, HUB_GROUP_COPY } from "@/data/learning-hub";
import { INVENTIONS } from "@/data/inventions";

export default function HomePage() {
  const subjects = listSubjects();
  const totalLessons = subjects.reduce((n, s) => n + s.stats.lessons, 0);
  const totalHours = subjects.reduce((n, s) => n + s.stats.hours, 0);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b">
          <div className="container flex flex-col items-center gap-6 py-24 text-center">
            <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Learn anything, structured from first principles.
            </h1>
            <p className="max-w-xl text-balance text-lg text-muted-foreground">
              A subject-agnostic knowledge platform. Every formula, theorem and scientist is a
              reusable object, connected in one graph — starting with Mathematics and Physics.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/subjects">Explore subjects</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/scientists">
                  Meet the scientists <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {totalLessons.toLocaleString()} lessons · ~{totalHours.toLocaleString()} hours of
              structured learning
            </p>
          </div>
        </section>

        <section className="container py-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">Subjects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {subjects.map((subject) => (
              <SubjectCard key={subject.slug} subject={subject} />
            ))}
          </div>
        </section>

        <section className="border-y bg-muted/30">
          <div className="container py-16">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Compass className="size-4" /> New learning platform
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  One hub. Twenty-five ways to discover.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  Move beyond reading with virtual experiments, formula tools, calculators, quizzes,
                  invention stories, space exploration and study resources.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/learning-hub">
                  Open Learning Hub <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {HUB_GROUPS.map((group) => {
                const details = HUB_GROUP_COPY[group];
                const count = HUB_FEATURES.filter((feature) => feature.group === group).length;
                return (
                  <Link
                    key={group}
                    href="/learning-hub"
                    className="rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: details.accent }}
                    >
                      {group}
                    </span>
                    <strong className="mt-2 block text-lg">{count} experiences</strong>
                    <span className="mt-2 block text-sm leading-5 text-muted-foreground">
                      {details.description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y bg-slate-950 text-white">
          <div className="container grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <Telescope className="size-4" />
                New science collection
              </div>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                25 Fascinating Physics Phenomena
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Discover why skies change colour, stars twinkle, clouds float, tides rise, echoes
                return and supercooled water can freeze in an instant.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/phenomena">
                Explore all 25 <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>

        <section className="border-y bg-amber-50/60 dark:bg-amber-950/10">
          <div className="container py-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] shadow-sm">
                  <Hammer className="size-3.5" aria-hidden="true" /> Human history inventions
                </div>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Necessity, trial, failure and breakthrough
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                  Explore inventions as evolving systems rather than single eureka moments. Each
                  dossier connects the original need, prior art, failed experiments, collaborators,
                  technical operation, surviving prototypes, later improvements and long-term effects.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/inventions">
                    Explore invention history <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {INVENTIONS.map((invention) => (
                  <Link
                    key={invention.slug}
                    href={`/inventions/${invention.slug}`}
                    className="group overflow-hidden rounded-xl border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <HistoricalImage
                      image={invention.heroImage}
                      width={900}
                      className="rounded-none border-0 shadow-none"
                      imageClassName="aspect-[16/10] transition duration-500 group-hover:scale-105"
                      showCaption={false}
                    />
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">
                        {invention.era}
                      </p>
                      <h3 className="mt-2 text-xl font-bold group-hover:underline">
                        {invention.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {invention.subtitle}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                        Open complete dossier <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-muted/35">
          <div className="container grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] shadow-sm">
                <Sparkles className="size-3.5" aria-hidden="true" /> New collection
              </div>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                The people behind the principles
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Read high-quality profiles of 25 influential scientists, including early life,
                inspiration, political challenges, backlash, key laws, defining work and
                photographs of original documents, instruments or historical prototypes.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button asChild>
                  <Link href="/scientists">
                    <Microscope aria-hidden="true" /> Explore the scientist profiles
                  </Link>
                </Button>
                <span className="text-sm text-muted-foreground">Designed to grow</span>
              </div>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {SCIENTISTS.slice(0, 4).map((scientist) => (
                    <Link
                      key={scientist.slug}
                      href={`/scientists/${scientist.slug}`}
                      className="group relative aspect-[3/4] overflow-hidden border-r last:border-r-0"
                      aria-label={`Read about ${scientist.fullName}`}
                    >
                      <ScientistImage
                        image={scientist.portrait}
                        width={700}
                        className="h-full rounded-none border-0"
                        imageClassName="grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        showCredit={false}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3 pt-12 text-white">
                        <p className="scientist-signature text-xl leading-tight">
                          {scientist.fullName}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
