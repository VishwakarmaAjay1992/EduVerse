import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import physics from "@/data/curriculum/physics.json";
import { electromagneticWavesCourse } from "@/content/physics/electromagnetic-waves-course";
import { slugify } from "@/lib/slug";

const chapter = physics.categories
  .flatMap((category) => category.chapters)
  .find((item) => item.title === "Electromagnetic Waves");

const curriculumLessons = chapter?.topics.flatMap((topic) => topic.lessons) ?? [];

describe("Electromagnetic Waves complete course", () => {
  it("registers all six curriculum lessons with matching routes", () => {
    expect(curriculumLessons).toHaveLength(6);
    expect(electromagneticWavesCourse).toHaveLength(6);
    expect(electromagneticWavesCourse.map((lesson) => lesson.lessonSlug)).toEqual(
      curriculumLessons.map((lesson) => slugify(lesson.title))
    );
  });

  it("includes every required interactive mode", () => {
    const modes = electromagneticWavesCourse.flatMap((lesson) =>
      lesson.sections
        .filter((section) => section.kind === "electromagneticWaveExplorer")
        .map((section) => section.mode)
    );
    expect(new Set(modes)).toEqual(
      new Set(["field-wave", "spectrum", "energy", "polarization", "refraction", "dipole", "communication"])
    );
  });

  it("gives every lesson practice, mastery assessment and summary", () => {
    for (const lesson of electromagneticWavesCourse) {
      const kinds = lesson.sections.map((section) => section.kind);
      expect(kinds).toContain("practice");
      expect(kinds).toContain("gradedQuiz");
      expect(kinds).toContain("summary");
      expect(kinds).toContain("completion");
      expect(lesson.sections.filter((section) => section.kind === "example").length).toBeGreaterThanOrEqual(2);
    }
  });

  it("ships all referenced static diagrams", () => {
    const sources = electromagneticWavesCourse.flatMap((lesson) =>
      lesson.sections
        .filter((section) => section.kind === "imageGallery")
        .flatMap((section) => section.images.map((image) => image.src))
    );
    expect(sources.length).toBeGreaterThanOrEqual(5);
    for (const source of sources) {
      expect(existsSync(`public${source}`)).toBe(true);
    }
  });
});
