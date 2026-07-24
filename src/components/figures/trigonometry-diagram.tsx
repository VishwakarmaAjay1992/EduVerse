export type TrigonometryDiagramKind =
  | "angle-measure"
  | "unit-circle"
  | "six-functions"
  | "sinusoid"
  | "reciprocal-graphs"
  | "sector-motion"
  | "inverse-restrictions"
  | "law-of-sines"
  | "law-of-cosines"
  | "polar-coordinates"
  | "polar-curves"
  | "complex-plane"
  | "vector-addition"
  | "unit-vector"
  | "dot-product"
  | "parametric-curve"
  | "projectile";

function ArrowMarker({ id }: { id: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto-start-reverse"
    >
      <path
        d="M1 1L9 5L1 9"
        className="fill-none stroke-primary"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </marker>
  );
}

function Axes({ markerId }: { markerId: string }) {
  return (
    <>
      <line
        x1="35"
        y1="130"
        x2="385"
        y2="130"
        className="stroke-muted-foreground"
        strokeWidth="1.4"
        markerEnd={`url(#${markerId})`}
      />
      <line
        x1="210"
        y1="235"
        x2="210"
        y2="25"
        className="stroke-muted-foreground"
        strokeWidth="1.4"
        markerEnd={`url(#${markerId})`}
      />
      <text x="390" y="135" fontSize="12" className="fill-muted-foreground">
        x
      </text>
      <text x="216" y="25" fontSize="12" className="fill-muted-foreground">
        y
      </text>
    </>
  );
}

function AngleMeasure() {
  return (
    <svg viewBox="0 0 460 260" role="img" aria-label="An oriented angle in standard position measured in degrees and radians" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="trig-angle-arrow" /></defs>
      <line x1="70" y1="190" x2="395" y2="190" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#trig-angle-arrow)" />
      <line x1="135" y1="225" x2="135" y2="35" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#trig-angle-arrow)" />
      <line x1="135" y1="190" x2="335" y2="75" className="stroke-primary" strokeWidth="3" markerEnd="url(#trig-angle-arrow)" />
      <path d="M190 190 A55 55 0 0 0 183 162" className="fill-none stroke-primary" strokeWidth="2.5" />
      <text x="194" y="158" fontSize="16" className="fill-primary">θ</text>
      <text x="240" y="220" textAnchor="middle" fontSize="12" className="fill-muted-foreground">initial side</text>
      <text x="288" y="105" textAnchor="middle" fontSize="12" className="fill-muted-foreground">terminal side</text>
      <text x="265" y="35" textAnchor="middle" fontSize="14" fontWeight="600" className="fill-foreground">360° = 2π radians = 1 revolution</text>
      <text x="265" y="55" textAnchor="middle" fontSize="12" className="fill-muted-foreground">counter-clockwise is positive</text>
    </svg>
  );
}

function UnitCircle() {
  const points = [
    [330,130,"(1, 0)","0"], [270,43,"(0, 1)","π/2"], [90,130,"(-1, 0)","π"], [270,217,"(0, -1)","3π/2"],
  ] as const;
  return (
    <svg viewBox="0 0 430 270" role="img" aria-label="Unit circle with axes, angle theta, and coordinate point cosine theta comma sine theta" className="h-auto w-full max-w-xl">
      <defs><ArrowMarker id="unit-axis-arrow" /></defs>
      <line x1="45" y1="130" x2="390" y2="130" className="stroke-muted-foreground" strokeWidth="1.3" markerEnd="url(#unit-axis-arrow)" />
      <line x1="210" y1="245" x2="210" y2="20" className="stroke-muted-foreground" strokeWidth="1.3" markerEnd="url(#unit-axis-arrow)" />
      <circle cx="210" cy="130" r="90" className="fill-primary/5 stroke-primary" strokeWidth="2.4" />
      <line x1="210" y1="130" x2="275" y2="68" className="stroke-primary" strokeWidth="2.5" />
      <circle cx="275" cy="68" r="4.5" className="fill-primary" />
      <path d="M250 130 A40 40 0 0 0 238 101" className="fill-none stroke-primary" strokeWidth="2" />
      <text x="247" y="101" fontSize="15" className="fill-primary">θ</text>
      <line x1="275" y1="68" x2="275" y2="130" className="stroke-muted-foreground" strokeDasharray="4 4" />
      <line x1="210" y1="68" x2="275" y2="68" className="stroke-muted-foreground" strokeDasharray="4 4" />
      <text x="286" y="62" fontSize="13" className="fill-foreground">(cos θ, sin θ)</text>
      {points.map(([x,y,label,angle]) => <g key={label}><circle cx={x} cy={y} r="3" className="fill-foreground"/><text x={x+(x<210?-8:8)} y={y+(y<130?-9:17)} textAnchor={x<210?"end":"start"} fontSize="10" className="fill-muted-foreground">{label} · {angle}</text></g>)}
    </svg>
  );
}

