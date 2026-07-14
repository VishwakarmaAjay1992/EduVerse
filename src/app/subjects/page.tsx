import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SubjectCard } from "@/components/subject-card";
import { listSubjects } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Subjects",
};

export default function SubjectsPage() {
  const subjects = listSubjects();
  return (
    <>
      <SiteHeader />
      <main className="container py-12">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Subjects</h1>
        <p className="mb-8 text-muted-foreground">
          Choose a subject to browse its full curriculum, from beginner to university level.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {subjects.map((subject) => (
            <SubjectCard key={subject.slug} subject={subject} />
          ))}
        </div>
      </main>
    </>
  );
}
