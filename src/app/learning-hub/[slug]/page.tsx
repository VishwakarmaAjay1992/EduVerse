import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Layers3 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FeatureExperience } from "@/components/learning-hub/feature-experience";
import { HubIcon } from "@/components/learning-hub/hub-icon";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHubFeature, HUB_FEATURES } from "@/data/learning-hub";

export function generateStaticParams() {
  return HUB_FEATURES.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getHubFeature(slug);
  if (!feature) return { title: "Learning experience" };
  return {
    title: feature.title,
    description: feature.description,
    alternates: { canonical: `/learning-hub/${feature.slug}` },
    openGraph: { title: feature.title, description: feature.tagline, type: "article" },
  };
}

export default async function HubFeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getHubFeature(slug);
  if (!feature) notFound();
  const index = HUB_FEATURES.findIndex((item) => item.slug === slug),
    previous = HUB_FEATURES[(index - 1 + HUB_FEATURES.length) % HUB_FEATURES.length]!,
    next = HUB_FEATURES[(index + 1) % HUB_FEATURES.length]!;
  const related = feature.related.map(getHubFeature).filter((item) => item !== undefined);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b bg-muted/25">
          <div
            className="absolute inset-y-0 right-0 w-1/2 opacity-15"
            style={{
              background: `radial-gradient(circle at center, ${feature.accent}, transparent 65%)`,
            }}
          />
          <div className="container relative py-10 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Learning Hub", href: "/learning-hub" }, { label: feature.title }]}
            />
            <div className="mt-9 grid gap-9 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{feature.group}</Badge>
                  {feature.interactive && <Badge variant="outline">Interactive experience</Badge>}
                  <Badge variant="outline">#{String(feature.id).padStart(2, "0")}</Badge>
                </div>
                <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                  {feature.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  {feature.description}
                </p>
                <Button asChild className="mt-7">
                  <a href="#start">
                    Start exploring <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[2rem] border bg-background shadow-xl">
                <span
                  className="flex size-32 items-center justify-center rounded-[2rem]"
                  style={{ color: feature.accent, backgroundColor: `${feature.accent}16` }}
                >
                  <HubIcon name={feature.icon} className="size-16" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-6xl py-14">
          <div className="space-y-14">
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Learning outcomes
                  </p>
                  <h2 className="text-2xl font-bold">What you will be able to do</h2>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {feature.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-xl border bg-card p-5">
                    <CheckCircle2 className="size-5" style={{ color: feature.accent }} />
                    <p className="mt-3 font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="start" className="scroll-mt-20">
              <div className="mb-6">
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: feature.accent }}
                >
                  {feature.interactive ? "Try it now" : "Explore the collection"}
                </p>
                <h2 className="mt-2 text-3xl font-bold">{feature.tagline}</h2>
              </div>
              <FeatureExperience slug={feature.slug} />
            </section>

            <section>
              <div className="mb-6 flex items-center gap-3">
                <Layers3 className="size-6" />
                <h2 className="text-3xl font-bold">Inside this experience</h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                {feature.collections.map((collection) => (
                  <Card key={collection.title}>
                    <CardHeader>
                      <CardTitle>{collection.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {collection.description}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {collection.examples.map((example) => (
                          <li key={example} className="flex gap-2 text-sm">
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0"
                              style={{ color: feature.accent }}
                            />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {feature.sources.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold">Authoritative starting sources</h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                  These organizations provide reliable reference material for expanding and
                  reviewing this collection.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {feature.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-xl border p-4 transition hover:bg-muted"
                    >
                      <span>
                        <strong>{source.title}</strong>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {source.organization}
                        </span>
                      </span>
                      <ExternalLink className="size-4 shrink-0" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-3xl font-bold">Continue your journey</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/learning-hub/${item.slug}`}
                    className="group rounded-xl border p-5 transition hover:bg-muted"
                  >
                    <span
                      className="flex size-9 items-center justify-center rounded-lg"
                      style={{ color: item.accent, backgroundColor: `${item.accent}16` }}
                    >
                      <HubIcon name={item.icon} />
                    </span>
                    <strong className="mt-4 block">{item.shortTitle}</strong>
                    <span className="mt-2 block text-sm leading-5 text-muted-foreground">
                      {item.tagline}
                    </span>
                    <span className="mt-4 flex items-center gap-1 text-sm font-semibold">
                      Open <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <nav className="grid gap-4 border-t pt-8 sm:grid-cols-2">
              <Link
                href={`/learning-hub/${previous.slug}`}
                className="rounded-xl border p-5 hover:bg-muted"
              >
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowLeft className="size-4" />
                  Previous
                </span>
                <strong className="mt-2 block">{previous.title}</strong>
              </Link>
              <Link
                href={`/learning-hub/${next.slug}`}
                className="rounded-xl border p-5 text-right hover:bg-muted"
              >
                <span className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                  Next
                  <ArrowRight className="size-4" />
                </span>
                <strong className="mt-2 block">{next.title}</strong>
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
