import { describe, expect, it } from "vitest";
import mathematics from "@/data/curriculum/mathematics.json";
import { weakChapterReviews } from "@/content/mathematics/weak-chapter-reviews";
import { getLessonContent } from "@/lib/lesson-content";
import { weakLessonRoutes } from "@/lib/weak-enrichment";
import { slugify } from "@/lib/slug";

const visualKinds = new Set(["figure", "imageGallery", "cards", "table"]);

describe("former Weak mathematics chapters", () => {
  it("adds an Expert Mastery Review to all 21 chapters", () => {
    expect(weakChapterReviews).toHaveLength(21);

    for (const review of weakChapterReviews) {
      const content = getLessonContent("mathematics", review.chapterSlug, review.lessonSlug);
      expect(content).not.toBeNull();
      const kinds = content!.sections.map((section) => section.kind);
      expect(kinds.filter((kind) => kind === "example").length).toBeGreaterThanOrEqual(6);
      expect(kinds).toContain("practice");
      expect(kinds).toContain("gradedQuiz");
      expect(kinds).toContain("summary");
      expect(kinds).toContain("completion");
    }
  });

  it("upgrades all 153 original Weak lessons to the Strong structure", () => {
    const target = new Set(weakLessonRoutes);
    let checked = 0;

    for (const category of mathematics.categories) {
      for (const chapter of category.chapters) {
        const chapterSlug = slugify(chapter.title);
        for (const topic of chapter.topics) {
          for (const lesson of topic.lessons) {
            const lessonSlug = slugify(lesson.title);
            if (!target.has(`${chapterSlug}/${lessonSlug}`)) continue;

            const content = getLessonContent("mathematics", chapterSlug, lessonSlug);
            expect(content).not.toBeNull();
            const kinds = content!.sections.map((section) => section.kind);
            expect(kinds.filter((kind) => kind === "example").length).toBeGreaterThanOrEqual(3);
            expect(kinds.some((kind) => kind === "practice" || kind === "quiz")).toBe(true);
            expect(kinds).toContain("gradedQuiz");
            expect(kinds).toContain("summary");
            expect(kinds).toContain("completion");
            expect(
              kinds.some((kind) => visualKinds.has(kind) || kind.endsWith("Explorer"))
            ).toBe(true);
            checked += 1;
          }
        }
      }
    }

    expect(checked).toBe(153);
  });

  it("keeps curriculum routes aligned with the project slug convention", () => {
    const corrected = [
      ["applications-of-derivatives", "indeterminate-forms-and-l-h-pital-s-rule"],
      ["applications-of-derivatives", "newton-s-method"],
      ["first-order-differential-equations", "solutions-slope-fields-and-euler-s-method"],
      ["partial-derivatives", "taylor-s-formula-for-two-variables"],
      ["integrals-and-vector-fields", "green-s-theorem-in-the-plane"],
    ] as const;

    for (const [chapterSlug, lessonSlug] of corrected) {
      expect(getLessonContent("mathematics", chapterSlug, lessonSlug)).not.toBeNull();
    }
  });
});
