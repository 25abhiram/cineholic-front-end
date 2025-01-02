import React from "react";
import "./Navber.css";
// import logo from "./public/logo.png";
interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo" onClick={() => setCurrentPage("home")}>
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </div> */}
      <div className="navbar-links">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>
          Home
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("signin"); }}>
          Sign In
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("createAccount"); }}>
          Create Account
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("lists"); }}>
          Lists
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("movies"); }}>
          Movies
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("inTheater"); }}>
          Available In Theater
        </a>
      </div>
    </nav>
  );
};

export default Navbar;