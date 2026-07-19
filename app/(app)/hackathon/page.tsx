import { Trophy } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/shared/timeline";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaderboard } from "@/features/hackathon/components/leaderboard";
import { schedule } from "@/features/hackathon/mock";

export default function HackathonPage() {
  return (
    <div className="space-y-8">
      <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-boardroom-glow p-8">
        <Badge tone="signal" pulse>
          Live event
        </Badge>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight">Q3 Founder Hackathon</h1>
        <p className="mt-1 max-w-xl text-sm text-muted-foreground">
          5 teams, one board, 48 hours. Every idea gets a full board session and a public leaderboard score.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Standings"
            title="Leaderboard"
            action={
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Trophy className="size-4 text-primary" />
                Updated live
              </span>
            }
          />
          <Leaderboard />
        </div>

        <Card className="p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-base">Schedule</CardTitle>
          </CardHeader>
          <div className="mt-4">
            <Timeline
              entries={schedule.map((item) => ({ id: item.id, title: item.title, description: item.description, timestamp: item.time }))}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
