import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../assets/logo-light.svg";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import './NavigationStyles.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} 
                className="logo" 
                width="110px"
                height="auto"
                alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">contact us</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link href="#deets"><img 
              src={appstore}
              alt="appstore-download"/></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"><img 
              src={googleplay}
              alt="googleplay-download"/>              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;