import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <div className="project-links">
          {/* Only render the Deployed App link if a deployedLink exists */}
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed App
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;