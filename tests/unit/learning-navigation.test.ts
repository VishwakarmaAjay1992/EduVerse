import { describe, expect, it } from "vitest";
import { SCIENCE_QA } from "@/data/science-qa";
import { listSubjects, searchCurriculumLessons } from "@/lib/curriculum";
import { slugify } from "@/lib/slug";

describe("learning navigation data", () => {
  it("keeps subject statistics derived from curriculum files", () => {
    const subjects = listSubjects();
    expect(subjects.find((subject) => subject.slug === "mathematics")?.stats.lessons).toBe(390);
    expect(subjects.find((subject) => subject.slug === "physics")?.stats.lessons).toBe(118);
  });

  it("generates a unique URL slug for every science question", () => {
    const slugs = SCIENCE_QA.map((item) => slugify(item.question));
    expect(new Set(slugs).size).toBe(SCIENCE_QA.length);
  });

  it("finds curriculum lessons related to common science questions", () => {
    const results = searchCurriculumLessons("gravity motion force", 4);
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.href.startsWith("/subjects/"))).toBe(true);
  });
});
