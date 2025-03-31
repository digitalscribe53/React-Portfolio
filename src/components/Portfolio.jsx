import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Wordle6 App",
      image: "/images/wordle6-pro-pic.JPG",
      deployedLink: "https://wordle6-app.netlify.app/",
      githubLink: "https://github.com/digitalscribe53/Wordle6"
    },
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