/* import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Kent Ball</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header; */


import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">Kent Ball</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;