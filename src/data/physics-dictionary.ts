import dictionaryData from "@/data/physics-dictionary.json";
import { listAllLessons, type LessonCatalogItem } from "@/lib/curriculum";

export type PhysicsDictionaryPriority = "high-interest" | "reference";

export interface PhysicsDictionaryEntry {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  definition: string;
  explanation: string;
  formula?: string;
  unit?: string;
  aliases: string[];
  relatedTerms: string[];
  priority: PhysicsDictionaryPriority;
}

export interface PhysicsDictionaryCategory {
  title: string;
  slug: string;
  count: number;
}

export const PHYSICS_DICTIONARY = dictionaryData as PhysicsDictionaryEntry[];

const BY_SLUG = new Map(PHYSICS_DICTIONARY.map((entry) => [entry.slug, entry]));

export const PHYSICS_DICTIONARY_CATEGORIES: PhysicsDictionaryCategory[] = Array.from(
  PHYSICS_DICTIONARY.reduce((map, entry) => {
    const current = map.get(entry.category) ?? {
      title: entry.category,
      slug: entry.categorySlug,
      count: 0,
    };
    current.count += 1;
    map.set(entry.category, current);
    return map;
  }, new Map<string, PhysicsDictionaryCategory>()).values()
);

export function getPhysicsDictionaryEntry(slug: string): PhysicsDictionaryEntry | undefined {
  return BY_SLUG.get(slug);
}

export function getRelatedPhysicsTerms(entry: PhysicsDictionaryEntry): PhysicsDictionaryEntry[] {
  return entry.relatedTerms
    .map((slug) => BY_SLUG.get(slug))
    .filter((term): term is PhysicsDictionaryEntry => Boolean(term));
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function termsFor(entry: PhysicsDictionaryEntry): string[] {
  return Array.from(
    new Set(
      normalize(`${entry.title} ${entry.aliases.join(" ")}`)
        .split(" ")
        .filter((term) => term.length >= 3)
    )
  );
}

export function findRelatedPhysicsLessons(
  entry: PhysicsDictionaryEntry,
  limit = 6
): LessonCatalogItem[] {
  const exact = normalize(entry.title);
  const terms = termsFor(entry);

  return listAllLessons()
    .filter((lesson) => lesson.subjectSlug === "physics")
    .map((lesson) => {
      const title = normalize(lesson.lessonTitle);
      const text = normalize(
        `${lesson.lessonTitle} ${lesson.topicTitle} ${lesson.chapterTitle} ${lesson.categoryTitle} ${lesson.summary.join(" ")}`
      );
      let score = 0;
      if (title === exact) score += 100;
      if (title.includes(exact)) score += 55;
      if (text.includes(exact)) score += 35;
      for (const term of terms) {
        if (title.split(" ").includes(term)) score += 12;
        else if (title.includes(term)) score += 7;
        if (text.includes(term)) score += 2;
      }
      return { lesson, score };
    })
    .filter(({ score }) => score >= 7)
    .sort((a, b) => b.score - a.score || a.lesson.lessonTitle.localeCompare(b.lesson.lessonTitle))
    .slice(0, limit)
    .map(({ lesson }) => lesson);
}
