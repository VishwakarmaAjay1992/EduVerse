import { Badge } from "@/components/ui/badge";

const VARIANT: Record<string, "default" | "secondary" | "outline"> = {
  beginner: "secondary",
  intermediate: "outline",
  advanced: "default",
  university: "default",
};

export function LevelBadge({ level }: { level: string }) {
  return (
    <Badge variant={VARIANT[level] ?? "outline"} className="capitalize">
      {level}
    </Badge>
  );
}
