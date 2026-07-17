"use client";

import { useMemo, useState } from "react";
import { BarChart3, CheckCircle2, LineChart, PieChart, RotateCcw, Table2 } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

type Mode = "coordinates" | "data";
type ChartMode = "bar" | "line" | "pictogram" | "pie";

interface DataSet {
  name: string;
  label: string;
  unit: string;
  categories: string[];
  values: number[];
  icon: string;
}

const DATA_SETS: DataSet[] = [
  {
    name: "books",
    label: "Books read by a class",
    unit: "books",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    values: [4, 7, 5, 9, 6],
    icon: "📚",
  },
  {
    name: "temperature",
    label: "Afternoon temperature",
    unit: "°C",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    values: [24, 26, 25, 29, 27],
    icon: "🌡️",
  },
  {
    name: "fruit",
    label: "Favourite fruit survey",
    unit: "students",
    categories: ["Apple", "Banana", "Orange", "Grape"],
    values: [8, 6, 4, 2],
    icon: "🍎",
  },
];

function quadrant(x: number, y: number): string {
  if (x === 0 && y === 0) return "the origin";
  if (x === 0) return "the y-axis";
  if (y === 0) return "the x-axis";
  if (x > 0 && y > 0) return "Quadrant I";
  if (x < 0 && y > 0) return "Quadrant II";
  if (x < 0 && y < 0) return "Quadrant III";
  return "Quadrant IV";
}

function CoordinateGrid({ x, y }: { x: number; y: number }) {
  const size = 320;
  const margin = 28;
  const span = size - margin * 2;
  const scale = span / 10;
  const toX = (value: number) => margin + (value + 5) * scale;
  const toY = (value: number) => margin + (5 - value) * scale;
  const ticks = Array.from({ length: 11 }, (_, index) => index - 5);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto w-full max-w-sm rounded-xl border bg-background"
      role="img"
      aria-label={`Coordinate plane with point at ${x}, ${y}`}
    >
      <title>{`Coordinate plane showing the point (${x}, ${y})`}</title>
      {ticks.map((tick) => (
        <g key={tick}>
          <line
            x1={toX(tick)}
            y1={margin}
            x2={toX(tick)}
            y2={size - margin}
            className="stroke-border"
            strokeWidth={tick === 0 ? 0 : 1}
          />
          <line
            x1={margin}
            y1={toY(tick)}
            x2={size - margin}
            y2={toY(tick)}
            className="stroke-border"
            strokeWidth={tick === 0 ? 0 : 1}
          />
        </g>
      ))}
      <line
        x1={margin}
        y1={toY(0)}
        x2={size - margin}
        y2={toY(0)}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <line
        x1={toX(0)}
        y1={margin}
        x2={toX(0)}
        y2={size - margin}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <path
        d={`M ${size - margin - 7} ${toY(0) - 5} L ${size - margin} ${toY(0)} L ${size - margin - 7} ${toY(0) + 5}`}
        fill="none"
        className="stroke-foreground"
        strokeWidth="2"
      />
      <path
        d={`M ${toX(0) - 5} ${margin + 7} L ${toX(0)} ${margin} L ${toX(0) + 5} ${margin + 7}`}
        fill="none"
        className="stroke-foreground"
        strokeWidth="2"
      />
      {ticks
        .filter((tick) => tick !== 0)
        .map((tick) => (
          <g key={`labels-${tick}`}>
            <text
              x={toX(tick)}
              y={toY(0) + 16}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px]"
            >
              {tick}
            </text>
            <text
              x={toX(0) - 10}
              y={toY(tick) + 3}
              textAnchor="end"
              className="fill-muted-foreground text-[10px]"
            >
              {tick}
            </text>
          </g>
        ))}
      <text x={size - margin + 8} y={toY(0) + 4} className="fill-foreground text-xs font-bold">
        x
      </text>
      <text x={toX(0) + 7} y={margin - 7} className="fill-foreground text-xs font-bold">
        y
      </text>
      <line
        x1={toX(x)}
        y1={toY(0)}
        x2={toX(x)}
        y2={toY(y)}
        className="stroke-primary/50"
        strokeDasharray="4 4"
        strokeWidth="2"
      />
      <line
        x1={toX(0)}
        y1={toY(y)}
        x2={toX(x)}
        y2={toY(y)}
        className="stroke-primary/50"
        strokeDasharray="4 4"
        strokeWidth="2"
      />
      <circle cx={toX(x)} cy={toY(y)} r="7" className="fill-primary" />
      <circle cx={toX(x)} cy={toY(y)} r="11" fill="none" className="stroke-primary/30" />
      <text
        x={toX(x) + (x >= 3 ? -10 : 10)}
        y={toY(y) - 10}
        textAnchor={x >= 3 ? "end" : "start"}
        className="fill-foreground text-xs font-bold"
      >
        ({x}, {y})
      </text>
    </svg>
  );
}