function SixFunctions() {
  return (
    <svg viewBox="0 0 500 255" role="img" aria-label="Right triangle showing the six trigonometric functions as ratios" className="h-auto w-full max-w-2xl">
      <polygon points="55,205 275,205 275,55" className="fill-primary/5 stroke-foreground" strokeWidth="2.2" />
      <path d="M255 205V185H275" className="fill-none stroke-foreground" strokeWidth="2" />
      <path d="M95 205 A40 40 0 0 0 88 183" className="fill-none stroke-primary" strokeWidth="2" />
      <text x="100" y="182" className="fill-primary" fontSize="15">θ</text>
      <text x="164" y="225" className="fill-muted-foreground" fontSize="12">adjacent = x</text>
      <text x="286" y="135" className="fill-muted-foreground" fontSize="12">opposite = y</text>
      <text x="150" y="120" className="fill-muted-foreground" fontSize="12" transform="rotate(-34 150 120)">hypotenuse = r</text>
      <text x="330" y="68" className="fill-foreground" fontSize="13" fontWeight="600">Primary ratios</text>
      <text x="330" y="92" className="fill-primary" fontSize="13">sin θ = y/r</text>
      <text x="330" y="114" className="fill-primary" fontSize="13">cos θ = x/r</text>
      <text x="330" y="136" className="fill-primary" fontSize="13">tan θ = y/x</text>
      <text x="330" y="168" className="fill-foreground" fontSize="13" fontWeight="600">Reciprocals</text>
      <text x="330" y="190" className="fill-muted-foreground" fontSize="12">csc θ = r/y · sec θ = r/x · cot θ = x/y</text>
    </svg>
  );
}

function Sinusoid() {
  const sine = Array.from({length:181},(_,i)=>{const x=35+i*2; const y=130-62*Math.sin((i/180)*2*Math.PI); return `${x},${y}`}).join(" ");
  const cosine = Array.from({length:181},(_,i)=>{const x=35+i*2; const y=130-62*Math.cos((i/180)*2*Math.PI); return `${x},${y}`}).join(" ");
  return (
    <svg viewBox="0 0 430 260" role="img" aria-label="Sine and cosine curves over one full period" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="sin-axis-arrow" /></defs><Axes markerId="sin-axis-arrow" />
      <polyline points={sine} className="fill-none stroke-primary" strokeWidth="2.5" />
      <polyline points={cosine} className="fill-none stroke-foreground" strokeWidth="2" strokeDasharray="7 5" />
      <text x="58" y="55" fontSize="12" className="fill-primary">y = sin x</text>
      <text x="58" y="76" fontSize="12" className="fill-foreground">y = cos x</text>
      <text x="35" y="148" fontSize="10" className="fill-muted-foreground">0</text>
      <text x="206" y="148" fontSize="10" className="fill-muted-foreground">π</text>
      <text x="388" y="148" fontSize="10" className="fill-muted-foreground">2π</text>
      <text x="216" y="66" fontSize="10" className="fill-muted-foreground">1</text>
      <text x="216" y="198" fontSize="10" className="fill-muted-foreground">−1</text>
    </svg>
  );
}

