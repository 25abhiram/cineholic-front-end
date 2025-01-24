import React from "react";
import "./SignIn.css";

interface SignInProps {
  setCurrentPage: (page: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ setCurrentPage }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="avatar-placeholder">
          <img src="/public/avatar1.png" alt="Avatar" />
        </div>
        <input type="text" placeholder="Username" className="input" />
        <div className="input-wrapper">
          <input type="password" placeholder="Password" className="input" />
          <span className="show-password"></span>
        </div>
        <button className="sign-in-button">Sign in</button>
        <a
          href="#"
          className="register-link"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("createAccount");
          }}
        >
          Don’t have an account? Register
        </a>
      </div>
    </div>
  );
};

export default SignIn;
