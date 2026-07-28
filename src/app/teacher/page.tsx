import type { Metadata } from "next";
import { Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { TeacherDashboard } from "@/components/teacher-dashboard";

export const metadata: Metadata = {
  title: "Teacher Mode",
  description: "Create Physics assignments, organize classes and export assignment lists.",
  robots: { index: false, follow: true },
};

export default function TeacherPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-muted/30">
          <div className="container max-w-5xl py-10 sm:py-14">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Users className="size-4" aria-hidden="true" /> Classroom tools
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Teacher mode</h1>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Create Physics assignments, organize classes and export assignment lists. Learner-result synchronization is ready for the future cloud connector.
            </p>
          </div>
        </section>
        <section className="container max-w-5xl py-8 sm:py-12">
          <TeacherDashboard />
        </section>
      </main>
    </>
  );
}
