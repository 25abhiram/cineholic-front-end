import React, { useState } from "react";
import "./SignIn.css";

interface SignInProps {
  setCurrentPage: (page: string) => void; // To navigate to other pages
}

const SignIn: React.FC<SignInProps> = ({ setCurrentPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    // Mock authentication logic
    if (username === "user" && password === "password") {
      setError(""); // Clear any previous errors
      setCurrentPage("home"); // Redirect to the "Home" page after successful sign-in
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="avatar-placeholder">
          <img src="/public/avatar1.png" alt="Avatar" />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="sign-in-button" onClick={handleSignIn}>
          Sign in
        </button>
        <a
          href="#"
          className="register-link"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("createAccount"); // Navigate to "Create Account" page
          }}
        >
          Don’t have an account? Register
        </a>
      </div>
    </div>
  );
};

export default SignIn;
