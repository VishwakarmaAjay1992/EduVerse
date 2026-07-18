import { describe, expect, it } from "vitest";
import { getLessonContent, hasLessonContent } from "@/lib/lesson-content";

const CHAPTER = "the-coordinate-plane-and-data-basics";
const LESSONS = ["the-cartesian-plane", "charts-tables-and-graphs"] as const;

describe("The Coordinate Plane and Data Basics lesson content", () => {
  it.each(LESSONS)("registers complete content for %s", (lessonSlug) => {
    expect(hasLessonContent("mathematics", lessonSlug)).toBe(true);
    const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
    expect(lesson).not.toBeNull();
    expect(lesson?.sections.some((section) => section.kind === "overview")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "example")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "coordinateDataExplorer")).toBe(
      true
    );
    expect(lesson?.sections.some((section) => section.kind === "practice")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
    expect(lesson?.sections.some((section) => section.kind === "completion")).toBe(true);
  });

  it("uses both modes of the coordinate and data laboratory", () => {
    const modes = LESSONS.map((lessonSlug) => {
      const lesson = getLessonContent("mathematics", CHAPTER, lessonSlug);
      const section = lesson?.sections.find((item) => item.kind === "coordinateDataExplorer");
      return section?.kind === "coordinateDataExplorer" ? section.mode : undefined;
    });

    expect(modes).toEqual(["coordinates", "data"]);
  });
});
