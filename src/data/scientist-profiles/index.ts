import type { ScientistProfile } from "./types";
import { johannesKepler } from "./johannes-kepler";
import { nicolausCopernicus } from "./nicolaus-copernicus";
import { jamesClerkMaxwell } from "./james-clerk-maxwell";
import { nielsBohr } from "./niels-bohr";

export * from "./types";

/**
 * Deep-dive profiles, keyed by scientist slug.
 *
 * Add a profile here to light up the extended sections on that scientist's
 * page. Scientists absent from this registry render exactly as before —
 * the deep-dive layer is entirely opt-in.
 */
const PROFILES: Record<string, ScientistProfile> = {
  [johannesKepler.slug]: johannesKepler,
  [nicolausCopernicus.slug]: nicolausCopernicus,
  [jamesClerkMaxwell.slug]: jamesClerkMaxwell,
  [nielsBohr.slug]: nielsBohr,
};

export function getScientistProfile(slug: string): ScientistProfile | undefined {
  return PROFILES[slug];
}

/** Slugs that currently have a deep-dive profile. */
export function profiledSlugs(): string[] {
  return Object.keys(PROFILES);
}
