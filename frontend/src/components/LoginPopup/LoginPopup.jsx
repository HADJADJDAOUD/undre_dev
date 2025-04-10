import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your passowrd" required />
        </div>
        <button>{currState === "Sign Up" ? "create account" : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            create a new account ? <span  onClick={()=>setCurrState("Sign Up")}  >click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>setCurrState("login")} >Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
