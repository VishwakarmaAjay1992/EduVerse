"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Mode =
  | "field-wave"
  | "spectrum"
  | "energy"
  | "polarization"
  | "refraction"
  | "dipole"
  | "communication";

const C = 299_792_458;
const H = 6.626_070_15e-34;

const SPECTRUM = [
  {
    key: "radio",
    label: "Radio",
    short: "> 1 m",
    wavelength: "about 1 m to many kilometres",
    frequency: "below about 300 MHz",
    energy: "very low photon energy",
    sources: "broadcast antennas, oscillating currents, astronomical objects",
    detectors: "receiver aerials and radio telescopes",
    uses: "broadcasting, navigation, radio astronomy and long-range communication",
    hazards: "high-power fields can induce currents and heating; ordinary regulated exposure is non-ionizing",
  },
  {
    key: "microwave",
    label: "Microwave",
    short: "1 mm–1 m",
    wavelength: "about 1 mm to 1 m",
    frequency: "about 300 MHz to 300 GHz",
    energy: "non-ionizing; higher photon energy than radio",
    sources: "magnetrons, klystrons, radar and communication transmitters",
    detectors: "antennae, semiconductor diodes and microwave receivers",
    uses: "radar, satellite links, mobile networks, Wi-Fi and cooking",
    hazards: "sufficient intensity heats water-rich tissue; use screened equipment and follow exposure limits",
  },
  {
    key: "infrared",
    label: "Infrared",
    short: "700 nm–1 mm",
    wavelength: "about 700 nm to 1 mm",
    frequency: "about 300 GHz to 430 THz",
    energy: "non-ionizing thermal radiation",
    sources: "warm objects, molecules, LEDs and infrared lasers",
    detectors: "thermopiles, bolometers, photodiodes and thermal cameras",
    uses: "remote controls, heaters, thermal imaging, night vision and fibre links",
    hazards: "intense sources can heat skin and damage eyes",
  },
  {
    key: "visible",
    label: "Visible",
    short: "400–700 nm",
    wavelength: "approximately 400 nm to 700 nm",
    frequency: "about 430 THz to 750 THz",
    energy: "non-ionizing photons detected by the eye",
    sources: "the Sun, lamps, LEDs, lasers and hot matter",
    detectors: "eyes, photographic sensors, photodiodes and spectrometers",
    uses: "vision, imaging, illumination, optical instruments and communication",
    hazards: "very bright light and lasers can injure the retina",
  },
  {
    key: "ultraviolet",
    label: "Ultraviolet",
    short: "10–400 nm",
    wavelength: "approximately 10 nm to 400 nm",
    frequency: "about 750 THz to 30 PHz",
    energy: "higher-energy photons; the shortest UV is ionizing",
    sources: "the Sun, electric arcs, mercury lamps and UV LEDs",
    detectors: "photocells, fluorescent materials and UV cameras",
    uses: "sterilization, fluorescence, security marking and vitamin-D production",
    hazards: "can cause sunburn, eye injury and DNA damage; use shielding and suitable eye/skin protection",
  },
  {
    key: "xray",
    label: "X-ray",
    short: "0.01–10 nm",
    wavelength: "roughly 0.01 nm to 10 nm",
    frequency: "about 30 PHz to 30 EHz",
    energy: "ionizing",
    sources: "rapidly decelerated electrons and inner-shell atomic transitions",
    detectors: "digital X-ray panels, photographic film, scintillators and Geiger-type detectors",
    uses: "medical imaging, crystallography, security scanning and industrial inspection",
    hazards: "ionizing radiation; minimize time, maximize distance and use shielding under trained control",
  },
  {
    key: "gamma",
    label: "Gamma",
    short: "< 0.01 nm",
    wavelength: "shorter than about 0.01 nm",
    frequency: "above about 30 EHz",
    energy: "strongly ionizing, very high photon energy",
    sources: "nuclear transitions, radioactive decay, cosmic events and particle interactions",
    detectors: "scintillation counters, semiconductor detectors and Geiger-type instruments",
    uses: "radiotherapy, sterilization, tracers, astronomy and materials inspection",
    hazards: "deeply penetrating ionizing radiation; specialist shielding, monitoring and controlled access are essential",
  },
] as const;

