import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { PhenomenaDirectory } from "@/components/phenomena/phenomena-directory";
import { PhenomenonArt } from "@/components/phenomena/phenomenon-art";
import { SiteHeader } from "@/components/site-header";
import { PHENOMENA, PHENOMENON_CATEGORIES } from "@/data/phenomena";

export const metadata: Metadata = {
  title: `${PHENOMENA.length} Fascinating Physics Phenomena`,
  description:
    "Explore surprising natural phenomena through authentic science, interactive illustrations, history, myths, experiments and quizzes.",
  alternates: { canonical: "/phenomena" },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[560px] overflow-hidden border-b bg-slate-950 text-white sm:min-h-[620px] lg:min-h-[680px]">
          <PhenomenonArt
            slug="aurora"
            title="Fascinating physics phenomena"
            fillContainer
            className="opacity-95"
            priority
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/25"
            aria-hidden="true"
          />

          <div className="container relative flex min-h-[560px] items-center py-12 sm:min-h-[620px] sm:py-16 lg:min-h-[680px]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="size-4" aria-hidden="true" /> Discovery collection
              </div>
              <h1 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight drop-shadow-2xl sm:mt-6 sm:text-6xl lg:text-7xl">
                {PHENOMENA.length} Fascinating Physics Phenomena
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/90 drop-shadow-lg sm:mt-6 sm:text-lg sm:leading-8">
                Nature is not always what it appears to be. Follow light, sound, water, heat,
                electricity and space physics from the first observation to the modern explanation.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/80">
                <span>{PHENOMENA.length} guided topics</span>
                <span>{PHENOMENON_CATEGORIES.length} categories</span>
                <span>Experiments and quizzes</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#phenomena-directory"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Explore all phenomena <ArrowDown className="size-4" aria-hidden="true" />
                </a>
                <Link
                  href="/phenomena/aurora"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 bg-slate-950/35 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Start with the aurora <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="phenomena-directory" className="container scroll-mt-20 py-10 sm:py-16">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <h2 className="text-3xl font-bold">Choose a phenomenon</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Each topic includes an observation guide, step-by-step physics, an interactive model,
              historical interpretations, myths, a safe demonstration, authentic facts,
              applications, a quiz and further reading.
            </p>
          </div>
          <PhenomenaDirectory />
        </section>
      </main>
    </>
  );
}
