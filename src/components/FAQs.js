import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./FAQStyles.css";
import review from '../assets/reviews.svg'

const FAQs = () => {
    return(
        <>
        <Container fluid = "true" className = "faqCont">
            <Row>
                <Col
                className="faqText"
                xs="6">
                    <h1>Frequently Asked Questions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col
                xs="6">
                    <img className="reviewGraphics"
                    src={ review } 
                    alt="review"
                    />    
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FAQs;