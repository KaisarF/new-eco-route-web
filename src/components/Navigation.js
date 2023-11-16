import React, {useState} from 'react';
import {   NavLink } from 'react-router-dom';
import {  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

  NavbarText, 
  Button} 
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
                <NavItem className='FeaturesBox'>
                  <NavLink activeClassName="navbar_link-active" className="FeaturesLink" to="/FeaturesPage" >
                    Features
                  </NavLink>
                </NavItem>
                <NavItem className='FAQBox'>
                  <NavLink className="FAQLink" to="/FAQPage">
                    FAQ
                  </NavLink>
                </NavItem>
              </Nav>
              {/*}
              <img 
              src={googleplay}
              alt="googleplay-download"/>
              <img 
              src={appstore}
              alt="appstore-download"/>
              */}
              <Button>
              Join our Beta Test
              </Button>
            </Collapse>
          </Navbar>
        </>
      );
    }
    

export default Navigation;