import { ExternalLink } from "lucide-react";
import { commonsImageUrl, type HistoricalImage as HistoricalImageData } from "@/data/inventions";
import { cn } from "@/lib/utils";

type HistoricalImageProps = {
  image: HistoricalImageData;
  width?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showCaption?: boolean;
};

export function HistoricalImage({
  image,
  width = 1600,
  className,
  imageClassName,
  priority = false,
  showCaption = true,
}: HistoricalImageProps) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border bg-muted", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={commonsImageUrl(image.fileName, width)}
        alt={image.alt}
        width={width}
        height={Math.round(width * 0.72)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
        className={cn("h-full w-full object-cover", imageClassName)}
        style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
      />
      {showCaption && (
        <figcaption className="space-y-2 border-t bg-card px-4 py-3 text-xs leading-5 text-muted-foreground">
          <p>{image.caption}</p>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <span>
              {image.credit} · {image.license}
            </span>
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            >
              Original and licence <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        </figcaption>
      )}
    </figure>
  );
}
