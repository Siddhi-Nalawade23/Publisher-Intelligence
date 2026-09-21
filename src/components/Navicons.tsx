import type { ReactElement } from "react";
import type { NavItem } from "../types/types";
import "./Navicons.css"
import "tailwindcss";
const icons: Record<NavItem["icon"], ReactElement> = {
  field: (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  strategic: (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  business: (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  editorial: (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 4h13l3 3v13H4z" />
      <path d="M8 4v6l3-2 3 2V4" />
    </svg>
  ),
};

export default function NavIcon({ name }: { name: NavItem["icon"] }) {
  return <span className="nav-icon">{icons[name]}</span>;
}