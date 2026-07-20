import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/shared/timeline";
import { versionHistory } from "@/features/history/mock";

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Studio"
        title="Version history"
        description="Every regenerated report, deck, and spec — nothing overwrites silently."
      />
      <Card className="p-6">
        <Timeline
          entries={versionHistory.map((entry) => ({
            id: entry.id,
            title: entry.title,
            description: entry.description,
            timestamp: entry.timestamp,
            tone: entry.tone,
          }))}
        />
      </Card>
      <div className="flex flex-wrap gap-2">
        {["Report", "Pitch deck", "PRD", "Financials"].map((type) => (
          <Badge key={type} tone="outline">
            {type}
          </Badge>
        ))}
      </div>
    </div>
  );
}
