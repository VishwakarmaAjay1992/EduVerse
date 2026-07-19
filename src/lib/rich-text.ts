/**
 * Strip $...$ math delimiters down to their plain LaTeX source. Used in
 * contexts where only plain text is possible — native <option> elements,
 * aria-labels, and navigation link text — where full KaTeX rendering isn't
 * available. This has no React or CSS dependencies so it is safe to import
 * from plain .ts data/utility files as well as components.
 */
export function plainMath(text: string): string {
  return text.replace(/\$([^$]+)\$/g, (_match, latex: string) => latex);
}
