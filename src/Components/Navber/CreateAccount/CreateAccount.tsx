import React from 'react';
import  "../../Navber/Naver";
import './CreateAccount.css';

const CreateAccount: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="avatar-placeholder"></div>
        <input
          type="text"
          placeholder="User Name"
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="input"
        />
        <button className="create-account-button">Create account</button>
      </div>
    </div>
  );
};

export default CreateAccount;
