import React from 'react';

const Resume = () => {
  const proficiencies = [
    "JavaScript(ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "React", "Node.js",
    "Express.js", "PostgreSQL", "MongoDB", "Sequelize ORM", "RESTful APIs", "Apollo GraphQL", "MVC Architecture", "Git and Version Control"
  ];

  return (
    <section className="resume">
      <h2 className="page-title">Resume</h2>
      <div className="download-link">
      <a href="/Kent Ball Resume 2025.pdf" download>Download Resume as PDF</a>
      </div>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;