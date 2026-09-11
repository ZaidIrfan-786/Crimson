import React, { useState } from "react";
import "./CSS/LoginPage.css";

import {
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const LoginPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="page">
      <div className={`container ${active ? "active" : ""}`}>
        
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>

            <div className="social-icons">
              <a href="#" className="icons">
                <FaGoogle />
              </a>
              <a href="#" className="icons">
                <FaFacebookF />
              </a>
              <a href="#" className="icons">
                <FaGithub />
              </a>
              <a href="#" className="icons">
                <FaLinkedinIn />
              </a>
            </div>

            <span>Register with E-mail</span>

            <input type="text" placeholder=" Create Username" />
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />

            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form>
            <h1>Log In</h1>

            <div className="social-icons">
              <a href="#" className="icons">
                <FaGoogle />
              </a>
              <a href="#" className="icons">
                <FaFacebookF />
              </a>
              <a href="#" className="icons">
                <FaGithub />
              </a>
              <a href="#" className="icons">
                <FaLinkedinIn />
              </a>
            </div>

            <span>Log In With Username & Password</span>

            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />

            <a href="#">Forget Password?</a>

            <button type="submit">Log In</button>
          </form>
        </div>

        {/* Toggle Section */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>
                Welcome To me <br />
                
              </h1>

              <p>Sign in With ID & Password</p>

              <button
                type="button"
                className="hidden"
                onClick={() => setActive(false)}
              >
                Sign In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1> Create Account </h1>

              <p>
                Join "Code With Patel" to Improve Your Coding Skills
              </p>

              <button
                type="button"
                className="hidden"
                onClick={() => setActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage; 