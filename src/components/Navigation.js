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
          <Navbar expand="sm" className="navbar" fixed='top'>
            <NavbarBrand href="/">
                <img src={logo} 
                className="navlogo" 
                width="110px"
                height="auto"
                alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar="true" horizontal="end">
                <NavItem>
                  <NavLink href="/FeaturesPage">
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/FAQPage">
                    FAQ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/ContactsPage">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <img 
              src={googleplay}
              alt="googleplay-download"/>
              <img 
              src={appstore}
              alt="appstore-download"/>
            </Collapse>
          </Navbar>
        </>
      );
    }
    

export default Navigation;