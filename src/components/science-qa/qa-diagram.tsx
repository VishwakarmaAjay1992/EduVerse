import type { QaDiagram } from "@/data/science-qa";

/**
 * Renders a colourful, accessible schematic for a QaDiagram: a cycle (loop),
 * process (left-to-right steps), structure (stacked parts) or comparison
 * (side-by-side columns) — followed by a matching colour-keyed legend. Built
 * from plain SVG/CSS so it works for any of the 100 science questions
 * without a bespoke illustration per topic.
 */
const PALETTE = [
  {
    fill: "fill-sky-500/25",
    solid: "fill-sky-500",
    stroke: "stroke-sky-500",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
  },
  {
    fill: "fill-emerald-500/25",
    solid: "fill-emerald-500",
    stroke: "stroke-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  {
    fill: "fill-amber-500/25",
    solid: "fill-amber-500",
    stroke: "stroke-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  {
    fill: "fill-rose-500/25",
    solid: "fill-rose-500",
    stroke: "stroke-rose-500",
    text: "text-rose-600 dark:text-rose-400",
    dot: "bg-rose-500",
  },
  {
    fill: "fill-violet-500/25",
    solid: "fill-violet-500",
    stroke: "stroke-violet-500",
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
  },
  {
    fill: "fill-orange-500/25",
    solid: "fill-orange-500",
    stroke: "stroke-orange-500",
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-500",
  },
];

export function QaDiagramView({ diagram }: { diagram: QaDiagram }) {
  const n = diagram.labels.length;
  return (
    <figure className="rounded-lg border bg-gradient-to-br from-muted/40 to-muted/10 p-4">
      <figcaption className="mb-3 text-sm font-semibold">{diagram.title}</figcaption>
      <p className="mb-3 text-xs text-muted-foreground">{diagram.description}</p>
      {diagram.type === "cycle" && <CycleArt count={n} />}
      {diagram.type === "process" && <ProcessArt count={n} />}
      {diagram.type === "structure" && <StructureArt count={n} />}
      {diagram.type === "comparison" && <ComparisonArt count={n} />}
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {diagram.labels.map((l, i) => {
          const c = PALETTE[i % PALETTE.length]!;
          return (
            <li
              key={i}
              className="flex items-start gap-2 rounded-md border bg-background p-2 text-xs"
            >
              <span
                className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${c.dot}`}
              >
                {i + 1}
              </span>
              <span>
                <strong className={c.text}>{l.label}:</strong>{" "}
                <span className="text-muted-foreground">{l.explanation}</span>
              </span>
            </li>
          );
        })}
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
      className="mx-auto h-44 w-full max-w-xs"
      role="img"
      aria-label={`A cycle diagram with ${count} connected stages arranged in a loop, each shown in a different colour.`}
    >
      <circle
        cx={w / 2}
        cy={h / 2}
        r={r}
        className="fill-none stroke-muted-foreground/25"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {pts.map((p, i) => {
        const next = pts[(i + 1) % pts.length]!;
        const c = PALETTE[i % PALETTE.length]!;
        return (
          <line
            key={`arrow-${i}`}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            className={`${c.stroke} opacity-40`}
            strokeWidth="2"
          />
        );
      })}
      {pts.map((p, i) => {
        const c = PALETTE[i % PALETTE.length]!;
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={16} className={`${c.fill} ${c.stroke}`} strokeWidth="2" />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              className="fill-foreground text-[12px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ProcessArt({ count }: { count: number }) {
  const w = 62 * count + 20;
  const h = 90;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-24 w-full"
      role="img"
      aria-label={`A process diagram with ${count} sequential, colour-coded steps.`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const x = 20 + i * 62;
        const c = PALETTE[i % PALETTE.length]!;
        return (
          <g key={i}>
            <rect
              x={x}
              y={28}
              width={42}
              height={34}
              rx={8}
              className={`${c.fill} ${c.stroke}`}
              strokeWidth="2"
            />
            <text
              x={x + 21}
              y={49}
              textAnchor="middle"
              className="fill-foreground text-[12px] font-bold"
            >
              {i + 1}
            </text>
            {i < count - 1 && (
              <line
                x1={x + 42}
                y1={45}
                x2={x + 62}
                y2={45}
                className={c.stroke}
                strokeWidth="2"
                markerEnd={`url(#qa-arrow-${i})`}
              />
            )}
          </g>
        );
      })}
      <defs>
        {Array.from({ length: Math.max(0, count - 1) }).map((_, i) => {
          const c = PALETTE[i % PALETTE.length]!;
          return (
            <marker
              key={i}
              id={`qa-arrow-${i}`}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" className={c.solid} />
            </marker>
          );
        })}
      </defs>
    </svg>
  );
}

function StructureArt({ count }: { count: number }) {
  const w = 240;
  const rowH = 34;
  const h = rowH * count + 16;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-44 w-full max-w-xs"
      role="img"
      aria-label={`A structure diagram with ${count} colour-coded labelled parts.`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const c = PALETTE[i % PALETTE.length]!;
        return (
          <g key={i}>
            <rect
              x={10}
              y={8 + i * rowH}
              width={w - 20}
              height={rowH - 8}
              rx={6}
              className={`${c.fill} ${c.stroke}`}
              strokeWidth="2"
            />
            <circle cx={26} cy={8 + i * rowH + (rowH - 8) / 2} r={9} className={c.solid} />
            <text
              x={26}
              y={8 + i * rowH + (rowH - 8) / 2 + 4}
              textAnchor="middle"
              className="fill-white text-[10px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ComparisonArt({ count }: { count: number }) {
  const colW = 74;
  const w = colW * count + 20;
  const h = 100;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mx-auto h-28 w-full"
      role="img"
      aria-label={`A comparison diagram with ${count} colour-coded, side-by-side items.`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const x = 10 + i * colW;
        const c = PALETTE[i % PALETTE.length]!;
        return (
          <g key={i}>
            <rect
              x={x}
              y={12}
              width={colW - 16}
              height={76}
              rx={10}
              className={`${c.fill} ${c.stroke}`}
              strokeWidth="2"
            />
            <circle cx={x + (colW - 16) / 2} cy={38} r={14} className={c.solid} />
            <text
              x={x + (colW - 16) / 2}
              y={43}
              textAnchor="middle"
              className="fill-white text-[14px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
