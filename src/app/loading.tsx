import { SiteHeader } from "@/components/site-header";

/**
 * Global loading skeleton. Rendered while an App Router segment resolves.
 * Kept intentionally minimal — subject/lesson pages can override with a
 * co-located loading.tsx if they want richer skeletons.
 */
export default function Loading() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16" aria-busy="true" aria-live="polite">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="h-9 w-2/3 animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-muted" />
          <div className="h-4 w-4/6 animate-pulse rounded-md bg-muted" />
          <div className="pt-6">
            <div className="h-48 w-full animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
        <span className="sr-only">Loading…</span>
      </main>
    </>
  );
}