function ReciprocalGraphs() {
  return (
    <svg viewBox="0 0 450 260" role="img" aria-label="Tangent curve with vertical asymptotes and secant branches guided by cosine" className="h-auto w-full max-w-2xl">
      <line x1="35" y1="130" x2="420" y2="130" className="stroke-muted-foreground" strokeWidth="1" />
      {[125,325].map(x=><line key={x} x1={x} y1="25" x2={x} y2="235" className="stroke-destructive/60" strokeDasharray="5 5" />)}
      <path d="M42 210 C70 195 98 165 118 35 M132 225 C165 195 198 160 222 35 M232 225 C265 195 298 160 318 35 M332 225 C365 195 395 160 412 55" className="fill-none stroke-primary" strokeWidth="2.4" />
      <path d="M35 90 C90 175 160 175 225 90 C290 5 355 5 420 90" className="fill-none stroke-muted-foreground" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="50" y="30" className="fill-primary" fontSize="12">tangent branches</text>
      <text x="260" y="30" className="fill-destructive" fontSize="11">vertical asymptotes</text>
      <text x="260" y="215" className="fill-muted-foreground" fontSize="11">reciprocal graphs inherit zeros as asymptotes</text>
    </svg>
  );
}

function SectorMotion() {
  return (
    <svg viewBox="0 0 460 250" role="img" aria-label="Circular sector showing radius r, central angle theta, and arc length s" className="h-auto w-full max-w-xl">
      <path d="M120 195 L120 55 A140 140 0 0 1 241 125 Z" className="fill-primary/10 stroke-primary" strokeWidth="2.2" />
      <line x1="120" y1="195" x2="120" y2="55" className="stroke-foreground" strokeWidth="2" />
      <line x1="120" y1="195" x2="241" y2="125" className="stroke-foreground" strokeWidth="2" />
      <path d="M120 55 A140 140 0 0 1 241 125" className="fill-none stroke-primary" strokeWidth="5" />
      <path d="M120 155 A40 40 0 0 1 154 175" className="fill-none stroke-primary" strokeWidth="2" />
      <text x="145" y="160" className="fill-primary" fontSize="15">θ</text>
      <text x="81" y="125" className="fill-muted-foreground" fontSize="13">r</text>
      <text x="187" y="93" className="fill-primary" fontSize="13">arc s</text>
      <text x="300" y="80" className="fill-foreground" fontSize="14" fontWeight="600">Radian relationships</text>
      <text x="300" y="110" className="fill-primary" fontSize="14">s = rθ</text>
      <text x="300" y="137" className="fill-primary" fontSize="14">A = ½r²θ</text>
      <text x="300" y="164" className="fill-primary" fontSize="14">v = rω</text>
      <text x="300" y="188" className="fill-muted-foreground" fontSize="11">θ and ω must be in radians</text>
    </svg>
  );
}

function InverseRestrictions() {
  return (
    <svg viewBox="0 0 470 250" role="img" aria-label="Restricted sine and cosine domains used to define inverse functions" className="h-auto w-full max-w-2xl">
      <line x1="35" y1="125" x2="435" y2="125" className="stroke-muted-foreground" />
      <line x1="235" y1="25" x2="235" y2="225" className="stroke-muted-foreground" />
      <path d="M65 125 C110 40 175 40 235 125" className="fill-none stroke-primary" strokeWidth="3" />
      <path d="M235 45 C300 45 360 205 420 205" className="fill-none stroke-foreground" strokeWidth="3" />
      <text x="110" y="32" className="fill-primary" fontSize="12">sine restricted to [−π/2, π/2]</text>
      <text x="275" y="228" className="fill-foreground" fontSize="12">cosine restricted to [0, π]</text>
      <text x="28" y="121" className="fill-muted-foreground" fontSize="10">−π/2</text>
      <text x="225" y="140" className="fill-muted-foreground" fontSize="10">0</text>
      <text x="417" y="140" className="fill-muted-foreground" fontSize="10">π</text>
      <text x="250" y="52" className="fill-muted-foreground" fontSize="11">one-to-one branches make inverses possible</text>
    </svg>
  );
}

