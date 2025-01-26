import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img src="/Images/logo2.png" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/createAccount">Create Account</Link>
        {/* Uncomment if needed */}
        {/* <Link to="/lists">Lists</Link> */}
        <Link to="/movies">Movies</Link>
        <Link to="/inTheater">Available In Theater</Link>
      </div>
    </nav>
  );
};

export default Navbar;
