"use client";

export type ChapterMastery = {
  chapterSlug: string;
  score: number;
  passed: boolean;
  attempts: number;
  updatedAt: string;
};

const KEY = "eduverse:physics-mastery:v1";

export function readMastery(): ChapterMastery[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]") as ChapterMastery[]; } catch { return []; }
}

export function saveMastery(result: Omit<ChapterMastery, "attempts" | "updatedAt">): ChapterMastery {
  const all = readMastery();
  const current = all.find((x) => x.chapterSlug === result.chapterSlug);
  const next = { ...result, attempts: (current?.attempts ?? 0) + 1, updatedAt: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify([...all.filter((x) => x.chapterSlug !== result.chapterSlug), next]));
  return next;
}
