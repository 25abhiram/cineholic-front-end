import React from 'react';
import "../../Navber/Naver";
import './CreateAccount.css';
import avatar from '/avatar1.png'; // Adjust the path according to where the image is located

const CreateAccount: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Display the avatar */}
        <div className="avatar-placeholder">
          <img src={avatar} alt="Avatar" className="avatar-img" />
        </div>
        <input
          type="text"
          placeholder="Username"
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
          placeholder="Email"
          className="input"
        />
        <button className="create-account-button">Create account</button>
      </div>
    </div>
  );
};

export default CreateAccount;
