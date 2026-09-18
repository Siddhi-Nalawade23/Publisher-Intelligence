interface HeaderProps {
  productName: string;
  subtitle: string;
  badgeLabel: string;
  userInitials: string;
}
import "./Header.css"
export default function Header({
  productName,
  subtitle,
  badgeLabel,
  userInitials,
}: HeaderProps) 

{
  return (
    <header className="header">
      <div className="header-left">
        <span className="product-name">{productName}</span>
        <span className="divider">|</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <div className="header-right">
        <span className="straw-man-badge">{badgeLabel}</span>
        <div className="avatar">{userInitials}</div>
      </div>
    </header>
  );
}