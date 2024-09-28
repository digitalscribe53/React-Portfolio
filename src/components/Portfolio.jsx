import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/project1-image.jpg",
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;