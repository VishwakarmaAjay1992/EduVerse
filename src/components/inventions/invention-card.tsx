import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Invention } from "@/data/inventions";

export function InventionCard({ invention }: { invention: Invention }) {
  return (
    <Card className="group overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] border-b bg-muted/40">
        {invention.heroImage.src && (
          <Image
            src={invention.heroImage.src}
            alt={invention.heroImage.alt}
            fill
            className="object-contain p-3"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Cog className="size-3.5" aria-hidden="true" />
            {invention.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {invention.historicalPeriod}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold">
          <Link
            href={`/inventions/${invention.slug}`}
            className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {invention.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">
          {invention.summary}
        </p>
        <Link
          href={`/inventions/${invention.slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Explore invention
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}
