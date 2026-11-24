import  "./NavBar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="nav">
      <Link href="/Home">Home</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/Story">Our Story</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export { NavBar };