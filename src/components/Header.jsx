import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GRAPHER SHOT.</div>
      <nav className="nav-links">
        <a href="#" className="active">PORTFOLIO</a>
        <a href="#">ABOUT ME</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">PRICE</a>
        <a href="#">CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
