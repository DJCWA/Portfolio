import Link from 'next/link';
import './Resume.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Daniel Allen</h1>
        <p>Oshawa, Ontario | (647) 960-0155 | Daniel082198@gmail.com</p>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Aspiring IT student with a strong foundation in computer programming and currently completing a graduate certificate in
          cloud computing solutions. Proficient in multiple programming languages and cloud
          platforms, with hands-on experience in development environments and cloud-based tools.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid-resume">
          <div>
            <p><strong>Programming Languages:</strong> Python, Java, C++, JavaScript</p>
            <p><strong>Web Development:</strong> HTML, CSS, React.js</p>
            <p><strong>Database Management:</strong> SQL, MySQL</p>
          </div>
          <div>
            <p><strong>Cloud Solutions:</strong> AWS, GCP, Azure</p>
            <p><strong>Tools & Technologies:</strong> Git, GitHub, Visual Studio Code</p>
            <p><strong>Operating Systems:</strong> Windows, Linux</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Cloud Computing Graduate Certificate</h3>
          <p>Durham College - Oshawa | May 2025 - January 2026</p>
        </div>
        <div className="education-item">
          <h3>Computer Programmer Diploma</h3>
          <p>Durham College - Oshawa | September 2018 - January 2024</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <Link href="/poker-details" className="project-item-link">
          <div className="project-item">
            <h3>Poker Game</h3>
            <p><strong>Technologies:</strong> C#, Windows Forms, Visual Studio</p>
          </div>
        </Link>
        <Link href="/hospital-database-details" className="project-item-link">
          <div className="project-item">
            <h3>Hospital Database Design</h3>
            <p><strong>Technologies:</strong> SQL, MySQL</p>
          </div>
        </Link>
      </section>

      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="work-item">
          <h3>Representative</h3>
          <p>Orange Theory Fitness - Oshawa, Ontario | June 2018 to September 2018</p>
          <ul>
            <li>Delivered exceptional customer experiences, helping increase membership retention.</li>
            <li>Executed targeted social media and digital marketing campaigns.</li>
            <li>Partnered with local retailers to enhance brand visibility.</li>
          </ul>
        </div>
        <div className="work-item">
          <h3>Crew Member</h3>
          <p>Burger King - Oshawa, Ontario | June 2021 to current</p>
          <ul>
            <li>Collaborated in a high-volume team environment to ensure timely and accurate food service.</li>
            <li>Maintained strict quality control standards, ensuring every order met customer expectations.</li>
            <li>Thrived under pressure by consistently meeting fast-paced service targets.</li>
          </ul>
        </div>
      </section>

      <div className="download-button-container">
        <a href="/Daniel Allen Resume.pdf" download className="download-button">Download Full Resume</a>
      </div>
    </div>
  );
}
