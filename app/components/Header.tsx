import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Daniel Allen's Website</Link>
      </div>
      <nav className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/skills" className="nav-link">Skills</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}