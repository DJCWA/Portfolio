'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? 'header-visible' : 'header-hidden'}`}>
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
