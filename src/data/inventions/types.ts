export type InventionImage = {
  src?: string;
  alt: string;
  caption: string;
  creator?: string;
  sourceName: string;
  sourceUrl?: string;
  licence: string;
  credit: string;
  kind: "historical" | "modern" | "diagram" | "illustration";
};

export type InventionPerson = {
  name: string;
  years: string;
  country: string;
  role: string;
  biography: string;
};

export type InventionSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  topic: string;
  early: string;
  modern: string;
};

export type Reference = {
  title: string;
  organization: string;
  url: string;
  note?: string;
};

export type Invention = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  historicalPeriod: string;
  importantDates: string[];
  inventors: InventionPerson[];
  contributors: InventionPerson[];
  countries: string[];
  heroImage: InventionImage;
  historicalImages: InventionImage[];
  modernImages: InventionImage[];
  diagram: InventionImage;
  overview: InventionSection;
  mainUses: string[];
  worldBefore: InventionSection;
  originOfIdea: InventionSection;
  firstWorkingVersion: InventionSection;
  workingPrinciple: {
    simple: string;
    detailed: string[];
    sequence: string[];
  };
  components: { name: string; purpose: string }[];
  evolutionTimeline: TimelineItem[];
  comparison: ComparisonRow[];
  historicalImpact: InventionSection;
  modernUse: InventionSection;
  futureDevelopment: InventionSection;
  interestingFacts: string[];
  references: Reference[];
  imageCredits: InventionImage[];
  relatedInventions: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};
