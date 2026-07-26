"use client";

import Link from "next/link";
import { ArrowRight, Clock3, History } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useRecentLesson } from "@/lib/progress-store";
import { Button } from "@/components/ui/button";

export function ContinueLearning() {
  const lesson = useRecentLesson();
  if (!lesson) return null;

  return (
    <section className="container -mt-8 pb-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border bg-background p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <span className="rounded-xl bg-primary/10 p-3 text-primary">
            <History className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Continue learning
            </p>
            <h2 className="mt-1 truncate text-lg font-bold">{lesson.title}</h2>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{lesson.subject}</span>
              <span aria-hidden="true">·</span>
              <span>{lesson.chapter}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="size-3.5" aria-hidden="true" /> {lesson.minutes} min
              </span>
            </p>
          </div>
        </div>
        <Button asChild className="shrink-0">
          <Link
            href={lesson.href}
            onClick={() => trackEvent("continue_learning_clicked", { lesson_id: lesson.id })}
          >
            Continue <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
