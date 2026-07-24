import { describe, expect, it } from "vitest";
import mathematics from "@/data/curriculum/mathematics.json";
import { completeTrigonometryCourse } from "@/content/mathematics/complete-trigonometry-course";
import { findLesson, lessonParams } from "@/lib/curriculum";
import { getLessonContent } from "@/lib/lesson-content";
import { slugify } from "@/lib/slug";

const CHAPTERS = [
  "foundations-of-trigonometry",
  "trigonometric-graphs-and-applications-of-radian-measure",
  "trigonometric-identities",
  "trigonometric-equations",
  "beyond-right-triangles",
  "polar-coordinates-and-applications",
  "vectors",
  "parametric-equations",
] as const;

const REQUIRED_SECTION_KINDS = [
  "overview",
  "theory",
  "formula",
  "example",
  "mistakes",
  "practice",
  "summary",
  "completion",
] as const;

function flattenText(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(flattenText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(flattenText).join(" ");
  return "";
}

describe("complete trigonometry course", () => {
  it("contains 8 chapters and 26 unique native lessons", () => {
    expect(completeTrigonometryCourse).toHaveLength(26);
    expect(new Set(completeTrigonometryCourse.map((lesson) => lesson.lessonSlug)).size).toBe(26);
    expect(new Set(completeTrigonometryCourse.map((lesson) => lesson.chapterSlug))).toEqual(
      new Set(CHAPTERS)
    );
  });

  it("registers every lesson through curriculum routes and the content registry", () => {
    const category = mathematics.categories.find(
      (item) => item.title === "Trigonometry: Complete Course"
    );
    expect(category?.chapters).toHaveLength(8);

    const curriculumRoutes = new Set(
      category?.chapters.flatMap((chapter) =>
        chapter.topics.flatMap((topic) =>
          topic.lessons.map(
            (lesson) => `${slugify(chapter.title)}/${slugify(lesson.title)}`
          )
        )
      ) ?? []
    );

    const contentRoutes = new Set(
      completeTrigonometryCourse.map(
        (lesson) => `${lesson.chapterSlug}/${lesson.lessonSlug}`
      )
    );

    expect(curriculumRoutes).toEqual(contentRoutes);

    for (const lesson of completeTrigonometryCourse) {
      expect(findLesson("mathematics", lesson.chapterSlug, lesson.lessonSlug)).not.toBeNull();
      expect(getLessonContent("mathematics", lesson.chapterSlug, lesson.lessonSlug)).toBe(lesson);
    }

    const generatedRoutes = new Set(
      lessonParams()
        .filter((route) => route.slug === "mathematics")
        .map((route) => `${route.chapter}/${route.lesson}`)
    );
    for (const route of contentRoutes) expect(generatedRoutes.has(route)).toBe(true);
  });

  it("provides complete student-facing lesson structure", () => {
    for (const lesson of completeTrigonometryCourse) {
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(4);
      for (const kind of REQUIRED_SECTION_KINDS) {
        expect(lesson.sections.some((section) => section.kind === kind)).toBe(true);
      }
      expect(lesson.sections.filter((section) => section.kind === "example").length).toBeGreaterThanOrEqual(2);

      const practice = lesson.sections.find((section) => section.kind === "practice");
      expect(practice?.kind === "practice" ? practice.questions.length : 0).toBeGreaterThanOrEqual(4);

      const figureOrExplorer = lesson.sections.some((section) =>
        ["figure", "unitCircleExplorer", "trigGraphExplorer"].includes(section.kind)
      );
      expect(figureOrExplorer).toBe(true);
    }
  });

  it("contains clean mathematical text without placeholders or extraction artifacts", () => {
    const text = flattenText(completeTrigonometryCourse);
    expect(text).not.toMatch(/uploaded pdf|source:\s*uploaded|copied from|content extracted|pdf page|scanned from/i);
    expect(text).not.toMatch(/TODO|TBD|lorem ipsum|placeholder/i);
    expect(text).not.toMatch(/[]/);
    expect(text).not.toContain("\\u0007");
    expect(text).not.toContain("\\u000b");
  });
});
