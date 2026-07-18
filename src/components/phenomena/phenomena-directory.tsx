"use client";
import { useMemo,useState } from "react";
import Link from "next/link";
import { Search,Shuffle,ArrowRight } from "lucide-react";
import { PHENOMENA,PHENOMENON_CATEGORIES } from "@/data/phenomena";
import { PhenomenonArt } from "./phenomenon-art";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export function PhenomenaDirectory(){
 const [q,setQ]=useState(""); const [cat,setCat]=useState("All");
 const list=useMemo(()=>PHENOMENA.filter(p=>(cat==="All"||p.category===cat)&&(`${p.title} ${p.summary} ${p.scientificName}`.toLowerCase().includes(q.toLowerCase()))),[q,cat]);
 const surprise=()=>{const pick=PHENOMENA[Math.floor(Math.random()*PHENOMENA.length)]; if(pick) location.href=`/phenomena/${pick.slug}`};
 return <div>
  <div className="mb-8 flex flex-col gap-4 rounded-2xl border bg-card p-4 shadow-sm lg:flex-row lg:items-center">
   <label className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground"/><span className="sr-only">Search phenomena</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search light, clouds, tides…" className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"/></label>
   <select aria-label="Filter by category" value={cat} onChange={e=>setCat(e.target.value)} className="h-10 rounded-md border bg-background px-3 text-sm"><option>All</option>{PHENOMENON_CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
   <Button type="button" variant="outline" onClick={surprise}><Shuffle/> Surprise me</Button>
  </div>
  <p className="mb-5 text-sm text-muted-foreground">Showing {list.length} of {PHENOMENA.length} phenomena</p>
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{list.map(p=><article key={p.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><PhenomenonArt category={p.category} index={p.id} title={p.title} className="aspect-[5/3] w-full"/><div className="p-5"><div className="mb-3 flex items-center justify-between gap-2"><Badge variant="outline">#{p.id}</Badge><span className="text-xs text-muted-foreground">{p.readingTime} min · {p.difficulty}</span></div><h2 className="text-xl font-bold tracking-tight">{p.title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{p.summary}</p><p className="mt-3 text-xs font-medium text-primary">{p.category}</p><Button asChild className="mt-5 w-full"><Link href={`/phenomena/${p.slug}`}>Explore phenomenon <ArrowRight/></Link></Button></div></article>)}</div>
 </div>
}
