import React from 'react';
import './Navber.css'

const Navbar: React.FC = () => {
  return (
    <div className="review-container">
      <header className="header">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="SignIn">Sign In</a>
          <a href="#create">Create Account</a>
          <a href="#movies">Movies</a>
          <a href="#lists">Listes</a>
          <a href="#theater">Avallable In Theater</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
