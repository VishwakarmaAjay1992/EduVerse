import { describe, expect, it } from "vitest";
import {
  getPhysicsDictionaryEntry,
  PHYSICS_DICTIONARY,
  PHYSICS_DICTIONARY_CATEGORIES,
} from "@/data/physics-dictionary";
import { buildSearchIndex } from "@/lib/search-index";

describe("physics dictionary", () => {
  it("contains broad unique concept coverage", () => {
    expect(PHYSICS_DICTIONARY).toHaveLength(1000);
    expect(new Set(PHYSICS_DICTIONARY.map((entry) => entry.slug)).size).toBe(
      PHYSICS_DICTIONARY.length
    );
    expect(PHYSICS_DICTIONARY_CATEGORIES.length).toBeGreaterThanOrEqual(26);
  });

  it("includes core requested and high-interest terms", () => {
    expect(getPhysicsDictionaryEntry("banking-angle")?.aliases).toContain("angle of banking");
    expect(getPhysicsDictionaryEntry("center-of-gravity")?.definition).toBeTruthy();
    expect(getPhysicsDictionaryEntry("center-of-mass")?.formula).toContain("r_cm");
    expect(getPhysicsDictionaryEntry("photoelectric-effect")?.priority).toBe("high-interest");
  });

  it("adds dictionary terms to universal search", () => {
    const item = buildSearchIndex().find((entry) => entry.id === "physics-concept:banking-angle");
    expect(item?.kind).toBe("Physics concept");
    expect(item?.keywords).toContain("angle of banking");
  });
});
