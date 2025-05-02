import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebare.css";
import { NavLink } from "react-router-dom";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>ORDERS items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default sidebar;
