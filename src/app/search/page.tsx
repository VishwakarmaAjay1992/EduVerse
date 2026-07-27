import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";
import { SiteHeader } from "@/components/site-header";
import { buildSearchIndex } from "@/lib/search-index";

export const metadata: Metadata = {
  title: "Search",
  description: "Search every EduVerse lesson, scientist, phenomenon, invention, science answer and learning tool.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const items = buildSearchIndex();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container py-12 text-center sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Universal search
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Search the whole EduVerse
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance leading-7 text-muted-foreground">
              Find a lesson, answer, scientist, invention, phenomenon or interactive learning tool from one place.
            </p>
          </div>
        </section>
        <section className="container py-10 sm:py-12">
          <SearchExperience items={items} initialQuery={q} />
        </section>
      </main>
    </>
  );
}
