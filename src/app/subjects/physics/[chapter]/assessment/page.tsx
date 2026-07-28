import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChapterAssessment } from "@/components/physics/chapter-assessment";
import { getChapter } from "@/lib/curriculum";

export default async function Page({ params }: { params: Promise<{chapter:string}> }) {
  const { chapter } = await params;
  const detail = getChapter("physics", chapter);
  if (!detail) notFound();
  return <><SiteHeader/><main className="container max-w-4xl py-6 sm:py-10"><Breadcrumbs items={[{label:"Physics",href:"/subjects/physics"},{label:detail.chapter.title,href:`/subjects/physics/${chapter}`},{label:"Assessment"}]}/><ChapterAssessment chapterSlug={chapter} chapterTitle={detail.chapter.title}/></main></>;
}
