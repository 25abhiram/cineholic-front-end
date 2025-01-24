import React from "react";
import "./CreateAccount.css";
import avatar from "/avatar1.png";

interface CreateAccountProps {
  setCurrentPage: (page: string) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ setCurrentPage }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="avatar-placeholder">
          <img src={avatar} alt="Avatar" className="avatar-img" />
        </div>
        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input type="password" placeholder="Confirm Password" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <button className="create-account-button">Create account</button>
        <a
          href="#"
          className="register-link"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("signin");
          }}
        >
          Already have an account? Sign in
        </a>
      </div>
    </div>
  );
};

export default CreateAccount;