function TriangleLaw({ cosine }: { cosine: boolean }) {
  return (
    <svg viewBox="0 0 480 260" role="img" aria-label={cosine ? "Triangle labelled for the Law of Cosines" : "Triangle labelled with opposite angle-side pairs for the Law of Sines"} className="h-auto w-full max-w-2xl">
      <polygon points="70,210 390,210 265,45" className="fill-primary/5 stroke-foreground" strokeWidth="2.2" />
      <text x="58" y="225" className="fill-foreground" fontSize="14">A</text><text x="395" y="225" className="fill-foreground" fontSize="14">B</text><text x="265" y="35" textAnchor="middle" className="fill-foreground" fontSize="14">C</text>
      <text x="322" y="125" className="fill-primary" fontSize="14">a</text><text x="155" y="125" className="fill-primary" fontSize="14">b</text><text x="230" y="230" className="fill-primary" fontSize="14">c</text>
      <path d="M105 210 A35 35 0 0 1 90 183" className="fill-none stroke-primary" strokeWidth="2" /><text x="108" y="184" className="fill-primary" fontSize="13">A</text>
      <text x="55" y="62" className="fill-foreground" fontWeight="600" fontSize="14">{cosine ? "SAS or SSS" : "Opposite pairs"}</text>
      <text x="55" y="88" className="fill-muted-foreground" fontSize="12">{cosine ? "use the included angle or all three sides" : "a ↔ A, b ↔ B, c ↔ C"}</text>
      <text x="280" y="72" className="fill-primary" fontSize="13">{cosine ? "a² = b² + c² − 2bc cos A" : "a/sin A = b/sin B = c/sin C"}</text>
    </svg>
  );
}

function PolarCoordinates() {
  const circles=[35,70,105];
  return (
    <svg viewBox="0 0 440 270" role="img" aria-label="Polar coordinate grid showing a point located by radius r and angle theta" className="h-auto w-full max-w-xl">
      <g transform="translate(210 135)">
        {circles.map(r=><circle key={r} cx="0" cy="0" r={r} className="fill-none stroke-border" />)}
        {[0,30,60,90,120,150].map(a=><line key={a} x1={-115*Math.cos(a*Math.PI/180)} y1={-115*Math.sin(a*Math.PI/180)} x2={115*Math.cos(a*Math.PI/180)} y2={115*Math.sin(a*Math.PI/180)} className="stroke-border" />)}
        <line x1="0" y1="0" x2="78" y2="-65" className="stroke-primary" strokeWidth="2.8" />
        <circle cx="78" cy="-65" r="5" className="fill-primary" />
        <path d="M32 0 A32 32 0 0 0 24 -21" className="fill-none stroke-primary" strokeWidth="2" />
        <text x="39" y="-18" className="fill-primary" fontSize="13">θ</text>
        <text x="45" y="-40" className="fill-primary" fontSize="13">r</text>
        <text x="87" y="-72" className="fill-foreground" fontSize="12">P(r, θ)</text>
      </g>
      <text x="18" y="25" className="fill-muted-foreground" fontSize="12">x = r cos θ · y = r sin θ</text>
      <text x="18" y="48" className="fill-muted-foreground" fontSize="12">r² = x² + y² · tan θ = y/x</text>
    </svg>
  );
}

function PolarCurves() {
  const cardioid=Array.from({length:361},(_,i)=>{const t=i*Math.PI/180; const r=62*(1+Math.cos(t)); return `${105+r*Math.cos(t)},${125-r*Math.sin(t)}`}).join(' ');
  const rose=Array.from({length:721},(_,i)=>{const t=i*Math.PI/360; const r=70*Math.cos(3*t); return `${340+r*Math.cos(t)},${125-r*Math.sin(t)}`}).join(' ');
  return (
    <svg viewBox="0 0 460 250" role="img" aria-label="Examples of polar curves: a cardioid and a three-petal rose" className="h-auto w-full max-w-2xl">
      <line x1="25" y1="125" x2="210" y2="125" className="stroke-border"/><line x1="105" y1="25" x2="105" y2="225" className="stroke-border"/>
      <polyline points={cardioid} className="fill-primary/5 stroke-primary" strokeWidth="2.3" />
      <text x="105" y="235" textAnchor="middle" className="fill-muted-foreground" fontSize="12">cardioid r = a(1 + cos θ)</text>
      <line x1="245" y1="125" x2="445" y2="125" className="stroke-border"/><line x1="340" y1="25" x2="340" y2="225" className="stroke-border"/>
      <polyline points={rose} className="fill-primary/5 stroke-primary" strokeWidth="2.3" />
      <text x="340" y="235" textAnchor="middle" className="fill-muted-foreground" fontSize="12">rose r = a cos(3θ)</text>
    </svg>
  );
}

