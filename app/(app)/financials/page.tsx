import { SectionHeader } from "@/components/shared/section-header";
import { MetricCard } from "@/components/shared/metric-card";
import { RevenueExpenseChart } from "@/features/financials/components/revenue-expense-chart";
import { CapTable } from "@/features/financials/components/cap-table";
import { financialMetrics } from "@/features/financials/mock";

export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Intelligence"
        title="Financial dashboard"
        description="Unit economics and runway, modeled from the assumptions in your last pitch."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {financialMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} trend={metric.trend} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <RevenueExpenseChart />
        <CapTable />
      </div>
    </div>
  );
}
