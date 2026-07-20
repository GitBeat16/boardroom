export interface VersionEntry {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  tone: "brass" | "signal" | "success" | "warning";
  changeType: "Report" | "Pitch deck" | "PRD" | "Financials";
}

export const versionHistory: VersionEntry[] = [
  {
    id: "v1",
    title: "Fieldnote report regenerated",
    description: "Investment score moved from 74 to 82 after the founder revised pricing tiers.",
    timestamp: "Jul 17, 2026 · 4:12 PM",
    tone: "success",
    changeType: "Report",
  },
  {
    id: "v2",
    title: "Pitch deck v3 published",
    description: "Traction slide rebuilt with Q2 cohort data at the CMO Agent's request.",
    timestamp: "Jul 16, 2026 · 11:30 AM",
    tone: "signal",
    changeType: "Pitch deck",
  },
  {
    id: "v3",
    title: "PRD v2: usage-based pricing",
    description: "Non-goals section added to scope out enterprise contracts for this phase.",
    timestamp: "Jul 15, 2026 · 2:05 PM",
    tone: "brass",
    changeType: "PRD",
  },
  {
    id: "v4",
    title: "Financial model revised",
    description: "CAC payback assumptions updated after CFO Agent flagged an optimistic churn rate.",
    timestamp: "Jul 14, 2026 · 9:48 AM",
    tone: "warning",
    changeType: "Financials",
  },
  {
    id: "v5",
    title: "Fieldnote report v1 generated",
    description: "Initial board session completed. Score: 74/100.",
    timestamp: "Jul 10, 2026 · 3:20 PM",
    tone: "brass",
    changeType: "Report",
  },
];
