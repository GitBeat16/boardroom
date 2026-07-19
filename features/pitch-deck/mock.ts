export interface DeckSlide {
  id: string;
  index: number;
  title: string;
  bullets: string[];
}

export const deckSlides: DeckSlide[] = [
  { id: "s1", index: 1, title: "Loadbay", bullets: ["Freight-matching marketplace for regional carriers", "Seed · Raising $1.8M"] },
  { id: "s2", index: 2, title: "The problem", bullets: ["Regional carriers wait 4+ hours for shipper quotes", "Big brokers price them out of urgent loads"] },
  { id: "s3", index: 3, title: "The solution", bullets: ["Real-time matching engine", "Average time-to-quote: 11 minutes"] },
  { id: "s4", index: 4, title: "Market size", bullets: ["$4.2B TAM in regional freight brokerage", "$480M SAM in target corridor states"] },
  { id: "s5", index: 5, title: "Traction", bullets: ["$38.2K MRR, up 14% month over month", "96% weekly retention among pilot carriers"] },
  { id: "s6", index: 6, title: "Business model", bullets: ["8% take rate per matched load", "Expanding to invoicing and factoring"] },
  { id: "s7", index: 7, title: "Team", bullets: ["Founder: 6 years in utility & freight contracting", "2 engineers, 1 ops lead"] },
  { id: "s8", index: 8, title: "The ask", bullets: ["Raising $1.8M seed", "18 months runway to Series A metrics"] },
];
