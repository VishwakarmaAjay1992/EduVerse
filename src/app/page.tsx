import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SubjectCard } from "@/components/subject-card";
import { Button } from "@/components/ui/button";
import { listSubjects } from "@/lib/curriculum";

export default function HomePage() {
  const subjects = listSubjects();
  const totalLessons = subjects.reduce((n, s) => n + s.stats.lessons, 0);
  const totalHours = subjects.reduce((n, s) => n + s.stats.hours, 0);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b">
          <div className="container flex flex-col items-center gap-6 py-24 text-center">
            <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Learn anything, structured from first principles.
            </h1>
            <p className="max-w-xl text-balance text-lg text-muted-foreground">
              A subject-agnostic knowledge platform. Every formula, theorem and scientist is a
              reusable object, connected in one graph — starting with Mathematics and Physics.
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link href="/subjects">Explore subjects</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {totalLessons.toLocaleString()} lessons · ~{totalHours.toLocaleString()} hours of
              structured learning
            </p>
          </div>
        </section>

        <section className="container py-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">Subjects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {subjects.map((subject) => (
              <SubjectCard key={subject.slug} subject={subject} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
