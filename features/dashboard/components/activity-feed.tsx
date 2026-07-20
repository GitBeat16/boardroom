import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/shared/timeline";
import { recentActivity } from "@/features/dashboard/mock";

export function ActivityFeed() {
  return (
    <Card className="p-0">
      <CardHeader>
        <CardTitle className="text-base">Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Timeline
          entries={recentActivity.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            timestamp: item.timestamp,
            tone: item.tone,
          }))}
        />
      </CardContent>
    </Card>
  );
}
