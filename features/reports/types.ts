export interface ReportSummary {
  id: string;
  startupName: string;
  oneLiner: string;
  industry: string;
  investmentScore: number;
  verdict: "Strong buy" | "Conditional" | "Pass";
  generatedAt: string;
}

export interface SwotSection {
  title: "Strengths" | "Weaknesses" | "Opportunities" | "Threats";
  items: string[];
}

export interface RiskRow {
  risk: string;
  likelihood: "Low" | "Medium" | "High";
  impact: "Low" | "Medium" | "High";
}

export interface FinancialHighlight {
  label: string;
  value: string;
}

export interface ReportDetail extends ReportSummary {
  executiveSummary: string;
  swot: SwotSection[];
  dimensions: { dimension: string; score: number }[];
  risks: RiskRow[];
  financials: FinancialHighlight[];
}
