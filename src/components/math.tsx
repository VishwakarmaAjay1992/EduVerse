import katex from "katex";
import "katex/dist/katex.min.css";

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
