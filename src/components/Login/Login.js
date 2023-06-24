import React from "react";
import logo from "./Netflix-logo.png";
import "./Login.css";

function Login() {
  return (
    <div className="login_page">
      <div className="Login_header_components">
        <img className="header_logo" src={logo} alt="Netflix-logo"></img>
        <button className="signup_button">Sign Up</button>
      </div>
      <div className="login_page_gradient" />
      <div className="login_subscription_container">
        <h1 className="login_subscription_heading">See what's next.</h1>
        <h3 className="login_subscription_description">
          WATCH ANYWHERE. CANCEL ANYTIME.
        </h3>
        <form className="login_subcription_form">
          <input
            className="login_form_input"
            placeholder="Email Address"
          ></input>
          <button className="login_form_button">GET STARTED</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
