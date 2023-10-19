import React, {useState} from 'react';
import {  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText } 
from 'reactstrap';

import logo from "../assets/logo-light.svg";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import './NavigationStyles.css';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

      return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img src={logo} 
                className="logo" 
                width="110px"
                height="auto"
                alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects"><img 
              src={googleplay}
              alt="googleplay-download"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact"><img 
              src={appstore}
              alt="appstore-download"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
      );
    }
    

export default Navigation;