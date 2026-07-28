"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCcw } from "lucide-react";
import questions from "@/data/physics-question-bank.json";
import { saveMastery } from "@/lib/mastery-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Question = { id:string; chapterSlug:string; prompt:string; options:string[]; answer:number; explanation:string; concept:string };

export function ChapterAssessment({ chapterSlug, chapterTitle }: { chapterSlug:string; chapterTitle:string }) {
  const pool = useMemo(() => (questions as Question[]).filter((q) => q.chapterSlug === chapterSlug).slice(0, 20), [chapterSlug]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const correct = pool.filter((q) => answers[q.id] === q.answer).length;
  const score = pool.length ? Math.round((correct / pool.length) * 100) : 0;
  const passed = score >= 75;

  function submit() {
    setSubmitted(true);
    saveMastery({ chapterSlug, score, passed });
  }

  return <div className="space-y-6">
    <Card><CardHeader><CardTitle>{chapterTitle} mastery assessment</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Answer {pool.length} tagged questions. A score of 75% is required for chapter mastery.</CardContent></Card>
    {pool.map((q, index) => <Card key={q.id}><CardContent className="space-y-3 pt-6">
      <p className="font-medium">{index + 1}. {q.prompt}</p>
      <div className="grid gap-2">{q.options.map((option, i) => <button key={option} disabled={submitted} onClick={() => setAnswers((a) => ({...a,[q.id]:i}))} className={`rounded-md border p-3 text-left text-sm ${answers[q.id] === i ? "border-primary bg-primary/5" : ""}`}>{option}</button>)}</div>
      {submitted && <div className={`rounded-md p-3 text-sm ${answers[q.id] === q.answer ? "bg-emerald-500/10" : "bg-amber-500/10"}`}><strong>{answers[q.id] === q.answer ? "Correct." : `Correct answer: ${q.options[q.answer]}`}</strong> {q.explanation}</div>}
    </CardContent></Card>)}
    {!submitted ? <Button onClick={submit} disabled={Object.keys(answers).length < pool.length}>Submit assessment</Button> : <Card><CardContent className="space-y-4 pt-6"><div className="flex items-center gap-3"><CheckCircle2 className={passed ? "text-emerald-500" : "text-amber-500"}/><div><p className="text-xl font-bold">{score}%</p><p className="text-sm text-muted-foreground">{passed ? "Chapter mastery achieved." : "Review the explanations and try again."}</p></div></div><div className="flex gap-3"><Button variant="outline" onClick={() => {setAnswers({});setSubmitted(false)}}><RotateCcw className="mr-2 size-4"/>Retry</Button><Button asChild><Link href={`/subjects/physics/${chapterSlug}`}>Return to chapter</Link></Button></div></CardContent></Card>}
  </div>;
}
