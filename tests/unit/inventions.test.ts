import { describe, expect, it } from "vitest";
import { INVENTIONS, getInvention } from "@/data/inventions";

describe("human history inventions collection", () => {
  it("contains five uniquely addressed dossiers", () => {
    expect(INVENTIONS).toHaveLength(5);
    expect(new Set(INVENTIONS.map((invention) => invention.slug)).size).toBe(5);
    expect(getInvention("steam-engine")?.title).toBe("Steam Engine");
    expect(getInvention("printing-press")?.title).toBe("Printing Press");
    expect(getInvention("electrical-telegraph")?.title).toBe("Electrical Telegraph");
    expect(getInvention("electric-light")?.title).toBe("Electric Light");
    expect(getInvention("airplane")?.title).toBe("Airplane");
  });

  it("provides full necessity-to-legacy research structure", () => {
    for (const invention of INVENTIONS) {
      expect(invention.summary.length).toBeGreaterThanOrEqual(3);
      expect(invention.necessity.pressures.length).toBeGreaterThanOrEqual(4);
      expect(invention.globalPrehistory.entries.length).toBeGreaterThanOrEqual(4);
      expect(invention.people.length).toBeGreaterThanOrEqual(5);
      expect(invention.experimentsAndFailures.length).toBeGreaterThanOrEqual(4);
      expect(invention.milestones.length).toBeGreaterThanOrEqual(8);
      expect(invention.improvements.length).toBeGreaterThanOrEqual(5);
      expect(invention.gallery.length).toBeGreaterThanOrEqual(4);
      expect(invention.sources.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("uses licensed historical images and evidence labels", () => {
    for (const invention of INVENTIONS) {
      for (const image of [invention.heroImage, ...invention.gallery]) {
        expect(image.fileName).toBeTruthy();
        expect(image.sourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
        expect(image.credit).toBeTruthy();
        expect(image.license).toBeTruthy();
      }

      for (const experiment of invention.experimentsAndFailures) {
        expect([
          "Documented",
          "Strongly supported",
          "Reconstructed from surviving evidence",
        ]).toContain(experiment.evidence);
      }
    }
  });
});
