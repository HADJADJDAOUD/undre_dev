import React, { Profiler, useContext } from "react";
import "./Navbar.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext";
const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount , token, setToken} = useContext(StoreContext); 
  
  const [menu, setMenu] = useState("home");
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    Navigate("/");
  }
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount()==0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>signin</button>: <div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <div className="nav-profile-dropdown">
            
            <ul>
              <li onClick={()=>navigate('/myorders')} ><img src={assets.bag_icon} alt="" />Orders</li>
              <hr />
              <li onClick={logout}  > <img src={assets.logout_icon} alt="" />Logout</li>
            </ul>
            
            
          </div>
        </div> }
        
      </div>
    </div>
  );
};

export default Navbar;
