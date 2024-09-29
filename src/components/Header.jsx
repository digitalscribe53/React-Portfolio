import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Kent Ball</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;