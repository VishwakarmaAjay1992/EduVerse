import type { MetadataRoute } from "next";
import { chapterParams, lessonParams, listSubjects } from "@/lib/curriculum";
import { SCIENTISTS } from "@/data/scientists";
import { PHENOMENA } from "@/data/phenomena";
import { HUB_FEATURES } from "@/data/learning-hub";

/**
 * The canonical site origin. Set NEXT_PUBLIC_SITE_URL in Vercel to your
 * production domain (e.g. https://eduverse.example.com). Falls back to the
 * Vercel preview URL, then localhost, so previews still generate valid
 * absolute URLs.
 */
function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/subjects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/scientists`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/phenomena`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/science-qa`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const subjectRoutes: MetadataRoute.Sitemap = listSubjects().map((subject) => ({
    url: `${base}/subjects/${subject.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const chapterRoutes: MetadataRoute.Sitemap = chapterParams().map(({ slug, chapter }) => ({
    url: `${base}/subjects/${slug}/${chapter}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const lessonRoutes: MetadataRoute.Sitemap = lessonParams().map(({ slug, chapter, lesson }) => ({
    url: `${base}/subjects/${slug}/${chapter}/${lesson}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const scientistRoutes: MetadataRoute.Sitemap = SCIENTISTS.map((scientist) => ({
    url: `${base}/scientists/${scientist.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const phenomenonRoutes: MetadataRoute.Sitemap = PHENOMENA.map((phenomenon) => ({
    url: `${base}/phenomena/${phenomenon.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const hubRoutes: MetadataRoute.Sitemap = HUB_FEATURES.map((feature) => ({
    url: `${base}/learning-hub/${feature.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...subjectRoutes,
    ...chapterRoutes,
    ...lessonRoutes,
    ...scientistRoutes,
    ...phenomenonRoutes,
    ...hubRoutes,
  ];
}
