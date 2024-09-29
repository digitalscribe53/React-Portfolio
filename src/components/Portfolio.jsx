import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Tech Blog",
      image: "/Tech-Blog-scrnsht.jpeg",
      deployedLink: "https://tech-blog-95af.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/Tech-Blog"
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
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