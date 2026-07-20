"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to your logging service here (Sentry, Axiom, etc.) when wired.
    // For now, dev console is enough.
    // eslint-disable-next-line no-console
    console.error("[EduVerse] Unhandled error:", error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-6 text-destructive" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Something went wrong
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            We hit an unexpected error.
          </h1>
          <p className="mx-auto max-w-md text-balance text-muted-foreground">
            The problem has been logged. You can retry, or head back to a stable page.
          </p>
          {error.digest ? (
            <p className="pt-2 font-mono text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
