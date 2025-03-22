import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            beatae labore veniam quisquam laborum laboriosam id numquam minus,
            voluptas voluptatem iure eum totam autem eveniet maxime quam
            accusantium! Animi, aliquid.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>privace policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0559518416</li>
            <li>daoudhdj@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> copyright hadjadj daoud reserved</p>
    </div>
  );
};
import "./Footer.css";
import { assets } from "../../assets/assets";
export default Footer;
