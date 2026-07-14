import mathematics from "@/data/curriculum/mathematics.json";
import physics from "@/data/curriculum/physics.json";

export interface Lesson {
  title: string;
  d: number;
  min: number;
  sub: string[];
}
export interface Topic {
  title: string;
  lessons: Lesson[];
}
export interface Chapter {
  title: string;
  prereq: string[];
  topics: Topic[];
}
export interface Category {
  title: string;
  level: string;
  chapters: Chapter[];
}
export interface CurriculumFile {
  subject: string;
  categories: Category[];
}

export interface SubjectStats {
  categories: number;
  chapters: number;
  topics: number;
  lessons: number;
  hours: number;
}

export interface SubjectMeta {
  slug: string;
  name: string;
  tagline: string;
  accent: string;
}

const FILES: Record<string, CurriculumFile> = {
  mathematics: mathematics as CurriculumFile,
  physics: physics as CurriculumFile,
};

const META: Record<string, SubjectMeta> = {
  mathematics: {
    slug: "mathematics",
    name: "Mathematics",
    tagline: "From arithmetic to abstract algebra, built from first principles.",
    accent: "#6366f1",
  },
  physics: {
    slug: "physics",
    name: "Physics",
    tagline: "From measurement and motion to quantum mechanics and relativity.",
    accent: "#0ea5e9",
  },
};

const LEVEL_ORDER = ["beginner", "intermediate", "advanced", "university"];

export function computeStats(file: CurriculumFile): SubjectStats {
  let chapters = 0;
  let topics = 0;
  let lessons = 0;
  let minutes = 0;
  for (const category of file.categories) {
    chapters += category.chapters.length;
    for (const chapter of category.chapters) {
      topics += chapter.topics.length;
      for (const topic of chapter.topics) {
        lessons += topic.lessons.length;
        for (const lesson of topic.lessons) minutes += lesson.min;
      }
    }
  }
  return {
    categories: file.categories.length,
    chapters,
    topics,
    lessons,
    hours: Math.round(minutes / 60),
  };
}

export interface SubjectSummary extends SubjectMeta {
  stats: SubjectStats;
}

export function listSubjects(): SubjectSummary[] {
  return Object.keys(FILES).map((slug) => {
    const meta = META[slug];
    if (!meta) throw new Error(`Missing metadata for subject "${slug}"`);
    return { ...meta, stats: computeStats(FILES[slug] as CurriculumFile) };
  });
}

export interface SubjectDetail extends SubjectSummary {
  categories: Category[];
}

export function getSubject(slug: string): SubjectDetail | null {
  const file = FILES[slug];
  const meta = META[slug];
  if (!file || !meta) return null;
  const categories = [...file.categories].sort(
    (a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level)
  );
  return { ...meta, stats: computeStats(file), categories };
}

export function subjectSlugs(): string[] {
  return Object.keys(FILES);
}

// ── Chapter / lesson navigation ─────────────────────────────────────────────
import { slugify } from "./slug";

export interface ChapterDetail {
  subject: SubjectMeta;
  categoryTitle: string;
  categoryLevel: string;
  chapter: Chapter;
  chapterSlug: string;
}

export function getChapter(subjectSlug: string, chapterSlug: string): ChapterDetail | null {
  const file = FILES[subjectSlug];
  const meta = META[subjectSlug];
  if (!file || !meta) return null;
  for (const category of file.categories) {
    for (const chapter of category.chapters) {
      if (slugify(chapter.title) === chapterSlug) {
        return {
          subject: meta,
          categoryTitle: category.title,
          categoryLevel: category.level,
          chapter,
          chapterSlug,
        };
      }
    }
  }
  return null;
}

export interface LessonLocation {
  subject: SubjectMeta;
  chapter: Chapter;
  chapterSlug: string;
  topic: Topic;
  lesson: Lesson;
  lessonSlug: string;
}

export function findLesson(
  subjectSlug: string,
  chapterSlug: string,
  lessonSlug: string
): LessonLocation | null {
  const detail = getChapter(subjectSlug, chapterSlug);
  if (!detail) return null;
  for (const topic of detail.chapter.topics) {
    for (const lesson of topic.lessons) {
      if (slugify(lesson.title) === lessonSlug) {
        return {
          subject: detail.subject,
          chapter: detail.chapter,
          chapterSlug,
          topic,
          lesson,
          lessonSlug,
        };
      }
    }
  }
  return null;
}

export function chapterParams(): { slug: string; chapter: string }[] {
  const out: { slug: string; chapter: string }[] = [];
  for (const slug of Object.keys(FILES)) {
    const seen = new Set<string>();
    for (const category of (FILES[slug] as CurriculumFile).categories) {
      for (const chapter of category.chapters) {
        const chapterSlug = slugify(chapter.title);
        if (seen.has(chapterSlug)) continue;
        seen.add(chapterSlug);
        out.push({ slug, chapter: chapterSlug });
      }
    }
  }
  return out;
}

export function lessonParams(): { slug: string; chapter: string; lesson: string }[] {
  const out: { slug: string; chapter: string; lesson: string }[] = [];
  for (const slug of Object.keys(FILES)) {
    for (const category of (FILES[slug] as CurriculumFile).categories) {
      for (const chapter of category.chapters) {
        const chapterSlug = slugify(chapter.title);
        for (const topic of chapter.topics) {
          for (const lesson of topic.lessons) {
            out.push({ slug, chapter: chapterSlug, lesson: slugify(lesson.title) });
          }
        }
      }
    }
  }
  return out;
}

export function chapterLessonCount(chapter: Chapter): number {
  return chapter.topics.reduce((n, t) => n + t.lessons.length, 0);
}

export function flattenChapterLessons(chapter: Chapter): { title: string; slug: string }[] {
  const out: { title: string; slug: string }[] = [];
  for (const topic of chapter.topics) {
    for (const lesson of topic.lessons) {
      out.push({ title: lesson.title, slug: slugify(lesson.title) });
    }
  }
  return out;
}
