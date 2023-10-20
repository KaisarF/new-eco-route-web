import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                  <NavLink href="/features/">
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contacts/">
                    FAQ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contacts/">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <img 
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