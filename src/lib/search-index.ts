import { HUB_FEATURES } from "@/data/learning-hub";
import { INVENTIONS } from "@/data/inventions";
import { PHENOMENA } from "@/data/phenomena";
import { SCIENCE_QA } from "@/data/science-qa";
import { SCIENTISTS } from "@/data/scientists";
import { listAllLessons } from "@/lib/curriculum";
import { slugify } from "@/lib/slug";

export type SearchKind =
  | "Lesson"
  | "Scientist"
  | "Phenomenon"
  | "Invention"
  | "Science Q&A"
  | "Learning tool";

export interface SearchIndexItem {
  id: string;
  kind: SearchKind;
  title: string;
  description: string;
  eyebrow: string;
  href: string;
  keywords: string;
}

function compact(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function buildSearchIndex(): SearchIndexItem[] {
  const lessons: SearchIndexItem[] = listAllLessons().map((lesson) => ({
    id: `lesson:${lesson.id}`,
    kind: "Lesson",
    title: lesson.lessonTitle,
    description: compact(lesson.summary.join(" ")).slice(0, 220),
    eyebrow: `${lesson.subjectName} · ${lesson.chapterTitle} · ${lesson.minutes} min`,
    href: lesson.href,
    keywords: compact(
      `${lesson.lessonTitle} ${lesson.topicTitle} ${lesson.chapterTitle} ${lesson.categoryTitle} ${lesson.categoryLevel} ${lesson.summary.join(" ")}`
    ),
  }));

  const scientists: SearchIndexItem[] = SCIENTISTS.map((scientist) => ({
    id: `scientist:${scientist.slug}`,
    kind: "Scientist",
    title: scientist.fullName,
    description: compact(scientist.headline),
    eyebrow: `${scientist.life} · ${scientist.primaryFields.join(", ")}`,
    href: `/scientists/${scientist.slug}`,
    keywords: compact(
      `${scientist.fullName} ${scientist.primaryFields.join(" ")} ${scientist.knownFor.join(" ")} ${scientist.headline}`
    ),
  }));

  const phenomena: SearchIndexItem[] = PHENOMENA.map((phenomenon) => ({
    id: `phenomenon:${phenomenon.slug}`,
    kind: "Phenomenon",
    title: phenomenon.title,
    description: compact(phenomenon.summary),
    eyebrow: `${phenomenon.category} · ${phenomenon.readingTime} min`,
    href: `/phenomena/${phenomenon.slug}`,
    keywords: compact(
      `${phenomenon.title} ${phenomenon.scientificName} ${phenomenon.category} ${phenomenon.summary} ${phenomenon.facts.join(" ")}`
    ),
  }));

  const inventions: SearchIndexItem[] = INVENTIONS.map((invention) => ({
    id: `invention:${invention.slug}`,
    kind: "Invention",
    title: invention.title,
    description: compact(invention.subtitle),
    eyebrow: `${invention.category} · ${invention.era}`,
    href: `/inventions/${invention.slug}`,
    keywords: compact(
      `${invention.title} ${invention.subtitle} ${invention.category} ${invention.era} ${invention.origin} ${invention.summary.join(" ")} ${invention.people.map((person) => person.name).join(" ")}`
    ),
  }));

  const questions: SearchIndexItem[] = SCIENCE_QA.map((question) => ({
    id: `question:${question.id}`,
    kind: "Science Q&A",
    title: question.question,
    description: compact(question.shortAnswer),
    eyebrow: question.category,
    href: `/science-qa/${slugify(question.question)}`,
    keywords: compact(
      `${question.question} ${question.category} ${question.shortAnswer} ${question.explanation} ${(question.keyFacts ?? []).join(" ")}`
    ),
  }));

  const tools: SearchIndexItem[] = HUB_FEATURES.map((feature) => ({
    id: `hub:${feature.slug}`,
    kind: "Learning tool",
    title: feature.title,
    description: compact(feature.tagline),
    eyebrow: `${feature.group}${feature.interactive ? " · Interactive" : ""}`,
    href: `/learning-hub/${feature.slug}`,
    keywords: compact(
      `${feature.title} ${feature.shortTitle} ${feature.group} ${feature.tagline} ${feature.description} ${feature.outcomes.join(" ")} ${feature.collections.flatMap((collection) => [collection.title, collection.description, ...collection.examples]).join(" ")}`
    ),
  }));

  return [...lessons, ...scientists, ...phenomena, ...inventions, ...questions, ...tools];
}
