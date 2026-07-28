"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Atom,
  BookOpen,
  Compass,
  GraduationCap,
  Hammer,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Microscope,
  Route,
  Search,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/start", label: "Start learning", icon: Route, primary: true },
  { href: "/search", label: "Search", icon: Search, primary: false },
  { href: "/physics-dictionary", label: "Physics Dictionary", icon: Atom, primary: false },
  { href: "/my-learning", label: "My learning", icon: LayoutDashboard, primary: false },
  { href: "/subjects", label: "Subjects", icon: BookOpen, primary: false },
  { href: "/scientists", label: "Scientists", icon: Microscope, primary: false },
  { href: "/phenomena", label: "Phenomena", icon: Sparkles, primary: false },
  { href: "/inventions", label: "Inventions", icon: Hammer, primary: false },
  { href: "/science-qa", label: "Science Q&A", icon: HelpCircle, primary: false },
  { href: "/learning-hub", label: "Learning Hub", icon: Compass, primary: false },
  { href: "/teacher", label: "Teacher mode", icon: Users, primary: false },
  { href: "/account", label: "Account", icon: UserRound, primary: false },
] as const;

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-14 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold" aria-label="EduVerse home">
          <GraduationCap className="size-5 shrink-0 text-primary" />
          <span className="truncate">EduVerse</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon, primary }) => {
            const current = isCurrent(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={current ? "page" : undefined}
                aria-label={label}
                className={cn(
                  "inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium transition-colors",
                  primary
                    ? "mr-1 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                    : current
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span aria-hidden="true" className={cn(primary ? "hidden xl:inline" : "hidden 2xl:inline")}>{label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-0.5 lg:hidden">
          <Button asChild variant="ghost" size="icon">
            <Link href="/search" aria-label="Search EduVerse">
              <Search aria-hidden="true" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t bg-background/95 backdrop-blur lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="container safe-bottom grid grid-cols-2 gap-2 py-4">
            {NAV_ITEMS.map(({ href, label, icon: Icon, primary }) => {
              const current = isCurrent(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 items-center gap-3 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-colors",
                    primary && "col-span-2",
                    primary
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : current
                        ? "border-primary/35 bg-primary/5 text-foreground"
                        : "bg-card text-foreground hover:bg-muted"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg",
                      primary ? "bg-primary-foreground/15" : "bg-muted text-primary"
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 leading-tight">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
