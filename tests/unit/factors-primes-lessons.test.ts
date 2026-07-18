import { describe, expect, it } from "vitest";
import { getLessonContent, hasLessonContent } from "@/lib/lesson-content";

const CHAPTER = "factors-multiples-and-primes";
const LESSONS = [
  "factors-multiples-and-divisibility-rules",
  "prime-numbers-and-prime-factorization",
  "highest-common-factor-and-lowest-common-multiple",
] as const;

describe("Factors, Multiples and Primes lesson content", () => {
  it.each(LESSONS)("registers complete content for %s", (lessonSlug) => {
    expect(hasLessonContent("mathematics", lessonSlug)).toBe(true);
    const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
    expect(lesson).not.toBeNull();
    expect(lesson?.sections.some((section) => section.kind === "overview")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "example")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "practice")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "completion")).toBe(true);
  });

  it("uses all three modes of the number-theory laboratory", () => {
    const modes = LESSONS.map((lessonSlug) => {
      const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
      const section = lesson?.sections.find((item) => item.kind === "factorPrimeExplorer");
      return section?.kind === "factorPrimeExplorer" ? section.mode : undefined;
    });

    expect(modes).toEqual(["factors", "primes", "hcfLcm"]);
  });
});
