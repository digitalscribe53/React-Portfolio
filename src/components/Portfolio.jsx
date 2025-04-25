import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
        title: "Movie Ratings Website",
        image: "/images/movie-ratings-app-scrnshot.JPG",
        deployedLink: "https://movie-ratings.onrender.com/",
        githubLink: "https://github.com/digitalscribe53/movie-ratings-react"
    },
    {
        title: "Job Board Website",
        image: "/images/job-board-app.png",
        deployedLink: "https://neighborhood-jobs.onrender.com/",
        githubLink: "https://github.com/mancillh/Job-Board"
    },
    {
        title: "Social Networking API",
        image: "/images/api-endpoints-visualization.jpg",
        imageLink: "/images/api-endpoints-visualization.jpg",
        githubLink: "https://github.com/digitalscribe53/Social-Network-API"
    },
    {
      title: "Google Books App",
      image: "/images/googlebooksapp-scrnshot.JPG",
      deployedLink: "https://googlebooks-app.onrender.com/",
      githubLink: "https://github.com/digitalscribe53/Googlebooks-App"
    },
    {
        title: "Wordle6 Game",
        image: "/images/wordle6-pro-pic.JPG",
        deployedLink: "https://wordle6-app.netlify.app/",
        githubLink: "https://github.com/digitalscribe53/Wordle6"
    }
     
  ];

  return (
    <section className="portfolio">
      <h2 className="page-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;