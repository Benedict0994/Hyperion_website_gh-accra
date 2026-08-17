import {
  Code2,
  CloudCog,
  BarChart3,
  ShieldCheck,
  Compass,
  LifeBuoy,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Code2,
  CloudCog,
  BarChart3,
  ShieldCheck,
  Compass,
  LifeBuoy,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Cpu;
}