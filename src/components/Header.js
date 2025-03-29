import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Moses Ojo</h1>
        <p className="header-description">
          Information Technology Student | Aspiring Developer
        </p>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
