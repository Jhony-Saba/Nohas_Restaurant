import "./Header.module.css";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Noha&apos;s Kitchen</h1>
        <p>HOMEMADE WITH LOVE</p>
      </div>
      <div className="navigation">{children}</div>
      <a className="orderButton" href="#">
        Order Now
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}