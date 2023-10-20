import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import "./HeaderStyles.css";

const Header = () => {
    return(
        <Container className="headercont" fluid="true">
            <Row>
                <Col
                className="title"
                xs="5"
                >
                <h2>Every. Mile.</h2>
                <h1>Matters.</h1>
                <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>

                <a>
                <img 
                src = { googleplay }
                alt = "google play"/>
                </a>

                <a>
                <img 
                src = { appstore }
                alt = "app store"/>
                </a>

                </Col>
                
                <Col
                className="title-graphic"
                xs="7"
                >
                <div fluid="true">

                <img className="bikebg"
                src={ require("../assets/Browser.png")} 
                alt="browser"
                />
            
                <img className="bike"
                src={ require("../assets/bike.png")} 
                alt="bike"
                />
            
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;