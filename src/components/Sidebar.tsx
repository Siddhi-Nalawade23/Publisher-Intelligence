import type { NavItem } from "../types/types";
import NavIcon from "./Navicons";
import "./Sidebar.css"

const NAV_ITEMS: NavItem[] = [
  { id: "field", title: "Field", subtitle: "Reps & sales leaders", icon: "field" },
  { id: "strategic", title: "Strategic", subtitle: "CEO, strategy, corp dev", icon: "strategic" },
  { id: "business", title: "Business", subtitle: "CFO, finance, pricing", icon: "business" },
  { id: "editorial", title: "Editorial", subtitle: "Editorial & content strategy", icon: "editorial" },
];

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ activeId, onSelect }: SidebarProps) {
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

      <div className="field-group">
        <label>INSTITUTION</label>
        <select className="field-select" defaultValue="All institutions">
          <option>All institutions</option>
          <option>Iowa State</option>
          <option>UC Davis</option>
          <option>Ohio State</option>
          <option>Georgia State</option>
          <option>Arizona State</option>
        </select>
      </div>

      <div className="field-group">
        <label>SUBJECT / DISCIPLINE</label>
        <select className="field-select" defaultValue="All disciplines">
          <option>All disciplines</option>
          <option>Economics</option>
          <option>Biology</option>
          <option>Nursing</option>
          <option>Psychology</option>
        </select>
      </div>

      <div className="field-group">
        <label>TERM</label>
        <select className="field-select" defaultValue="Fall 2026 in progress">
          <option>Fall 2026 in progress</option>
          <option>Spring 2026</option>
          <option>Fall 2025</option>

        </select>
      </div>

      <div className="field-group">
        <label>COURSE LEVEL</label>
        <select className="field-select" defaultValue="All courses">
          <option>All courses</option>
          <option>Intro / gateway</option>
          <option>Upper division</option>

        </select>
      </div>

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