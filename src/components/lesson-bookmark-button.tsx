"use client";

import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleBookmark, useLearningSnapshot } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

export function LessonBookmarkButton({ lessonId }: { lessonId: string }) {
  const snapshot = useLearningSnapshot();
  const saved = snapshot.bookmarks.includes(lessonId);

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-pressed={saved}
      onClick={() => toggleBookmark(lessonId)}
      className={cn(saved && "border-primary/40 bg-primary/5 text-primary")}
    >
      <Bookmark className={cn(saved && "fill-current")} aria-hidden="true" />
      {saved ? "Bookmarked" : "Bookmark"}
    </Button>
  );
}
