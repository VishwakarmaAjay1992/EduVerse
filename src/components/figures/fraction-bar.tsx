/** A bar split into equal parts with some shaded, illustrating a fraction. */
export function FractionBar({ parts, shaded }: { parts: number; shaded: number }) {
  const width = 320;
  const height = 52;
  const pad = 2;
  const seg = (width - 2 * pad) / parts;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${shaded} of ${parts} equal parts shaded`}
      className="h-auto w-full max-w-sm"
    >
      {Array.from({ length: parts }).map((_, i) => (
        <rect
          key={i}
          x={pad + i * seg}
          y={pad}
          width={seg}
          height={height - 2 * pad}
          strokeWidth="2"
          className={
            i < shaded ? "fill-primary/80 stroke-background" : "fill-muted stroke-background"
          }
        />
      ))}
    </svg>
  );
}
