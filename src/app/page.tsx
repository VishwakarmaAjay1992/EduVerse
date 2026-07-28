import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Brain,
  Compass,
  Hammer,
  LayoutDashboard,
  Microscope,
  Search,
  Sparkles,
  Telescope,
} from "lucide-react";
import { ContinueLearning } from "@/components/continue-learning";
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
import { PHENOMENA } from "@/data/phenomena";
import { PHYSICS_DICTIONARY } from "@/data/physics-dictionary";

export const metadata: Metadata = {
  title: "Learn Mathematics and Physics from First Principles",
  description:
    "Build a guided learning path across Mathematics and Physics, then practise with interactive tools, science questions and research-based collections.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const subjects = listSubjects();
  const totalLessons = subjects.reduce((n, s) => n + s.stats.lessons, 0);
  const totalHours = subjects.reduce((n, s) => n + s.stats.hours, 0);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container flex flex-col items-center gap-5 pb-16 pt-12 text-center sm:gap-6 sm:pb-24 sm:pt-24">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
              <Compass className="size-4" aria-hidden="true" /> Guided learning from first principles
            </div>
            <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight sm:text-6xl">
              What would you like to learn today?
            </h1>
            <p className="max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Build your Mathematics foundation, understand Physics, or explore the people,
              inventions and phenomena behind scientific ideas.
            </p>
            <div className="flex w-full max-w-sm flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/start">
                  Build my learning path <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/subjects">Browse all subjects</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {totalLessons.toLocaleString()} lessons · ~{totalHours.toLocaleString()} hours · progress saved automatically
            </p>
          </div>
        </section>

        <ContinueLearning />

        <section className="container pt-12">
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <LayoutDashboard className="size-4" aria-hidden="true" /> Personal learning system
                </div>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Learn, review mistakes and know what comes next
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  My EduVerse turns your lesson activity into a daily plan, Smart Review queue,
                  Mistake Notebook and subject progress dashboard.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5">
                    <Brain className="size-4 text-primary" aria-hidden="true" /> Spaced review
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5">
                    <Search className="size-4 text-primary" aria-hidden="true" /> Universal search
                  </span>
                </div>
              </div>
              <div className="border-t bg-muted/30 p-6 lg:border-l lg:border-t-0 lg:p-8">
                <Button asChild size="lg" className="w-full lg:w-auto">
                  <Link href="/my-learning">
                    Open My EduVerse <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-8">
          <Link
            href="/physics-dictionary"
            className="group block overflow-hidden rounded-2xl border bg-gradient-to-r from-sky-500/10 via-card to-card shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-md"
          >
            <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Atom className="size-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">New physics reference</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  Search {PHYSICS_DICTIONARY.length} physics concepts
                </h2>
                <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                  Clear definitions, formulas, SI units, alternative names and direct links to the
                  EduVerse lesson that explains each concept.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-primary">
                Open dictionary <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
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
                  One hub. {HUB_FEATURES.length} ways to discover.
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
                {PHENOMENA.length} Fascinating Physics Phenomena
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Discover why skies change colour, stars twinkle, clouds float, tides rise, echoes
                return and supercooled water can freeze in an instant.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/phenomena">
                Explore all {PHENOMENA.length} <ArrowRight />
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
                Read high-quality profiles of {SCIENTISTS.length} influential scientists, including early life,
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
