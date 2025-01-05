import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h2></h2>
      <div className="about-content">
        <div className="profile-image-container">
          <img src="/images/1000000519.jpg" alt="Kent Ball" className="profile-image" />
        </div>
        <div className="about-text">
          <p>
            <span className="my-name">Hi, I'm Kent.</span> I love to make things for the web. From building databases to integrating APIs- I enjoy collecting and molding data to display beautifully on web pages and robust applications. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;