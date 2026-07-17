import Link from "next/link";
import { GraduationCap, Microscope } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="size-5 text-primary" />
          <span>EduVerse</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/subjects"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Subjects
          </Link>
          <Link
            href="/scientists"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Microscope className="size-4 sm:hidden" aria-hidden="true" />
            <span className="hidden sm:inline">Scientists</span>
            <span className="sr-only sm:hidden">Scientists</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
