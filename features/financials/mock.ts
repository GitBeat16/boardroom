import type { TrendValue } from "@/types/common";

export const financialMetrics: { label: string; value: string; trend: TrendValue }[] = [
  { label: "MRR", value: "$38.2K", trend: { value: 14, direction: "up", label: "vs last month" } },
  { label: "Burn rate", value: "$61K/mo", trend: { value: 4, direction: "down", label: "vs last month" } },
  { label: "Runway", value: "17 mo", trend: { value: 2, direction: "up", label: "mo added" } },
  { label: "CAC : LTV", value: "1 : 4.2", trend: { value: 6, direction: "up", label: "vs last quarter" } },
];

export const revenueExpense = [
  { month: "Feb", revenue: 21, expense: 54 },
  { month: "Mar", revenue: 24, expense: 55 },
  { month: "Apr", revenue: 27, expense: 58 },
  { month: "May", revenue: 31, expense: 59 },
  { month: "Jun", revenue: 34, expense: 60 },
  { month: "Jul", revenue: 38, expense: 61 },
];

export interface CapTableRow {
  holder: string;
  role: string;
  ownership: number;
}

export const capTable: CapTableRow[] = [
  { holder: "Founders", role: "Common", ownership: 62 },
  { holder: "Seed investors", role: "Preferred", ownership: 24 },
  { holder: "Employee option pool", role: "Common (options)", ownership: 10 },
  { holder: "Advisors", role: "Common", ownership: 4 },
];
