import Image from "next/image";

export function PhenomenonArt({
  slug,
  title,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: {
  slug: string;
  title: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative aspect-[5/3] overflow-hidden bg-muted ${className}`}
    >
      <Image
        src={`/images/phenomena/${slug}.webp`}
        alt={`Scientific phenomenon: ${title}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5"
        aria-hidden="true"
      />
    </div>
  );
}
