import Link from "next/link";
import {
  BookOpen,
  Brain,
  CalendarDays,
  Camera,
  FlaskConical,
  Image as ImageIcon,
  Landmark,
  Lightbulb,
  Link2,
  Quote,
  ScrollText,
  ShieldAlert,
  Sigma,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { BlockMath } from "@/components/math";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileQuiz } from "@/components/scientists/profile-quiz";
import { ScientistImage } from "@/components/scientists/scientist-image";
import type { ScientistProfile } from "@/data/scientist-profiles/types";

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="scroll-mt-20" id={id}>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="size-5 text-primary" aria-hidden />
        <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** Small labelled paragraph used by the early-life and context blocks. */
function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-l-2 border-muted pl-4">
      <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </h3>
      <p className="mt-1 leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}

const BACKLASH_BADGE = {
  Verified: "default",
  Disputed: "secondary",
  Myth: "destructive",
  "Widely attributed": "secondary",
} as const;

const QUOTE_BADGE = {
  Verified: "default",
  "Widely attributed": "secondary",
  Paraphrase: "outline",
  Disputed: "destructive",
} as const;

export function ScientistProfileSections({ profile }: { profile: ScientistProfile }) {
  return (
    <div className="space-y-16">
      {profile.timeline?.length ? (
        <Section id="timeline" title="Timeline" icon={CalendarDays}>
          <ol className="relative space-y-5 border-l pl-6">
            {profile.timeline.map((event) => (
              <li key={`${event.year}-${event.title}`} className="relative">
                <span
                  className={
                    event.pivotal
                      ? "absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background"
                      : "absolute -left-[1.72rem] top-2 size-2 rounded-full bg-muted-foreground/40 ring-4 ring-background"
                  }
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-sm font-semibold text-primary">{event.year}</span>
                  <h3 className="font-semibold">{event.title}</h3>
                  {event.pivotal ? <Badge variant="secondary">Turning point</Badge> : null}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {profile.earlyLifeDetail ? (
        <Section id="early-life-detail" title="Early life in depth" icon={BookOpen}>
          <div className="space-y-5">
            <Field label="Childhood" value={profile.earlyLifeDetail.childhood} />
            <Field label="Family background" value={profile.earlyLifeDetail.family} />
            <Field label="Education" value={profile.earlyLifeDetail.education} />
            <Field label="Difficulties" value={profile.earlyLifeDetail.difficulties} />
            <Field label="Financial struggles" value={profile.earlyLifeDetail.finances} />
            <Field label="Personal life" value={profile.earlyLifeDetail.personalLife} />
            <Field label="Influences" value={profile.earlyLifeDetail.influences} />
            <Field label="Books read" value={profile.earlyLifeDetail.booksRead} />
            <Field label="Teachers and mentors" value={profile.earlyLifeDetail.teachersAndMentors} />
            {profile.earlyLifeDetail.stories?.length ? (
              <div className="border-l-2 border-muted pl-4">
                <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  Stories
                </h3>
                <ul className="mt-2 space-y-2">
                  {profile.earlyLifeDetail.stories.map((story) => (
                    <li key={story} className="leading-relaxed text-muted-foreground">
                      {story}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Section>
      ) : null}

      {profile.turningPoints?.length || profile.failures?.length || profile.studentLessons?.length ? (
        <Section id="inspiration-detail" title="Turning points and lessons" icon={Lightbulb}>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Turning points", items: profile.turningPoints },
              { label: "Failures before success", items: profile.failures },
              { label: "Lessons for students", items: profile.studentLessons },
            ].map(({ label, items }) =>
              items?.length ? (
                <Card key={label}>
                  <CardContent className="pt-6">
                    <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                      {label}
                    </h3>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null,
            )}
          </div>
        </Section>
      ) : null}

      {profile.discoveries?.length ? (
        <Section id="discoveries" title="Important discoveries" icon={FlaskConical}>
          <div className="space-y-6">
            {profile.discoveries.map((d) => (
              <Card key={d.name}>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl font-bold">{d.name}</h3>
                    <Badge variant="outline">{d.period}</Badge>
                  </div>
                  <dl className="mt-4 space-y-3">
                    {[
                      ["Background", d.background],
                      ["The problem", d.problem],
                      ["Method", d.method],
                      ["The discovery", d.discovery],
                      ["Why it matters", d.importance],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          {label}
                        </dt>
                        <dd className="mt-0.5 leading-relaxed text-muted-foreground">{text}</dd>
                      </div>
                    ))}
                  </dl>
                  {d.modernApplications.length ? (
                    <div className="mt-4 border-t pt-4">
                      <h4 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Modern applications
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {d.modernApplications.map((app) => (
                          <Badge key={app} variant="secondary">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.equations?.length ? (
        <Section id="equations" title="Equations and worked examples" icon={Sigma}>
          <div className="space-y-6">
            {profile.equations.map((eq) => (
              <Card key={eq.name}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{eq.name}</h3>
                  <div className="my-4 rounded-lg bg-muted/50 px-4 py-3">
                    <BlockMath latex={eq.latex} />
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{eq.explanation}</p>

                  <h4 className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Variables
                  </h4>
                  <dl className="mt-2 grid gap-2 sm:grid-cols-2">
                    {eq.variables.map((v) => (
                      <div key={v.symbol} className="flex items-baseline gap-2 rounded-md bg-muted/40 px-3 py-2">
                        <dt className="shrink-0">
                          <BlockMath latex={v.symbol} />
                        </dt>
                        <dd className="text-sm text-muted-foreground">{v.meaning}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 rounded-lg border p-4">
                    <h4 className="text-xs font-semibold tracking-wide text-primary uppercase">
                      Worked example
                    </h4>
                    <p className="mt-2 font-medium">{eq.workedExample.problem}</p>
                    <ol className="mt-3 space-y-2">
                      {eq.workedExample.steps.map((step, i) => (
                        <li key={i}>
                          {step.text ? (
                            <p className="text-sm text-muted-foreground">{step.text}</p>
                          ) : null}
                          {step.latex ? <BlockMath latex={step.latex} /> : null}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-3 rounded-md bg-primary/10 p-3 text-sm font-medium">
                      {eq.workedExample.answer}
                    </p>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Modern use: </span>
                    {eq.modernUse}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.works?.length ? (
        <Section id="works" title="Works and publications" icon={ScrollText}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.works.map((w) => (
              <Card key={w.title}>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{w.kind}</Badge>
                    <span className="font-mono text-sm text-muted-foreground">{w.year}</span>
                  </div>
                  <h3 className="mt-2 font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {w.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.connections?.length ? (
        <Section id="connections" title="Connections across subjects" icon={Link2}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.connections.map((c) => (
              <div key={c.field} className="rounded-lg border p-4">
                <Badge>{c.field}</Badge>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.historicalContext ? (
        <Section id="historical-context" title="Historical context" icon={Landmark}>
          <div className="space-y-5">
            <Field label="World events" value={profile.historicalContext.worldEvents} />
            <Field label="Political situation" value={profile.historicalContext.politics} />
            <Field label="Wars" value={profile.historicalContext.wars} />
            <Field label="Universities" value={profile.historicalContext.universities} />
            <Field
              label="Scientific community"
              value={profile.historicalContext.scientificCommunity}
            />
            <Field label="Technology of the era" value={profile.historicalContext.technology} />
          </div>
        </Section>
      ) : null}

      {profile.backlash?.length ? (
        <Section id="backlash" title="Opposition and controversy" icon={ShieldAlert}>
          <p className="mb-4 text-sm text-muted-foreground">
            Each entry is tagged so verified history is never confused with popular legend.
          </p>
          <div className="space-y-4">
            {profile.backlash.map((b) => (
              <div key={b.title} className="rounded-lg border p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={BACKLASH_BADGE[b.status]}>{b.status}</Badge>
                  <Badge variant="outline">{b.type}</Badge>
                </div>
                <h3 className="mt-2 font-bold">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.challengesDetailed?.length ? (
        <Section id="challenges-detail" title="Challenges" icon={Brain}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.challengesDetailed.map((c) => (
              <div key={c.category} className="rounded-lg border p-4">
                <Badge variant="outline">{c.category}</Badge>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.achievements?.length ? (
        <Section id="achievements" title="Major achievements" icon={Trophy}>
          <div className="space-y-3">
            {profile.achievements.map((a) => (
              <div key={a.title} className="flex gap-4 rounded-lg border p-4">
                <span className="shrink-0 font-mono text-sm font-semibold text-primary">
                  {a.year}
                </span>
                <div>
                  <h3 className="font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.funFacts?.length ? (
        <Section id="fun-facts" title="Fun facts" icon={Sparkles}>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {profile.funFacts.map((fact, i) => (
              <li key={fact} className="flex gap-3 rounded-md bg-muted/40 p-3">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{fact}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {profile.didYouKnow?.length ? (
        <Section id="did-you-know" title="Did you know?" icon={Lightbulb}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.didYouKnow.map((card) => (
              <Card key={card.title} className="bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.quotes?.length ? (
        <Section id="quotes" title="Quotes" icon={Quote}>
          <div className="space-y-4">
            {profile.quotes.map((q) => (
              <figure key={q.text} className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                <blockquote className="text-lg font-medium italic">“{q.text}”</blockquote>
                <figcaption className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant={QUOTE_BADGE[q.status]}>{q.status}</Badge>
                  {q.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.quiz ? (
        <Section id="quiz" title="Test yourself" icon={Brain}>
          <ProfileQuiz quiz={profile.quiz} />
        </Section>
      ) : null}

      {profile.relatedScientists?.length ? (
        <Section id="related-scientists" title="Related scientists" icon={Users}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.relatedScientists.map((r) => (
              <Link
                key={r.slug}
                href={`/scientists/${r.slug}`}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <h3 className="font-bold text-primary">{r.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.reason}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.relatedTopics?.length ? (
        <Section id="related-topics" title="Related lessons" icon={BookOpen}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.relatedTopics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <h3 className="font-bold text-primary">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.visualPrompts?.length ? (
        <Section id="visual-prompts" title="Visual content briefs" icon={ImageIcon}>
          <p className="mb-4 text-sm text-muted-foreground">
            Image-generation prompts for the illustration pipeline. Text only — no copyrighted
            images are embedded.
          </p>
          <div className="space-y-3">
            {profile.visualPrompts.map((v) => (
              <div key={v.category} className="rounded-lg border p-4">
                <Badge variant="outline">{v.category}</Badge>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  {v.prompt}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {profile.photoPlaceholders?.length ? (
        <Section id="photo-placeholders" title="Photo slots and captions" icon={Camera}>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.photoPlaceholders.map((p) => {
              return (
                <div key={p.slot} className="rounded-lg border p-4">
                  {p.image ? (
                    <ScientistImage
                      image={p.image}
                      width={900}
                      className="aspect-video rounded-md"
                      imageClassName="aspect-video"
                      showCredit={false}
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-md bg-muted">
                      <Camera className="size-6 text-muted-foreground/50" aria-hidden />
                    </div>
                  )}
                  <Badge variant="secondary" className="mt-3">
                    {p.slot}
                  </Badge>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.caption}</p>
                  <p className="mt-2 text-xs text-muted-foreground/80">Source: {p.suggestedSource}</p>
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}
    </div>
  );
}
