import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="main-nav">
      {/* Hamburger icon for mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''} 
            onClick={closeMenu}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/resume" 
            className={location.pathname === '/resume' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;