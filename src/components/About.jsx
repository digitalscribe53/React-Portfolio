import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h2></h2>
      <div className="about-content">
        <div className="profile-card">
          <img src="/images/Dofoto_profile_pic.png" alt="Kent Ball" className="profile-image" />
          <div className="profile-card-overlay">
          </div>  
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