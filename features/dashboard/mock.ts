import type { DashboardMetric, RecentMeeting, ActivityItem, ScoreTrendPoint } from "./types";

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Active meetings", value: "2", trend: { value: 12, direction: "up", label: "vs last week" } },
  { label: "Reports generated", value: "48", trend: { value: 8, direction: "up", label: "this month" } },
  { label: "Avg. investment score", value: "71", trend: { value: 3, direction: "down", label: "vs last month" } },
  { label: "Pitches this month", value: "16", trend: { value: 0, direction: "flat", label: "vs last month" } },
];

export const recentMeetings: RecentMeeting[] = [
  {
    id: "mtg_loadbay",
    startupName: "Loadbay",
    oneLiner: "Freight-matching for regional carriers",
    status: "in-progress",
    updatedAt: "12m ago",
  },
  {
    id: "mtg_fieldnote",
    startupName: "Fieldnote",
    oneLiner: "Field-service scheduling for utilities",
    status: "completed",
    investmentScore: 82,
    updatedAt: "1h ago",
  },
  {
    id: "mtg_marrow",
    startupName: "Marrow Health",
    oneLiner: "Async triage for rural clinics",
    status: "completed",
    investmentScore: 64,
    updatedAt: "3h ago",
  },
  {
    id: "mtg_ledgerly",
    startupName: "Ledgerly",
    oneLiner: "Automated bookkeeping for creator LLCs",
    status: "scheduled",
    updatedAt: "Tomorrow, 9:00 AM",
  },
  {
    id: "mtg_greenline",
    startupName: "Greenline",
    oneLiner: "Carbon accounting for mid-market manufacturers",
    status: "completed",
    investmentScore: 45,
    updatedAt: "Yesterday",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "act_1",
    title: "Fieldnote report finalized",
    description: "CFO Agent flagged CAC payback at 14 months — resolved after the founder revised pricing.",
    timestamp: "1h ago",
    tone: "success",
  },
  {
    id: "act_2",
    title: "Loadbay board session started",
    description: "6 of 8 executives seated. VC Agent and Legal Agent still reviewing the deck.",
    timestamp: "12m ago",
    tone: "signal",
  },
  {
    id: "act_3",
    title: "Greenline scored 45/100",
    description: "Board split 3–5 against — market timing cited as the primary risk.",
    timestamp: "Yesterday",
    tone: "warning",
  },
  {
    id: "act_4",
    title: "New executive persona added",
    description: "Growth Agent is now available to add to future board sessions.",
    timestamp: "2 days ago",
    tone: "brass",
  },
];

export const scoreTrend: ScoreTrendPoint[] = [
  { month: "Feb", score: 58 },
  { month: "Mar", score: 61 },
  { month: "Apr", score: 65 },
  { month: "May", score: 69 },
  { month: "Jun", score: 66 },
  { month: "Jul", score: 71 },
];
