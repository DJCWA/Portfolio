import "./Portfolio.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1 className="hero-title">Daniel Allen</h1>
        <p className="hero-subtitle">Aspiring Cloud Practitioner & Software Developer</p>
        <Link href="/contact" className="hero-cta">Get in Touch</Link>
      </header>

      <main>
        <section className="works-grid">
          <Link href="/poker-details" passHref className="work-item">
            <img src="/poker thumbnail.png" alt="Poker Game Thumbnail" className="work-item-image" />
            <div className="work-item-content">
              <h3 className="work-item-title">Poker Game</h3>
              <p className="work-item-description">
                A single-player poker game with two variations: Texas Hold 'em and Five Card Draw.
              </p>
            </div>
          </Link>
          <Link href="/hospital-database-details" passHref className="work-item">
            <img src="/database-icon.svg" alt="Hospital Database Design Thumbnail" className="work-item-image work-item-image--icon" />
            <div className="work-item-content">
              <h3 className="work-item-title">Hospital Database Design</h3>
              <p className="work-item-description">
                A relational database schema for a hospital, designed for clarity, normalization, and functionality.
              </p>
            </div>
          </Link>
          <Link href="/future-projects" passHref className="work-item">
            <div className="work-item-image" style={{ backgroundColor: '#e0e0e0' }}></div>
            <div className="work-item-content">
              <h3 className="work-item-title">Future Projects</h3>
              <p className="work-item-description">
                Future projects will be posted here.
              </p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}