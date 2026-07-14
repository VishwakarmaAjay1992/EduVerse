import Link from "next/link";
import { Atom, ArrowRight, Sigma } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { SubjectSummary } from "@/lib/curriculum";

const ICONS: Record<string, typeof Sigma> = {
  mathematics: Sigma,
  physics: Atom,
};

export function SubjectCard({ subject }: { subject: SubjectSummary }) {
  const Icon = ICONS[subject.slug] ?? Sigma;
  return (
    <Link href={`/subjects/${subject.slug}`} className="group block">
      <Card className="h-full transition-colors group-hover:border-primary/50">
        <CardHeader>
          <div
            className="mb-2 flex size-11 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${subject.accent}1a`, color: subject.accent }}
          >
            <Icon className="size-6" />
          </div>
          <CardTitle className="flex items-center justify-between">
            {subject.name}
            <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </CardTitle>
          <CardDescription>{subject.tagline}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {subject.stats.lessons} lessons · {subject.stats.chapters} chapters · ~
          {subject.stats.hours} hours
        </CardContent>
      </Card>
    </Link>
  );
}
