import type { Metadata } from "next";
import { BookOpenCheck, FlaskConical, Hammer, LibraryBig, SearchCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InventionDirectory } from "@/components/inventions/invention-directory";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { INVENTIONS } from "@/data/inventions";

export const metadata: Metadata = {
  title: "Human History Inventions | EduVerse",
  description:
    "Research-grade, beginner-friendly histories of inventions: necessity, prior art, people, failed experiments, engineering milestones, real prototypes, consequences and primary sources.",
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
        <section className="border-b bg-gradient-to-b from-amber-50/70 to-background dark:from-amber-950/20">
          <div className="container py-16 sm:py-20">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Human History Inventions" }]} />
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.17em] shadow-sm">
                  <Hammer className="size-3.5" aria-hidden="true" /> Human history Â· technology Â· society
                </div>
                <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                  Inventions explained from necessity to legacy.
                </h1>
                <p className="mt-5 max-w-3xl text-balance text-lg leading-8 text-muted-foreground">
                  Not a list of dates and famous names. Each deep dive reconstructs the problem that
                  created demand, earlier attempts, failed experiments, hidden collaborators,
                  manufacturing constraints, milestone improvements, real historical objects and
                  the invention&apos;s benefits and costs.
                </p>
              </div>
              <Card className="bg-slate-950 text-white shadow-xl">
                <CardContent className="p-7">
                  <LibraryBig className="size-8 text-amber-300" aria-hidden="true" />
                  <p className="mt-5 text-3xl font-bold">{INVENTIONS.length} complete deep dives</p>
                  <p className="mt-3 leading-7 text-white/70">
                    Built as a scalable collection. Future inventions can use the same evidence,
                    gallery, timeline, engineering and research structure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-14 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold text-primary">Choose an invention</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">The first two knowledge dossiers</h2>
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

