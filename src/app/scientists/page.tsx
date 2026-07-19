import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, LibraryBig, Microscope, Sparkles } from "lucide-react";
import { ScientistDirectory } from "@/components/scientists/scientist-directory";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SCIENTISTS } from "@/data/scientists";

export const metadata: Metadata = {
  title: "World's Top Scientists",
  description:
    "Research-based profiles of influential scientists, their major work, discoveries, historical instruments and primary artifacts.",
};

const fieldCount = new Set(SCIENTISTS.flatMap((scientist) => scientist.primaryFields)).size;

export default function ScientistsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/70 via-background to-background">
          <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,hsl(var(--foreground)/0.08)_0,transparent_28%),radial-gradient(circle_at_80%_10%,hsl(var(--foreground)/0.06)_0,transparent_22%)]" />
          <div className="container relative py-20 sm:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur">
                <Sparkles className="size-4" aria-hidden="true" />
                Expanded collection
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                World&apos;s Top 25 Scientists
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-muted-foreground">
                Explore the ideas, experiments, instruments and original records behind 25 of
                history&apos;s most influential scientific lives. Every profile is built from
                museum, archive, university and prize-institution sources.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                “Top” is used as a curated introduction rather than an absolute ranking. Scientific
                progress is collaborative, crosses cultures and includes many more people than a
                list of 25 can represent. This collection is designed to expand.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <a href="#directory">
                    Browse scientists <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/subjects">Explore subjects</Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              <Card className="bg-background/80 shadow-sm backdrop-blur">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-lg bg-secondary p-3">
                    <Microscope className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{SCIENTISTS.length}</p>
                    <p className="text-xs text-muted-foreground">Founding profiles</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/80 shadow-sm backdrop-blur">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-lg bg-secondary p-3">
                    <LibraryBig className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{fieldCount}</p>
                    <p className="text-xs text-muted-foreground">Scientific fields</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/80 shadow-sm backdrop-blur">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="rounded-lg bg-secondary p-3">
                    <BookOpenCheck className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">30+</p>
                    <p className="text-xs text-muted-foreground">Research references</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div id="directory" className="container scroll-mt-20 py-16">
          <ScientistDirectory scientists={SCIENTISTS} />
        </div>

        <section className="border-t bg-muted/35">
          <div className="container grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Editorial standard
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Research before mythology</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Popular science stories often compress decades of shared work into a single heroic
                moment. These profiles distinguish discoveries, practical engineering, later
                development and collaboration wherever the historical record requires it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Authoritative sources",
                  text: "Museums, archives, universities, scientific institutions and Nobel Prize records are prioritised.",
                },
                {
                  title: "Historical artifacts",
                  text: "Original documents, instruments or clearly labelled replicas connect the story to physical evidence.",
                },
                {
                  title: "Visible attribution",
                  text: "Every portrait and artifact image includes its creator or collection, licence and source page.",
                },
              ].map((item) => (
                <Card key={item.title} className="shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
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
