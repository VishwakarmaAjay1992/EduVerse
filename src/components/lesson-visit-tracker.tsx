"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { recordLessonVisit } from "@/lib/progress-store";

export function LessonVisitTracker({
  lesson,
}: {
  lesson: {
    id: string;
    href: string;
    title: string;
    subject: string;
    chapter: string;
    minutes: number;
  };
}) {
  useEffect(() => {
    recordLessonVisit(lesson);
    trackEvent("lesson_started", {
      lesson_id: lesson.id,
      subject: lesson.subject,
      chapter: lesson.chapter,
      minutes: lesson.minutes,
    });
  }, [lesson]);

  return null;
}
