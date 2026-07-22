import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, ImageIcon, Lightbulb, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type {
  Invention,
  InventionImage,
  InventionPerson,
  InventionSection,
} from "@/data/inventions";

export const TOC = [
  ["overview", "Overview"],
  ["world-before", "The world before"],
  ["idea-development", "How the idea developed"],
  ["contributors", "Inventors and contributors"],
  ["first-versions", "First practical versions"],
  ["working-principle", "How it works"],
  ["diagram", "Sectional cutaway"],
  ["components", "Main components"],
  ["timeline", "Evolution timeline"],
  ["comparison", "Early vs modern"],
  ["historical-impact", "Historical impact"],
  ["modern-use", "Modern use"],
  ["future-development", "Future development"],
  ["facts", "Interesting facts"],
  ["image-sources", "Image sources"],
  ["references", "References"],
] as const;

export function InventionHero({ invention }: { invention: Invention }) {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-amber-50 via-background to-background dark:from-amber-950/20">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>{invention.category}</Badge>
            <Badge variant="outline">{invention.historicalPeriod}</Badge>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            {invention.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {invention.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {invention.countries.map((country) => (
              <span key={country} className="rounded-full border px-3 py-1 text-xs font-medium">
                {country}
              </span>
            ))}
          </div>
        </div>
        <CreditedImage image={invention.heroImage} priority diagram />
      </div>
    </section>
  );
}

export function KeyInformation({ invention }: { invention: Invention }) {
  const items = [
    ["Category", invention.category],
    ["Period", invention.historicalPeriod],
    ["Important dates", invention.importantDates.join(", ")],
    ["Regions", invention.countries.join(", ")],
  ];

  return (
    <Card>
      <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 font-medium">{value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ArticleSection({ section }: { section: InventionSection }) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function MainUses({ invention }: { invention: Invention }) {
  return (
    <div className="mt-6 rounded-xl border bg-muted/25 p-5">
      <h3 className="font-semibold">Main uses across history</h3>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {invention.mainUses.map((use) => (
          <li key={use} className="flex gap-2 text-sm leading-6 text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            {use}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InventorProfile({ person }: { person: InventionPerson }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <span className="rounded-lg bg-secondary p-2">
            <UserRound className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-bold">{person.name}</h3>
            <p className="text-xs text-muted-foreground">
              {person.years} · {person.country}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">{person.role}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{person.biography}</p>
      </CardContent>
    </Card>
  );
}

export function CreditedImage({
  image,
  priority = false,
  diagram = false,
}: {
  image: InventionImage;
  priority?: boolean;
  diagram?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border bg-card shadow-sm">
      {image.src ? (
        <div className={diagram ? "overflow-x-auto" : undefined}>
          <div
            className={diagram ? "relative aspect-[5/3] min-w-[760px]" : "relative aspect-[16/10]"}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              className="object-contain p-3"
              sizes={diagram ? "760px" : "(max-width: 1024px) 100vw, 45vw"}
            />
          </div>
        </div>
      ) : (
        <div className="flex min-h-40 items-center justify-center bg-muted/40 p-8 text-center">
          <div className="max-w-md text-sm text-muted-foreground">
            <ImageIcon className="mx-auto mb-3 size-6" aria-hidden="true" />
            This optional licensed photograph is not bundled. The verified source and licence
            requirements are recorded below so it can be added without a broken image.
          </div>
        </div>
      )}
      <figcaption className="border-t p-4 text-xs leading-5 text-muted-foreground">
        <span className="font-medium text-foreground">{image.caption}</span>
        <br />
        Credit: {image.credit}. Licence: {image.licence}.
        {image.sourceUrl && (
          <>
            {" "}
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {image.sourceName} <ExternalLink className="inline size-3" aria-hidden="true" />
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

export function WorkingPrinciple({ invention }: { invention: Invention }) {
  return (
    <section id="working-principle" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">How a Steam Engine Works</h2>
      <div className="mt-5 rounded-xl border bg-muted/30 p-5">
        <p className="font-semibold">Simple explanation</p>
        <p className="mt-2 leading-7 text-muted-foreground">{invention.workingPrinciple.simple}</p>
      </div>
      <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
        {invention.workingPrinciple.detailed.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {invention.workingPrinciple.sequence.map((item, index) => (
          <li key={item} className="flex gap-3 rounded-lg border p-4 text-sm leading-6">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {index + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ComponentList({ invention }: { invention: Invention }) {
  return (
    <section id="components" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Main Components</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {invention.components.map((item) => (
          <div key={item.name} className="rounded-lg border p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.purpose}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CutawayDiagram({ invention }: { invention: Invention }) {
  return (
    <section id="diagram" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Sectional Cutaway Diagram</h2>
      <p className="mt-3 text-muted-foreground">
        The original diagram combines a reciprocating engine with a condenser return path to show
        the complete energy and fluid sequence. On a small screen, scroll horizontally to keep every
        label readable.
      </p>
      <div className="mt-5">
        <CreditedImage image={invention.diagram} diagram />
      </div>
    </section>
  );
}

export function EvolutionTimeline({ invention }: { invention: Invention }) {
  return (
    <section id="timeline" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Evolution Timeline</h2>
      <ol className="mt-6 border-l-2 pl-6">
        {invention.evolutionTimeline.map((item) => (
          <li key={`${item.year}-${item.title}`} className="relative pb-7">
            <span className="absolute -left-[31px] top-1 size-3 rounded-full bg-primary ring-4 ring-background" />
            <p className="text-sm font-bold text-primary">{item.year}</p>
            <h3 className="mt-1 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ComparisonTable({ invention }: { invention: Invention }) {
  return (
    <section id="comparison" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Early Versus Modern</h2>
      <div className="mt-5 overflow-x-auto rounded-xl border" tabIndex={0}>
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">
            Comparison of early piston steam engines and modern steam-power systems
          </caption>
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="p-4">
                Topic
              </th>
              <th scope="col" className="p-4">
                Early piston engines
              </th>
              <th scope="col" className="p-4">
                Modern steam systems
              </th>
            </tr>
          </thead>
          <tbody>
            {invention.comparison.map((row) => (
              <tr key={row.topic} className="border-t align-top">
                <th scope="row" className="p-4 font-semibold">
                  {row.topic}
                </th>
                <td className="p-4 leading-6 text-muted-foreground">{row.early}</td>
                <td className="p-4 leading-6 text-muted-foreground">{row.modern}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function InterestingFacts({ invention }: { invention: Invention }) {
  return (
    <section id="facts" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Interesting Facts</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {invention.interestingFacts.map((fact) => (
          <div key={fact} className="flex gap-3 rounded-lg border p-4">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden="true" />
            <p className="text-sm leading-6">{fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ImageSources({ invention }: { invention: Invention }) {
  const images = [...invention.historicalImages, ...invention.modernImages];
  return (
    <section id="image-sources" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">Historical and Modern Image Sources</h2>
      <p className="mt-3 leading-7 text-muted-foreground">
        The original cutaway is bundled. The optional photographs below are deliberately not
        downloaded until a specific item-level licence is selected and recorded.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {images.map((image) => (
          <CreditedImage key={`${image.kind}-${image.caption}`} image={image} />
        ))}
      </div>
    </section>
  );
}

export function References({ invention }: { invention: Invention }) {
  return (
    <section id="references" className="scroll-mt-20">
      <h2 className="text-3xl font-bold">References</h2>
      <ol className="mt-5 space-y-3">
        {invention.references.map((reference) => (
          <li key={reference.url} className="rounded-lg border p-4 text-sm">
            <a
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm font-semibold underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {reference.title} <ExternalLink className="inline size-3.5" aria-hidden="true" />
            </a>
            <p className="mt-1 text-muted-foreground">{reference.organization}</p>
            {reference.note && (
              <p className="mt-2 leading-6 text-muted-foreground">{reference.note}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TableOfContents() {
  return (
    <nav aria-label="On this page" className="rounded-xl border bg-card p-4">
      <p className="font-semibold">On this page</p>
      <ol className="mt-3 space-y-1">
        {TOC.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function MobileTableOfContents() {
  return (
    <details className="rounded-xl border bg-card p-4 lg:hidden">
      <summary className="cursor-pointer rounded-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        On this page
      </summary>
      <div className="mt-3">
        <TableOfContents />
      </div>
    </details>
  );
}

export function RelatedInventions({
  invention,
  inventions,
}: {
  invention: Invention;
  inventions: Invention[];
}) {
  const related = invention.relatedInventions
    .map((slug) => inventions.find((item) => item.slug === slug))
    .filter((item): item is Invention => Boolean(item));

  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-bold">
        Related inventions
      </h2>
      {related.length ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/inventions/${item.slug}`}
              className="rounded-lg border p-4 font-semibold hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.title}
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          Related pages will appear automatically when additional inventions are published.
        </p>
      )}
    </section>
  );
}

export function PreviousNextNavigation({
  invention,
  inventions,
}: {
  invention: Invention;
  inventions: Invention[];
}) {
  const index = inventions.findIndex((item) => item.slug === invention.slug);
  const previous = index > 0 ? inventions[index - 1] : undefined;
  const next = index >= 0 && index < inventions.length - 1 ? inventions[index + 1] : undefined;

  return (
    <nav aria-label="Invention navigation" className="border-t pt-8">
      <div className="grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/inventions/${previous.slug}`}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {previous.title}
          </Link>
        ) : (
          <Link
            href="/inventions"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All inventions
          </Link>
        )}
        {next ? (
          <Link
            href={`/inventions/${next.slug}`}
            className="inline-flex items-center justify-end gap-2 rounded-md border px-4 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {next.title}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href="/learning-hub/great-inventions"
            className="inline-flex items-center justify-end gap-2 rounded-md border px-4 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Learning Hub overview
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </nav>
  );
}
