import type { Metadata } from "next";
import { Cog, History, LibraryBig } from "lucide-react";
import { InventionDirectory } from "@/components/inventions/invention-directory";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { INVENTIONS } from "@/data/inventions";

export const metadata: Metadata = {
  title: "Inventions in Human History",
  description:
    "Explore how important inventions developed through practical needs, experiments, many contributors and repeated engineering improvements.",
  alternates: { canonical: "/inventions" },
  openGraph: {
    title: "Inventions in Human History",
    description:
      "Student-friendly histories of major inventions, their inventors, working principles and evolution.",
    type: "website",
  },
};

export default function InventionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-muted/70 via-background to-background">
          <div className="container py-20 sm:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm">
                <Cog className="size-4" aria-hidden="true" />
                Engineering history
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                Inventions in Human History
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Discover the problems that inspired major inventions, the people who improved
                them, how they work, and how early machines evolved into modern technology.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <Cog className="size-6" aria-hidden="true" />
                  <div>
                    <p className="text-2xl font-bold">{INVENTIONS.length}</p>
                    <p className="text-xs text-muted-foreground">Published invention</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <History className="size-6" aria-hidden="true" />
                  <div>
                    <p className="text-2xl font-bold">300+</p>
                    <p className="text-xs text-muted-foreground">Years traced</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <LibraryBig className="size-6" aria-hidden="true" />
                  <div>
                    <p className="text-2xl font-bold">Expandable</p>
                    <p className="text-xs text-muted-foreground">Data-driven collection</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className="container py-16">
          <InventionDirectory inventions={INVENTIONS} />
        </div>
      </main>
    </>
  );
}
