import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { StartLearningWizard, type StartSubjectOption } from "@/components/start-learning-wizard";
import { listSubjects, getSubject } from "@/lib/curriculum";
import { hasLessonContent } from "@/lib/lesson-content";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Start Learning",
  description:
    "Choose your subject, current level and daily study time to receive a focused EduVerse learning path.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  const subjects: StartSubjectOption[] = listSubjects().flatMap((summary) => {
    const detail = getSubject(summary.slug);
    if (!detail) return [];
    return [
      {
        slug: detail.slug,
        name: detail.name,
        tagline: detail.tagline,
        accent: detail.accent,
        categories: detail.categories.map((category) => ({
          title: category.title,
          level: category.level,
          chapters: category.chapters.map((chapter) => {
            const lessons = chapter.topics.flatMap((topic) => topic.lessons);
            const readyLesson = lessons.find((lesson) =>
              hasLessonContent(detail.slug, slugify(lesson.title))
            );
            const startLesson = readyLesson ?? lessons[0];
            return {
              title: chapter.title,
              lessonCount: lessons.length,
              totalMinutes: lessons.reduce((total, lesson) => total + lesson.min, 0),
              startLesson: startLesson
                ? {
                    title: startLesson.title,
                    minutes: startLesson.min,
                    ready: Boolean(readyLesson),
                  }
                : null,
            };
          }),
        })),
      },
    ];
  });

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-gradient-to-b from-primary/5 to-background">
          <div className="container py-14 text-center sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
              <Compass className="size-4" aria-hidden="true" /> Guided learning
            </div>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Build a learning path that fits you.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Choose what you want to study, where you are starting and how much time you have. EduVerse will take you directly to the right first lesson.
            </p>
          </div>
        </section>
        <section className="container py-12 sm:py-16">
          <StartLearningWizard subjects={subjects} />
        </section>
      </main>
    </>
  );
}
