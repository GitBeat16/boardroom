import { SectionHeader } from "@/components/shared/section-header";
import { MarketSizeChart } from "@/features/market-research/components/market-size-chart";
import { MarketTrendChart } from "@/features/market-research/components/market-trend-chart";
import { CompetitorMatrix } from "@/features/market-research/components/competitor-matrix";

export default function MarketResearchPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Intelligence"
        title="Market research"
        description="Sizing, growth, and competitors, cross-checked by the Research Agent against independent sources."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <MarketSizeChart />
        <MarketTrendChart />
      </div>
      <CompetitorMatrix />
    </div>
  );
}
