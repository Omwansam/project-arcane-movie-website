import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./LoginAndSignUp.css";

const LoginAndSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
//   const [loginError, setLoginError] = useState("");
//   const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="auth-main">
      <div className="auth-container">
        <h2>{isSignUp ? "Create an Account" : "Welcome back!"}</h2>
        <p>{isSignUp ? "Please enter your details to sign up" : "Please enter your details to log in"}</p>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
        </form>
        <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-auth">
          {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
