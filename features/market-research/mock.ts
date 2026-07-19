export interface MarketSizeSlice {
  name: string;
  value: number;
}

export interface Competitor {
  name: string;
  segment: string;
  funding: string;
  strength: "Low" | "Medium" | "High";
}

export interface TrendPoint {
  year: string;
  marketSize: number;
}

export const marketSizing: MarketSizeSlice[] = [
  { name: "SOM — Serviceable obtainable", value: 60 },
  { name: "SAM — Serviceable addressable", value: 480 },
  { name: "TAM — Total addressable", value: 4200 },
];

export const competitors: Competitor[] = [
  { name: "Convoy Freight Co.", segment: "National brokerage", funding: "$260M raised", strength: "High" },
  { name: "RouteWise", segment: "Regional carrier tools", funding: "$18M raised", strength: "Medium" },
  { name: "Haulr", segment: "Owner-operator app", funding: "$4M raised", strength: "Low" },
  { name: "Freightline Direct", segment: "Enterprise shipper software", funding: "$95M raised", strength: "Medium" },
];

export const marketTrend: TrendPoint[] = [
  { year: "2022", marketSize: 3100 },
  { year: "2023", marketSize: 3450 },
  { year: "2024", marketSize: 3780 },
  { year: "2025", marketSize: 3990 },
  { year: "2026", marketSize: 4200 },
];
