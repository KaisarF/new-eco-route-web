import React, {useState} from 'react';
import {   NavLink } from 'react-router-dom';
import {  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

  NavbarText} 
from 'reactstrap';
import Button from 'react-bootstrap/Button';

import logo from "../assets/logo-light.svg";

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
                width="50vw"
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
              <Button variant='success' href="https://bit.ly/UnduhEcoRoute">
              TRY OUR APPLICATION
              </Button>
            </Collapse>
          </Navbar>
        </>
      );
    }
    

export default Navigation;