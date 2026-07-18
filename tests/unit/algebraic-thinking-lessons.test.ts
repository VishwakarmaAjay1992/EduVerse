import { describe, expect, it } from "vitest";
import { getLessonContent, hasLessonContent } from "@/lib/lesson-content";

const CHAPTER = "introduction-to-algebraic-thinking";
const LESSONS = [
  "from-arithmetic-to-algebra",
  "simplifying-expressions",
  "solving-one-step-and-two-step-equations",
] as const;

describe("Introduction to Algebraic Thinking lesson content", () => {
  it.each(LESSONS)("registers full content for %s", (lessonSlug) => {
    expect(hasLessonContent("mathematics", lessonSlug)).toBe(true);
    const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
    expect(lesson).not.toBeNull();
    expect(lesson?.objectives.length).toBeGreaterThanOrEqual(7);
    expect(
      lesson?.sections.filter((section) => section.kind === "example").length
    ).toBeGreaterThanOrEqual(7);
    expect(lesson?.sections.some((section) => section.kind === "practice")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "completion")).toBe(true);
  });

  it("uses the intended interactive laboratory in each lesson", () => {
    const kinds = LESSONS.map((lessonSlug) => {
      const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
      return lesson?.sections.find((section) =>
        [
          "algebraExpressionExplorer",
          "simplifyingExpressionsExplorer",
          "equationBalanceExplorer",
        ].includes(section.kind)
      )?.kind;
    });

    expect(kinds).toEqual([
      "algebraExpressionExplorer",
      "simplifyingExpressionsExplorer",
      "equationBalanceExplorer",
    ]);
  });
});
