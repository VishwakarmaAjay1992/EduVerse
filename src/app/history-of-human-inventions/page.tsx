import Link from "next/link";
import { inventions } from "@/data/inventions";

export const metadata = {
  title: "History of Human Inventions | EduVerse",
  description: "Explore the inventions that changed civilization through detailed timelines, inventors, science, engineering, and impact.",
};

export default function HumanInventionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">EduVerse Learning Hub</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">History of Human Inventions</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A complete educational section about the tools, machines, and ideas that changed human civilization. Each article follows a consistent structure for students, teachers, and curious learners.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inventions.map((invention) => (
            <Link
              href={`/history-of-human-inventions/${invention.slug}`}
              key={invention.slug}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-medium text-cyan-300">Featured invention</p>
              <h2 className="mt-3 text-2xl font-bold text-white group-hover:text-cyan-200">{invention.title}</h2>
              <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-300">{invention.heroSummary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-cyan-200">Read full article →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
