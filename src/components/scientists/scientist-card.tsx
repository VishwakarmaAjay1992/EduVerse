import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Scientist } from "@/data/scientists";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScientistImage } from "@/components/scientists/scientist-image";

export function ScientistCard({ scientist }: { scientist: Scientist }) {
  return (
    <Card className="group overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/scientists/${scientist.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <ScientistImage
            image={scientist.portrait}
            width={900}
            className="h-full rounded-none border-0"
            imageClassName="transition-transform duration-500 group-hover:scale-[1.035]"
            showCredit={false}
          />
          <span className="absolute left-3 top-3 inline-flex size-10 items-center justify-center rounded-full border bg-background/90 text-sm font-bold shadow-sm backdrop-blur">
            {scientist.rank}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {scientist.primaryFields.slice(0, 2).map((field) => (
              <Badge key={field} variant="secondary" className="font-normal">
                {field}
              </Badge>
            ))}
          </div>
          <h2 className="scientist-signature text-3xl leading-tight">{scientist.fullName}</h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {scientist.life}
          </p>
          <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
            {scientist.headline}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
            Explore profile
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Card>
  );
}
