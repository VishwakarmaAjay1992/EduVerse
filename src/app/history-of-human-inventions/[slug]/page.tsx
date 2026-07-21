import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getInvention, inventions } from "@/data/inventions";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return inventions.map((invention) => ({ slug: invention.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const invention = getInvention(resolvedParams.slug);

  if (!invention) {
    return { title: "Invention Not Found | EduVerse" };
  }

  return {
    title: invention.seoTitle,
    description: invention.metaDescription,
    keywords: invention.keywords,
    alternates: { canonical: `/history-of-human-inventions/${invention.slug}` },
    openGraph: {
      title: invention.seoTitle,
      description: invention.metaDescription,
      type: "article",
    },
  };
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-slate-100 text-slate-900">
            <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-bold">{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-slate-700">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
          <span className="mr-2 font-bold text-cyan-700">{index + 1}.</span>{item}
        </li>
      ))}
    </ol>
  );
}

export default async function InventionArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const invention = getInvention(resolvedParams.slug);

  if (!invention) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Link href="/history-of-human-inventions" className="text-sm font-semibold text-cyan-300 hover:text-cyan-100">← History of Human Inventions</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">History of Human Inventions</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight sm:text-6xl">{invention.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">{invention.subtitle}</p>
          <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 text-lg leading-8 text-cyan-50">
            {invention.heroSummary}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <nav className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Article Sections</h2>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {invention.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="text-cyan-700 hover:text-cyan-900">{section.title}</a>)}
            <a href="#timeline" className="text-cyan-700 hover:text-cyan-900">4. Timeline of Development</a>
            <a href="#contributors" className="text-cyan-700 hover:text-cyan-900">5. Inventors and Contributors</a>
            <a href="#generations" className="text-cyan-700 hover:text-cyan-900">8. Evolution Through History</a>
            <a href="#milestones" className="text-cyan-700 hover:text-cyan-900">9. Major Milestones</a>
            <a href="#models" className="text-cyan-700 hover:text-cyan-900">12. Famous Models</a>
            <a href="#decades" className="text-cyan-700 hover:text-cyan-900">15. Evolution Timeline</a>
            <a href="#facts" className="text-cyan-700 hover:text-cyan-900">18. Interesting Facts</a>
            <a href="#myths" className="text-cyan-700 hover:text-cyan-900">19. Common Myths</a>
            <a href="#faq" className="text-cyan-700 hover:text-cyan-900">20. FAQs</a>
            <a href="#did-you-know" className="text-cyan-700 hover:text-cyan-900">21. Did You Know?</a>
            <a href="#quotes" className="text-cyan-700 hover:text-cyan-900">22. Quotes</a>
            <a href="#references" className="text-cyan-700 hover:text-cyan-900">23. References</a>
            <a href="#seo" className="text-cyan-700 hover:text-cyan-900">24. SEO Metadata</a>
            <a href="#images" className="text-cyan-700 hover:text-cyan-900">25. Image Suggestions</a>
            <a href="#interactive" className="text-cyan-700 hover:text-cyan-900">26. Interactive Ideas</a>
          </div>
        </nav>

        {invention.sections.slice(0, 3).map((section) => (
          <section id={section.id} key={section.id} className="scroll-mt-24 py-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">{section.title}</h2>
            <div className="mt-5 space-y-5 text-lg leading-9 text-slate-700">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}

        <section id="timeline" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">4. Timeline of Development</h2>
          <DataTable headers={["Year", "Event"]} rows={invention.timeline.map((item) => [item.year, item.event])} />
        </section>

        <section id="contributors" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">5. Inventors and Contributors</h2>
          <div className="mt-6 grid gap-6">
            {invention.contributors.map((person) => (
              <div key={person.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-cyan-700">{person.years} • {person.nationality}</p>
                <dl className="mt-5 grid gap-4 text-sm leading-6 text-slate-700 md:grid-cols-2">
                  <div><dt className="font-bold text-slate-950">Biography</dt><dd>{person.biography}</dd></div>
                  <div><dt className="font-bold text-slate-950">Education</dt><dd>{person.education}</dd></div>
                  <div><dt className="font-bold text-slate-950">Major achievements</dt><dd>{person.achievements.join(", ")}</dd></div>
                  <div><dt className="font-bold text-slate-950">Role in the invention</dt><dd>{person.role}</dd></div>
                  <div className="md:col-span-2"><dt className="font-bold text-slate-950">Interesting fact</dt><dd>{person.interestingFact}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        {invention.sections.slice(3).map((section) => (
          <section id={section.id} key={section.id} className="scroll-mt-24 py-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">{section.title}</h2>
            <div className="mt-5 space-y-5 text-lg leading-9 text-slate-700">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}

        <section id="generations" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">8. Evolution Through History</h2>
          <DataTable headers={["Generation", "Technology", "Improvements", "Advantages", "Disadvantages", "Famous products", "Companies involved"]} rows={invention.generations.map((g) => [g.title, g.technology, g.improvements, g.advantages, g.disadvantages, g.famousProducts, g.companies])} />
        </section>

        <section id="milestones" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">9. Major Milestones</h2>
          <DataTable headers={["Year", "Milestone"]} rows={invention.milestones.map((m) => [m.year, m.milestone])} />
        </section>

        <section id="models" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">12. Famous Models</h2>
          <DataTable headers={["Model", "Company", "Year", "Features"]} rows={invention.models.map((m) => [m.model, m.company, m.year, m.features])} />
        </section>

        <section id="decades" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">15. Evolution Timeline</h2>
          <DataTable headers={["Decade", "Development"]} rows={invention.decadeTimeline.map((d) => [d.decade, d.development])} />
        </section>

        <section id="facts" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">18. Interesting Facts</h2>
          <NumberedList items={invention.interestingFacts} />
        </section>

        <section id="myths" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">19. Common Myths</h2>
          <div className="mt-6 grid gap-4">
            {invention.myths.map((myth) => (
              <div key={myth.myth} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-950">Myth: {myth.myth}</h3>
                <p className="mt-2 leading-7 text-slate-700"><strong>Reality:</strong> {myth.reality}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">20. Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4">
            {invention.faqs.map((faq, index) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-bold text-slate-950">{index + 1}. {faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="did-you-know" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">21. Did You Know?</h2>
          <NumberedList items={invention.didYouKnow} />
        </section>

        <section id="quotes" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">22. Quotes</h2>
          <div className="mt-6 grid gap-4">
            {invention.quotes.map((quote) => (
              <figure key={quote.quote} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-xl font-semibold leading-8 text-slate-950">“{quote.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-600">— {quote.attribution}{quote.note ? ` (${quote.note})` : ""}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="references" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">23. References</h2>
          <ul className="mt-6 space-y-3 rounded-3xl border border-slate-200 bg-white p-6 leading-7 text-slate-700 shadow-sm">
            {invention.references.map((reference) => <li key={reference}>• {reference}</li>)}
          </ul>
        </section>

        <section id="seo" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">24. SEO Metadata</h2>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 leading-8 text-slate-700 shadow-sm">
            <p><strong>SEO Title:</strong> {invention.seoTitle}</p>
            <p><strong>Meta Description:</strong> {invention.metaDescription}</p>
            <p><strong>URL Slug:</strong> history-of-human-inventions/{invention.slug}</p>
            <p><strong>Keywords:</strong> {invention.keywords.join(", ")}</p>
          </div>
        </section>

        <section id="images" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">25. Image Suggestions</h2>
          <DataTable headers={["Illustration type", "Suggestion"]} rows={invention.imageSuggestions.map((i) => [i.type, i.suggestion])} />
        </section>

        <section id="interactive" className="scroll-mt-24 py-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">26. Interactive Ideas for EduVerse</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {invention.interactiveIdeas.map((idea) => (
              <div key={idea.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{idea.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{idea.description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      </main>
    </>
  );
}
