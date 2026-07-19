export interface PrdSection {
  id: string;
  title: string;
  content: string;
}

export const prdSections: PrdSection[] = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Build a usage-based pricing tier for Loadbay so take-rate scales with match volume instead of a flat subscription. The board flagged this as the fastest lever to fix CAC payback.",
  },
  {
    id: "problem",
    title: "Problem statement",
    content:
      "Flat subscription pricing under-charges high-volume carriers and over-charges low-volume ones, distorting CAC payback across the customer base.",
  },
  {
    id: "goals",
    title: "Goals",
    content:
      "Cut blended CAC payback from 9 months to under 6. Keep pricing simple enough to explain in one sentence during a sales call.",
  },
  {
    id: "requirements",
    title: "Requirements",
    content:
      "Meter matched loads per carrier account. Support a hybrid base-plus-usage model. Migrate existing subscribers without a forced re-signup.",
  },
  {
    id: "non-goals",
    title: "Non-goals",
    content: "This phase does not cover enterprise custom contracts or multi-entity billing — those stay on the roadmap for Q4.",
  },
  {
    id: "success-metrics",
    title: "Success metrics",
    content: "CAC payback under 6 months within two billing cycles of launch. Less than 3% involuntary churn from the pricing migration.",
  },
];
