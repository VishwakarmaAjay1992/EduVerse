import { describe, expect, it } from "vitest";
import physics from "@/data/curriculum/physics.json";
import { thermalPhysicsCourse } from "@/content/physics/thermal-physics-course";

const slugs = new Set(thermalPhysicsCourse.map((lesson) => `${lesson.chapterSlug}/${lesson.lessonSlug}`));

describe("thermal physics course", () => {
  it("registers eight native lessons with interactive and assessment content", () => {
    expect(thermalPhysicsCourse).toHaveLength(8);
    for (const lesson of thermalPhysicsCourse) {
      expect(lesson.subjectSlug).toBe("physics");
      expect(lesson.sections.some((section) => section.kind === "thermalPhysicsExplorer")).toBe(true);
      expect(lesson.sections.filter((section) => section.kind === "example").length).toBeGreaterThanOrEqual(4);
      expect(lesson.sections.some((section) => section.kind === "practice")).toBe(true);
      expect(lesson.sections.some((section) => section.kind === "gradedQuiz")).toBe(true);
    }
  });

  it("has visible curriculum routes for every thermal lesson", () => {
    const expected = [
      "kinetic-theory-of-gases/brownian-motion-and-molecular-randomness",
      "kinetic-theory-of-gases/ideal-gas-laws-and-kinetic-theory-postulates",
      "kinetic-theory-of-gases/kinetic-theory-and-pressure-derivation",
      "kinetic-theory-of-gases/rms-speed-temperature-and-translational-kinetic-energy",
      "kinetic-theory-of-gases/thermal-physics-comprehensive-review",
      "statistical-foundations/boltzmann-distribution-and-statistical-physics",
      "astrophysics-and-cosmology/stellar-physics-and-evolution",
      "astrophysics-and-cosmology/neutron-stars-pulsars-and-the-life-cycle-of-the-sun",
    ];
    expect([...slugs].sort()).toEqual(expected.sort());

    const titles = physics.categories.flatMap((category) =>
      category.chapters.flatMap((chapter) => chapter.topics.flatMap((topic) => topic.lessons.map((lesson) => lesson.title)))
    );
    for (const lesson of thermalPhysicsCourse) expect(titles).toContain(lesson.title);
  });
});
