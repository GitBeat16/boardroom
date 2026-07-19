export interface NotificationPref {
  id: string;
  label: string;
  description: string;
  defaultEnabled: boolean;
}

export const notificationPrefs: NotificationPref[] = [
  { id: "session-complete", label: "Board session completed", description: "Get notified when a live debate finishes and a report is ready.", defaultEnabled: true },
  { id: "score-change", label: "Investment score changes", description: "Alert me when a report is regenerated with a new score.", defaultEnabled: true },
  { id: "weekly-digest", label: "Weekly digest", description: "A summary of every session run across your workspace.", defaultEnabled: false },
  { id: "exec-updates", label: "New executive personas", description: "Let me know when a new agent is added to the board.", defaultEnabled: false },
];

export const workspacePlan = { name: "Founder", price: "$49/mo", seatsUsed: 1, seatsTotal: 1 };