function CoordinatesMode({ lessonId }: { lessonId: string }) {
  const [x, setX] = useState(3);
  const [y, setY] = useState(2);
  const [challenge, setChallenge] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const targets = [
    { x: -4, y: 3, answer: "Quadrant II" },
    { x: 2, y: -5, answer: "Quadrant IV" },
    { x: 0, y: 4, answer: "the y-axis" },
    { x: -3, y: -2, answer: "Quadrant III" },
  ];
  const target = targets[challenge] ?? targets[0]!;

  function updatePoint(nextX: number, nextY: number) {
    setX(nextX);
    setY(nextY);
    markStep(lessonId, "coordinateExplorer");
  }

  function choose(value: string) {
    setAnswer(value);
    markStep(lessonId, "coordinateExplorer");
  }

  function nextChallenge() {
    const next = (challenge + 1) % targets.length;
    setChallenge(next);
    setAnswer(null);
    const nextTarget = targets[next] ?? targets[0]!;
    setX(nextTarget.x);
    setY(nextTarget.y);
    markStep(lessonId, "coordinateExplorer");
  }

  return (
    <div className="space-y-7">
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-center">
        <div className="space-y-5 rounded-xl border bg-muted/20 p-4 sm:p-5">
          <div>
            <h4 className="font-semibold">Move a point on the Cartesian plane</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Change x first (left or right), then y (down or up). The ordered pair is always
              written as (x, y).
            </p>
          </div>
          <label className="block space-y-2 text-sm font-medium">
            x-coordinate: <strong>{x}</strong>
            <input
              type="range"
              min={-5}
              max={5}
              step={1}
              value={x}
              onChange={(event) => updatePoint(Number(event.target.value), y)}
              className="w-full accent-primary"
              aria-label="Choose x-coordinate"
            />
          </label>
          <label className="block space-y-2 text-sm font-medium">
            y-coordinate: <strong>{y}</strong>
            <input
              type="range"
              min={-5}
              max={5}
              step={1}
              value={y}
              onChange={(event) => updatePoint(x, Number(event.target.value))}
              className="w-full accent-primary"
              aria-label="Choose y-coordinate"
            />
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border bg-background p-3 text-center">
              <p className="text-xs text-muted-foreground">Ordered pair</p>
              <p className="mt-1 text-lg font-bold">
                ({x}, {y})
              </p>
            </div>
            <div className="rounded-lg border bg-background p-3 text-center">
              <p className="text-xs text-muted-foreground">Horizontal move</p>
              <p className="mt-1 font-semibold">
                {x < 0 ? `${Math.abs(x)} left` : x > 0 ? `${x} right` : "none"}
              </p>
            </div>
            <div className="rounded-lg border bg-background p-3 text-center">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="mt-1 font-semibold">{quadrant(x, y)}</p>
            </div>
          </div>
        </div>
        <CoordinateGrid x={x} y={y} />
      </section>

      <section className="rounded-xl border p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 className="font-semibold">Quadrant challenge</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The point is ({target.x}, {target.y}). Where is it located?
            </p>
          </div>
          <button
            type="button"
            onClick={nextChallenge}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="size-4" /> Next point
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Quadrant I",
            "Quadrant II",
            "Quadrant III",
            "Quadrant IV",
            "the x-axis",
            "the y-axis",
          ].map((option) => {
            const selected = answer === option;
            const correct = option === target.answer;
            return (
              <button
                key={option}
                type="button"
                disabled={answer !== null}
                onClick={() => choose(option)}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  answer === null && "hover:border-primary/50 hover:bg-primary/5",
                  answer !== null && correct && "border-emerald-500 bg-emerald-500/10",
                  selected && !correct && "border-destructive bg-destructive/10"
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
        {answer !== null && (
          <p
            className={cn(
              "mt-3 text-sm",
              answer === target.answer ? "text-emerald-600" : "text-destructive"
            )}
          >
            {answer === target.answer
              ? `Correct. The signs (${target.x < 0 ? "−" : "+"}, ${target.y < 0 ? "−" : "+"}) place the point in ${target.answer}.`
              : `Not quite. Move ${target.x < 0 ? "left" : target.x > 0 ? "right" : "nowhere horizontally"} first, then ${target.y < 0 ? "down" : target.y > 0 ? "up" : "nowhere vertically"}; the point is on ${target.answer}.`}
          </p>
        )}
      </section>

      <section className="rounded-xl border bg-muted/20 p-4 sm:p-5">
        <h4 className="font-semibold">Straight-line pattern</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          The points below follow y = x + 2. Each time x increases by 1, y also increases by 1.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border bg-background">
          <table className="w-full min-w-[420px] text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-3 py-2 text-left">x</th>
                {[-3, -2, -1, 0, 1, 2, 3].map((value) => (
                  <th key={value} className="px-3 py-2 text-center">
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th className="px-3 py-2 text-left">y = x + 2</th>
                {[-3, -2, -1, 0, 1, 2, 3].map((value) => (
                  <td key={value} className="px-3 py-2 text-center text-muted-foreground">
                    {value + 2}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function BarChart({ data, truncated }: { data: DataSet; truncated: boolean }) {
  const width = 520;
  const height = 280;
  const left = 48;
  const right = 20;
  const top = 24;
  const bottom = 50;
  const plotHeight = height - top - bottom;
  const plotWidth = width - left - right;
  const minValue = truncated ? Math.max(0, Math.min(...data.values) - 2) : 0;
  const maxValue = Math.max(...data.values) + 1;
  const span = Math.max(1, maxValue - minValue);
  const barGap = plotWidth / data.values.length;
  const barWidth = Math.min(54, barGap * 0.58);
  const yFor = (value: number) => top + ((maxValue - value) / span) * plotHeight;
  const ticks = Array.from({ length: 5 }, (_, index) => minValue + (span * index) / 4);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label={`${data.label} bar chart`}
    >
      <title>{`${data.label} bar chart`}</title>
      {ticks.map((tick) => {
        const y = yFor(tick);
        return (
          <g key={tick}>
            <line x1={left} y1={y} x2={width - right} y2={y} className="stroke-border" />
            <text
              x={left - 8}
              y={y + 4}
              textAnchor="end"
              className="fill-muted-foreground text-[11px]"
            >
              {Number.isInteger(tick) ? tick : tick.toFixed(1)}
            </text>
          </g>
        );
      })}
      <line
        x1={left}
        y1={top}
        x2={left}
        y2={height - bottom}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <line
        x1={left}
        y1={height - bottom}
        x2={width - right}
        y2={height - bottom}
        className="stroke-foreground"
        strokeWidth="2"
      />
      {data.values.map((value, index) => {
        const x = left + barGap * index + (barGap - barWidth) / 2;
        const y = yFor(value);
        return (
          <g key={data.categories[index]}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={height - bottom - y}
              rx="5"
              className="fill-primary/75"
            />
            <text
              x={x + barWidth / 2}
              y={y - 7}
              textAnchor="middle"
              className="fill-foreground text-xs font-bold"
            >
              {value}
            </text>
            <text
              x={x + barWidth / 2}
              y={height - bottom + 19}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px]"
            >
              {data.categories[index]}
            </text>
          </g>
        );
      })}
      {truncated && (
        <text x={left + 6} y={top + 14} className="fill-destructive text-[11px] font-bold">
          Axis starts at {minValue}, not zero
        </text>
      )}
    </svg>
  );
}

function LineGraph({ data }: { data: DataSet }) {
  const width = 520;
  const height = 280;
  const left = 48;
  const right = 20;
  const top = 24;
  const bottom = 50;
  const plotHeight = height - top - bottom;
  const plotWidth = width - left - right;
  const maxValue = Math.max(...data.values) + 2;
  const xFor = (index: number) => left + (plotWidth * index) / Math.max(1, data.values.length - 1);
  const yFor = (value: number) => top + ((maxValue - value) / maxValue) * plotHeight;
  const points = data.values.map((value, index) => `${xFor(index)},${yFor(value)}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label={`${data.label} line graph`}
    >
      <title>{`${data.label} line graph`}</title>
      {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
        const value = maxValue * fraction;
        const y = yFor(value);
        return (
          <g key={fraction}>
            <line x1={left} y1={y} x2={width - right} y2={y} className="stroke-border" />
            <text
              x={left - 8}
              y={y + 4}
              textAnchor="end"
              className="fill-muted-foreground text-[11px]"
            >
              {Math.round(value)}
            </text>
          </g>
        );
      })}
      <line
        x1={left}
        y1={top}
        x2={left}
        y2={height - bottom}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <line
        x1={left}
        y1={height - bottom}
        x2={width - right}
        y2={height - bottom}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <polyline
        points={points}
        fill="none"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {data.values.map((value, index) => (
        <g key={data.categories[index]}>
          <circle cx={xFor(index)} cy={yFor(value)} r="6" className="fill-primary" />
          <text
            x={xFor(index)}
            y={yFor(value) - 10}
            textAnchor="middle"
            className="fill-foreground text-xs font-bold"
          >
            {value}
          </text>
          <text
            x={xFor(index)}
            y={height - bottom + 19}
            textAnchor="middle"
            className="fill-muted-foreground text-[11px]"
          >
            {data.categories[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PieGraphic({ data }: { data: DataSet }) {
  const total = data.values.reduce((sum, value) => sum + value, 0);
  let cumulative = 0;
  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--chart-2, 173 58% 39%))",
    "hsl(var(--chart-3, 197 37% 24%))",
    "hsl(var(--chart-4, 43 74% 66%))",
    "hsl(var(--muted-foreground))",
  ];
  const segments = data.values.map((value, index) => {
    const start = cumulative / total;
    cumulative += value;
    const end = cumulative / total;
    const startAngle = start * Math.PI * 2 - Math.PI / 2;
    const endAngle = end * Math.PI * 2 - Math.PI / 2;
    const x1 = 120 + 90 * Math.cos(startAngle);
    const y1 = 120 + 90 * Math.sin(startAngle);
    const x2 = 120 + 90 * Math.cos(endAngle);
    const y2 = 120 + 90 * Math.sin(endAngle);
    const large = end - start > 0.5 ? 1 : 0;
    return {
      path: `M 120 120 L ${x1} ${y1} A 90 90 0 ${large} 1 ${x2} ${y2} Z`,
      category: data.categories[index],
      value,
      percent: (value / total) * 100,
      angle: (value / total) * 360,
      color: colors[index % colors.length],
    };
  });

  return (
    <div className="grid gap-4 md:grid-cols-[260px_1fr] md:items-center">
      <svg
        viewBox="0 0 240 240"
        className="mx-auto w-full max-w-[260px]"
        role="img"
        aria-label={`${data.label} pie chart`}
      >
        <title>{`${data.label} pie chart`}</title>
        {segments.map((segment) => (
          <path
            key={segment.category}
            d={segment.path}
            fill={segment.color}
            stroke="hsl(var(--background))"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="space-y-2">
        {segments.map((segment) => (
          <div
            key={segment.category}
            className="flex items-center justify-between gap-3 rounded-lg border p-3 text-sm"
          >
            <span className="font-medium">{segment.category}</span>
            <span className="text-right text-muted-foreground">
              {segment.value} = {segment.percent.toFixed(0)}% = {segment.angle.toFixed(0)}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pictogram({ data }: { data: DataSet }) {
  const keyValue = data.name === "temperature" ? 2 : 1;
  return (
    <div className="space-y-3 rounded-lg border bg-background p-4">
      <p className="text-sm font-medium">
        Key: {data.icon} = {keyValue} {data.unit}
      </p>
      {data.categories.map((category, index) => {
        const value = data.values[index] ?? 0;
        const full = Math.floor(value / keyValue);
        const remainder = value % keyValue;
        return (
          <div
            key={category}
            className="grid grid-cols-[90px_1fr] gap-3 border-t py-3 first:border-t-0"
          >
            <span className="text-sm font-medium">{category}</span>
            <span className="break-all text-lg" aria-label={`${value} ${data.unit}`}>
              {Array.from({ length: full }, (_, iconIndex) => (
                <span key={iconIndex}>{data.icon}</span>
              ))}
              {remainder > 0 && (
                <span className="text-xs text-muted-foreground">
                  {" "}
                  + {remainder}/{keyValue} symbol
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function DataMode({ lessonId }: { lessonId: string }) {
  const [dataIndex, setDataIndex] = useState(0);
  const [chartMode, setChartMode] = useState<ChartMode>("bar");
  const [truncated, setTruncated] = useState(false);
  const data = DATA_SETS[dataIndex] ?? DATA_SETS[0]!;
  const total = useMemo(() => data.values.reduce((sum, value) => sum + value, 0), [data]);
  const maximum = Math.max(...data.values);
  const maxIndex = data.values.indexOf(maximum);
  const range = maximum - Math.min(...data.values);

  function record() {
    markStep(lessonId, "dataExplorer");
  }

  return (
    <div className="space-y-7">
      <section className="rounded-xl border bg-muted/20 p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium">
            Choose a data set
            <select
              value={dataIndex}
              onChange={(event) => {
                setDataIndex(Number(event.target.value));
                setTruncated(false);
                record();
              }}
              className="w-full rounded-md border bg-background px-3 py-2"
            >
              {DATA_SETS.map((set, index) => (
                <option key={set.name} value={index}>
                  {set.label}
                </option>
              ))}
            </select>
          </label>
          <div className="space-y-2">
            <p className="text-sm font-medium">Choose a representation</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Chart type">
              {(
                [
                  ["bar", BarChart3, "Bar chart"],
                  ["line", LineChart, "Line graph"],
                  ["pictogram", Table2, "Pictogram"],
                  ["pie", PieChart, "Pie chart"],
                ] as const
              ).map(([mode, Icon, label]) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setChartMode(mode);
                    record();
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    chartMode === mode ? "border-primary bg-primary/10" : "hover:bg-muted"
                  )}
                >
                  <Icon className="size-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="rounded-xl border p-3 sm:p-5">
          <h4 className="mb-3 text-center font-semibold">{data.label}</h4>
          {chartMode === "bar" && <BarChart data={data} truncated={truncated} />}
          {chartMode === "line" && <LineGraph data={data} />}
          {chartMode === "pictogram" && <Pictogram data={data} />}
          {chartMode === "pie" && <PieGraphic data={data} />}
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">Largest value</p>
            <p className="mt-1 font-bold">
              {data.categories[maxIndex] ?? "Category"}: {maximum} {data.unit}
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="mt-1 font-bold">
              {total} {data.unit}
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">Range</p>
            <p className="mt-1 font-bold">
              {range} {data.unit}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 className="font-semibold">Misleading-axis laboratory</h4>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              A bar chart usually starts its vertical axis at zero. A truncated axis can make small
              differences look dramatic, even though the data have not changed.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setChartMode("bar");
              setTruncated((value) => !value);
              record();
            }}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              truncated ? "border-destructive bg-destructive/10" : "hover:bg-muted"
            )}
          >
            {truncated ? "Restore zero baseline" : "Truncate the axis"}
          </button>
        </div>
        <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
          Always read the scale, labels, units and axis starting value before interpreting a graph.
        </p>
      </section>
    </div>
  );
}

export function CoordinateDataExplorer({ lessonId, mode }: { lessonId: string; mode: Mode }) {
  return mode === "coordinates" ? (
    <CoordinatesMode lessonId={lessonId} />
  ) : (
    <DataMode lessonId={lessonId} />
  );
}
