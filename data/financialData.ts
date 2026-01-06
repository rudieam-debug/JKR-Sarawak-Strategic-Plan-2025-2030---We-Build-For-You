import type { FinancialSummary, ThrustFinancials } from '../types';

export const financialSummaryData: FinancialSummary = {
  title: "Financial Performance Overview",
  subtitle: "Tracking budget allocation and spending across all strategic thrusts to ensure fiscal responsibility and value for money.",
  budget: 10000000,
  spending: 2970000,
};

export const thrustFinancialsData: ThrustFinancials[] = [
  { id: 1, thrustId: 1, thrustTitle: "Environmental Sustainability", budget: 833333, spending: 250000 },
  { id: 2, thrustId: 2, thrustTitle: "Risk and Resilience Management", budget: 625000, spending: 250000 },
  { id: 3, thrustId: 3, thrustTitle: "Spatial Planning and Regional Connectivity", budget: 1875000, spending: 375000 },
  { id: 4, thrustId: 4, thrustTitle: "Smart and Efficient Project Delivery", budget: 1041667, spending: 260000 },
  { id: 5, thrustId: 5, thrustTitle: "Smart and Efficient Asset Management", budget: 916667, spending: 320000 },
  { id: 6, thrustId: 6, thrustTitle: "Innovation and Technology Integration", budget: 750000, spending: 375000 },
  { id: 7, thrustId: 7, thrustTitle: "Social Responsibility and Inclusion", budget: 625000, spending: 125000 },
  { id: 8, thrustId: 8, thrustTitle: "Stakeholder Engagement and Public Confidence", budget: 416667, spending: 165000 },
  { id: 9, thrustId: 9, thrustTitle: "Workforce Development and Competency Building", budget: 500000, spending: 150000 },
  { id: 10, thrustId: 10, thrustTitle: "Governance and Ethical Practices", budget: 541667, spending: 240000 },
  { id: 11, thrustId: 11, thrustTitle: "Financial and Resource Optimization", budget: 1041666, spending: 210000 },
  { id: 12, thrustId: 12, thrustTitle: "Knowledge Sharing and Global Benchmarking", budget: 833333, spending: 250000 },
];
