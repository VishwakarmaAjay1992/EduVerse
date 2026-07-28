"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Download, ExternalLink, GraduationCap, Trash2 } from "lucide-react";
import audit from "@/data/physics-audit.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Assignment = {
  id: string;
  title: string;
  chapterSlug: string;
  lessonSlug: string;
  due: string;
  className: string;
  createdAt: string;
};

type AuditRow = {
  chapter: string;
  chapterSlug: string;
  title: string;
  slug: string;
};

const STORAGE_KEY = "eduverse:teacher-assignments:v1";

export function TeacherDashboard() {
  const rows = audit as AuditRow[];
  const chapters = useMemo(
    () => [...new Map(rows.map((row) => [row.chapterSlug, row.chapter])).entries()],
    [rows]
  );
  const [chapterSlug, setChapterSlug] = useState(chapters[0]?.[0] ?? "");
  const [lessonSlug, setLessonSlug] = useState("");
  const [className, setClassName] = useState("Physics Class");
  const [due, setDue] = useState("");
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    try {
      setAssignments(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Assignment[]);
    } catch {
      setAssignments([]);
    }
  }, []);

  const lessons = rows.filter((row) => row.chapterSlug === chapterSlug);

  useEffect(() => {
    setLessonSlug(lessons[0]?.slug ?? "");
  }, [chapterSlug]); // eslint-disable-line react-hooks/exhaustive-deps

  function persist(next: Assignment[]) {
    setAssignments(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function createAssignment() {
    const row = rows.find(
      (item) => item.chapterSlug === chapterSlug && item.slug === lessonSlug
    );
    if (!row) return;
    const next: Assignment = {
      id: crypto.randomUUID(),
      title: row.title,
      chapterSlug,
      lessonSlug,
      due,
      className: className.trim() || "Physics Class",
      createdAt: new Date().toISOString(),
    };
    persist([next, ...assignments]);
  }

  function removeAssignment(id: string) {
    persist(assignments.filter((assignment) => assignment.id !== id));
  }

  function exportCsv() {
    const lines = [
      "Class,Lesson,Chapter,Due,Assignment URL",
      ...assignments.map((assignment) =>
        [
          assignment.className,
          assignment.title,
          assignment.chapterSlug,
          assignment.due,
          `${location.origin}/subjects/physics/${assignment.chapterSlug}/${assignment.lessonSlug}`,
        ]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(",")
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "eduverse-assignments.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <Card className="overflow-hidden shadow-sm">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <GraduationCap className="size-5 text-primary" aria-hidden="true" /> Create Physics assignment
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-4 sm:grid-cols-2 sm:pt-6">
          <div className="space-y-2">
            <Label htmlFor="teacher-class">Class name</Label>
            <Input id="teacher-class" value={className} onChange={(event) => setClassName(event.target.value)} placeholder="Class name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teacher-due">Due date</Label>
            <Input id="teacher-due" type="date" value={due} onChange={(event) => setDue(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teacher-chapter">Physics chapter</Label>
            <select
              id="teacher-chapter"
              className="h-11 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={chapterSlug}
              onChange={(event) => setChapterSlug(event.target.value)}
            >
              {chapters.map(([slug, title]) => (
                <option key={slug} value={slug}>{title}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="teacher-lesson">Lesson</Label>
            <select
              id="teacher-lesson"
              className="h-11 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={lessonSlug}
              onChange={(event) => setLessonSlug(event.target.value)}
            >
              {lessons.map((lesson) => (
                <option key={lesson.slug} value={lesson.slug}>{lesson.title}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2 sm:flex-row">
            <Button onClick={createAssignment} className="w-full sm:w-auto">Create assignment</Button>
            <Button variant="outline" onClick={exportCsv} disabled={!assignments.length} className="w-full sm:w-auto">
              <Download aria-hidden="true" /> Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      <section aria-labelledby="assignment-list-heading">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id="assignment-list-heading" className="text-xl font-bold tracking-tight">Assignments</h2>
          <span className="text-sm text-muted-foreground">{assignments.length} saved</span>
        </div>
        {assignments.length > 0 ? (
          <div className="grid gap-3">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="shadow-sm">
                <CardContent className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                  <div className="min-w-0">
                    <p className="font-semibold leading-6">{assignment.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{assignment.className}</p>
                    {assignment.due ? (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="size-3.5" aria-hidden="true" /> Due {assignment.due}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="min-w-0 flex-1 sm:flex-none">
                      <Link href={`/subjects/physics/${assignment.chapterSlug}/${assignment.lessonSlug}`}>
                        <ExternalLink aria-hidden="true" /> Open
                      </Link>
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete assignment ${assignment.title}`}
                      onClick={() => removeAssignment(assignment.id)}
                    >
                      <Trash2 aria-hidden="true" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <GraduationCap className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />
            <p className="mt-3 font-semibold">No assignments yet</p>
            <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-muted-foreground">
              Select a chapter and lesson above to create your first class assignment.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
