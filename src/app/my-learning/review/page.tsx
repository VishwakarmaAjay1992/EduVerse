import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SmartReview } from "@/components/learning/smart-review";
import { SiteHeader } from "@/components/site-header";
import { listAllLessons } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Smart Review",
  description: "Review mistakes with a spaced learning schedule that strengthens long-term recall.",
  alternates: { canonical: "/my-learning/review" },
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-primary/10 via-muted/40 to-background">
          <div className="container py-12 sm:py-16">
            <Link href="/my-learning" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" aria-hidden="true" /> My EduVerse
            </Link>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Smart Review</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Recall the answer before revealing it, then let EduVerse schedule the next review.
            </p>
          </div>
        </section>
        <section className="container max-w-5xl py-10 sm:py-12">
          <SmartReview catalog={listAllLessons()} />
        </section>
      </main>
    </>
  );
}
