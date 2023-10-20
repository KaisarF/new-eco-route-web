import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./IntroStyles.css";

const Intro = () => {
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6DCE8B" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,181.3C672,171,768,117,864,101.3C960,85,1056,107,1152,149.3C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6DCE8B" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,117.3C672,107,768,149,864,186.7C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}

export default Intro;