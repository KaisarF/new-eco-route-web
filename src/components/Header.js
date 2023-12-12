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
                <h3>
                Mulai bijak dalam berkendara dengan menghitung jejak karbon perjalananmu bersama Eco-Route.
                </h3>
                </div>

                

                </Col>
                
                
            </Row>
        </Container>
    );
}

export default Header;