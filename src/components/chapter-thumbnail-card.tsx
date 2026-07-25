import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sigma } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ChapterThumbnailCardProps {
  href: string;
  title: string;
  lessonCount: number;
  imagePath?: string;
  accent: string;
}

export function ChapterThumbnailCard({
  href,
  title,
  lessonCount,
  imagePath,
  accent,
}: ChapterThumbnailCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {imagePath ? (
            <Image
              src={imagePath}
              alt={`${title} chapter thumbnail`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${accent}22, ${accent}08 55%, transparent)`,
              }}
            >
              <div className="rounded-2xl border bg-background/80 p-4 shadow-sm backdrop-blur-sm">
                <Sigma className="size-9" style={{ color: accent }} aria-hidden="true" />
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
        <div className="flex items-start justify-between gap-3 p-4">
          <div>
            <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}
            </p>
          </div>
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </Card>
    </Link>
  );
}
