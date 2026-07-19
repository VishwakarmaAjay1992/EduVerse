import type { QaDiagram } from "@/data/science-qa";

/**
 * Renders a simple, accessible schematic for a QaDiagram: a cycle (loop),
 * process (left-to-right steps), structure (stacked parts) or comparison
 * (side-by-side columns) — followed by a labelled key. Built from plain
 * SVG/CSS so it works for any of the 100 science questions without a
 * bespoke illustration per topic.
 */
export function QaDiagramView({ diagram }: { diagram: QaDiagram }) {
  const n = diagram.labels.length;
  return (
    <figure className="rounded-lg border bg-muted/30 p-4">
      <figcaption className="mb-3 text-sm font-semibold">{diagram.title}</figcaption>
      <p className="mb-3 text-xs text-muted-foreground">{diagram.description}</p>
      {diagram.type === "cycle" && <CycleArt count={n} />}
      {diagram.type === "process" && <ProcessArt count={n} />}
      {diagram.type === "structure" && <StructureArt count={n} />}
      {diagram.type === "comparison" && <ComparisonArt count={n} />}
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {diagram.labels.map((l, i) => (
          <li key={i} className="rounded-md border bg-background p-2 text-xs">
            <span className="mr-1.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            <strong className="text-foreground">{l.label}:</strong>{" "}
            <span className="text-muted-foreground">{l.explanation}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function nodePositions(count: number, w: number, h: number, radius: number) {
  const cx = w / 2;
  const cy = h / 2;
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });
}

function CycleArt({ count }: { count: number }) {
  const w = 260;
  const h = 200;
  const r = 72;
  const pts = nodePositions(count, w, h, r);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-40 w-full max-w-xs"
      role="img"
      aria-label={`A cycle diagram with ${count} connected stages arranged in a loop.`}
    >
      <circle
        cx={w / 2}
        cy={h / 2}
        r={r}
        className="fill-none stroke-primary/25"
        strokeWidth="1.5"
      />
      {pts.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r={14}
            className="fill-primary/20 stroke-primary"
            strokeWidth="1.5"
          />
          <text
            x={p.x}
            y={p.y + 4}
            textAnchor="middle"
            className="fill-foreground text-[11px] font-semibold"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ProcessArt({ count }: { count: number }) {
  const w = 60 * count + 20;
  const h = 90;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-24 w-full"
      role="img"
      aria-label={`A process diagram with ${count} sequential steps.`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const x = 20 + i * 60;
        return (
          <g key={i}>
            <rect
              x={x}
              y={30}
              width={40}
              height={30}
              rx={6}
              className="fill-primary/20 stroke-primary"
              strokeWidth="1.5"
            />
            <text
              x={x + 20}
              y={50}
              textAnchor="middle"
              className="fill-foreground text-[11px] font-semibold"
            >
              {i + 1}
            </text>
            {i < count - 1 && (
              <line
                x1={x + 40}
                y1={45}
                x2={x + 60}
                y2={45}
                className="stroke-primary"
                strokeWidth="1.5"
                markerEnd="url(#qa-arrow)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="qa-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-primary" />
        </marker>
      </defs>
    </svg>
  );
}

function StructureArt({ count }: { count: number }) {
  const w = 240;
  const rowH = 32;
  const h = rowH * count + 20;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-40 w-full max-w-xs"
      role="img"
      aria-label={`A structure diagram with ${count} labelled parts.`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <g key={i}>
          <rect
            x={10}
            y={10 + i * rowH}
            width={w - 20}
            height={rowH - 8}
            rx={5}
            className="fill-primary/15 stroke-primary"
            strokeWidth="1.5"
          />
          <text
            x={20}
            y={10 + i * rowH + (rowH - 8) / 2 + 4}
            className="fill-foreground text-[11px] font-semibold"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ComparisonArt({ count }: { count: number }) {
  const colW = 70;
  const w = colW * count + 20;
  const h = 100;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-24 w-full"
      role="img"
      aria-label={`A comparison diagram with ${count} side-by-side items.`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const x = 10 + i * colW;
        return (
          <g key={i}>
            <rect
              x={x}
              y={15}
              width={colW - 15}
              height={70}
              rx={6}
              className="fill-primary/15 stroke-primary"
              strokeWidth="1.5"
            />
            <text
              x={x + (colW - 15) / 2}
              y={54}
              textAnchor="middle"
              className="fill-foreground text-[13px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
