import React from "react";

import logo from "../assets/Logo.png";
import illustration from "../assets/illustration.png";
import LoginForm from "../components/Login-form";
import appstore from "../assets/appstore.png";

const LoginPage: React.FC = () => {
  return (
    <div className="body">
      <div className="illustrations">
        <img src={logo} alt="" id="logo" />
        <img src={illustration} alt="" id="illustration" />
      </div>

      <div className="log-in">
        <p id="login-main-text">Log in to your account</p>
        <span id="main-sub-text">
          <p>One account for everything you do with Proof.</p>
          <p>Sign, verify, or connect with the e-Sumpah Network.</p>
        </span>
        <LoginForm></LoginForm>
        <span id="login-sub-text">
          <p>If you are not registered, </p>
          <p>Download Mobile App and Sign-up with us.</p>
        </span>
        <img id="appstore" src={appstore} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
