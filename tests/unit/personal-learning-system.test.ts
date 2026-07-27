import { describe, expect, it } from "vitest";
import { listAllLessons, listSubjects } from "@/lib/curriculum";
import { buildSearchIndex } from "@/lib/search-index";

describe("personal learning system data", () => {
  it("builds one stable catalog entry for every curriculum lesson", () => {
    const catalog = listAllLessons();
    const expected = listSubjects().reduce((sum, subject) => sum + subject.stats.lessons, 0);

    expect(catalog).toHaveLength(expected);
    expect(new Set(catalog.map((lesson) => lesson.id)).size).toBe(catalog.length);
    expect(catalog.every((lesson) => lesson.href === `/subjects/${lesson.id}`)).toBe(true);
  });

  it("indexes curriculum and discovery collections for universal search", () => {
    const index = buildSearchIndex();
    const kinds = new Set(index.map((item) => item.kind));

    expect(kinds).toEqual(
      new Set(["Lesson", "Scientist", "Phenomenon", "Invention", "Science Q&A", "Learning tool"])
    );
    expect(index.filter((item) => item.kind === "Lesson")).toHaveLength(listAllLessons().length);
    expect(new Set(index.map((item) => item.id)).size).toBe(index.length);
  });
});
