import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  ChevronRight,
  FlaskConical,
  Hammer,
  LibraryBig,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import { InventionDirectory } from "@/components/inventions/invention-directory";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INVENTIONS } from "@/data/inventions";

export const metadata: Metadata = {
  title: "Human History Inventions",
  description:
    "Research-grade, beginner-friendly histories of inventions: necessity, prior art, people, failed experiments, engineering milestones, real prototypes, consequences and primary sources.",
  alternates: { canonical: "/inventions" },
};

const readingModes = [
  {
    icon: BookOpenCheck,
    title: "Beginner",
    description:
      "Start with the necessity, quick facts, system diagram and step-by-step explanation. Technical language is defined in the glossary.",
  },
  {
    icon: FlaskConical,
    title: "Expert",
    description:
      "Study failure modes, component constraints, manufacturing bottlenecks, design improvements and system-level engineering notes.",
  },
  {
    icon: SearchCheck,
    title: "Researcher",
    description:
      "Trace evidence labels, historiographical cautions, unresolved questions, museum objects, archival records and source links.",
  },
];

export default function InventionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[620px] overflow-hidden border-b bg-[#0b0908] text-white lg:min-h-[720px]">
          <Image
            src="/images/inventions/inventions-hero-collage.webp"
            alt="Collage of historical inventions including engineering drawings, electric light, locomotive, telephone, early automobile, aircraft and rocket"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0908] via-[#0b0908]/94 to-[#0b0908]/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0908]/85 via-transparent to-[#0b0908]/35"
            aria-hidden="true"
          />

          <div className="container relative flex min-h-[620px] items-center py-12 sm:py-16 lg:min-h-[720px]">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-5 overflow-x-auto text-sm text-white/75 sm:mb-6">
                <div className="flex min-w-max items-center gap-1">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <ChevronRight className="size-3.5 text-white/45" aria-hidden="true" />
                  <span className="text-white">Human History Inventions</span>
                </div>
              </nav>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-sm backdrop-blur-sm">
                <Sparkles className="size-4" aria-hidden="true" /> Expanded collection
              </div>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
                Human History <span className="text-amber-200">Inventions</span>
              </h1>
              <p className="mt-5 max-w-3xl text-balance text-base leading-7 text-white/85 drop-shadow-lg sm:mt-6 sm:text-lg sm:leading-8">
                Explore the ideas, creativity and breakthroughs that changed the world. From ancient
                innovations to modern marvels, discover the stories, science and impact behind the
                inventions that shaped our future.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
                Each dossier explains the original need, prior attempts, hidden collaborators,
                engineering milestones, historical context and long-term consequences.
              </p>
              <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="bg-amber-100 text-black hover:bg-amber-100/90">
                  <a href="#directory">
                    Browse inventions <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-black/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/inventions/steam-engine">Start with the steam engine</Link>
                </Button>
              </div>

              <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                      <Hammer className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{INVENTIONS.length}</p>
                      <p className="text-xs text-white/70">Complete deep dives</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                      <LibraryBig className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3 modes</p>
                      <p className="text-xs text-white/70">Beginner, expert, researcher</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                      <BookOpenCheck className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Real impact</p>
                      <p className="text-xs text-white/70">Science, society and industry</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="directory" className="container scroll-mt-20 py-14 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold text-primary">Choose an invention</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {INVENTIONS.length} complete knowledge dossiers
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Search by invention, inventor, historical era, engineering term or underlying problem.
            </p>
          </div>
          <InventionDirectory inventions={INVENTIONS} />
        </section>

        <section className="border-y bg-muted/35">
          <div className="container py-14 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">One page, three levels of reading</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Every dossier is designed to remain approachable without removing the details that
                engineers, historians and researchers need.
              </p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {readingModes.map((mode) => (
                <Card key={mode.title} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="inline-flex rounded-xl bg-secondary p-3">
                      <mode.icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{mode.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{mode.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
