import React from "react";

import "./FooterStyles.css";
import Logo from "../assets/eco-route(Light).png";

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
              app by green innovation indonesia
            </div>
          </div>
          <div className="footerCol">
            <div className="footerDivMid">
              <h3>Site Links</h3>
              <h6>News and Notices</h6>
              <h6>App Features</h6>
              <h6>User Reviews</h6>
              <h6>Frequently Asked Questions</h6>
              <a href="/PrivacyPolicy">Privacy Policy</a>
            </div>
          </div>
          <div className="footerCol">
            <div className="footerDivRight">
              <h3>Contacts</h3>
              <h6> Email </h6>
              <a href="http://wa.me/6285236944692"> 
              <h6>Whatsapp</h6>
              </a>
              <a href="https://www.linkedin.com/in/eco-route/">
              <h6> LinkedIn </h6>
              </a>
              <a href="https://www.instagram.com/ecoroute.apps">
              <h6> Instagram </h6>
              </a>
              <a href="https://www.x.com/ecoroute_apps">
              <h6> Twitter </h6>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
