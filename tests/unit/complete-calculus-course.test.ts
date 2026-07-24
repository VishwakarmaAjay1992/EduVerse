import { describe, expect, it } from "vitest";
import curriculum from "@/data/curriculum/mathematics.json";
import calculusLessonsData from "@/data/calculus-lessons.json";
import type { LessonContent } from "@/lib/lesson-content-types";
import { slugify } from "@/lib/slug";

const lessons = calculusLessonsData as LessonContent[];
const calculusCategories = curriculum.categories.filter(
  (category) =>
    category.title === "Calculus" || category.title === "Multivariable and Vector Calculus"
);

const curriculumRoutes = calculusCategories.flatMap((category) =>
  category.chapters.flatMap((chapter) =>
    chapter.topics.flatMap((topic) =>
      topic.lessons.map(
        (lesson) => `mathematics/${slugify(chapter.title)}/${slugify(lesson.title)}`
      )
    )
  )
);

const contentRoutes = lessons.map(
  (lesson) => `${lesson.subjectSlug}/${lesson.chapterSlug}/${lesson.lessonSlug}`
);

describe("complete Calculus curriculum", () => {
  it("contains all numbered sections, reviews, and appendix references", () => {
    expect(lessons).toHaveLength(142);
    expect(lessons.filter((lesson) => lesson.title.endsWith("Chapter Review"))).toHaveLength(16);
    expect(
      lessons.filter((lesson) => lesson.chapterSlug === "calculus-reference-and-proof-appendices")
    ).toHaveLength(10);
  });

  it("has exact curriculum and content route parity", () => {
    expect(new Set(curriculumRoutes).size).toBe(curriculumRoutes.length);
    expect(new Set(contentRoutes).size).toBe(contentRoutes.length);
    expect(new Set(contentRoutes)).toEqual(new Set(curriculumRoutes));
  });

  it("represents all sixteen numbered chapters", () => {
    const chapterSlugs = new Set(lessons.map((lesson) => lesson.chapterSlug));
    expect(chapterSlugs.size).toBe(17); // 16 numbered chapters plus references
    expect(chapterSlugs).toContain("functions");
    expect(chapterSlugs).toContain("integrals-and-vector-fields");
  });

  it("gives each numbered lesson a complete student-facing structure", () => {
    const numberedLessons = lessons.filter(
      (lesson) =>
        !lesson.title.endsWith("Chapter Review") &&
        lesson.chapterSlug !== "calculus-reference-and-proof-appendices"
    );
    expect(numberedLessons).toHaveLength(116);
    for (const lesson of numberedLessons) {
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(3);
      const kinds = new Set(lesson.sections.map((section) => section.kind));
      expect(kinds).toContain("overview");
      expect(kinds).toContain("figure");
      expect(kinds).toContain("formula");
      expect(kinds).toContain("example");
      expect(kinds).toContain("mistakes");
      expect(kinds).toContain("summary");
    }
  });

  it("does not expose document-processing language", () => {
    const text = JSON.stringify(lessons).toLowerCase();
    for (const forbidden of [
      "uploaded pdf",
      "source document",
      "pdf page",
      "copied from",
      "extracted from",
      "scanned material",
    ]) {
      expect(text).not.toContain(forbidden);
    }
  });
});
