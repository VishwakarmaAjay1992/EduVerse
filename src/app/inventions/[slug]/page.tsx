import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  CircleHelp,
  Clock3,
  ExternalLink,
  FlaskConical,
  Gauge,
  Globe2,
  History,
  Lightbulb,
  Microscope,
  Network,
  Scale,
  SearchCheck,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HistoricalImage } from "@/components/inventions/historical-image";
import { InventionDiagram } from "@/components/inventions/invention-diagram";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { INVENTIONS, getInvention } from "@/data/inventions";

export function generateStaticParams() {
  return INVENTIONS.map((invention) => ({ slug: invention.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const invention = getInvention(slug);
  if (!invention) return { title: "Invention not found | EduVerse" };

  return {
    title: `${invention.title}: Necessity, Failures, Milestones & Prototypes | EduVerse`,
    description: invention.summary[0],
  };
}

const navItems = [
  ["overview", "Overview"],
  ["necessity", "Necessity"],
  ["prehistory", "Prior art"],
  ["people", "People"],
  ["failures", "Failures"],
  ["timeline", "Timeline"],
  ["working", "How it works"],
  ["anatomy", "Anatomy"],
  ["improvements", "Improvements"],
  ["gallery", "Real objects"],
  ["consequences", "Consequences"],
  ["legacy", "Modern legacy"],
  ["myths", "Myths"],
  ["research", "Research"],
] as const;

export default async function InventionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const invention = getInvention(slug);
  if (!invention) notFound();

  const related = INVENTIONS.filter((item) => item.slug !== invention.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-muted/70 to-background">
          <div className="container py-10 sm:py-14">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Inventions", href: "/inventions" },
                { label: invention.title },
              ]}
            />

            <div className="grid gap-9 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{invention.category}</Badge>
                  <Badge variant="secondary">{invention.era}</Badge>
                  <Badge variant="outline">Evidence-led history</Badge>
                </div>
                <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                  {invention.title}
                </h1>
                <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-foreground/80">
                  {invention.subtitle}
                </p>
                <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                  {invention.summary[0]}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="#necessity">
                      Start with the necessity <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#gallery">See real historical objects</a>
                  </Button>
                </div>
                <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
                  <MetaLine icon={Globe2} label="Origin" value={invention.origin} />
                  <MetaLine icon={History} label="Interpretation" value={invention.statusLine} />
                </div>
              </div>

              <HistoricalImage
                image={invention.heroImage}
                width={1500}
                className="shadow-xl"
                imageClassName="min-h-[390px]"
                priority
              />
            </div>
          </div>
        </section>

        <div className="container grid gap-10 py-10 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-20 rounded-xl border bg-card p-4 shadow-sm">
              <p className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                On this page
              </p>
              <nav className="mt-3 space-y-0.5" aria-label="Invention page sections">
                {navItems.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-16">
            <section id="overview" className="scroll-mt-20">
              <SectionHeading icon={BookOpen} eyebrow="Orientation" title="A complete invention, not a hero story" />
              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  {invention.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {invention.quickFacts.map((fact) => (
                      <div key={fact.label} className="border-b pb-3 last:border-0 last:pb-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {fact.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-6">{fact.value}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="necessity" className="scroll-mt-20">
              <SectionHeading icon={Lightbulb} eyebrow="Necessity is the mother of invention" title={invention.necessity.headline} />
              <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
                {invention.necessity.introduction}
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {invention.necessity.pressures.map((pressure, index) => (
                  <Card key={pressure.title} className="shadow-sm">
                    <CardContent className="p-6">
                      <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <h3 className="mt-4 text-lg font-bold">{pressure.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{pressure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="mt-9 text-xl font-bold">What people used before</h3>
              <div className="mt-4 overflow-hidden rounded-xl border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-muted/65 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-5 py-3">Method</th>
                        <th className="px-5 py-3">What it did well</th>
                        <th className="px-5 py-3">Why it could not fully scale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invention.necessity.before.map((item) => (
                        <tr key={item.method} className="border-t align-top">
                          <td className="px-5 py-4 font-semibold">{item.method}</td>
                          <td className="px-5 py-4 leading-6 text-muted-foreground">{item.strength}</td>
                          <td className="px-5 py-4 leading-6 text-muted-foreground">{item.limit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-5 rounded-xl border-l-4 border-primary bg-muted/55 p-5">
                <p className="text-sm font-bold">The decisive constraint</p>
                <p className="mt-2 leading-7 text-muted-foreground">{invention.necessity.decisiveConstraint}</p>
              </div>
            </section>

            <section id="prehistory" className="scroll-mt-20">
              <SectionHeading icon={Globe2} eyebrow="Before the famous name" title="Global prehistory and prior art" />
              <p className="max-w-4xl leading-8 text-muted-foreground">{invention.globalPrehistory.introduction}</p>
              <div className="mt-7 space-y-4">
                {invention.globalPrehistory.entries.map((entry) => (
                  <div key={`${entry.date}-${entry.title}`} className="grid gap-3 rounded-xl border p-5 sm:grid-cols-[150px_1fr]">
                    <div>
                      <p className="font-bold text-primary">{entry.date}</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{entry.place}</p>
                    </div>
                    <div>
                      <h3 className="font-bold">{entry.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="people" className="scroll-mt-20">
              <SectionHeading icon={Users} eyebrow="Ideas are social" title="Who worked on it—and what each person actually did" />
              <div className="grid gap-5 md:grid-cols-2">
                {invention.people.map((person) => (
                  <Card key={person.name} className="shadow-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-xl leading-7">{person.name}</CardTitle>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {person.life}
                          </p>
                        </div>
                        <Badge variant="secondary" className="max-w-40 text-center">
                          {person.role}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{person.contribution}</p>
                      {person.correction && (
                        <div className="mt-4 rounded-lg bg-muted/60 p-3 text-xs leading-5">
                          <strong>Historical correction:</strong> {person.correction}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="failures" className="scroll-mt-20">
              <SectionHeading icon={FlaskConical} eyebrow="Experiment, failure, lesson" title="What did not work—and why" />
              <p className="mb-7 max-w-4xl leading-8 text-muted-foreground">
                Failure is included only where evidence supports it. When no laboratory record survives,
                the page labels careful reconstruction instead of inventing dramatic scenes.
              </p>
              <div className="space-y-5">
                {invention.experimentsAndFailures.map((failure) => (
                  <Card key={failure.title} className="overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-[170px_1fr]">
                      <div className="border-b bg-slate-950 p-6 text-white md:border-b-0 md:border-r">
                        <XCircle className="size-7 text-rose-300" aria-hidden="true" />
                        <p className="mt-5 text-sm font-bold">{failure.period}</p>
                        <Badge variant="secondary" className="mt-3 whitespace-normal text-center text-[10px]">
                          {failure.evidence}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{failure.title}</h3>
                        <FailureRow label="Attempt" value={failure.attempt} />
                        <FailureRow label="Why it failed or stalled" value={failure.failure} />
                        <FailureRow label="Engineering lesson" value={failure.lesson} strong />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section id="timeline" className="scroll-mt-20">
              <SectionHeading icon={Clock3} eyebrow="Milestones" title="From first principles to mature technology" />
              <div className="relative ml-3 border-l-2 pl-7 sm:ml-5 sm:pl-9">
                {invention.milestones.map((milestone) => (
                  <div key={`${milestone.year}-${milestone.title}`} className="relative pb-8 last:pb-0">
                    <span
                      className={`absolute -left-[2.16rem] top-1 size-4 rounded-full border-4 border-background sm:-left-[2.66rem] ${
                        milestone.pivotal ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                    <div className={milestone.pivotal ? "rounded-xl border bg-muted/35 p-5" : ""}>
                      <p className="text-sm font-bold text-primary">{milestone.year}</p>
                      <h3 className="mt-1 text-lg font-bold">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="working" className="scroll-mt-20">
              <SectionHeading icon={Gauge} eyebrow="Mechanism" title="How it works, step by step" />
              <InventionDiagram slug={invention.slug} />
              <p className="mt-7 max-w-4xl leading-8 text-muted-foreground">{invention.howItWorks.introduction}</p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {invention.howItWorks.steps.map((step) => (
                  <div key={step.title} className="rounded-xl border p-5">
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.explanation}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                <div className="flex items-center gap-3">
                  <Microscope className="size-6 text-sky-300" aria-hidden="true" />
                  <h3 className="text-xl font-bold">Expert notes</h3>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {invention.howItWorks.expertNotes.map((note) => (
                    <div key={note.title} className="rounded-xl border border-white/15 p-5">
                      <p className="font-bold">{note.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{note.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="anatomy" className="scroll-mt-20">
              <SectionHeading icon={Boxes} eyebrow="System anatomy" title="Every component solved a different problem" />
              <div className="overflow-hidden rounded-xl border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-muted/65 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-5 py-3">Part</th>
                        <th className="px-5 py-3">Purpose</th>
                        <th className="px-5 py-3">Engineering problem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invention.anatomy.map((item) => (
                        <tr key={item.part} className="border-t align-top">
                          <td className="px-5 py-4 font-bold">{item.part}</td>
                          <td className="px-5 py-4 leading-6 text-muted-foreground">{item.purpose}</td>
                          <td className="px-5 py-4 leading-6 text-muted-foreground">{item.designProblem}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="improvements" className="scroll-mt-20">
              <SectionHeading icon={Wrench} eyebrow="Iteration" title="Who improved it later" />
              <div className="grid gap-4">
                {invention.improvements.map((improvement) => (
                  <div key={`${improvement.period}-${improvement.improvement}`} className="grid gap-4 rounded-xl border p-5 md:grid-cols-[130px_190px_1fr]">
                    <p className="text-sm font-bold text-primary">{improvement.period}</p>
                    <div>
                      <p className="font-bold">{improvement.inventor}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{improvement.improvement}</p>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{improvement.whyItMattered}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="gallery" className="scroll-mt-20">
              <SectionHeading icon={SearchCheck} eyebrow="Real photographs and historical objects" title="Prototype and artifact gallery" />
              <div className="mb-6 rounded-xl border border-amber-300/60 bg-amber-50/70 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                <strong>Evidence note:</strong> Surviving originals are identified as originals. Where no original survives,
                the caption clearly says replica, reconstruction, later photograph or historical diagram.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {invention.gallery.map((image) => (
                  <HistoricalImage key={image.fileName} image={image} width={1300} imageClassName="min-h-[310px]" />
                ))}
              </div>
            </section>

            <section id="consequences" className="scroll-mt-20">
              <SectionHeading icon={Scale} eyebrow="Impact without hero worship" title="What it transformed—and what it cost" />
              <div className="grid gap-7 lg:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <CheckCircle2 className="size-5 text-emerald-600" /> Transformations
                  </h3>
                  <div className="mt-4 space-y-4">
                    {invention.consequences.transformed.map((impact) => (
                      <div key={impact.title} className="rounded-xl border p-5">
                        <h4 className="font-bold">{impact.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <AlertTriangle className="size-5 text-amber-600" /> Trade-offs and harms
                  </h3>
                  <div className="mt-4 space-y-4">
                    {invention.consequences.tradeoffs.map((impact) => (
                      <div key={impact.title} className="rounded-xl border p-5">
                        <h4 className="font-bold">{impact.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="legacy" className="scroll-mt-20">
              <SectionHeading icon={Network} eyebrow="Technology family tree" title="Modern descendants" />
              <div className="grid gap-4 md:grid-cols-2">
                {invention.modernDescendants.map((item) => (
                  <Card key={item.title} className="shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.connection}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="myths" className="scroll-mt-20">
              <SectionHeading icon={CircleHelp} eyebrow="Fact check" title="Common myths and oversimplifications" />
              <div className="space-y-4">
                {invention.myths.map((myth) => (
                  <div key={myth.claim} className="grid gap-3 rounded-xl border p-5 md:grid-cols-[1fr_130px]">
                    <div>
                      <p className="font-bold">“{myth.claim}”</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{myth.explanation}</p>
                    </div>
                    <Badge variant={myth.verdict === "False" ? "destructive" : "secondary"} className="h-fit justify-center whitespace-normal text-center">
                      {myth.verdict}
                    </Badge>
                  </div>
                ))}
              </div>
            </section>

            <section id="research" className="scroll-mt-20">
              <SectionHeading icon={SearchCheck} eyebrow="Research layer" title="Glossary, open questions and sources" />
              <div className="grid gap-7 lg:grid-cols-2">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Technical glossary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {invention.glossary.map((entry) => (
                      <div key={entry.term}>
                        <p className="font-bold">{entry.term}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{entry.definition}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Questions for deeper research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      {invention.researchQuestions.map((question, index) => (
                        <li key={question} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                            {index + 1}
                          </span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold">Selected research and collection sources</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Preference is given to museums, libraries, UNESCO records and collection catalogues.
                  Image licences are linked separately under each photograph.
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {invention.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-xl border p-5 transition hover:-translate-y-0.5 hover:bg-muted/40 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold group-hover:underline">{source.label}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {source.publisher}
                          </p>
                        </div>
                        <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{source.note}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border bg-muted/35 p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-muted-foreground">Continue exploring</p>
                  <h2 className="mt-2 text-2xl font-bold">Another invention dossier</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Compare how a different necessity produced a different chain of experiments, people and consequences.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <Link href="/inventions">
                      <ArrowLeft className="size-4" /> All inventions
                    </Link>
                  </Button>
                  {related[0] && (
                    <Button asChild>
                      <Link href={`/inventions/${related[0].slug}`}>
                        {related[0].title} <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="mt-0.5 rounded-xl bg-secondary p-3">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-1 text-balance text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function MetaLine({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border bg-card p-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 leading-5">{value}</p>
      </div>
    </div>
  );
}

function FailureRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`mt-4 rounded-lg p-4 ${strong ? "bg-primary text-primary-foreground" : "bg-muted/55"}`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${strong ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {label}
      </p>
      <p className={`mt-2 text-sm leading-6 ${strong ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{value}</p>
    </div>
  );
}
