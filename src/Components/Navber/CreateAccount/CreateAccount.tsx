import React, { useState } from "react";
import { signUp } from "../../../api/api"; // Backend API function for sign-up
import "./CreateAccount.css";

const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [generalMessage, setGeneralMessage] = useState("");

  const handleSignUp = async () => {
    setErrors({ username: "", email: "", password: "", confirmPassword: "" });
    setGeneralMessage("");

    // Client-side validation
    if (!username || !email || !password || !confirmPassword) {
      setErrors({
        username: username ? "" : "Username is required",
        email: email ? "" : "Email is required",
        password: password ? "" : "Password is required",
        confirmPassword: confirmPassword ? "" : "Confirm password is required",
      });
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    try {
      await signUp(username, email, password);
      setGeneralMessage("Account created successfully!");
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        const backendMessage = err.response.data.message;
        if (backendMessage.includes("Username")) {
          setErrors((prev) => ({ ...prev, username: backendMessage }));
        } else if (backendMessage.includes("Email")) {
          setErrors((prev) => ({ ...prev, email: backendMessage }));
        } else {
          setGeneralMessage(backendMessage); // General backend messages
        }
      } else {
        setGeneralMessage("Error creating account. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>
        {generalMessage && <p className="general-message">{generalMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button className="create-account-button" onClick={handleSignUp}>
          Create account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
