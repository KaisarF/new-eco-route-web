import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./ReviewStyles.css";
import review from '../assets/reviews.svg'

const Reviews = () => {
    return(
        <>
        <Container fluid = "true" className = "reviewCont">
            <Row>
                <Col
                xs="6">
                    <img className="reviewGraphics"
                    src={ review } 
                    alt="review"
                    />    
                </Col>
                <Col
                className="reviewText"
                xs="6">
                    <h1>User Reviews</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Reviews;