/** A number line with evenly spaced ticks and an optional highlighted point. */
export function NumberLine({
  min,
  max,
  step,
  highlight,
}: {
  min: number;
  max: number;
  step: number;
  highlight?: number;
}) {
  const width = 480;
  const padX = 34;
  const lineY = 46;

  const ticks: number[] = [];
  for (let v = min; v <= max; v += step) ticks.push(v);

  const scale = (v: number) => padX + ((v - min) / (max - min)) * (width - 2 * padX);

  return (
    <svg
      viewBox={`0 0 ${width} 70`}
      role="img"
      aria-label={`Number line from ${min} to ${max}`}
      className="h-auto w-full max-w-lg"
    >
      <line
        x1={padX}
        y1={lineY}
        x2={width - padX}
        y2={lineY}
        className="stroke-border"
        strokeWidth="2"
      />
      {ticks.map((v) => (
        <g key={v}>
          <line
            x1={scale(v)}
            y1={lineY - 6}
            x2={scale(v)}
            y2={lineY + 6}
            className="stroke-border"
            strokeWidth="2"
          />
          <text
            x={scale(v)}
            y={lineY + 22}
            textAnchor="middle"
            fontSize="12"
            className="fill-muted-foreground"
          >
            {v.toLocaleString()}
          </text>
        </g>
      ))}
      {highlight !== undefined && (
        <g>
          <circle cx={scale(highlight)} cy={lineY} r="5" className="fill-primary" />
          <text
            x={scale(highlight)}
            y={lineY - 12}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            className="fill-foreground"
          >
            {highlight.toLocaleString()}
          </text>
        </g>
      )}
    </svg>
  );
}
