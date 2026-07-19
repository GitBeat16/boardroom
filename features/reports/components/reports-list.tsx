"use client";

import { useMemo, useState } from "react";
import { Search, FileSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/shared/empty-state";
import { ReportCard } from "@/features/reports/components/report-card";
import { reportSummaries } from "@/features/reports/mock";

export function ReportsList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return reportSummaries;
    return reportSummaries.filter(
      (r) => r.startupName.toLowerCase().includes(q) || r.industry.toLowerCase().includes(q) || r.oneLiner.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by startup, industry, or one-liner…"
        startAdornment={<Search />}
        className="max-w-md"
      />

      {filtered.length === 0 ? (
        <EmptyState icon={FileSearch} title="No reports match that search" description="Try a different startup name or industry." />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
