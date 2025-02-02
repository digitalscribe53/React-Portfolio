import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const textRef = useRef(null);
  const phrases = [
    "Full Stack Developer",
    "Web Designer",
    "Database Engineer",
    "API Integration Specialist"
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (textRef.current) {
        textRef.current.textContent = currentPhrase.substring(0, currentCharIndex);
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at end of typing
        isDeleting = true;
        typingSpeed = 1500; // Wait before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Wait before typing next phrase
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h1 className="professional-title">Hi, I'm Kent.</h1>
        <div className="dynamic-text-container">
          <span className="static-text">I am a </span>
          <span ref={textRef} className="dynamic-text"></span>
          <span className="cursor">|</span>
        </div>
      </div>
    </section>
  );
};

export default Home;