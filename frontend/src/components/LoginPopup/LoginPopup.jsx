import React, { useContext } from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const {url,setToken} = useContext(StoreContext);

  //  const [currState, setCurrState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      let newUrl = url;
      if (currState === "login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
  
      const response = await axios.post(newUrl, data);
      console.log("Response from server:", response);
      if (response.status === 200) {
        toast.success(response.data.message);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        setData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(response.data.message);
        console.log("Backend responded with success=false:", response.data);
      }
    } catch (error) {
      console.error("Axios POST failed:", error);
      toast.error("Network or server error");
    }
  };
  

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="  login-popup-container">
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
            <input
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              type="text"
              placeholder="your name"
              required
            />
          )}

          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            placeholder="your email"
            required
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            name="password"
            placeholder="your passowrd"
            required
          />
        </div>
        <button type="sumbit">
          {currState === "Sign Up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            create a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
