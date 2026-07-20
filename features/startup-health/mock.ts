export const healthScore = 74;

export const healthDimensions = [
  { dimension: "Team", score: 82 },
  { dimension: "Product", score: 76 },
  { dimension: "Market", score: 71 },
  { dimension: "Financials", score: 68 },
  { dimension: "Traction", score: 74 },
];

export interface HealthFlag {
  id: string;
  title: string;
  description: string;
  severity: "info" | "warning" | "critical";
}

export const healthFlags: HealthFlag[] = [
  {
    id: "f1",
    title: "CAC payback trending up",
    description: "Payback period moved from 7 to 9 months over the last quarter — worth revisiting acquisition channels.",
    severity: "warning",
  },
  {
    id: "f2",
    title: "Single technical founder",
    description: "No second engineering hire yet. Flagged by the CTO Agent as a key-person risk ahead of Series A.",
    severity: "warning",
  },
  {
    id: "f3",
    title: "Retention holding steady",
    description: "90-day retention has stayed above 85% for three consecutive cohorts.",
    severity: "info",
  },
];
