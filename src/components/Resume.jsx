import React from 'react';

const Resume = () => {
  const proficiencies = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "SQL", "RESTful APIs", "Git"
  ];

  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/your/resume.pdf" download>Download Resume</a>
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