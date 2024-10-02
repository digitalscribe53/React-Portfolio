import React from 'react';

const Resume = () => {
  const proficiencies = [
    "JavaScript(ES6+)", "HTML5", "CSS3", "React.js", "Node.js",
    "Express.js", "MongoDB", "SQL and NoSQL", "RESTful APIs", "MVC Architecture", "Git and Version Control"
  ];

  return (
    <section className="resume">
      <h2 className="page-title">Resume</h2>
      <div className="download-link">
      <a href="/Kent_Ball_Web-Developer-Resume.pdf" download>Download Resume</a>
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