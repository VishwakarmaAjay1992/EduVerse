/** A rows x cols array of dots illustrating multiplication as equal groups. */
export function MultiplicationArray({ rows, cols }: { rows: number; cols: number }) {
  const gap = 24;
  const r = 7;
  const padX = 16;
  const padY = 16;
  const width = padX * 2 + cols * gap;
  const height = padY * 2 + rows * gap + 26;

  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={padX + gap / 2 + col * gap}
          cy={padY + gap / 2 + row * gap}
          r={r}
          className="fill-primary"
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${rows} by ${cols} array of dots`}
      className="h-auto w-auto"
    >
      {dots}
      <text
        x={width / 2}
        y={height - 8}
        textAnchor="middle"
        fontSize="13"
        className="fill-muted-foreground"
      >
        {rows} × {cols} = {rows * cols}
      </text>
    </svg>
  );
}
