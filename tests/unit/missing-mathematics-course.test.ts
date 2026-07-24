import { describe, expect, it } from "vitest";
import { missingMathematicsCourse } from "@/content/mathematics/missing-mathematics-course";

const routes = missingMathematicsCourse.map(
  (lesson) => `${lesson.chapterSlug}/${lesson.lessonSlug}`
);

describe("completed missing mathematics curriculum", () => {
  it("contains 65 new topic lessons and 30 chapter mastery reviews", () => {
    const reviews = missingMathematicsCourse.filter((lesson) =>
      lesson.lessonSlug.endsWith("complete-mastery-review")
    );
    expect(missingMathematicsCourse).toHaveLength(95);
    expect(reviews).toHaveLength(30);
    expect(missingMathematicsCourse.length - reviews.length).toBe(65);
  });

  it("has unique chapter and lesson routes", () => {
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("gives every lesson examples, practice, assessment and completion tracking", () => {
    for (const lesson of missingMathematicsCourse) {
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(4);
      expect(lesson.sections.some((section) => section.kind === "figure")).toBe(true);
      expect(lesson.sections.filter((section) => section.kind === "example").length).toBeGreaterThanOrEqual(1);
      expect(lesson.sections.some((section) => section.kind === "practice")).toBe(true);
      expect(lesson.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
      expect(lesson.sections.some((section) => section.kind === "summary")).toBe(true);
      expect(lesson.sections.some((section) => section.kind === "completion")).toBe(true);
    }
  });

  it("uses valid answer indexes", () => {
    for (const lesson of missingMathematicsCourse) {
      for (const section of lesson.sections) {
        if (section.kind === "practice") {
          for (const question of section.questions) {
            expect(question.answer).toBeGreaterThanOrEqual(0);
            expect(question.answer).toBeLessThan(question.options.length);
          }
        }
        if (section.kind === "gradedQuiz") {
          for (const question of section.questions) {
            if (question.type === "mc") {
              expect(question.answer).toBeGreaterThanOrEqual(0);
              expect(question.answer).toBeLessThan(question.options.length);
            }
            if (question.type === "multi") {
              for (const answer of question.answers) {
                expect(answer).toBeGreaterThanOrEqual(0);
                expect(answer).toBeLessThan(question.options.length);
              }
            }
            if (question.type === "matching") {
              expect(question.answer).toHaveLength(question.left.length);
            }
          }
        }
      }
    }
  });
});
