import { SectionHeader } from "@/components/shared/section-header";
import { KanbanBoard } from "@/features/kanban/components/kanban-board";

export default function KanbanPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Studio"
        title="Kanban"
        description="Everything the board flagged as an action item, tracked in one board."
      />
      <KanbanBoard />
    </div>
  );
}
