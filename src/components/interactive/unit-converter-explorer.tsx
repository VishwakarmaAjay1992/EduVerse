"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

type Category = "length" | "mass" | "capacity";

interface UnitDef {
  label: string;
  category: Category;
  /** Factor to the category base unit (m, g, ml). */
  toBase: number;
  /** Imperial units carry approximate conversion factors. */
  approximate: boolean;
}

const UNITS = {
  mm: { label: "millimetres (mm)", category: "length", toBase: 0.001, approximate: false },
  cm: { label: "centimetres (cm)", category: "length", toBase: 0.01, approximate: false },
  m: { label: "metres (m)", category: "length", toBase: 1, approximate: false },
  km: { label: "kilometres (km)", category: "length", toBase: 1000, approximate: false },
  in: { label: "inches (in)", category: "length", toBase: 0.0254, approximate: false },
  ft: { label: "feet (ft)", category: "length", toBase: 0.3048, approximate: false },
  yd: { label: "yards (yd)", category: "length", toBase: 0.9144, approximate: false },
  mi: { label: "miles (mi)", category: "length", toBase: 1609.344, approximate: true },
  g: { label: "grams (g)", category: "mass", toBase: 1, approximate: false },
  kg: { label: "kilograms (kg)", category: "mass", toBase: 1000, approximate: false },
  t: { label: "tonnes (t)", category: "mass", toBase: 1_000_000, approximate: false },
  oz: { label: "ounces (oz)", category: "mass", toBase: 28.3495, approximate: true },
  lb: { label: "pounds (lb)", category: "mass", toBase: 453.592, approximate: true },
  ml: { label: "millilitres (ml)", category: "capacity", toBase: 1, approximate: false },
  l: { label: "litres (l)", category: "capacity", toBase: 1000, approximate: false },
  gal: { label: "UK gallons (gal)", category: "capacity", toBase: 4546.09, approximate: true },
} satisfies Record<string, UnitDef>;

type UnitKey = keyof typeof UNITS;

const CATEGORY_LABEL: Record<Category, string> = {
  length: "Length",
  mass: "Mass",
  capacity: "Capacity",
};

/**
 * Interactive metric and imperial unit converter with an incompatible-unit
 * warning and clear labelling of approximate imperial conversions.
 */
export function UnitConverterExplorer({ lessonId }: { lessonId: string }) {
  const [amount, setAmount] = useState(250);
  const [from, setFrom] = useState<UnitKey>("cm");
  const [to, setTo] = useState<UnitKey>("m");

  function touched() {
    markStep(lessonId, "unitConverterExplorer");
  }

  const fromDef = UNITS[from];
  const toDef = UNITS[to];
  const compatible = fromDef.category === toDef.category;
  const result = compatible ? (amount * fromDef.toBase) / toDef.toBase : null;
  const approximate = fromDef.approximate || toDef.approximate;

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Unit conversion calculator</h4>
          <p className="text-sm text-muted-foreground">
            Choose an amount and two units. Metric-to-metric conversions are exact; conversions
            involving imperial units are marked as approximate.
          </p>
        </div>
        <label className="block text-sm">
          Amount: <strong>{amount}</strong>
          <input
            className="mt-2 w-full"
            type="range"
            min={1}
            max={1000}
            step={1}
            value={amount}
            aria-label="Amount to convert"
            onChange={(e) => {
              setAmount(Number(e.target.value));
              touched();
            }}
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <UnitSelect
            label="From"
            value={from}
            onChange={(v) => {
              setFrom(v);
              touched();
            }}
          />
          <UnitSelect
            label="To"
            value={to}
            onChange={(v) => {
              setTo(v);
              touched();
            }}
          />
        </div>
        {!compatible && (
          <div
            role="alert"
            className="rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-sm"
          >
            <strong>Incompatible units.</strong> You cannot convert{" "}
            {CATEGORY_LABEL[fromDef.category].toLowerCase()} into{" "}
            {CATEGORY_LABEL[toDef.category].toLowerCase()}. Choose two units that measure the same
            kind of quantity.
          </div>
        )}
        {compatible && result !== null && (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Conversion</p>
              <p className="font-semibold">
                {amount} {from} {approximate ? "≈" : "="} {formatNumber(result)} {to}
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Type</p>
              <p className="font-semibold">
                {approximate ? "Approximate (imperial factor)" : "Exact (metric)"}
              </p>
            </div>
          </div>
        )}
        {compatible && approximate && (
          <p className="rounded-md border border-amber-500/30 bg-amber-500/5 p-3 text-sm text-muted-foreground">
            Imperial conversion factors shown here are rounded (for example 1 inch = 2.54 cm
            exactly, but 1 mile ≈ 1.609 km and 1 pound ≈ 453.6 g). Always state clearly when an
            answer is approximate.
          </p>
        )}
      </section>

      <section className="space-y-3 border-t pt-5">
        <div>
          <h4 className="font-semibold">Visual scale</h4>
          <p className="text-sm text-muted-foreground">
            The bars compare the size of one unit of each length, from millimetre to metre, on a
            logical (not to-scale) ladder: each step multiplies by 10 or more.
          </p>
        </div>
        <div
          className="space-y-2"
          role="img"
          aria-label="A ladder of metric length units: 1 metre equals 100 centimetres equals 1000 millimetres, and 1 kilometre equals 1000 metres."
        >
          {[
            { label: "1 km = 1,000 m", width: "100%" },
            { label: "1 m = 100 cm", width: "62%" },
            { label: "1 cm = 10 mm", width: "34%" },
            { label: "1 mm", width: "14%" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <div className="h-5 rounded bg-primary/30" style={{ width: row.width }} />
              <span className="whitespace-nowrap text-xs text-muted-foreground">{row.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function UnitSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: UnitKey;
  onChange: (value: UnitKey) => void;
}) {
  return (
    <label className="block text-sm">
      {label}
      <select
        className="mt-2 w-full rounded-md border bg-background px-3 py-2"
        value={value}
        aria-label={`${label} unit`}
        onChange={(e) => onChange(e.target.value as UnitKey)}
      >
        {(Object.keys(UNITS) as UnitKey[]).map((key) => (
          <option key={key} value={key}>
            {CATEGORY_LABEL[UNITS[key].category]} — {UNITS[key].label}
            {UNITS[key].approximate ? " (approx.)" : ""}
          </option>
        ))}
      </select>
    </label>
  );
}

function formatNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString("en", { maximumFractionDigits: 2 });
  if (n >= 1) return String(Math.round(n * 1000) / 1000);
  return n.toPrecision(3);
}
