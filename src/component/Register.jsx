import React, { useState } from "react";
import "../style/Register.css";
import SignUp from "../component/SignUp";
import SignIn from "../component/SignIn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  const handleSignIn = (data) => {
    const { email, password } = data;

    // Validation for SignIn
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }

    // Simulate successful SignIn
    toast.success("Successfully logged in!");
    navigate("/"); // Redirect to Home
  };

  const handleSignUp = (data) => {
    const { username, email, password } = data;

    // Validation for SignUp
    if (!username.trim()) {
      toast.error("Username is required");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Simulate successful SignUp
    toast.success("Account created successfully!");
    setType("signIn"); // Switch to SignIn
  };

  return (
    <div className="RegisterApp">
      <div className={containerClass} id="container">
        <SignUp handleSignUp={handleSignUp} />
        <SignIn handleSignIn={handleSignIn} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="home-btn" id="Home" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
}
