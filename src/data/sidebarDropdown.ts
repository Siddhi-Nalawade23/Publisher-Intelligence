export type IconName = "field" | "strategic" | "business" | "editorial";
export interface NavItem {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
}
export const NAV_ITEMS: NavItem[] = [
  { id: "field", title: "Field", subtitle: "Reps & sales leaders", icon: "field" },
  { id: "strategic", title: "Strategic", subtitle: "CEO, strategy, corp dev", icon: "strategic" },
  { id: "business", title: "Business", subtitle: "CFO, finance, pricing", icon: "business" },
  { id: "editorial", title: "Editorial", subtitle: "Editorial & content strategy", icon: "editorial" },
];
export interface FilterField {
  label: string;
  options: string[];
  defaultValue: string;
}
export const SCOPE_FILTERS: Record<string, FilterField[]> = {
  field: [
    {
      label: "INSTITUTION",
      options: ["All institutions", "Iowa State", "UC Davis", "Ohio State", "Georgia State", "Arizona State"],
      defaultValue: "All institutions",
    },
    {
      label: "SUBJECT / DISCIPLINE",
      options: ["All disciplines", "Economics", "Biology", "Nursing", "Psychology"],
      defaultValue: "All disciplines",
    },
    {
      label: "TERM",
      options: ["Fall 2026 in progress", "Spring 2026", "Fall 2025"],
      defaultValue: "Fall 2026 in progress",
    },
    {
      label: "COURSE LEVEL",
      options: ["All courses", "Intro / gateway", "Upper division"],
      defaultValue: "All courses",
    },
  ],
  strategic: [
    {
      label: "INSTITUTION TYPE",
      options: ["All institution types", "R1 universities", "Community colleges", "Regional 4-year"],
      defaultValue: "All institution types",
    },
    {
      label: "SUBJECT / DISCIPLINE",
      options: ["All disciplines", "Economics", "Biology", "Nursing", "Psychology"],
      defaultValue: "All disciplines",
    },
    {
      label: "TERM",
      options: ["Fall 2026 in progress", "Spring 2026", "Fall 2025"],
      defaultValue: "Fall 2026 in progress",
    },
    {
      label: "COURSE LEVEL",
      options: ["All courses", "Intro / gateway", "Upper division"],
      defaultValue: "All courses",
    },
  ],
  business: [
    {
      label: "PUBLISHER",
      options: ["Publisher A", "Publisher B"],
      defaultValue: "Publisher A",
    },
    {
      label: "SUBJECT / DISCIPLINE",
      options: ["All disciplines", "Economics", "Biology", "Nursing", "Psychology"],
      defaultValue: "All disciplines",
    },
    {
      label: "TERM",
      options: ["Fall 2026 in progress", "Spring 2026", "Fall 2025"],
      defaultValue: "Fall 2026 in progress",
    },
    {
      label: "COURSE LEVEL",
      options: ["All courses", "Intro / gateway", "Upper division"],
      defaultValue: "All courses",
    },
  ],
  editorial: [
    {
      label: "PUBLISHER",
      options: ["Publisher A", "Publisher B"],
      defaultValue: "Publisher A",
    },
    {
      label: "SUBJECT / DISCIPLINE",
      options: ["All disciplines", "Economics", "Biology", "Nursing", "Psychology"],
      defaultValue: "All disciplines",
    },
    {
      label: "TERM",
      options: ["Fall 2026 in progress", "Spring 2026", "Fall 2025"],
      defaultValue: "Fall 2026 in progress",
    },
    {
      label: "COURSE LEVEL",
      options: ["All courses", "Intro / gateway", "Upper division"],
      defaultValue: "All courses",
    },
  ],
}