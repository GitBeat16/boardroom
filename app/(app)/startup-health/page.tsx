import { SectionHeader } from "@/components/shared/section-header";
import { ScoreCard } from "@/components/shared/score-card";
import { BoardroomRadarChart } from "@/components/shared/radar-chart";
import { Card } from "@/components/ui/card";
import { HealthFlags } from "@/features/startup-health/components/health-flags";
import { healthScore, healthDimensions } from "@/features/startup-health/mock";

export default function StartupHealthPage() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Intelligence" title="Startup health" description="A rolling snapshot the board updates after every session." />

      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Card className="flex flex-col items-center justify-center gap-3 p-6">
          <ScoreCard label="Overall health" score={healthScore} verdict="Stable, one watch-item on unit economics" size="lg" tone="signal" />
        </Card>
        <BoardroomRadarChart
          title="Health by dimension"
          data={healthDimensions}
          series={[{ key: "score", label: "Current" }]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-lg font-medium">Flags</h3>
        <HealthFlags />
      </div>
    </div>
  );
}
