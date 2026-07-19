export interface LeaderboardRow {
  rank: number;
  team: string;
  idea: string;
  score: number;
}

export const leaderboard: LeaderboardRow[] = [
  { rank: 1, team: "Team Northbeam", idea: "Warehouse pick-and-pack retrofit kits", score: 91 },
  { rank: 2, team: "Team Ledgerly", idea: "Automated bookkeeping for creator LLCs", score: 87 },
  { rank: 3, team: "Team Hemlock", idea: "Inventory forecasting for grocers", score: 79 },
  { rank: 4, team: "Team Fieldnote", idea: "Field-service scheduling for utilities", score: 76 },
  { rank: 5, team: "Team Marrow", idea: "Async triage for rural clinics", score: 68 },
];

export const schedule = [
  { id: "sc1", time: "Day 1 · 9:00 AM", title: "Pitches open", description: "Every team submits to the board simultaneously." },
  { id: "sc2", time: "Day 1 · 2:00 PM", title: "Round 1 debates", description: "Board convenes for each team, live." },
  { id: "sc3", time: "Day 2 · 10:00 AM", title: "Revisions due", description: "Teams address board feedback and resubmit." },
  { id: "sc4", time: "Day 2 · 4:00 PM", title: "Final scores", description: "Leaderboard locks and winners are announced." },
];
