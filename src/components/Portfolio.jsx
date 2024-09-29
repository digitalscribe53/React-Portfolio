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
    {
      title: "Book Reviewer App",
      image: "/bookreviewer.png",
      deployedLink: "https://book-reviewer-7tpk.onrender.com",
      githubLink: "https://github.com/mirandarb/Book-Reviewer"
    },
    {
      title: "Employee Tracker App",
      image: "/employeetracker.png",
      deployedLink: "https://drive.google.com/file/d/1lxiRq7z8vzTkgfTCElCj7e5kapEn9oA4/view",
      githubLink: "https://github.com/digitalscribe53/Employee-Tracker"
    },
    {
      title: "Progressive Web App Text Editor",
      image: "/pwa-texteditor.JPG",
      deployedLink: "https://pwa-text-editor-enhq.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/PWA-Text-Editor"
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