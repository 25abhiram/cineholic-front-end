
import "./SignIn.css";
const Signin = () => {
  return (
    <div className="container">
      
      <div className="card">
        <div className="avatar-placeholder">
          <h1>Sign in</h1>
        {/* <img src="/public/avatar.png" alt="Avatar" />" */}
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input"
        />
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input"
          />
          <span className="show-password"></span>
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <button className="sign-in-button">Sign in</button>
        <a href="#" className="register-link">
          Don’t have an account? Register
        </a>
      </div>
    </div>
  );
};

export default Signin
