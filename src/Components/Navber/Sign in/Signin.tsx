import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { signIn } from "../../../api/api"; // Backend API function for sign-in
import "./SignIn.css";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";


const Signin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [generalMessage, setGeneralMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

 
  const { setIsAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignIn = async () => {
    setErrors({ username: "", password: "" }); // Clear previous errors
    setGeneralMessage(""); // Clear any previous messages

    if (!username || !password) {
      setErrors({
        username: username ? "" : "Username is required",
        password: password ? "" : "Password is required",
      });
      return;
    }
    setIsLoading(true); // Start loading
    try {
      const response = await signIn(username, password);
      const token = response.data.token;
      localStorage.setItem("authToken", token); // Save the token
      setIsAuthenticated(true); // Update authentication state
      setGeneralMessage("Sign-in successful!");
      navigate("/Home"); // Navigate to home page on success
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        setGeneralMessage(err.response.data.message); // Handle general errors
      } else {
        setGeneralMessage("Sign-in failed. Please try again.");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="avatar-placeholder">
          <img src="/public/avatar1.png" alt="Avatar" />
        </div>
        {generalMessage && <p className="general-message">{generalMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {/* <a href="#" className="forgot-password">
          Forgot password?
        </a> */}
        <button
          className="sign-in-button"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
        <a href="#" className="register-link">
          <Link to="/CreateAccount">Don’t have an account? Register</Link>
        </a>
      </div>
    </div>
  );
};

export default Signin;
