import React from 'react';

const Project = ({ title, image, deployedLink, githubLink, imageLink }) => {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        {/* Add a view icon overlay if imageLink is provided */}
        {imageLink && (
          <a 
            href={imageLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="image-link-overlay"
            title="View full image"
          >
            <span>🔍</span>
          </a>
        )}
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
          {/* Show View Image link if imageLink exists */}
          {imageLink && (
            <a href={imageLink} target="_blank" rel="noopener noreferrer">
              View Full Image
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