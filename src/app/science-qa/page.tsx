import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { QaDirectory } from "@/components/science-qa/qa-directory";

export const metadata: Metadata = {
  title: "100 General Science Questions",
  description:
    "Clear, accurate answers to 100 common science questions across Earth and climate, biology, the human body, physics and chemistry.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-muted/30">
          <div className="container py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <HelpCircle className="size-4" /> Quick answers
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              100 General Science Questions
            </h1>
            <p className="mt-4 max-w-2xl text-balance leading-7 text-muted-foreground">
              Everyday questions about the Earth, living things, the human body, physics and
              chemistry — answered clearly and accurately. Tap any question to expand its answer.
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
