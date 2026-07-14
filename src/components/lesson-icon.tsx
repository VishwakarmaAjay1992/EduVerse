import {
  Ruler,
  Timer,
  Thermometer,
  Gauge,
  Scale,
  Zap,
  TestTube,
  Weight,
  Move,
  Boxes,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  length: Ruler,
  ruler: Ruler,
  tape: Ruler,
  mass: Scale,
  balance: Scale,
  weight: Weight,
  time: Timer,
  stopwatch: Timer,
  temperature: Thermometer,
  thermometer: Thermometer,
  speed: Gauge,
  current: Zap,
  ammeter: Zap,
  cylinder: TestTube,
  volume: Boxes,
  vector: Move,
};

export function LessonIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Boxes;
  return <Icon className={className} aria-hidden="true" />;
}
