import type { Metadata } from "next";
import { LearningDashboard } from "@/components/learning/learning-dashboard";
import { SiteHeader } from "@/components/site-header";
import { listAllLessons } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "My EduVerse",
  description: "Continue learning, review mistakes, see subject progress and manage your EduVerse study plan.",
  alternates: { canonical: "/my-learning" },
  robots: { index: false, follow: true },
};

export default function MyLearningPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-primary/10 via-muted/40 to-background">
          <div className="container py-10 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Personal learning system</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">My EduVerse</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-muted-foreground">
              Continue where you stopped, strengthen weak topics and see what to study next.
            </p>
          </div>
        </section>
        <section className="container py-10 sm:py-12">
          <LearningDashboard catalog={listAllLessons()} />
        </section>
      </main>
    </>
  );
}
