"use client";
import { useEffect,useState } from "react";
import { Heart,CheckCircle2,RotateCcw } from "lucide-react";
import type { Phenomenon } from "@/data/phenomena";
import { Button } from "@/components/ui/button";
export function PhenomenonTools({phenomenon}:{phenomenon:Phenomenon}){
 const [fav,setFav]=useState(false),[done,setDone]=useState(false),[answers,setAnswers]=useState<Record<number,string>>({}),[submitted,setSubmitted]=useState(false);
 useEffect(()=>{setFav(localStorage.getItem(`phen-fav-${phenomenon.slug}`)==="1");setDone(localStorage.getItem(`phen-done-${phenomenon.slug}`)==="1")},[phenomenon.slug]);
 const toggle=(kind:"fav"|"done")=>{if(kind==="fav"){const n=!fav;setFav(n);localStorage.setItem(`phen-fav-${phenomenon.slug}`,n?"1":"0")}else{const n=!done;setDone(n);localStorage.setItem(`phen-done-${phenomenon.slug}`,n?"1":"0")}};
 const score=phenomenon.quiz.filter((q,i)=>answers[i]===q.answer).length;
 return <div className="space-y-10">
  <div className="flex flex-wrap gap-3"><Button variant={fav?"default":"outline"} onClick={()=>toggle("fav")}><Heart className={fav?"fill-current":""}/> {fav?"Saved":"Save favourite"}</Button><Button variant={done?"default":"outline"} onClick={()=>toggle("done")}><CheckCircle2/> {done?"Completed":"Mark complete"}</Button></div>
  <section id="knowledge-check"><h2 className="text-2xl font-bold">Quick knowledge check</h2><p className="mt-2 text-muted-foreground">Answer all five questions, submit, then review the explanations.</p><div className="mt-6 space-y-5">{phenomenon.quiz.map((q,i)=><fieldset key={q.question} className="rounded-xl border p-5"><legend className="px-2 font-semibold">{i+1}. {q.question}</legend><div className="mt-3 grid gap-2">{q.options.map(o=><label key={o} className="flex cursor-pointer gap-3 rounded-lg border p-3 text-sm hover:bg-muted/50"><input type="radio" name={`q-${i}`} checked={answers[i]===o} onChange={()=>setAnswers(a=>({...a,[i]:o}))}/><span>{o}</span></label>)}</div>{submitted&&<div className={`mt-3 rounded-lg p-3 text-sm ${answers[i]===q.answer?"bg-emerald-500/10":"bg-destructive/10"}`}><strong>{answers[i]===q.answer?"Correct":"Correct answer: "+q.answer}</strong><p className="mt-1 text-muted-foreground">{q.explanation}</p></div>}</fieldset>)}</div><div className="mt-5 flex flex-wrap items-center gap-3"><Button onClick={()=>setSubmitted(true)} disabled={Object.keys(answers).length<5}>Check score</Button>{submitted&&<><strong>{score}/5</strong><Button variant="ghost" onClick={()=>{setAnswers({});setSubmitted(false)}}><RotateCcw/> Retry</Button></>}</div></section>
 </div>
}
