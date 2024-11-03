import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image-container">
          <img src="/images/1000000519.jpg" alt="Kent Ball" className="profile-image" />
        </div>
        <div className="about-text">
          <p>
            Hey- 👋 I'm Kent, a passionate software developer based in Florida, USA.

            I've recently completed a Full-Stack Web Development Bootcamp at the University of Central Florida, which has been a transformative experience both personally and professionally. My journey into technology began in 2020, when I started studying computer science. In 2023, I completed a Masters in Information Technology, and for my final project, I created a comprehensive database of drug treatment centers in Florida using MS SQL Server. This project opened my eyes to how technology can be leveraged to solve real-world problems, and it sparked my interest in learning more dynamic, in-demand technologies.

            To dive deeper, I enrolled in a coding bootcamp, where I expanded my skills with technologies like JavaScript, Node.js, MongoDB, PostgreSQL, Express.js, React.js and more. Throughout the bootcamp, I worked on several exciting projects, including a Book Reviewer App, a Tech Blog, a Social Network API, and an E-Commerce Back End—each showcasing my ability to apply these technologies to build functional, scalable solutions.

            With the bootcamp completed, I'm excited to embark on my next chapter as a full-time software developer. I'm eager to continue building applications that make an impact and to explore new challenges in the ever-evolving world of tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;