import React from "react";

const projects = [
  {
    title: "Sim City",
    description: "A C++-based computational model simulating urban development dynamics through systematic temporal analysis of residential, commercial, and industrial land use categories, integrated with environmental impact assessment of pollution metrics.",
    link: "https://github.com/Moziztheone/Sim_City.git",
  },
  {
    title: "Task Manager App",
    description: "A simple task manager app built using React and Firebase.",
    link: "https://github.com/mosesojo/task-manager",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that fetches real-time weather data using APIs.",
    link: "https://github.com/mosesojo/weather-dashboard",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
