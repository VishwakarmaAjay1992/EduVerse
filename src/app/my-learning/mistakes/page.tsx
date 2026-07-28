import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MistakeNotebook } from "@/components/learning/mistake-notebook";
import { SiteHeader } from "@/components/site-header";
import { listAllLessons } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Mistake Notebook",
  description: "Review incorrect answers, explanations and mastered weak topics in EduVerse.",
  alternates: { canonical: "/my-learning/mistakes" },
  robots: { index: false, follow: true },
};

export default function MistakesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-amber-500/10 via-muted/40 to-background">
          <div className="container py-12 sm:py-16">
            <Link href="/my-learning" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" aria-hidden="true" /> My EduVerse
            </Link>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">Mistake Notebook</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Turn every incorrect answer into a clear explanation and a future revision opportunity.
            </p>
          </div>
        </section>
        <section className="container py-10 sm:py-12">
          <MistakeNotebook catalog={listAllLessons()} />
        </section>
      </main>
    </>
  );
}
