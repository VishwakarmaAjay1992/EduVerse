import { steamEngine } from "./steam-engine";
import type { Invention } from "./types";

export const INVENTIONS: Invention[] = [steamEngine];
export const getInvention = (slug: string) => INVENTIONS.find((item) => item.slug === slug);
export const inventionCategories = [...new Set(INVENTIONS.map((item) => item.category))];
export const inventionPeriods = [...new Set(INVENTIONS.map((item) => item.historicalPeriod))];
export type {
  ComparisonRow,
  Invention,
  InventionImage,
  InventionPerson,
  InventionSection,
  Reference,
  TimelineItem,
} from "./types";
