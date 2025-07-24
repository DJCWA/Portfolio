'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Daniel Allen's Website</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link href="/about" className="nav-link" onClick={toggleMenu}>About</Link>
        <Link href="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
        <Link href="/resume" className="nav-link" onClick={toggleMenu}>Resume</Link>
        <Link href="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
}