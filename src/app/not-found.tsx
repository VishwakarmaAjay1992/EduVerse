import Link from "next/link";
import { Compass } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-muted">
          <Compass className="size-6 text-muted-foreground" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            404 — Not found
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            That page doesn&apos;t exist.
          </h1>
          <p className="mx-auto max-w-md text-balance text-muted-foreground">
            The lesson, scientist, or phenomenon you&apos;re looking for may have moved or never
            existed. Try one of the entry points below.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/subjects">Browse subjects</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
