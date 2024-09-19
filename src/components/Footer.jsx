import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterStyles.css";
import Logo from "../assets/logo-light.svg";
import inputLogo from "../assets/inputButton.svg"
const Footer = () => {
  return (
    <div className="footerCont">
    
      <footer>
        <div className="footerRow">
          <div className="footerCol">
            <div className="footerDivLeft">
              <a 
                href="https://www.linkedin.com/in/eco-route/"
                
              >
                <img class=" eco-image" src={Logo} />
              </a><br></br>
              <p>Copyright © 2024 Green Innovation Indonesia</p>
              <p>All rights reserved</p>
              
            </div>
          </div>
          <div className="footerCol">
            <h1>company</h1>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Testimonial</p>
          </div>
          <div className="footerCol">
          <h1>Support</h1>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Status</p>
          </div>
          <div className="footerCol">
            <h1>Stay Up to Date</h1>
            <form className="updateForm">
              <input id="emailAddress" type="email" size="64" maxlength="64" required placeholder="username@gmail.com" className="updateInput"/>
              <button className="updateButton">
                <img src={inputLogo}/>
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
