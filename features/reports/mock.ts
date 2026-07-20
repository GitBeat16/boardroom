import type { ReportSummary, ReportDetail } from "./types";

export const reportSummaries: ReportSummary[] = [
  {
    id: "mtg_fieldnote",
    startupName: "Fieldnote",
    oneLiner: "Field-service scheduling for utilities",
    industry: "Developer tools",
    investmentScore: 82,
    verdict: "Strong buy",
    generatedAt: "Jul 17, 2026",
  },
  {
    id: "mtg_marrow",
    startupName: "Marrow Health",
    oneLiner: "Async triage for rural clinics",
    industry: "Healthcare",
    investmentScore: 64,
    verdict: "Conditional",
    generatedAt: "Jul 17, 2026",
  },
  {
    id: "mtg_greenline",
    startupName: "Greenline",
    oneLiner: "Carbon accounting for mid-market manufacturers",
    industry: "Climate & energy",
    investmentScore: 45,
    verdict: "Pass",
    generatedAt: "Jul 16, 2026",
  },
  {
    id: "mtg_ledgerly",
    startupName: "Ledgerly",
    oneLiner: "Automated bookkeeping for creator LLCs",
    industry: "Fintech",
    investmentScore: 71,
    verdict: "Conditional",
    generatedAt: "Jul 14, 2026",
  },
  {
    id: "mtg_hemlock",
    startupName: "Hemlock",
    oneLiner: "Inventory forecasting for independent grocers",
    industry: "Consumer",
    investmentScore: 58,
    verdict: "Conditional",
    generatedAt: "Jul 11, 2026",
  },
  {
    id: "mtg_northbeam",
    startupName: "Northbeam Robotics",
    oneLiner: "Warehouse pick-and-pack automation retrofit kits",
    industry: "Logistics & supply chain",
    investmentScore: 88,
    verdict: "Strong buy",
    generatedAt: "Jul 9, 2026",
  },
];

export const reportDetails: Record<string, ReportDetail> = {
  mtg_fieldnote: {
    ...reportSummaries[0]!,
    executiveSummary:
      "Fieldnote replaces spreadsheet-based dispatch for regional utility contractors. The board's primary concern — CAC payback at 14 months — was resolved after the founder revised pricing toward usage-based tiers. Six of eight executives voted yes.",
    swot: [
      { title: "Strengths", items: ["96% weekly retention among pilot contractors", "Founder has 6 years in the utility contracting space"] },
      { title: "Weaknesses", items: ["Single-region pilot, unproven multi-state compliance", "No dedicated sales hire yet"] },
      { title: "Opportunities", items: ["Utility infrastructure spend rising nationally", "Clear upsell path into billing and invoicing"] },
      { title: "Threats", items: ["Incumbent field-service platforms adding utility-specific modules", "Long enterprise sales cycles at larger utilities"] },
    ],
    dimensions: [
      { dimension: "Team", score: 84 },
      { dimension: "Market size", score: 68 },
      { dimension: "Product", score: 79 },
      { dimension: "Traction", score: 88 },
      { dimension: "Moat", score: 61 },
    ],
    risks: [
      { risk: "Multi-state regulatory variance", likelihood: "Medium", impact: "Medium" },
      { risk: "Single founder-led sales motion", likelihood: "High", impact: "Medium" },
      { risk: "Incumbent feature parity within 12 months", likelihood: "Medium", impact: "High" },
    ],
    financials: [
      { label: "MRR", value: "$38.2K" },
      { label: "CAC payback", value: "9 mo" },
      { label: "Gross margin", value: "74%" },
      { label: "Runway", value: "17 mo" },
    ],
  },
  mtg_marrow: {
    ...reportSummaries[1]!,
    executiveSummary:
      "Marrow Health lets rural clinics triage patients asynchronously between visiting physician rotations. The board split 5–3: strong clinical need, but reimbursement pathway is still unproven outside two pilot states.",
    swot: [
      { title: "Strengths", items: ["Partnered with 3 rural health networks", "Clinical advisor board includes 2 practicing physicians"] },
      { title: "Weaknesses", items: ["Reimbursement codes not yet confirmed in 4 target states", "Long clinic procurement cycles"] },
      { title: "Opportunities", items: ["Federal rural health funding increasing", "Expansion path into tele-specialist referrals"] },
      { title: "Threats", items: ["State-by-state telehealth regulation changes", "Larger telehealth platforms entering rural segment"] },
    ],
    dimensions: [
      { dimension: "Team", score: 74 },
      { dimension: "Market size", score: 71 },
      { dimension: "Product", score: 66 },
      { dimension: "Traction", score: 52 },
      { dimension: "Moat", score: 58 },
    ],
    risks: [
      { risk: "Reimbursement pathway unconfirmed", likelihood: "High", impact: "High" },
      { risk: "Clinic procurement cycle length", likelihood: "Medium", impact: "Medium" },
    ],
    financials: [
      { label: "MRR", value: "$11.4K" },
      { label: "CAC payback", value: "16 mo" },
      { label: "Gross margin", value: "61%" },
      { label: "Runway", value: "11 mo" },
    ],
  },
  mtg_greenline: {
    ...reportSummaries[2]!,
    executiveSummary:
      "Greenline automates Scope 1–2 carbon reporting for mid-market manufacturers. The board voted 3–5 against, primarily on market timing: mandatory reporting requirements the pitch relies on are not yet finalized in the founder's target states.",
    swot: [
      { title: "Strengths", items: ["Clean integrations with 4 major ERP systems", "Experienced technical team"] },
      { title: "Weaknesses", items: ["Revenue depends on regulation that hasn't passed", "No paying customers outside pilot"] },
      { title: "Opportunities", items: ["EU-style disclosure rules could arrive in more US states", "Insurance industry demand for verified emissions data"] },
      { title: "Threats", items: ["Reporting mandates could be delayed or watered down", "Big-four consultancies bundling similar tooling"] },
    ],
    dimensions: [
      { dimension: "Team", score: 70 },
      { dimension: "Market size", score: 40 },
      { dimension: "Product", score: 62 },
      { dimension: "Traction", score: 22 },
      { dimension: "Moat", score: 35 },
    ],
    risks: [
      { risk: "Regulation timeline slips past runway", likelihood: "High", impact: "High" },
      { risk: "No committed paying customer", likelihood: "High", impact: "High" },
    ],
    financials: [
      { label: "MRR", value: "$2.1K" },
      { label: "CAC payback", value: "—" },
      { label: "Gross margin", value: "58%" },
      { label: "Runway", value: "8 mo" },
    ],
  },
};
