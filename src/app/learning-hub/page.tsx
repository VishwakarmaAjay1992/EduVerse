import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { LearningHubDirectory } from "@/components/learning-hub/learning-hub-directory";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { HUB_FEATURES, HUB_GROUPS, HUB_GROUP_COPY } from "@/data/learning-hub";

export const metadata: Metadata = {
  title: "Learning Hub",
  description:
    "Explore 25 organized EduVerse learning experiences, including virtual labs, calculators, quizzes, discoveries and study resources.",
};

export default function LearningHubPage() {
  const interactiveCount = HUB_FEATURES.filter((feature) => feature.interactive).length;
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b bg-slate-950 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 15%, #38bdf8 0, transparent 28%), radial-gradient(circle at 85% 30%, #8b5cf6 0, transparent 30%), radial-gradient(circle at 45% 100%, #10b981 0, transparent 32%)",
            }}
          />
          <div className="container relative py-24 sm:py-32">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                <Compass className="size-4" /> EduVerse Learning Hub
              </div>
              <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-7xl">
                Learn, explore, experiment and practise.
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/75">
                Twenty-five connected experiences turn lessons into a complete learning journey—from
                everyday physics and open mysteries to formula tools, quizzes and downloadable
                resources.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <a href="#experiences">
                    Explore all experiences <ArrowRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/phenomena">Discover 25 phenomena</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/history-of-human-inventions">History of Inventions</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              <Stat value={HUB_FEATURES.length} label="experiences" />
              <Stat value={HUB_GROUPS.length} label="collections" />
              <Stat value={interactiveCount} label="interactive" />
            </div>
          </div>
        </section>

        <section className="border-b bg-muted/30">
          <div className="container py-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {HUB_GROUPS.map((group) => {
                const copy = HUB_GROUP_COPY[group];
                const count = HUB_FEATURES.filter((feature) => feature.group === group).length;
                return (
                  <a
                    key={group}
                    href="#experiences"
                    className="rounded-xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className="block text-xs font-bold uppercase tracking-widest"
                      style={{ color: copy.accent }}
                    >
                      {group}
                    </span>
                    <strong className="mt-2 block text-lg">{count} experiences</strong>
                    <span className="mt-2 block text-sm leading-5 text-muted-foreground">
                      {copy.description}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experiences" className="container scroll-mt-20 py-16">
          <div className="mb-9 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkles className="size-4" /> One connected platform
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your next experience
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Search the complete collection or filter it by how you want to learn. Every module is
              organized with clear outcomes, content collections and authoritative starting sources.
            </p>
          </div>
          <LearningHubDirectory />
        </section>
      </main>
    </>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <strong className="text-3xl">{value}</strong>
      <span className="mt-1 block text-xs uppercase tracking-widest text-white/55">{label}</span>
    </div>
  );
}
