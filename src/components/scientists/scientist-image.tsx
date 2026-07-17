import { ExternalLink } from "lucide-react";
import { commonsImageUrl, type ScientistImage as ScientistImageData } from "@/data/scientists";
import { cn } from "@/lib/utils";

type ScientistImageProps = {
  image: ScientistImageData;
  width?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showCredit?: boolean;
};

export function ScientistImage({
  image,
  width = 1400,
  className,
  imageClassName,
  priority = false,
  showCredit = true,
}: ScientistImageProps) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border bg-muted", className)}>
      {/* A regular img element intentionally avoids remote-host configuration and keeps the
          Commons attribution URL visible. */}
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
      {showCredit && (
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t bg-card px-3 py-2 text-[11px] leading-4 text-muted-foreground">
          <span>
            {image.credit} · {image.license}
          </span>
          <a
            href={image.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            aria-label={`Open image source for ${image.alt}`}
          >
            Image source <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        </figcaption>
      )}
    </figure>
  );
}
