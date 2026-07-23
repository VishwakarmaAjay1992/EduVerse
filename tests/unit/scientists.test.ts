import { describe, expect, it } from "vitest";
import { SCIENTISTS, getScientist } from "@/data/scientists";

describe("scientist collection", () => {
  it("contains ten uniquely ranked founding profiles", () => {
    expect(SCIENTISTS).toHaveLength(10);
    expect(new Set(SCIENTISTS.map((scientist) => scientist.slug)).size).toBe(10);
    expect(new Set(SCIENTISTS.map((scientist) => scientist.rank)).size).toBe(10);
    expect(SCIENTISTS.map((scientist) => scientist.rank)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("includes the four requested scientists with corrected names", () => {
    expect(getScientist("isaac-newton")?.fullName).toBe("Sir Isaac Newton");
    expect(getScientist("albert-einstein")?.fullName).toBe("Albert Einstein");
    expect(getScientist("thomas-edison")?.fullName).toBe("Thomas Alva Edison");
    expect(getScientist("nikola-tesla")?.fullName).toBe("Nikola Tesla");
  });

  it("provides complete research, image and artifact metadata", () => {
    for (const scientist of SCIENTISTS) {
      expect(scientist.overview.length).toBeGreaterThanOrEqual(2);
      expect(scientist.contributions.length).toBeGreaterThanOrEqual(3);
      expect(scientist.knownFor.length).toBeGreaterThanOrEqual(4);
      expect(scientist.sources.length).toBeGreaterThanOrEqual(3);
      expect(scientist.portrait.fileName).toBeTruthy();
      expect(scientist.portrait.sourceUrl).toMatch(/^https:\/\//);
      expect(scientist.artifact.image.fileName).toBeTruthy();
      expect(scientist.artifact.image.sourceUrl).toMatch(/^https:\/\//);
    }
  });
});
