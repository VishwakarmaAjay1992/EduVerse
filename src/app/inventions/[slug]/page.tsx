import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticleSection,
  ComparisonTable,
  ComponentList,
  CutawayDiagram,
  EvolutionTimeline,
  ImageSources,
  InterestingFacts,
  InventionHero,
  InventorProfile,
  KeyInformation,
  MainUses,
  MobileTableOfContents,
  PreviousNextNavigation,
  References,
  RelatedInventions,
  TableOfContents,
  WorkingPrinciple,
} from "@/components/inventions/invention-article";
import { SiteHeader } from "@/components/site-header";
import { getInvention, INVENTIONS } from "@/data/inventions";

export function generateStaticParams() {
  return INVENTIONS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const invention = getInvention(slug);

  if (!invention) return { title: "Invention" };

  return {
    title: invention.seoTitle,
    description: invention.seoDescription,
    keywords: invention.keywords,
    alternates: { canonical: `/inventions/${invention.slug}` },
    openGraph: {
      title: invention.seoTitle,
      description: invention.seoDescription,
      type: "article",
      images: invention.heroImage.src
        ? [{ url: invention.heroImage.src, alt: invention.heroImage.alt }]
        : undefined,
    },
  };
}

export default async function InventionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const invention = getInvention(slug);

  if (!invention) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <InventionHero invention={invention} />
        <div className="container py-10">
          <MobileTableOfContents />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <article className="min-w-0 space-y-14">
              <div>
                <ArticleSection section={invention.overview} />
                <div className="mt-6">
                  <KeyInformation invention={invention} />
                  <MainUses invention={invention} />
                </div>
              </div>
              <ArticleSection section={invention.worldBefore} />
              <ArticleSection section={invention.originOfIdea} />
              <section id="contributors" className="scroll-mt-20">
                <h2 className="text-3xl font-bold">Inventors and Contributors</h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  The steam engine was a cumulative invention. No single person created the complete
                  machine used during the Industrial Revolution.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[...invention.inventors, ...invention.contributors].map((person) => (
                    <InventorProfile key={person.name} person={person} />
                  ))}
                </div>
              </section>
              <ArticleSection section={invention.firstWorkingVersion} />
              <WorkingPrinciple invention={invention} />
              <CutawayDiagram invention={invention} />
              <ComponentList invention={invention} />
              <EvolutionTimeline invention={invention} />
              <ComparisonTable invention={invention} />
              <ArticleSection section={invention.historicalImpact} />
              <ArticleSection section={invention.modernUse} />
              <ArticleSection section={invention.futureDevelopment} />
              <InterestingFacts invention={invention} />
              <ImageSources invention={invention} />
              <References invention={invention} />
              <RelatedInventions invention={invention} inventions={INVENTIONS} />
              <PreviousNextNavigation invention={invention} inventions={INVENTIONS} />
            </article>
            <aside className="hidden lg:block">
              <div className="sticky top-20">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
