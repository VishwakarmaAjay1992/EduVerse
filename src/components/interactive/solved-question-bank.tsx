"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Eye,
  Filter,
  RefreshCw,
  RotateCcw,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { LinearQuestionDiagram } from "@/components/figures/linear-question-diagram";
import { richText } from "@/components/math";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { linearEquationQuestionBank } from "@/data/linear-equations-question-bank";
import type {
  LinearEquationQuestion,
  QuestionBankMarks,
  QuestionBankType,
} from "@/data/linear-equations-question-bank";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 10;
const STORAGE_PREFIX = "eduverse-linear-question-bank";

type ViewMode = "browse" | "random" | "bookmarked" | "review";

type StoredState = {
  bookmarks: number[];
  completed: number[];
  review: number[];
};

const typeLabels: Record<QuestionBankType, string> = {
  "multiple-choice": "Multiple choice",
  "assertion-reason": "Assertion-reason",
  "fill-in-the-blank": "Fill in the blank",
  "very-short-answer": "Very short answer",
  "short-answer": "Short answer",
  "long-answer": "Long answer",
};

function readStoredState(lessonId: string): StoredState {
  if (typeof window === "undefined") return { bookmarks: [], completed: [], review: [] };
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}:${lessonId}`);
    if (!raw) return { bookmarks: [], completed: [], review: [] };
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    return {
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      review: Array.isArray(parsed.review) ? parsed.review : [],
    };
  } catch {
    return { bookmarks: [], completed: [], review: [] };
  }
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const currentItem = copy[i];
    const randomItem = copy[j];
    if (currentItem === undefined || randomItem === undefined) continue;
    copy[i] = randomItem;
    copy[j] = currentItem;
  }
  return copy;
}

function toggleInSet(setter: Dispatch<SetStateAction<Set<number>>>, id: number) {
  setter((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
}

function QuestionCard({
  question,
  bookmarked,
  completed,
  needsReview,
  onToggleBookmark,
  onMarkComplete,
  onMarkReview,
}: {
  question: LinearEquationQuestion;
  bookmarked: boolean;
  completed: boolean;
  needsReview: boolean;
  onToggleBookmark: () => void;
  onMarkComplete: () => void;
  onMarkReview: () => void;
}) {
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const correctIndex = question.options?.findIndex((option) => option === question.answer) ?? -1;

  const checkMultipleChoice = () => {
    if (selectedOption === null) return;
    setChecked(true);
    if (selectedOption === correctIndex) onMarkComplete();
    else onMarkReview();
  };

  return (
    <Card id={`question-${question.id}`} className="scroll-mt-24 overflow-hidden">
      <CardHeader className="border-b bg-muted/25 pb-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">Question {question.id}</CardTitle>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>{question.marks} mark{question.marks === 1 ? "" : "s"}</Badge>
              <Badge variant="secondary">{typeLabels[question.type]}</Badge>
              <Badge variant="outline">{question.difficulty}</Badge>
              {question.source && <Badge variant="outline">{question.source}</Badge>}
              <Badge variant="outline">PDF p. {question.page}</Badge>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onToggleBookmark}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark question"}
            title={bookmarked ? "Remove bookmark" : "Bookmark question"}
          >
            {bookmarked ? <BookmarkCheck /> : <Bookmark />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-6">
        <div className="space-y-3 text-[15px] leading-7">
          {question.prompt.split("\n").map((line, index) => (
            <p key={index}>{richText(line)}</p>
          ))}
        </div>

        {question.diagram && <LinearQuestionDiagram diagram={question.diagram} />}

        {question.options ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = checked && index === correctIndex;
              const isWrong = checked && isSelected && index !== correctIndex;
              return (
                <button
                  key={option}
                  type="button"
                  disabled={checked}
                  onClick={() => setSelectedOption(index)}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-left text-sm transition",
                    isSelected && !checked && "border-primary bg-primary/5",
                    isCorrect && "border-emerald-500 bg-emerald-500/10",
                    isWrong && "border-destructive bg-destructive/10",
                    !checked && "hover:bg-muted/50"
                  )}
                >
                  <span className="mr-2 font-semibold">{String.fromCharCode(65 + index)}.</span>
                  {richText(option)}
                </button>
              );
            })}
            <div className="sm:col-span-2">
              <Button type="button" onClick={checkMultipleChoice} disabled={selectedOption === null || checked}>
                <Check /> Check answer
              </Button>
              {checked && (
                <p className={cn("mt-2 text-sm font-medium", selectedOption === correctIndex ? "text-emerald-600" : "text-destructive")}>
                  {selectedOption === correctIndex ? "Correct." : "Not correct yet. Review the worked solution below."}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed bg-muted/20 p-4">
            <p className="text-sm font-medium">Try it before opening the solution</p>
            <textarea
              className="mt-3 min-h-28 w-full resize-y rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Write your working or final answer here. It stays only on this page and is not submitted."
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant={showSolution ? "secondary" : "default"} onClick={() => setShowSolution((value) => !value)}>
            <Eye /> {showSolution ? "Hide complete solution" : "Show complete solution"}
          </Button>
          <Button type="button" variant={completed ? "secondary" : "outline"} onClick={onMarkComplete}>
            <Check /> {completed ? "Completed" : "Mark completed"}
          </Button>
          <Button type="button" variant={needsReview ? "secondary" : "outline"} onClick={onMarkReview}>
            <CircleAlert /> {needsReview ? "Marked for review" : "Needs review"}
          </Button>
        </div>

        {showSolution && (
          <div className="space-y-4 rounded-xl border bg-muted/25 p-5">
            <div>
              <p className="font-semibold">Complete worked solution — clean typed version</p>
              <ol className="mt-3 ml-5 list-decimal space-y-2 text-sm text-muted-foreground">
                {question.solution.map((step, index) => (
                  <li key={index} className="leading-7">
                    {richText(step)}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg border bg-background px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Final answer</p>
              <p className="mt-1 font-medium leading-7">{richText(question.answer)}</p>
            </div>
            {question.note && (
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm leading-6">
                <strong>EduVerse note:</strong> {richText(question.note)}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 border-t pt-4">
          {question.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SolvedQuestionBank({ lessonId }: { lessonId: string }) {
  const [mode, setMode] = useState<ViewMode>("browse");
  const [query, setQuery] = useState("");
  const [marks, setMarks] = useState<"all" | QuestionBankMarks>("all");
  const [type, setType] = useState<"all" | QuestionBankType>("all");
  const [tag, setTag] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [page, setPage] = useState(1);
  const [randomIds, setRandomIds] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [review, setReview] = useState<Set<number>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredState(lessonId);
    setBookmarks(new Set(stored.bookmarks));
    setCompleted(new Set(stored.completed));
    setReview(new Set(stored.review));
    setHydrated(true);
  }, [lessonId]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      `${STORAGE_PREFIX}:${lessonId}`,
      JSON.stringify({
        bookmarks: [...bookmarks],
        completed: [...completed],
        review: [...review],
      } satisfies StoredState)
    );
  }, [bookmarks, completed, hydrated, lessonId, review]);

  const allTags = useMemo(
    () => [...new Set(linearEquationQuestionBank.flatMap((question) => question.tags))].sort(),
    []
  );

  const createRandomSet = () => {
    const byMarks = [1, 2, 3, 4].flatMap((mark) =>
      shuffle(linearEquationQuestionBank.filter((question) => question.marks === mark)).slice(
        0,
        mark === 1 ? 4 : mark === 2 ? 3 : mark === 3 ? 2 : 1
      )
    );
    setRandomIds(shuffle(byMarks).map((question) => question.id));
    setMode("random");
    setPage(1);
  };

  const filtered = useMemo(() => {
    let questions = linearEquationQuestionBank;
    if (mode === "random") {
      const byId = new Map(questions.map((question) => [question.id, question]));
      questions = randomIds.flatMap((id) => {
        const question = byId.get(id);
        return question ? [question] : [];
      });
    } else if (mode === "bookmarked") {
      questions = questions.filter((question) => bookmarks.has(question.id));
    } else if (mode === "review") {
      questions = questions.filter((question) => review.has(question.id));
    }

    const normalized = query.trim().toLowerCase();
    if (normalized) {
      questions = questions.filter(
        (question) =>
          question.id.toString() === normalized.replace(/^q/, "") ||
          question.prompt.toLowerCase().includes(normalized) ||
          question.tags.some((item) => item.toLowerCase().includes(normalized)) ||
          question.source?.toLowerCase().includes(normalized)
      );
    }
    if (marks !== "all") questions = questions.filter((question) => question.marks === marks);
    if (type !== "all") questions = questions.filter((question) => question.type === type);
    if (tag !== "all") questions = questions.filter((question) => question.tags.includes(tag));
    if (difficulty !== "all") questions = questions.filter((question) => question.difficulty === difficulty);
    return questions;
  }, [bookmarks, difficulty, marks, mode, query, randomIds, review, tag, type]);

  useEffect(() => setPage(1), [difficulty, marks, mode, query, tag, type]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleQuestions = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const progressPercent = Math.round((completed.size / 132) * 100);

  const clearFilters = () => {
    setQuery("");
    setMarks("all");
    setType("all");
    setTag("all");
    setDifficulty("all");
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card><CardContent className="pt-6"><p className="text-3xl font-bold">132</p><p className="text-sm text-muted-foreground">Solved questions</p></CardContent></Card>
        <Card><CardContent className="pt-6"><p className="text-3xl font-bold">{completed.size}</p><p className="text-sm text-muted-foreground">Completed</p></CardContent></Card>
        <Card><CardContent className="pt-6"><p className="text-3xl font-bold">{bookmarks.size}</p><p className="text-sm text-muted-foreground">Bookmarked</p></CardContent></Card>
        <Card><CardContent className="pt-6"><p className="text-3xl font-bold">{review.size}</p><p className="text-sm text-muted-foreground">Needs review</p></CardContent></Card>
      </div>

      <div className="rounded-xl border bg-muted/25 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Question-bank progress</p>
            <p className="text-sm text-muted-foreground">{progressPercent}% complete - saved automatically on this device.</p>
          </div>
          <span className="text-sm font-semibold">{completed.size}/132</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant={mode === "browse" ? "default" : "outline"} onClick={() => setMode("browse")}>
            <Filter /> Browse all
          </Button>
          <Button type="button" variant={mode === "random" ? "default" : "outline"} onClick={createRandomSet}>
            <Sparkles /> {mode === "random" ? "New random set" : "Random 10-question set"}
          </Button>
          <Button type="button" variant={mode === "bookmarked" ? "default" : "outline"} onClick={() => setMode("bookmarked")}>
            <Bookmark /> Bookmarked
          </Button>
          <Button type="button" variant={mode === "review" ? "default" : "outline"} onClick={() => setMode("review")}>
            <CircleAlert /> Review list
          </Button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <label className="relative xl:col-span-2">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-9" placeholder="Search question number, wording, tag or source" />
          </label>
          <select className="h-9 rounded-md border bg-background px-3 text-sm" value={marks} onChange={(event) => setMarks(event.target.value === "all" ? "all" : (Number(event.target.value) as QuestionBankMarks))}>
            <option value="all">All marks</option>
            <option value="1">1 mark</option><option value="2">2 marks</option><option value="3">3 marks</option><option value="4">4 marks</option>
          </select>
          <select className="h-9 rounded-md border bg-background px-3 text-sm" value={type} onChange={(event) => setType(event.target.value as "all" | QuestionBankType)}>
            <option value="all">All question types</option>
            {Object.entries(typeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <select className="h-9 rounded-md border bg-background px-3 text-sm" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="all">All difficulties</option><option>Foundation</option><option>Moderate</option><option>Advanced</option>
          </select>
          <select className="h-9 rounded-md border bg-background px-3 text-sm md:col-span-2 xl:col-span-4" value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="all">All concepts and applications</option>
            {allTags.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <Button type="button" variant="ghost" onClick={clearFilters}><RotateCcw /> Clear filters</Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}-{Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} matching questions
        </p>
        {mode === "random" && <Button type="button" size="sm" variant="outline" onClick={createRandomSet}><RefreshCw /> Generate another set</Button>}
      </div>

      {visibleQuestions.length ? (
        <div className="space-y-5">
          {visibleQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              bookmarked={bookmarks.has(question.id)}
              completed={completed.has(question.id)}
              needsReview={review.has(question.id)}
              onToggleBookmark={() => toggleInSet(setBookmarks, question.id)}
              onMarkComplete={() => {
                setCompleted((current) => new Set(current).add(question.id));
                setReview((current) => { const next = new Set(current); next.delete(question.id); return next; });
              }}
              onMarkReview={() => {
                setReview((current) => new Set(current).add(question.id));
                setCompleted((current) => { const next = new Set(current); next.delete(question.id); return next; });
              }}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <X className="mx-auto size-8 text-muted-foreground" />
          <p className="mt-3 font-semibold">No questions match these filters.</p>
          <p className="mt-1 text-sm text-muted-foreground">Clear one or more filters, or return to Browse all.</p>
        </div>
      )}

      {filtered.length > PAGE_SIZE && (
        <div className="flex items-center justify-center gap-3 border-t pt-5">
          <Button type="button" variant="outline" disabled={currentPage <= 1} onClick={() => { setPage((value) => Math.max(1, value - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <ChevronLeft /> Previous
          </Button>
          <span className="text-sm text-muted-foreground">Page {currentPage} of {totalPages}</span>
          <Button type="button" variant="outline" disabled={currentPage >= totalPages} onClick={() => { setPage((value) => Math.min(totalPages, value + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Next <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
