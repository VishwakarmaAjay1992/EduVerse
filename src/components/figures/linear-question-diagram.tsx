import type { CoordinateLine, QuestionBankDiagram } from "@/data/linear-equations-question-bank";

function lineSegment(
  line: CoordinateLine,
  xRange: [number, number],
  yRange: [number, number]
): [[number, number], [number, number]] | null {
  const [xmin, xmax] = xRange;
  const [ymin, ymax] = yRange;
  const points: [number, number][] = [];
  const add = (x: number, y: number) => {
    if (
      Number.isFinite(x) &&
      Number.isFinite(y) &&
      x >= xmin - 1e-9 &&
      x <= xmax + 1e-9 &&
      y >= ymin - 1e-9 &&
      y <= ymax + 1e-9 &&
      !points.some(([px, py]) => Math.abs(px - x) < 1e-7 && Math.abs(py - y) < 1e-7)
    ) {
      points.push([x, y]);
    }
  };

  if (Math.abs(line.b) > 1e-10) {
    add(xmin, (line.c - line.a * xmin) / line.b);
    add(xmax, (line.c - line.a * xmax) / line.b);
  }
  if (Math.abs(line.a) > 1e-10) {
    add((line.c - line.b * ymin) / line.a, ymin);
    add((line.c - line.b * ymax) / line.a, ymax);
  }

  return points.length >= 2 ? [points[0], points[1]] : null;
}

function CoordinateGraph({ diagram }: { diagram: Extract<QuestionBankDiagram, { kind: "coordinate-graph" }> }) {
  const xRange = diagram.xRange ?? [-10, 10];
  const yRange = diagram.yRange ?? [-10, 10];
  const width = 520;
  const height = 360;
  const margin = 46;
  const plotW = width - margin * 2;
  const plotH = height - margin * 2;
  const sx = (x: number) => margin + ((x - xRange[0]) / (xRange[1] - xRange[0])) * plotW;
  const sy = (y: number) => height - margin - ((y - yRange[0]) / (yRange[1] - yRange[0])) * plotH;
  const xTicks = Array.from({ length: Math.min(13, Math.floor(xRange[1] - xRange[0]) + 1) }, (_, i) => {
    const count = Math.min(12, Math.max(2, Math.floor(xRange[1] - xRange[0])));
    return xRange[0] + ((xRange[1] - xRange[0]) * i) / count;
  });
  const yTicks = Array.from({ length: Math.min(11, Math.floor(yRange[1] - yRange[0]) + 1) }, (_, i) => {
    const count = Math.min(10, Math.max(2, Math.floor(yRange[1] - yRange[0])));
    return yRange[0] + ((yRange[1] - yRange[0]) * i) / count;
  });

  return (
    <figure className="my-4 overflow-hidden rounded-lg border bg-background p-3">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={diagram.caption ?? "Coordinate graph"}>
        <rect x={margin} y={margin} width={plotW} height={plotH} fill="none" stroke="currentColor" opacity="0.15" />
        {xTicks.map((x) => (
          <g key={`x-${x}`}>
            <line x1={sx(x)} x2={sx(x)} y1={margin} y2={height - margin} stroke="currentColor" opacity="0.08" />
            <text x={sx(x)} y={height - margin + 20} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
              {Number(x.toFixed(1))}
            </text>
          </g>
        ))}
        {yTicks.map((y) => (
          <g key={`y-${y}`}>
            <line x1={margin} x2={width - margin} y1={sy(y)} y2={sy(y)} stroke="currentColor" opacity="0.08" />
            <text x={margin - 8} y={sy(y) + 3} textAnchor="end" fontSize="10" fill="currentColor" opacity="0.7">
              {Number(y.toFixed(1))}
            </text>
          </g>
        ))}
        {xRange[0] <= 0 && xRange[1] >= 0 && (
          <line x1={sx(0)} x2={sx(0)} y1={margin} y2={height - margin} stroke="currentColor" opacity="0.55" />
        )}
        {yRange[0] <= 0 && yRange[1] >= 0 && (
          <line x1={margin} x2={width - margin} y1={sy(0)} y2={sy(0)} stroke="currentColor" opacity="0.55" />
        )}
        {diagram.polygon && diagram.polygon.length >= 3 && (
          <polygon
            points={diagram.polygon.map((p) => `${sx(p.x)},${sy(p.y)}`).join(" ")}
            fill="currentColor"
            opacity="0.08"
            stroke="currentColor"
            strokeDasharray="5 4"
          />
        )}
        {diagram.lines.map((line, index) => {
          const segment = lineSegment(line, xRange, yRange);
          if (!segment) return null;
          const [[x1, y1], [x2, y2]] = segment;
          const labelX = x1 + (x2 - x1) * (0.62 + (index % 2) * 0.12);
          const labelY = y1 + (y2 - y1) * (0.62 + (index % 2) * 0.12);
          return (
            <g key={`${line.label}-${index}`}>
              <line x1={sx(x1)} y1={sy(y1)} x2={sx(x2)} y2={sy(y2)} stroke="currentColor" strokeWidth="2.2" />
              <rect x={sx(labelX) - 4} y={sy(labelY) - 13} width={Math.max(54, line.label.length * 7)} height="18" rx="3" fill="hsl(var(--background))" opacity="0.9" />
              <text x={sx(labelX)} y={sy(labelY)} fontSize="11" fill="currentColor">
                {line.label}
              </text>
            </g>
          );
        })}
        {diagram.points?.map((point, index) => (
          <g key={`${point.x}-${point.y}-${index}`}>
            <circle cx={sx(point.x)} cy={sy(point.y)} r="4" fill="currentColor" />
            <text x={sx(point.x) + 7} y={sy(point.y) - 7} fontSize="11" fill="currentColor">
              {point.label ?? `(${point.x}, ${point.y})`}
            </text>
          </g>
        ))}
        <text x={width - margin + 12} y={sy(0) - 6} fontSize="12" fill="currentColor">x</text>
        <text x={sx(0) + 7} y={margin - 10} fontSize="12" fill="currentColor">y</text>
      </svg>
      {diagram.caption && <figcaption className="mt-2 text-center text-xs text-muted-foreground">{diagram.caption}</figcaption>}
    </figure>
  );
}

