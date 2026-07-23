import Link from "next/link";
import {
  BookOpen,
  Compass,
  GraduationCap,
  Hammer,
  HelpCircle,
  Microscope,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="size-5 text-primary" />
          <span>EduVerse</span>
        </Link>
        <nav className="flex max-w-[calc(100vw-7.5rem)] items-center gap-0.5 overflow-x-auto lg:max-w-none lg:gap-1 lg:overflow-visible">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <BookOpen className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Subjects</span>
            <span className="sr-only lg:hidden">Subjects</span>
          </Link>
          <Link
            href="/scientists"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Microscope className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Scientists</span>
            <span className="sr-only lg:hidden">Scientists</span>
          </Link>
          <Link
            href="/phenomena"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Sparkles className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Phenomena</span>
            <span className="sr-only lg:hidden">Phenomena</span>
          </Link>
          <Link
            href="/inventions"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Hammer className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Inventions</span>
            <span className="sr-only lg:hidden">Inventions</span>
          </Link>
          <Link
            href="/science-qa"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <HelpCircle className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Science Q&amp;A</span>
            <span className="sr-only lg:hidden">Science Q&amp;A</span>
          </Link>
          <Link
            href="/learning-hub"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Compass className="size-4 lg:hidden" aria-hidden="true" />
            <span className="hidden lg:inline">Learning Hub</span>
            <span className="sr-only lg:hidden">Learning Hub</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
