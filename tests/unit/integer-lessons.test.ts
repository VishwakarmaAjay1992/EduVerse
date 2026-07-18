import { describe, expect, it } from "vitest";
import { getLessonContent, hasLessonContent } from "@/lib/lesson-content";

const CHAPTER = "integers-and-rational-numbers";
const LESSONS = [
  "integers-and-the-number-line",
  "multiplying-and-dividing-integers",
  "rational-and-irrational-numbers",
] as const;

describe("Integers and Rational Numbers lesson content", () => {
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

  it("uses the three intended interactive laboratories", () => {
    const kinds = LESSONS.map((lessonSlug) => {
      const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
      return lesson?.sections.find((section) =>
        ["integerNumberLineExplorer", "integerRulesExplorer", "rationalNumberExplorer"].includes(
          section.kind
        )
      )?.kind;
    });

    expect(kinds).toEqual([
      "integerNumberLineExplorer",
      "integerRulesExplorer",
      "rationalNumberExplorer",
    ]);
  });
});
