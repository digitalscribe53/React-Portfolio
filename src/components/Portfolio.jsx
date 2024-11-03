import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Tech Blog",
      image: "/images/Tech-Blog-scrnsht.jpeg",
      deployedLink: "https://tech-blog-95af.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/Tech-Blog"
    },
    {
      title: "Book Reviewer App",
      image: "/images/bookreviewer.png",
      deployedLink: "https://book-reviewer-7tpk.onrender.com",
      githubLink: "https://github.com/mirandarb/Book-Reviewer"
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