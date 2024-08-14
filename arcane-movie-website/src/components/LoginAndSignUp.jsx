import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
       {/* existing structure */}
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
         <div className="pass-input-div">
           <input
             type={showPassword ? "text" : "password"}
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
           />
           {showPassword ? (
             <FaEyeSlash
               className="eye-icon"
               onClick={() => setShowPassword(!showPassword)}
             />
           ) : (
             <FaEye
               className="eye-icon"
               onClick={() => setShowPassword(!showPassword)}
             />
           )}
         </div>
         <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
         {loginError && <p className="login-error">{loginError}</p>}
       </form>
       <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-auth">
         {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
       </button>
     </div>
   </div>
 );
};
export default LoginAndSignUp;
