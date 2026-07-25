import { describe, expect, it } from "vitest";
import physics from "@/data/curriculum/physics.json";
import { rayOpticsCourse } from "@/content/physics/ray-optics-course";

describe("ray optics course", () => {
  it("registers eight complete native lessons", () => {
    expect(rayOpticsCourse).toHaveLength(8);
    for (const lesson of rayOpticsCourse) {
      expect(lesson.subjectSlug).toBe("physics");
      expect(lesson.chapterSlug).toBe("geometrical-optics");
      expect(lesson.sections.some((section) => section.kind === "rayOpticsExplorer")).toBe(true);
      expect(lesson.sections.filter((section) => section.kind === "example").length).toBeGreaterThanOrEqual(4);
      expect(lesson.sections.some((section) => section.kind === "practice")).toBe(true);
      expect(lesson.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
    }
  });

  it("matches the geometrical optics curriculum", () => {
    const optics = physics.categories.find((category) => category.title === "Optics");
    const chapter = optics?.chapters.find((item) => item.title === "Geometrical Optics");
    const lessonCount = chapter?.topics.reduce((sum, topic) => sum + topic.lessons.length, 0);
    expect(lessonCount).toBe(8);
  });
});
