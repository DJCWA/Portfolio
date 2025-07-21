import './HospitalDatabaseDetails.css';

export default function HospitalDatabaseDetails() {
  return (
    <div className="hospital-database-details-container">
      <h1>Hospital Database Design – Database Management Course</h1>

      <section className="project-detail-section">
        <h2>Overview</h2>
        <p>
          This project involved designing and implementing a new adaptive database system for Mountainview Community Hospital.
          The goal was to address limitations of their previous system, including the lack of real-time data access, inefficient cost tracking,
          and inflexible reporting requirements.
        </p>
      </section>

      <section className="project-detail-section">
        <h2>Technologies Used</h2>
        <p>SQL, MySQL</p>
      </section>

      <section className="project-detail-section">
        <h2>Key Features and Contributions</h2>
        <ul>
          <li>Designed a relational database schema focusing on clarity, normalization, and functionality.</li>
          <li>Created and structured multiple interlinked tables (patients, doctors, appointments, treatments, etc.) using primary and foreign keys.</li>
          <li>Ensured referential integrity and optimized query logic for realistic hospital management scenarios.</li>
          <li>Developed features for recording patient information, lab results, treatments, and creating invoices.</li>
          <li>Implemented various reports including patient reports, physician reports, daily revenue, room usage, and patient bills.</li>
          <li>Demonstrated strong understanding of database architecture and relationship modeling.</li>
        </ul>
      </section>

      <section className="project-detail-section">
        <h2>Project Details and Diagrams</h2>
        <p>
          For a comprehensive understanding of the project's design and implementation, including detailed System Boundary,
          User Views, 3NF Design, and Data Dictionary diagrams, please download the full report:
        </p>
        <a href="/Database Report.pdf" download className="download-button">Download Database Report PDF</a>
      </section>

      <section className="project-detail-section">
        <h2>Supporting Images</h2>
        <p>Here are some supporting diagrams from the project:</p>
        <img src="/Diagram.png" alt="Database Diagram" />
        <img src="/User Views.png" alt="User Views Diagram" />
      </section>
    </div>
  );
}