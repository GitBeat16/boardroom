export interface KanbanCard {
  id: string;
  title: string;
  tag: string;
  assignee: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

export const kanbanColumns: KanbanColumn[] = [
  {
    id: "backlog",
    title: "Backlog",
    cards: [
      { id: "k1", title: "Draft usage-based pricing PRD", tag: "Product", assignee: "You" },
      { id: "k2", title: "Follow up with Research Agent on TAM source", tag: "Research", assignee: "You" },
      { id: "k3", title: "Line up 2nd engineering hire", tag: "Hiring", assignee: "You" },
    ],
  },
  {
    id: "in-progress",
    title: "In progress",
    cards: [
      { id: "k4", title: "Revise CAC payback model for CFO Agent", tag: "Finance", assignee: "You" },
      { id: "k5", title: "Rebuild traction slide with Q2 cohort data", tag: "Pitch deck", assignee: "You" },
    ],
  },
  {
    id: "review",
    title: "In review",
    cards: [{ id: "k6", title: "Legal Agent review: multi-state compliance", tag: "Legal", assignee: "Diane Okafor" }],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "k7", title: "Fieldnote report finalized", tag: "Reports", assignee: "You" },
      { id: "k8", title: "Board session scheduled for Loadbay", tag: "Boardroom", assignee: "You" },
    ],
  },
];