function ComplexPlane() {
  return (
    <svg viewBox="0 0 470 260" role="img" aria-label="Complex plane showing z equals a plus bi in rectangular and polar form" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="complex-arrow" /></defs>
      <line x1="40" y1="190" x2="300" y2="190" className="stroke-muted-foreground" markerEnd="url(#complex-arrow)"/><line x1="90" y1="230" x2="90" y2="30" className="stroke-muted-foreground" markerEnd="url(#complex-arrow)"/>
      <line x1="90" y1="190" x2="245" y2="75" className="stroke-primary" strokeWidth="3" markerEnd="url(#complex-arrow)" />
      <line x1="245" y1="75" x2="245" y2="190" className="stroke-muted-foreground" strokeDasharray="4 4"/><line x1="90" y1="75" x2="245" y2="75" className="stroke-muted-foreground" strokeDasharray="4 4"/>
      <circle cx="245" cy="75" r="4" className="fill-primary" />
      <path d="M135 190 A45 45 0 0 0 126 163" className="fill-none stroke-primary" strokeWidth="2"/><text x="139" y="160" className="fill-primary">θ</text>
      <text x="160" y="122" className="fill-primary" fontSize="13">r = |z|</text><text x="250" y="70" className="fill-foreground" fontSize="12">z = a + bi</text>
      <text x="335" y="75" className="fill-foreground" fontSize="14" fontWeight="600">Polar form</text><text x="335" y="103" className="fill-primary" fontSize="13">z = r(cos θ + i sin θ)</text><text x="335" y="130" className="fill-primary" fontSize="13">z = re^(iθ)</text><text x="335" y="165" className="fill-muted-foreground" fontSize="11">multiply moduli</text><text x="335" y="184" className="fill-muted-foreground" fontSize="11">add arguments</text>
    </svg>
  );
}

function VectorAddition() {
  return (
    <svg viewBox="0 0 470 250" role="img" aria-label="Vector addition using the head-to-tail rule and component form" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="vector-arrow" /></defs>
      <line x1="60" y1="205" x2="230" y2="110" className="stroke-primary" strokeWidth="3" markerEnd="url(#vector-arrow)"/><line x1="230" y1="110" x2="365" y2="60" className="stroke-primary" strokeWidth="3" markerEnd="url(#vector-arrow)"/><line x1="60" y1="205" x2="365" y2="60" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#vector-arrow)"/>
      <text x="132" y="145" className="fill-primary" fontSize="14">u</text><text x="290" y="75" className="fill-primary" fontSize="14">v</text><text x="205" y="115" className="fill-foreground" fontSize="14">u + v</text>
      <text x="60" y="35" className="fill-muted-foreground" fontSize="12">⟨u₁,u₂⟩ + ⟨v₁,v₂⟩ = ⟨u₁+v₁, u₂+v₂⟩</text>
      <text x="60" y="55" className="fill-muted-foreground" fontSize="12">magnitude: ‖v‖ = √(v₁² + v₂²)</text>
    </svg>
  );
}

function UnitVector() {
  return (
    <svg viewBox="0 0 470 250" role="img" aria-label="A vector and its unit vector in the same direction" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="unit-vector-arrow" /></defs>
      <line x1="70" y1="205" x2="355" y2="70" className="stroke-primary" strokeWidth="4" markerEnd="url(#unit-vector-arrow)"/><line x1="70" y1="205" x2="178" y2="154" className="stroke-foreground" strokeWidth="3" markerEnd="url(#unit-vector-arrow)"/>
      <text x="265" y="115" className="fill-primary" fontSize="14">v</text><text x="145" y="170" className="fill-foreground" fontSize="14">û</text>
      <text x="70" y="35" className="fill-foreground" fontWeight="600" fontSize="14">Same direction, length 1</text><text x="70" y="62" className="fill-primary" fontSize="14">û = v / ‖v‖</text><text x="70" y="88" className="fill-muted-foreground" fontSize="12">principal unit vectors: i = ⟨1,0⟩, j = ⟨0,1⟩</text>
    </svg>
  );
}

