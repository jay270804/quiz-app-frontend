import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';  // Assuming you create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="brand-name">
        Tech Genie
      </Link>
    </header>
  );
};

export default Header;