type SpectrumKey = (typeof SPECTRUM)[number]["key"];

function spectrumFromWavelength(lambdaM: number): string {
  if (lambdaM >= 1) return "Radio";
  if (lambdaM >= 1e-3) return "Microwave";
  if (lambdaM >= 700e-9) return "Infrared";
  if (lambdaM >= 400e-9) return "Visible";
  if (lambdaM >= 10e-9) return "Ultraviolet";
  if (lambdaM >= 1e-11) return "X-ray";
  return "Gamma";
}

function formatScientific(value: number, unit: string): string {
  if (!Number.isFinite(value) || value === 0) return `0 ${unit}`;
  const exp = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / 10 ** exp;
  return `${mantissa.toFixed(3)} × 10^${exp} ${unit}`;
}

function useAnimation(active: boolean, rate = 1) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setPhase((p) => (p + 0.08 * rate) % (Math.PI * 2)), 40);
    return () => window.clearInterval(id);
  }, [active, rate]);
  return [phase, setPhase] as const;
}

function FieldWaveLab() {
  const [playing, setPlaying] = useState(false);
  const [amplitude, setAmplitude] = useState(42);
  const [frequencyMHz, setFrequencyMHz] = useState(100);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [speedFraction, setSpeedFraction] = useState(1);
  const [phaseOffset, setPhaseOffset] = useState(0);
  const [phase, setPhase] = useAnimation(playing, playbackSpeed);
  const waveSpeed = C * speedFraction;
  const wavelength = waveSpeed / (frequencyMHz * 1e6);
  const cycles = Math.max(1.2, Math.min(5.5, 3.4e8 / (frequencyMHz * 1e6)));
  const displayPhase = phase + (phaseOffset * Math.PI) / 180;
  const ePoints: string[] = [];
  const bPoints: string[] = [];
  for (let i = 0; i <= 100; i += 1) {
    const x = 48 + i * 5.1;
    const y = 140 - amplitude * Math.sin((i / 100) * cycles * Math.PI * 2 - displayPhase);
    ePoints.push(`${x},${y}`);
    const z = amplitude * 0.55 * Math.sin((i / 100) * cycles * Math.PI * 2 - displayPhase);
    bPoints.push(`${x + z * 0.48},${245 + z * 0.32}`);
  }
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <svg viewBox="0 0 620 330" className="w-full" role="img" aria-label="Animated electric and magnetic fields travelling perpendicular to one another">
        <defs>
          <marker id="em-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" className="fill-foreground" />
          </marker>
        </defs>
        <rect x="15" y="15" width="590" height="300" rx="18" className="fill-muted/20 stroke-border" />
        <line x1="48" y1="140" x2="570" y2="140" className="stroke-muted-foreground/40" />
        <line x1="48" y1="245" x2="570" y2="245" className="stroke-muted-foreground/40" />
        <polyline points={ePoints.join(" ")} fill="none" className="stroke-sky-500" strokeWidth="3" />
        <polyline points={bPoints.join(" ")} fill="none" className="stroke-rose-500" strokeWidth="3" />
        <line x1="60" y1="55" x2="125" y2="55" className="stroke-foreground" strokeWidth="2" markerEnd="url(#em-arrow)" />
        <text x="55" y="42" fontSize="13" className="fill-foreground">propagation</text>
        <line x1="585" y1="140" x2="585" y2="78" className="stroke-sky-500" strokeWidth="2" markerEnd="url(#em-arrow)" />
        <text x="555" y="68" fontSize="13" className="fill-sky-600">E field</text>
        <line x1="585" y1="245" x2="545" y2="270" className="stroke-rose-500" strokeWidth="2" markerEnd="url(#em-arrow)" />
        <text x="510" y="295" fontSize="13" className="fill-rose-600">B field</text>
        <text x="42" y="305" fontSize="12" className="fill-muted-foreground">The two fields oscillate in phase and are perpendicular to each other and to the direction of travel.</text>
      </svg>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <label className="text-sm">Amplitude
          <input aria-label="Electric field amplitude" className="mt-1 w-full accent-primary" type="range" min="18" max="70" value={amplitude} onChange={(e) => setAmplitude(Number(e.target.value))} />
        </label>
        <label className="text-sm">Frequency: {frequencyMHz} MHz
          <input aria-label="Wave frequency in megahertz" className="mt-1 w-full accent-primary" type="range" min="20" max="300" step="5" value={frequencyMHz} onChange={(e) => setFrequencyMHz(Number(e.target.value))} />
        </label>
        <label className="text-sm">Wavelength: {wavelength.toFixed(2)} m
          <input aria-label="Wave wavelength in metres" className="mt-1 w-full accent-primary" type="range" min="0.5" max="15" step="0.1" value={Math.min(15, Math.max(0.5, wavelength))} onChange={(e) => setFrequencyMHz(Number((waveSpeed / (Number(e.target.value) * 1e6)).toFixed(1)))} />
        </label>
        <label className="text-sm">Phase offset: {phaseOffset}°
          <input aria-label="Wave phase offset" className="mt-1 w-full accent-primary" type="range" min="0" max="360" step="5" value={phaseOffset} onChange={(e) => setPhaseOffset(Number(e.target.value))} />
        </label>
        <label className="text-sm">Medium wave speed: {speedFraction.toFixed(2)}c
          <input aria-label="Wave speed as a fraction of c" className="mt-1 w-full accent-primary" type="range" min="0.5" max="1" step="0.05" value={speedFraction} onChange={(e) => setSpeedFraction(Number(e.target.value))} />
        </label>
        <label className="text-sm">Playback speed: {playbackSpeed.toFixed(1)}×
          <input aria-label="Animation playback speed" className="mt-1 w-full accent-primary" type="range" min="0.5" max="2" step="0.1" value={playbackSpeed} onChange={(e) => setPlaybackSpeed(Number(e.target.value))} />
        </label>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setPlaying((v) => !v)} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">{playing ? "Pause" : "Play"}</button>
        <button type="button" onClick={() => { setPlaying(false); setPhase(0); setAmplitude(42); setFrequencyMHz(100); setPlaybackSpeed(1); setSpeedFraction(1); setPhaseOffset(0); }} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">Reset</button>
      </div>
      <div className="grid gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-lg bg-muted/40 p-3"><span className="text-muted-foreground">Wave speed</span><br /><strong>{waveSpeed.toLocaleString(undefined, { maximumFractionDigits: 0 })} m/s</strong></div>
        <div className="rounded-lg bg-muted/40 p-3"><span className="text-muted-foreground">Wavelength from c = fλ</span><br /><strong>{wavelength.toFixed(3)} m</strong></div>
        <div className="rounded-lg bg-muted/40 p-3"><span className="text-muted-foreground">Geometry</span><br /><strong>E ⟂ B ⟂ travel</strong></div>
      </div>
    </div>
  );
}

