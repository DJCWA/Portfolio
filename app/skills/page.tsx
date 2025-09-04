import './Skills.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills",
};

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Cloud Platforms</h2>
          <ul>
            <li>Amazon Web Services (AWS)</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Networking</h2>
          <ul>
            <li>Load Balancers</li>
            <li>Virtual Networks</li>
            <li>Subnets</li>
            <li>NAT Gateways</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Compute</h2>
          <ul>
            <li>Virtual Machines</li>
            <li>Compute Instances</li>
            <li>Auto Scaling</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Security</h2>
          <ul>
            <li>Emphasis on security best practices across all platforms and services.</li>
            <li>Security Groups</li>
            <li>IAM Roles</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Programming</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>C#</li>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Database Management</h2>
          <ul>
            <li>Implementing, creating, viewing, securing, and managing data.</li>
            <li>SQL/MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}