function DotProduct() {
  return (
    <svg viewBox="0 0 470 250" role="img" aria-label="Two vectors with angle theta illustrating the dot product and projection" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="dot-arrow" /></defs>
      <line x1="70" y1="205" x2="385" y2="205" className="stroke-foreground" strokeWidth="3" markerEnd="url(#dot-arrow)"/><line x1="70" y1="205" x2="300" y2="65" className="stroke-primary" strokeWidth="3" markerEnd="url(#dot-arrow)"/>
      <path d="M130 205 A60 60 0 0 0 120 175" className="fill-none stroke-primary" strokeWidth="2"/><text x="137" y="173" className="fill-primary">θ</text>
      <line x1="300" y1="65" x2="300" y2="205" className="stroke-muted-foreground" strokeDasharray="5 5"/><text x="180" y="222" className="fill-muted-foreground" fontSize="12">projection</text><text x="210" y="105" className="fill-primary" fontSize="14">u</text><text x="345" y="195" className="fill-foreground" fontSize="14">v</text>
      <text x="65" y="35" className="fill-foreground" fontWeight="600" fontSize="14">u · v = ‖u‖‖v‖ cos θ</text><text x="65" y="60" className="fill-muted-foreground" fontSize="12">u · v = 0 ⇔ vectors are orthogonal</text>
    </svg>
  );
}

function ParametricCurve() {
  const pts=Array.from({length:201},(_,i)=>{const t=-2+i*0.02; const x=225+70*(t*t-2); const y=135-55*(2*t); return `${x},${y}`}).join(' ');
  return (
    <svg viewBox="0 0 470 270" role="img" aria-label="A parametrically described parabola with orientation arrows" className="h-auto w-full max-w-2xl">
      <line x1="30" y1="135" x2="440" y2="135" className="stroke-muted-foreground"/><line x1="225" y1="250" x2="225" y2="25" className="stroke-muted-foreground"/>
      <polyline points={pts} className="fill-none stroke-primary" strokeWidth="2.7" />
      <circle cx="85" cy="245" r="4" className="fill-primary"/><circle cx="85" cy="25" r="4" className="fill-primary"/>
      <text x="30" y="35" className="fill-foreground" fontWeight="600" fontSize="13">x = t² − 2, y = 2t</text><text x="30" y="57" className="fill-muted-foreground" fontSize="11">eliminate t: x = y²/4 − 2</text><text x="285" y="238" className="fill-muted-foreground" fontSize="11">increasing t determines orientation</text>
    </svg>
  );
}

function Projectile() {
  return (
    <svg viewBox="0 0 480 260" role="img" aria-label="Projectile motion path with initial speed, launch angle, horizontal and vertical components" className="h-auto w-full max-w-2xl">
      <defs><ArrowMarker id="projectile-arrow" /></defs>
      <line x1="35" y1="220" x2="450" y2="220" className="stroke-muted-foreground"/><path d="M65 220 Q250 25 430 220" className="fill-none stroke-primary" strokeWidth="3" />
      <line x1="65" y1="220" x2="165" y2="125" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#projectile-arrow)"/><path d="M110 220 A45 45 0 0 0 98 190" className="fill-none stroke-primary" strokeWidth="2"/><text x="113" y="188" className="fill-primary">θ</text><text x="115" y="145" className="fill-foreground" fontSize="12">v₀</text>
      <text x="45" y="35" className="fill-foreground" fontWeight="600" fontSize="13">x(t) = v₀ cos θ · t</text><text x="45" y="58" className="fill-foreground" fontWeight="600" fontSize="13">y(t) = s₀ + v₀ sin θ · t − ½gt²</text><text x="260" y="200" className="fill-muted-foreground" fontSize="11">time is the parameter</text>
    </svg>
  );
}

export function TrigonometryDiagram({ kind }: { kind: TrigonometryDiagramKind }) {
  switch (kind) {
    case "angle-measure": return <AngleMeasure />;
    case "unit-circle": return <UnitCircle />;
    case "six-functions": return <SixFunctions />;
    case "sinusoid": return <Sinusoid />;
    case "reciprocal-graphs": return <ReciprocalGraphs />;
    case "sector-motion": return <SectorMotion />;
    case "inverse-restrictions": return <InverseRestrictions />;
    case "law-of-sines": return <TriangleLaw cosine={false} />;
    case "law-of-cosines": return <TriangleLaw cosine />;
    case "polar-coordinates": return <PolarCoordinates />;
    case "polar-curves": return <PolarCurves />;
    case "complex-plane": return <ComplexPlane />;
    case "vector-addition": return <VectorAddition />;
    case "unit-vector": return <UnitVector />;
    case "dot-product": return <DotProduct />;
    case "parametric-curve": return <ParametricCurve />;
    case "projectile": return <Projectile />;
  }
}
