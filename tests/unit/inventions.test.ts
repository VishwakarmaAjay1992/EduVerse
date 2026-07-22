import { describe, expect, it } from "vitest";
import { getInvention, INVENTIONS } from "@/data/inventions";

describe("inventions collection", () => {
  it("contains only the Steam Engine in the foundation release", () => {
    expect(INVENTIONS.map((item) => item.slug)).toEqual(["steam-engine"]);
  });

  it("has unique slugs and complete required content", () => {
    expect(new Set(INVENTIONS.map((item) => item.slug)).size).toBe(INVENTIONS.length);

    const steam = getInvention("steam-engine");
    expect(steam?.overview.paragraphs.length).toBeGreaterThanOrEqual(3);
    expect(steam?.mainUses.length).toBeGreaterThanOrEqual(5);
    expect(steam?.components.length).toBeGreaterThanOrEqual(10);
    expect(steam?.evolutionTimeline.length).toBeGreaterThanOrEqual(10);
    expect(steam?.comparison.length).toBeGreaterThanOrEqual(10);
    expect(steam?.references.length).toBeGreaterThanOrEqual(8);
    expect(steam?.diagram.src).toBe("/inventions/steam-engine/steam-engine-cutaway.svg");
  });
});