function SpectrumLab() {
  const [selected, setSelected] = useState<SpectrumKey>("visible");
  const [compare, setCompare] = useState<SpectrumKey>("microwave");
  const [visibleNm, setVisibleNm] = useState(550);
  const item = SPECTRUM.find((v) => v.key === selected)!;
  const other = SPECTRUM.find((v) => v.key === compare)!;
  const freq = C / (visibleNm * 1e-9);
  const energyEv = (H * freq) / 1.602_176_634e-19;
  const hue = Math.max(0, Math.min(270, ((700 - visibleNm) / 300) * 270));
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {SPECTRUM.map((region) => (
          <button key={region.key} type="button" onClick={() => setSelected(region.key)} className={cn("rounded-lg border px-2 py-3 text-sm font-medium", selected === region.key && "border-primary bg-primary/10")}>{region.label}<span className="mt-1 block text-xs font-normal text-muted-foreground">{region.short}</span></button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h4 className="text-lg font-semibold">{item.label}</h4>
          <dl className="mt-3 grid gap-2 text-sm">
            <div><dt className="font-medium">Wavelength</dt><dd className="text-muted-foreground">{item.wavelength}</dd></div>
            <div><dt className="font-medium">Frequency</dt><dd className="text-muted-foreground">{item.frequency}</dd></div>
            <div><dt className="font-medium">Energy</dt><dd className="text-muted-foreground">{item.energy}</dd></div>
            <div><dt className="font-medium">Sources</dt><dd className="text-muted-foreground">{item.sources}</dd></div>
            <div><dt className="font-medium">Detectors</dt><dd className="text-muted-foreground">{item.detectors}</dd></div>
            <div><dt className="font-medium">Uses</dt><dd className="text-muted-foreground">{item.uses}</dd></div>
            <div><dt className="font-medium">Safety</dt><dd className="text-muted-foreground">{item.hazards}</dd></div>
          </dl>
        </div>
        <div className="rounded-xl border p-4">
          <label className="text-sm font-medium">Compare with
            <select value={compare} onChange={(e) => setCompare(e.target.value as SpectrumKey)} className="ml-2 rounded-md border bg-background px-2 py-1">
              {SPECTRUM.map((v) => <option value={v.key} key={v.key}>{v.label}</option>)}
            </select>
          </label>
          <h4 className="mt-3 text-lg font-semibold">{other.label}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{other.wavelength}; {other.frequency}. {other.uses}.</p>
          <p className="mt-3 text-sm"><strong>Comparison:</strong> moving from radio toward gamma means shorter wavelength, higher frequency and greater photon energy.</p>
        </div>
      </div>
      {selected === "visible" && (
        <div className="rounded-xl border p-4">
          <h4 className="font-semibold">Visible-light zoom</h4>
          <div className="mt-3 h-14 rounded-lg border" style={{ background: "linear-gradient(90deg, #6f00ff, #0066ff, #00b7ff, #00c853, #ffee00, #ff8c00, #e00000)" }} aria-label="Approximate visible spectrum from violet to red" />
          <label className="mt-3 block text-sm">Approximate wavelength: {visibleNm} nm
            <input aria-label="Visible wavelength in nanometres" type="range" min="400" max="700" value={visibleNm} onChange={(e) => setVisibleNm(Number(e.target.value))} className="mt-1 w-full accent-primary" />
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-lg p-3" style={{ backgroundColor: `hsl(${hue} 85% 55% / 0.22)` }}>
            <span className="size-10 rounded-full border" style={{ backgroundColor: `hsl(${hue} 85% 55%)` }} aria-hidden="true" />
            <div className="text-sm"><strong>{(freq / 1e12).toFixed(1)} THz</strong><br /><span className="text-muted-foreground">photon energy ≈ {energyEv.toFixed(2)} eV; colour boundaries are gradual and observer-dependent</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

function EnergyLab() {
  const [mode, setMode] = useState<"frequency" | "wavelength">("frequency");
  const [value, setValue] = useState("5.0e14");
  const n = Number(value);
  const frequency = mode === "frequency" ? n : C / n;
  const wavelength = mode === "wavelength" ? n : C / n;
  const energyJ = H * frequency;
  const energyEv = energyJ / 1.602_176_634e-19;
  const valid = Number.isFinite(n) && n > 0;
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => { setMode("frequency"); setValue("5.0e14"); }} className={cn("rounded-md border px-3 py-2 text-sm", mode === "frequency" && "border-primary bg-primary/10")}>Enter frequency (Hz)</button>
        <button type="button" onClick={() => { setMode("wavelength"); setValue("6.0e-7"); }} className={cn("rounded-md border px-3 py-2 text-sm", mode === "wavelength" && "border-primary bg-primary/10")}>Enter wavelength (m)</button>
      </div>
      <label className="block text-sm font-medium">{mode === "frequency" ? "Frequency in hertz" : "Wavelength in metres"}
        <input value={value} onChange={(e) => setValue(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-md border bg-background px-3 py-2" aria-label={mode === "frequency" ? "Frequency in hertz" : "Wavelength in metres"} />
      </label>
      {!valid ? <p className="text-sm text-red-600">Enter a positive number, using scientific notation if useful.</p> : (
        <div className="space-y-3">
          <div className="rounded-lg bg-muted/40 p-3 text-sm"><strong>Step 1:</strong> use $c=f\\lambda$ to calculate the missing wave quantity.</div>
          <div className="rounded-lg bg-muted/40 p-3 text-sm"><strong>Step 2:</strong> use $E=hf$ for one photon&apos;s energy.</div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3 text-sm"><span className="text-muted-foreground">Frequency</span><br /><strong>{formatScientific(frequency, "Hz")}</strong></div>
            <div className="rounded-lg border p-3 text-sm"><span className="text-muted-foreground">Wavelength</span><br /><strong>{formatScientific(wavelength, "m")}</strong></div>
            <div className="rounded-lg border p-3 text-sm"><span className="text-muted-foreground">Photon energy</span><br /><strong>{formatScientific(energyJ, "J")}</strong><br /><span>{energyEv.toFixed(4)} eV</span></div>
            <div className="rounded-lg border p-3 text-sm"><span className="text-muted-foreground">Spectrum region</span><br /><strong>{spectrumFromWavelength(wavelength)}</strong></div>
          </div>
        </div>
      )}
      <button type="button" onClick={() => { setMode("frequency"); setValue("5.0e14"); }} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">Reset</button>
    </div>
  );
}

function PolarizationLab() {
  const [polarizer, setPolarizer] = useState(0);
  const [analyzer, setAnalyzer] = useState(45);
  const delta = Math.abs(analyzer - polarizer);
  const relative = 0.5 * Math.cos((delta * Math.PI) / 180) ** 2;
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <svg viewBox="0 0 620 260" className="w-full" role="img" aria-label="Unpolarized light passing through a polarizer and analyzer">
        <rect x="20" y="20" width="580" height="220" rx="18" className="fill-muted/20 stroke-border" />
        {[0, 30, 60, 90, 120, 150].map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={a} x1={55 - 30 * Math.cos(r)} y1={130 - 30 * Math.sin(r)} x2={55 + 30 * Math.cos(r)} y2={130 + 30 * Math.sin(r)} className="stroke-sky-500" strokeWidth="2" />;
        })}
        <text x="28" y="200" fontSize="13" className="fill-muted-foreground">unpolarized</text>
        <g transform={`rotate(${polarizer} 235 130)`}><rect x="200" y="55" width="70" height="150" rx="8" className="fill-primary/10 stroke-primary" /><line x1="235" y1="70" x2="235" y2="190" className="stroke-primary" strokeWidth="4" /></g>
        <g transform={`rotate(${analyzer} 420 130)`}><rect x="385" y="55" width="70" height="150" rx="8" className="fill-amber-500/10 stroke-amber-600" /><line x1="420" y1="70" x2="420" y2="190" className="stroke-amber-600" strokeWidth="4" /></g>
        <line x1="270" y1="130" x2="385" y2="130" className="stroke-sky-500" strokeWidth="4" opacity="0.7" />
        <line x1="455" y1="130" x2={455 + 110 * relative * 2} y2="130" className="stroke-emerald-500" strokeWidth="8" />
        <text x="195" y="225" fontSize="13" className="fill-foreground">polarizer</text><text x="382" y="225" fontSize="13" className="fill-foreground">analyzer</text>
      </svg>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">Polarizer angle: {polarizer}°<input type="range" min="0" max="180" value={polarizer} onChange={(e) => setPolarizer(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
        <label className="text-sm">Analyzer angle: {analyzer}°<input type="range" min="0" max="180" value={analyzer} onChange={(e) => setAnalyzer(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
      </div>
      <div className="rounded-lg bg-muted/40 p-3 text-sm"><strong>Relative transmitted intensity:</strong> {relative.toFixed(3)} of the original unpolarized beam. After the first ideal polarizer, intensity is $I_0/2$; the analyzer follows $I=(I_0/2)\\cos^2\\theta$.</div>
      <button type="button" onClick={() => { setPolarizer(0); setAnalyzer(45); }} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">Reset</button>
    </div>
  );
}

function RefractionLab() {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(1.5);
  const [incidence, setIncidence] = useState(40);
  const ratio = (n1 / n2) * Math.sin((incidence * Math.PI) / 180);
  const tir = Math.abs(ratio) > 1;
  const refracted = tir ? null : (Math.asin(ratio) * 180) / Math.PI;
  const origin = { x: 310, y: 150 };
  const ray = (angle: number, length: number, down: boolean) => ({ x: origin.x + length * Math.sin((angle * Math.PI) / 180), y: origin.y + (down ? 1 : -1) * length * Math.cos((angle * Math.PI) / 180) });
  const incoming = ray(-incidence, 130, false);
  const reflected = ray(incidence, 130, false);
  const transmitted = refracted === null ? null : ray(refracted, 130, true);
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <svg viewBox="0 0 620 320" className="w-full" role="img" aria-label="Reflection and refraction at a boundary">
        <rect x="20" y="20" width="580" height="280" rx="18" className="fill-muted/20 stroke-border" />
        <rect x="30" y="150" width="560" height="140" className="fill-sky-500/10" />
        <line x1="30" y1="150" x2="590" y2="150" className="stroke-foreground" strokeWidth="2" />
        <line x1="310" y1="35" x2="310" y2="280" className="stroke-muted-foreground" strokeDasharray="7 5" />
        <line x1={incoming.x} y1={incoming.y} x2={origin.x} y2={origin.y} className="stroke-amber-600" strokeWidth="3" />
        <line x1={origin.x} y1={origin.y} x2={reflected.x} y2={reflected.y} className="stroke-rose-500" strokeWidth="3" />
        {transmitted && <line x1={origin.x} y1={origin.y} x2={transmitted.x} y2={transmitted.y} className="stroke-sky-600" strokeWidth="3" />}
        <text x="45" y="55" fontSize="13" className="fill-foreground">medium 1, n₁={n1.toFixed(2)}</text>
        <text x="45" y="280" fontSize="13" className="fill-foreground">medium 2, n₂={n2.toFixed(2)}</text>
        <text x="322" y="48" fontSize="12" className="fill-muted-foreground">normal</text>
        {tir && <text x="340" y="205" fontSize="14" className="fill-red-600">total internal reflection</text>}
      </svg>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm">Incidence: {incidence}°<input type="range" min="0" max="85" value={incidence} onChange={(e) => setIncidence(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
        <label className="text-sm">n₁: {n1.toFixed(2)}<input type="range" min="1" max="2.4" step="0.05" value={n1} onChange={(e) => setN1(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
        <label className="text-sm">n₂: {n2.toFixed(2)}<input type="range" min="1" max="2.4" step="0.05" value={n2} onChange={(e) => setN2(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
      </div>
      <div className="rounded-lg bg-muted/40 p-3 text-sm"><strong>Snell&apos;s law:</strong> $n_1\\sin i=n_2\\sin r$. Reflection angle = {incidence}°. {tir ? "No transmitted ray exists because the calculated sine exceeds 1." : `Refraction angle ≈ ${refracted!.toFixed(1)}°.`}</div>
      <button type="button" onClick={() => { setN1(1); setN2(1.5); setIncidence(40); }} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">Reset</button>
    </div>
  );
}

function DipoleLab() {
  const [playing, setPlaying] = useState(false);
  const [frequency, setFrequency] = useState(1);
  const [phase, setPhase] = useAnimation(playing, frequency);
  const chargeY = 145 + 58 * Math.sin(phase);
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <svg viewBox="0 0 620 330" className="w-full" role="img" aria-label="Simplified oscillating dipole radiating outward wavefronts">
        <rect x="20" y="20" width="580" height="290" rx="18" className="fill-muted/20 stroke-border" />
        <line x1="310" y1="65" x2="310" y2="255" className="stroke-foreground" strokeWidth="5" />
        <circle cx="310" cy={chargeY} r="11" className="fill-rose-500 stroke-rose-700" />
        <text x="303" y={chargeY + 4} fontSize="13" fill="white">+</text>
        {[55, 95, 135, 175].map((r, i) => <ellipse key={r} cx="310" cy="160" rx={r + ((phase * 18 + i * 18) % 25)} ry={(r + ((phase * 18 + i * 18) % 25)) * 0.48} fill="none" className="stroke-sky-500/60" strokeWidth="2" />)}
        <path d="M245,80 Q310,20 375,80" fill="none" className="stroke-amber-600" strokeWidth="3" />
        <path d="M245,240 Q310,300 375,240" fill="none" className="stroke-amber-600" strokeWidth="3" />
        <text x="335" y="105" fontSize="13" className="fill-foreground">oscillating charge</text>
        <text x="405" y="175" fontSize="13" className="fill-muted-foreground">radiation spreads outward</text>
        <text x="45" y="294" fontSize="12" className="fill-muted-foreground">Simplified model: changing fields propagate; complete field lines do not literally break off like ropes.</text>
      </svg>
      <label className="block text-sm">Oscillation speed: {frequency.toFixed(1)}×<input type="range" min="0.4" max="2" step="0.1" value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} className="mt-1 w-full accent-primary" /></label>
      <div className="flex gap-2"><button type="button" onClick={() => setPlaying((v) => !v)} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">{playing ? "Pause" : "Play"}</button><button type="button" onClick={() => { setPlaying(false); setFrequency(1); setPhase(0); }} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">Reset</button></div>
    </div>
  );
}

function CommunicationLab() {
  const stages = [
    ["Transmitter", "Creates the information-bearing electrical signal."],
    ["Modulation", "Places information onto a high-frequency carrier by changing amplitude, frequency or phase."],
    ["Antenna", "Accelerating charges in the transmitting antenna launch electromagnetic radiation."],
    ["Propagation", "The wave transports energy and encoded information through space or a guided medium."],
    ["Receiver", "A receiving antenna converts part of the arriving field into an electrical signal."],
    ["Demodulation", "Separates the information from the carrier."],
    ["Output", "A speaker, display or data circuit reconstructs the message."],
  ] as const;
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Communication system stages">
        {stages.map(([name], i) => <button role="listitem" type="button" key={name} onClick={() => setActive(i)} className={cn("rounded-lg border px-3 py-2 text-sm", active === i && "border-primary bg-primary/10")}>{name}</button>)}
      </div>
      <div className="rounded-xl bg-muted/40 p-4"><h4 className="font-semibold">{stages[active][0]}</h4><p className="mt-1 text-sm leading-7 text-muted-foreground">{stages[active][1]}</p></div>
      <svg viewBox="0 0 620 175" className="w-full" role="img" aria-label="Transmitter antenna sending electromagnetic waves to a receiver antenna">
        <line x1="85" y1="135" x2="85" y2="45" className="stroke-foreground" strokeWidth="5" /><line x1="535" y1="135" x2="535" y2="45" className="stroke-foreground" strokeWidth="5" />
        {[0,1,2,3].map((i) => <path key={i} d={`M${120+i*35},55 Q${150+i*35},88 ${120+i*35},121`} fill="none" className="stroke-sky-500" strokeWidth="3" />)}
        {[0,1,2,3].map((i) => <path key={i} d={`M${500-i*35},55 Q${470-i*35},88 ${500-i*35},121`} fill="none" className="stroke-sky-500" strokeWidth="3" />)}
        <text x="45" y="160" fontSize="13" className="fill-foreground">transmitter</text><text x="500" y="160" fontSize="13" className="fill-foreground">receiver</text>
      </svg>
    </div>
  );
}

export function ElectromagneticWaveExplorer({ mode }: { mode: Mode }) {
  switch (mode) {
    case "field-wave": return <FieldWaveLab />;
    case "spectrum": return <SpectrumLab />;
    case "energy": return <EnergyLab />;
    case "polarization": return <PolarizationLab />;
    case "refraction": return <RefractionLab />;
    case "dipole": return <DipoleLab />;
    case "communication": return <CommunicationLab />;
  }
}
