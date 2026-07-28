import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PhenomenaDirectory } from "@/components/phenomena/phenomena-directory";
import { PhenomenonArt } from "@/components/phenomena/phenomenon-art";
import { SiteHeader } from "@/components/site-header";
import { PHENOMENA } from "@/data/phenomena";

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
        <section className="relative overflow-hidden border-b bg-slate-950 text-white">
          <PhenomenonArt
            slug="aurora"
            title="Fascinating physics phenomena"
            className="absolute inset-0 h-full w-full opacity-45"
            priority
            sizes="100vw"
          />
          <div className="container relative py-24 sm:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="size-4" aria-hidden="true" /> Discovery collection
              </div>
              <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-7xl">
                {PHENOMENA.length} Fascinating Physics Phenomena
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/80">
                Nature is not always what it appears to be. Follow light, sound, water, heat,
                electricity and space physics from the first observation to the modern explanation.
              </p>
            </div>
          </div>
        </section>
        <section className="container py-16">
          <div className="mb-10 max-w-3xl">
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
