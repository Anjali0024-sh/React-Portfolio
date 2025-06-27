import React from 'react';
import dashImage from '../assets/Dash.png';
import CalculatorImage from '../assets/Cal.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    image: dashImage,
    title: 'Product visuaization Dashboard',
    description: 'This dashboard allows you to view and compare male and female data trends over time using interactive charts and date filters.',
    tech: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://fanciful-kheer-d92b0a.netlify.app/', 
    githubLink: 'https://github.com/Anjali0024-sh/Moonshot', 
   },
  {
image: CalculatorImage,
    title: 'Calculators',
    description: 'A smart dashboard offering multiple calculators to perform quick and accurate financial, and unit conversions — all in one place.',
    tech: ['HTML','CSS'],
    liveLink: 'https://anjali0024-sh.github.io/Calculators/',
    githubLink: 'https://github.com/Anjali0024-sh/Calculators/deployments/github-pages',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  Source Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;