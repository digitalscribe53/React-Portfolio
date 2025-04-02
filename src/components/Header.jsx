import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-name-link">
          <h1 className="header-name">Kent Ball</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;