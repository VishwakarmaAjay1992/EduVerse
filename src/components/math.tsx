import katex from "katex";
import "katex/dist/katex.min.css";
import { Fragment, type ReactNode } from "react";

export { plainMath } from "@/lib/rich-text";

/** Inline math, e.g. within a sentence. */
export function InlineMath({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, { throwOnError: false, displayMode: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Display math, centred on its own line. */
export function BlockMath({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, { throwOnError: false, displayMode: true });
  return (
    <div
      className="my-1 overflow-x-auto py-1 text-center"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Render plain text that may contain inline $...$ math spans, converting
 * each span into KaTeX and leaving the surrounding text untouched. This is
 * the single shared implementation used across lesson content, practice
 * questions, graded quizzes, flashcards and any other component that
 * displays author-written strings which may contain LaTeX.
 */
export function richText(text: string): ReactNode {
  const parts = text.split(/\$([^$]+)\$/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <InlineMath key={i} latex={part} /> : <Fragment key={i}>{part}</Fragment>
  );
}
