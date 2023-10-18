import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./IntroStyles.css";

const Intro = () => {
    return(
        <>
        <Container fluid = "true" className = "introCont">
            <Row>
                <Col
                xs="6">
                    <img className="phone"
                    src={ require("../assets/phone.png") } 
                    alt="phone"
                    />    
                </Col>
                <Col
                className="introText"
                xs="6">
                    <h1>Apa sih 'Eco-Route' itu?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row> 
                <Col className="carbonText"
                xs="6">
                    <h1>Memangnya</h1>
                    <h1>ada apa dengan karbon?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="source">(source: lorem.co)</p>
                </Col>    
                <Col
                xs="6">
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Intro;