function RectangleDiagram({ diagram }: { diagram: Extract<QuestionBankDiagram, { kind: "rectangle" }> }) {
  return (
    <figure className="my-4 rounded-lg border bg-background p-4">
      <svg viewBox="0 0 520 260" className="h-auto w-full" role="img" aria-label={diagram.caption ?? "Rectangle diagram"}>
        <rect x="105" y="55" width="310" height="145" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="260" y="38" textAnchor="middle" fontSize="20" fill="currentColor">{diagram.top}</text>
        <text x="438" y="132" textAnchor="middle" fontSize="20" fill="currentColor">{diagram.right}</text>
        <text x="260" y="232" textAnchor="middle" fontSize="20" fill="currentColor">{diagram.bottom}</text>
        <text x="76" y="132" textAnchor="middle" fontSize="20" fill="currentColor">{diagram.left}</text>
        <text x="92" y="215" fontSize="15" fill="currentColor">A</text>
        <text x="420" y="215" fontSize="15" fill="currentColor">B</text>
        <text x="420" y="48" fontSize="15" fill="currentColor">C</text>
        <text x="92" y="48" fontSize="15" fill="currentColor">D</text>
      </svg>
      {diagram.caption && <figcaption className="text-center text-xs text-muted-foreground">{diagram.caption}</figcaption>}
    </figure>
  );
}

function HousePentagonDiagram({ diagram }: { diagram: Extract<QuestionBankDiagram, { kind: "house-pentagon" }> }) {
  return (
    <figure className="my-4 rounded-lg border bg-background p-4">
      <svg viewBox="0 0 520 330" className="h-auto w-full" role="img" aria-label={diagram.caption ?? "Pentagonal house diagram"}>
        <path d="M260 35 L420 135 L420 280 L100 280 L100 135 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="100" y1="135" x2="420" y2="135" stroke="currentColor" strokeWidth="2" />
        <text x="178" y="78" textAnchor="middle" fontSize="18" fill="currentColor">{diagram.labels.topLeft}</text>
        <text x="342" y="78" textAnchor="middle" fontSize="18" fill="currentColor">{diagram.labels.topRight}</text>
        <text x="260" y="125" textAnchor="middle" fontSize="18" fill="currentColor">{diagram.labels.middle}</text>
        <text x="70" y="215" textAnchor="middle" fontSize="18" fill="currentColor">{diagram.labels.left}</text>
        <text x="260" y="312" textAnchor="middle" fontSize="18" fill="currentColor">{diagram.labels.bottom}</text>
        <text x="260" y="28" textAnchor="middle" fontSize="15" fill="currentColor">A</text>
        <text x="83" y="132" textAnchor="middle" fontSize="15" fill="currentColor">B</text>
        <text x="83" y="296" textAnchor="middle" fontSize="15" fill="currentColor">C</text>
        <text x="437" y="296" textAnchor="middle" fontSize="15" fill="currentColor">D</text>
        <text x="437" y="132" textAnchor="middle" fontSize="15" fill="currentColor">E</text>
      </svg>
      {diagram.caption && <figcaption className="text-center text-xs text-muted-foreground">{diagram.caption}</figcaption>}
    </figure>
  );
}

export function LinearQuestionDiagram({ diagram }: { diagram: QuestionBankDiagram }) {
  switch (diagram.kind) {
    case "coordinate-graph":
      return <CoordinateGraph diagram={diagram} />;
    case "rectangle":
      return <RectangleDiagram diagram={diagram} />;
    case "house-pentagon":
      return <HousePentagonDiagram diagram={diagram} />;
  }
}
