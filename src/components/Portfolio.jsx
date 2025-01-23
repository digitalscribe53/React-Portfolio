import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Movie Ratings App",
      image: "/images/movie-ratings-app-scrnshot.JPG",
      deployedLink: "https://movie-ratings.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/movie-ratings-react"
    },
    {
      title: "Google Books App",
      image: "/images/googlebooksapp-scrnshot.JPG",
      deployedLink: "https://googlebooks-app.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/Googlebooks-App"
    },
    {
      title: "Job Board App",
      image: "/images/job-board-app.png",
      deployedLink: "https://neighborhood-jobs.onrender.com/",
      githubLink: "https://github.com/mancillh/Job-Board"
    },
    {
      title: "Progressive Web App Text Editor",
      image: "/images/pwa-texteditor.JPG",
      deployedLink: "https://pwa-text-editor-enhq.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/PWA-Text-Editor"
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
      <h2 className="page-title">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;