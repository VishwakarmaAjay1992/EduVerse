const NAMES = [
  "ones",
  "tens",
  "hundreds",
  "thousands",
  "ten thousands",
  "hundred thousands",
  "millions",
];

/** A place-value chart: one column per digit, showing its place name and value. */
export function PlaceValueChart({ number }: { number: number }) {
  const digits = Array.from(String(Math.trunc(Math.abs(number))));
  const n = digits.length;
  const boxW = 90;
  const boxH = 60;
  const gap = 10;
  const padX = 10;
  const padTop = 24;
  const padBot = 34;
  const width = padX * 2 + n * boxW + (n - 1) * gap;
  const height = padTop + boxH + padBot;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`Place value chart for ${number.toLocaleString()}`}
      className="h-auto w-full max-w-md"
    >
      {digits.map((digit, i) => {
        const pos = n - 1 - i;
        const x = padX + i * (boxW + gap);
        const value = Number(digit) * 10 ** pos;
        return (
          <g key={i}>
            <text
              x={x + boxW / 2}
              y={15}
              textAnchor="middle"
              fontSize="11"
              className="fill-muted-foreground"
            >
              {NAMES[pos] ?? `10^${pos}`}
            </text>
            <rect
              x={x}
              y={padTop}
              width={boxW}
              height={boxH}
              rx="8"
              className="fill-card stroke-border"
              strokeWidth="1"
            />
            <text
              x={x + boxW / 2}
              y={padTop + boxH / 2 + 9}
              textAnchor="middle"
              fontSize="26"
              fontWeight="600"
              className="fill-foreground"
            >
              {digit}
            </text>
            <text
              x={x + boxW / 2}
              y={padTop + boxH + 20}
              textAnchor="middle"
              fontSize="12"
              className="fill-muted-foreground"
            >
              {value.toLocaleString()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
