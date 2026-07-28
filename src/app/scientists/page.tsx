import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, LibraryBig, Microscope, Sparkles } from "lucide-react";
import { ScientistDirectory } from "@/components/scientists/scientist-directory";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SCIENTISTS } from "@/data/scientists";

export const metadata: Metadata = {
  title: "Influential Scientists",
  description:
    "Research-based profiles of influential scientists, their major work, discoveries, historical instruments and primary artifacts.",
  alternates: { canonical: "/scientists" },
};

const fieldCount = new Set(SCIENTISTS.flatMap((scientist) => scientist.primaryFields)).size;
const sourceCount = SCIENTISTS.reduce((total, scientist) => total + scientist.sources.length, 0);

export default function ScientistsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[620px] overflow-hidden border-b bg-[#0b0908] text-white lg:min-h-[720px]">
          <Image
            src="/images/scientists/scientists-hero-collage.webp"
            alt="Collage of influential scientists, vintage scientific portraits and historical diagrams"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0908] via-[#0b0908]/92 to-[#0b0908]/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0908]/80 via-transparent to-[#0b0908]/40"
            aria-hidden="true"
          />
          <div className="container relative flex min-h-[620px] items-center py-12 sm:py-16 lg:min-h-[720px]">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-sm backdrop-blur-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                Expanded collection
              </div>
              <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
                {SCIENTISTS.length} Influential Scientists
              </h1>
              <p className="mt-5 max-w-3xl text-balance text-base leading-7 text-white/85 drop-shadow-lg sm:mt-6 sm:text-lg sm:leading-8">
                Explore the ideas, experiments, early-life struggles, inspirations, political pressures,
                scientific backlashes and original records behind {SCIENTISTS.length} of history&apos;s most
                influential scientific lives.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
                “Influential” is used as a curated introduction rather than an absolute ranking. Scientific
                progress is collaborative, crosses cultures and includes many more people than a
                single collection can represent. This collection is designed to expand.
              </p>
              <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="bg-amber-100 text-black hover:bg-amber-100/90">
                  <a href="#directory">
                    Browse scientists <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-black/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/subjects">Explore subjects</Link>
                </Button>
              </div>

              <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                    <Microscope className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{SCIENTISTS.length}</p>
                    <p className="text-xs text-white/70">Founding profiles</p>
                  </div>
                </CardContent>
              </Card>
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                    <LibraryBig className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{fieldCount}</p>
                    <p className="text-xs text-white/70">Scientific fields</p>
                  </div>
                </CardContent>
              </Card>
                <Card className="border-white/10 bg-black/35 text-white shadow-sm backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-lg bg-white/10 p-3 text-amber-100">
                    <BookOpenCheck className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{sourceCount}</p>
                    <p className="text-xs text-white/70">Research references</p>
                  </div>
                </CardContent>
              </Card>
              </div>
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
                moment. These profiles now include early life, inspiration, historical challenges,
                political pressure, backlash, core laws and later collaboration wherever the
                historical record requires it.
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
