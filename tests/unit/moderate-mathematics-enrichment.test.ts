import { describe, expect, it } from "vitest";
import mathematics from "@/data/curriculum/mathematics.json";
import { moderateChapterReviews } from "@/content/mathematics/moderate-chapter-reviews";
import { getLessonContent } from "@/lib/lesson-content";
import { moderateLessonRoutes } from "@/lib/moderate-enrichment";
import { slugify } from "@/lib/slug";

describe("former Moderate mathematics chapters", () => {
  it("adds one complete mastery review to all 24 chapters", () => {
    expect(moderateChapterReviews).toHaveLength(24);

    for (const review of moderateChapterReviews) {
      const content = getLessonContent("mathematics", review.chapterSlug, review.lessonSlug);
      expect(content).not.toBeNull();
      const kinds = content!.sections.map((section) => section.kind);
      expect(kinds.filter((kind) => kind === "example").length).toBeGreaterThanOrEqual(4);
      expect(kinds).toContain("practice");
      expect(kinds).toContain("gradedQuiz");
      expect(kinds).toContain("completion");
    }
  });

  it("enriches all 90 former Moderate lessons with assessment and visual support", () => {
    const target = new Set(moderateLessonRoutes);
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
            expect(kinds.some((kind) => kind === "practice" || kind === "quiz")).toBe(true);
            expect(kinds).toContain("gradedQuiz");
            expect(kinds).toContain("completion");
            expect(
              kinds.some(
                (kind) =>
                  kind === "figure" ||
                  kind === "imageGallery" ||
                  kind === "cards" ||
                  kind === "table" ||
                  kind.endsWith("Explorer")
              )
            ).toBe(true);
            checked += 1;
          }
        }
      }
    }

    expect(checked).toBe(90);
  });
});
