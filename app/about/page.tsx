import './About.css';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <Image src="/profile.jfif" alt="Daniel Allen" width={200} height={200} />
        </div>
        <div className="about-text">
          <h2 className="about-name">Daniel Allen</h2>
          <p>
            I am a dedicated and forward-thinking technology professional with a robust foundation in software development and a burgeoning expertise in cloud infrastructure. My academic journey includes a comprehensive diploma in Computer Programming, where I honed my skills from 2018 to 2024.
          </p>
          <p>
            Eager to stay at the forefront of the industry, I am currently expanding my knowledge base by pursuing a specialized program in Cloud Computing. My passion lies in the continuous pursuit of knowledge and the practical application of new technologies. I am enthusiastic about leveraging my skills in both programming and cloud environments to contribute to innovative projects and drive technological advancement.
          </p>
        </div>
      </div>
    </div>
  );
}