export interface Segment {
  key: string;
  value: number;
  colorClass: string;
}

export interface AttritionEntry {
  label: string;
  lost: number;
  statusTag: string;
  segments: Segment[];
}

export const attritionData: AttritionEntry[] = [
  {
    label: "All disciplines",
    lost: 91,
    statusTag: "20% unexplained",
    segments: [
      { key: "comp", value: 34, colorClass: "seg-comp" },
      { key: "cyan", value: 19, colorClass: "seg-cyan" },
      { key: "slate", value: 16, colorClass: "seg-slate" },
      { key: "oer", value: 11, colorClass: "seg-oer" },
      { key: "unknown", value: 20, colorClass: "seg-unknown" },
    ],
  },
  {
    label: "Economics",
    lost: 24,
    statusTag: "Sections shrinking",
    segments: [
      { key: "comp", value: 29, colorClass: "seg-comp" },
      { key: "cyan", value: 14, colorClass: "seg-cyan" },
      { key: "slate", value: 31, colorClass: "seg-slate" },
      { key: "oer", value: 9, colorClass: "seg-oer" },
      { key: "unknown", value: 17, colorClass: "seg-unknown" },
    ],
  },
  {
    label: "Biology",
    lost: 24,
    statusTag: "Open/OER pressure",
    segments: [
      { key: "comp", value: 41, colorClass: "seg-comp" },
      { key: "cyan", value: 12, colorClass: "seg-cyan" },
      { key: "slate", value: 11, colorClass: "seg-slate" },
      { key: "oer", value: 19, colorClass: "seg-oer" },
      { key: "unknown", value: 17, colorClass: "seg-unknown" },
    ],
  },
  {
    label: "Psychology",
    lost: 24,
    statusTag: "26% unexplained",
    segments: [
      { key: "comp", value: 38, colorClass: "seg-comp" },
      { key: "cyan", value: 22, colorClass: "seg-cyan" },
      { key: "slate", value: 9, colorClass: "seg-slate" },
      { key: "oer", value: 5, colorClass: "seg-oer" },
      { key: "unknown", value: 26, colorClass: "seg-unknown" },
    ],
  },
  {
    label: "Nursing",
    lost: 24,
    statusTag: "Programme changes",
    segments: [
      { key: "comp", value: 27, colorClass: "seg-comp" },
      { key: "cyan", value: 33, colorClass: "seg-cyan" },
      { key: "slate", value: 13, colorClass: "seg-slate" },
      { key: "oer", value: 6, colorClass: "seg-oer" },
      { key: "unknown", value: 21, colorClass: "seg-unknown" },
    ],
  },
];