import { notFound } from "next/navigation";
import { Download, Share2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { MetricCard } from "@/components/shared/metric-card";
import { ScoreCard } from "@/components/shared/score-card";
import { BoardroomRadarChart } from "@/components/shared/radar-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SwotGrid } from "@/features/reports/components/swot-grid";
import { RiskMatrix } from "@/features/reports/components/risk-matrix";
import { reportDetails } from "@/features/reports/mock";

const verdictTone = { "Strong buy": "success", Conditional: "warning", Pass: "destructive" } as const;

export function generateStaticParams() {
  return Object.keys(reportDetails).map((id) => ({ id }));
}

export default async function ReportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const report = reportDetails[id];
  if (!report) notFound();

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={report.industry}
        title={report.startupName}
        description={report.oneLiner}
        action={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="size-3.5" />
              Share
            </Button>
            <Button size="sm">
              <Download className="size-3.5" />
              Export PDF
            </Button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="flex flex-col items-center justify-center gap-4 p-6">
          <ScoreCard label="Investment score" score={report.investmentScore} size="lg" tone="brass" />
          <Badge tone={verdictTone[report.verdict]}>{report.verdict}</Badge>
          <p className="text-center text-xs text-muted-foreground">Generated {report.generatedAt}</p>
        </Card>

        <Card className="p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-base">Executive summary</CardTitle>
          </CardHeader>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">{report.executiveSummary}</p>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {report.financials.map((item) => (
          <MetricCard key={item.label} label={item.label} value={item.value} />
        ))}
      </div>

      <BoardroomRadarChart
        title="Evaluation by dimension"
        description="Scored 0–100 by the board across five weighted criteria"
        data={report.dimensions}
        series={[{ key: "score", label: report.startupName }]}
      />

      <SwotGrid swot={report.swot} />

      <RiskMatrix risks={report.risks} />
    </div>
  );
}
