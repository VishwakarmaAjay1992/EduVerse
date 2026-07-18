import { describe, expect, it } from "vitest";
import { getHubFeature, HUB_FEATURES, HUB_GROUPS } from "@/data/learning-hub";
import { FEATURE_GUIDES } from "@/data/feature-guides";
import { PERIODIC_ELEMENTS } from "@/data/periodic-elements";

describe("learning hub catalog", () => {
  it("contains exactly 25 uniquely routed experiences", () => {
    expect(HUB_FEATURES).toHaveLength(25);
    expect(new Set(HUB_FEATURES.map((feature) => feature.slug)).size).toBe(25);
  });

  it("covers every navigation group", () => {
    for (const group of HUB_GROUPS) {
      expect(HUB_FEATURES.some((feature) => feature.group === group)).toBe(true);
    }
  });

  it("resolves every related experience", () => {
    for (const feature of HUB_FEATURES) {
      expect(feature.related.length).toBeGreaterThan(0);
      for (const slug of feature.related) expect(getHubFeature(slug)).toBeDefined();
    }
  });

  it("provides meaningful outcomes and collections", () => {
    for (const feature of HUB_FEATURES) {
      expect(feature.outcomes.length).toBeGreaterThanOrEqual(4);
      expect(feature.collections.length).toBeGreaterThan(0);
    }
  });

  it("includes the complete 118-element table", () => {
    expect(PERIODIC_ELEMENTS).toHaveLength(118);
    expect(new Set(PERIODIC_ELEMENTS.map((element) => element.atomicNumber)).size).toBe(118);
    expect(PERIODIC_ELEMENTS[117]?.symbol).toBe("Og");
  });

  it("provides substantial guides for every reading collection", () => {
    const readingCollections = HUB_FEATURES.filter((feature) => !feature.interactive);
    for (const feature of readingCollections) {
      expect(FEATURE_GUIDES[feature.slug]?.length).toBeGreaterThanOrEqual(3);
    }
  });
});
