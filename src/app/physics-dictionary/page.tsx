import type { Metadata } from "next";
import { Atom, BookOpenCheck, Network, Search } from "lucide-react";
import { PhysicsDictionaryExperience } from "@/components/physics-dictionary-experience";
import { SiteHeader } from "@/components/site-header";
import {
  PHYSICS_DICTIONARY,
  PHYSICS_DICTIONARY_CATEGORIES,
} from "@/data/physics-dictionary";

export const metadata: Metadata = {
  title: "Physics Dictionary — 690+ Concepts, Definitions and Formulas",
  description:
    "Search more than 690 physics concepts with clear definitions, explanations, formulas, SI units, aliases, related terms and matching EduVerse lessons.",
  alternates: { canonical: "/physics-dictionary" },
  openGraph: {
    title: "EduVerse Physics Dictionary",
    description:
      "A searchable A–Z reference covering mechanics, thermodynamics, electricity, magnetism, optics, quantum physics, relativity and astrophysics.",
    type: "website",
  },
};

export default function PhysicsDictionaryPage() {
  const highInterestCount = PHYSICS_DICTIONARY.filter(
    (entry) => entry.priority === "high-interest"
  ).length;
  const listItems = PHYSICS_DICTIONARY.map((entry) => ({
    title: entry.title,
    slug: entry.slug,
    category: entry.category,
    categorySlug: entry.categorySlug,
    definition: entry.definition,
    ...(entry.formula ? { formula: entry.formula } : {}),
    ...(entry.unit ? { unit: entry.unit } : {}),
    aliases: entry.aliases,
    priority: entry.priority,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "EduVerse Physics Dictionary",
    description:
      "Physics concepts, definitions, formulas and related learning resources from introductory through university level.",
    url: "/physics-dictionary",
    numberOfItems: PHYSICS_DICTIONARY.length,
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="border-b bg-gradient-to-b from-sky-500/10 via-background to-background">
          <div className="container py-14 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Atom className="size-7" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Physics reference library
              </p>
              <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                Understand any physics term
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-balance text-lg leading-8 text-muted-foreground">
                From angle of banking, center of mass and torque to entropy, electromagnetic
                induction, quantum tunneling and black holes—search the concept and continue into
                the lesson that teaches it.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border bg-background/80 p-4 shadow-sm">
                  <Search className="mx-auto size-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-2xl font-bold">{PHYSICS_DICTIONARY.length}</p>
                  <p className="text-sm text-muted-foreground">searchable concepts</p>
                </div>
                <div className="rounded-xl border bg-background/80 p-4 shadow-sm">
                  <BookOpenCheck className="mx-auto size-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-2xl font-bold">{PHYSICS_DICTIONARY_CATEGORIES.length}</p>
                  <p className="text-sm text-muted-foreground">physics chapters</p>
                </div>
                <div className="rounded-xl border bg-background/80 p-4 shadow-sm">
                  <Network className="mx-auto size-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-2xl font-bold">{highInterestCount}</p>
                  <p className="text-sm text-muted-foreground">high-interest terms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 sm:py-16">
          <PhysicsDictionaryExperience
            items={listItems}
            categories={PHYSICS_DICTIONARY_CATEGORIES}
          />
        </section>
      </main>
    </>
  );
}
