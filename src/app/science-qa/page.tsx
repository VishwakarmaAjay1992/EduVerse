import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { QaDirectory } from "@/components/science-qa/qa-directory";
import { SCIENCE_QA } from "@/data/science-qa";

export const metadata: Metadata = {
  title: `${SCIENCE_QA.length} General Science Questions`,
  description:
    `Clear, accurate answers to ${SCIENCE_QA.length} common science questions across Earth and climate, biology, the human body, physics and chemistry.`,
  alternates: { canonical: "/science-qa" },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-muted/30">
          <div className="container py-10 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <HelpCircle className="size-4" /> Quick answers
            </div>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              {SCIENCE_QA.length} General Science Questions
            </h1>
            <p className="mt-4 max-w-2xl text-balance leading-7 text-muted-foreground">
              Everyday questions about the Earth, living things, the human body, physics and
              chemistry — answered clearly and accurately. Expand an answer here or open its dedicated page to share and study it.
            </p>
          </div>
        </section>
        <section className="container py-12">
          <QaDirectory />
        </section>
      </main>
    </>
  );
}
