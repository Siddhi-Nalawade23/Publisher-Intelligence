import type { NavItem } from "../types/types";
import NavIcon from "./Navicons";
import "./Sidebar.css"
import { useState } from "react";

const NAV_ITEMS: NavItem[] = [
  { id: "field", title: "Field", subtitle: "Reps & sales leaders", icon: "field" },
  { id: "strategic", title: "Strategic", subtitle: "CEO, strategy, corp dev", icon: "strategic" },
  { id: "business", title: "Business", subtitle: "CFO, finance, pricing", icon: "business" },
  { id: "editorial", title: "Editorial", subtitle: "Editorial & content strategy", icon: "editorial" },
];
interface FilterField {
  label: string;
  options: string[];
  defaultValue: string;
}
const SCOPE_FILTERS: Record<string, FilterField[]> = {
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
};
interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ activeId, onSelect }: SidebarProps) {
  const currentFilters = SCOPE_FILTERS[activeId] ?? [];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">INTELLIGENCE</div>
      </div>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${item.id === activeId ? "active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            <NavIcon name={item.icon} />
            <div>
              <div className="nav-text-title">{item.title}</div>
              <div className="nav-text-sub">{item.subtitle}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="divider-line" /> */}

      <div className="sidebar-section">
        <div className="sidebar-label">SCOPE</div>
      </div>
      {currentFilters.map((filter) => (
        <div className="field-group" key={filter.label}>
          <label>{filter.label}</label>
          <select className="field-select" defaultValue={filter.defaultValue}>
            {filter.options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="sidebar-footer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        How the buckets work
      </div>
    </aside>
  );
}