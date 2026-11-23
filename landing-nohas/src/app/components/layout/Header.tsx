import "./Header.module.css";
import { siteConfig } from "@/config/siteConfig";
export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>{siteConfig.brand.name}</h1>
        <p>{siteConfig.brand.slogan}</p>
      </div>
      <div className="navigation">{children}</div>
      <a className="orderButton" href="#">
        {siteConfig.button.orderNow}
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}