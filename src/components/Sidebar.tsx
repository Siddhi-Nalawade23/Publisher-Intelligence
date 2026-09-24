import NavIcon from "./Navicons";
import "./Sidebar.css";
import { NAV_ITEMS, SCOPE_FILTERS } from "../data/sidebarDropdown";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar() {
   const navigate = useNavigate();
  const location = useLocation();

  const activeId = location.pathname === "/" ? "field" : location.pathname.slice(1);

  const currentFilters = SCOPE_FILTERS[activeId] ?? [];

  const handleSelect = (id: string) => {
    navigate(id === "field" ? "/" : `/${id}`);
  };


  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">INTELLIGENCE</div>
      </div>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="nav-list-item">
            <button
              type="button"
              className={`nav-item ${item.id === activeId ? "active" : ""}`}
              onClick={() => handleSelect(item.id)}
              aria-current={item.id === activeId ? "page" : undefined}
            >
              <NavIcon name={item.icon} />
              <span className="nav-text">
                <span className="nav-text-title">{item.title}</span>
                <span className="nav-text-sub">{item.subtitle}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

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