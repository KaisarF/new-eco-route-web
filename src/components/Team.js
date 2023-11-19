import React from "react";
import "./TeamStyles.css";
import { Col, Row } from "reactstrap";
import MediaQuery from "react-responsive";

const Team = () => {
  return (
    <>
      <MediaQuery minWidth={992}>
        <div className="teamCont">
          <div>
            <h1 className="teamtitle">Meet the Team!</h1>
          </div>
          <Row>
            <Col xs="1"></Col>
            <Col className="member" id="niken" xs="2">
              <img
                className="photo"
                src={require("../assets/placeholder.jpg")}
              />
              <h1>Niken Larasati</h1>
              <h2>Machine Learning Engineer</h2>
            </Col>
            <Col className="member" id="lintang" xs="2">
              <img
                className="photo"
                src={require("../assets/placeholder.jpg")}
              />
              <h1>Lintang Pramayasti</h1>
              <h2>Machine Learning Engineer</h2>
            </Col>
            <Col className="member" id="hakam" xs="2">
              <img
                className="photo"
                src={require("../assets/placeholder.jpg")}
              />
              <h1>Muhammad Hakam F.</h1>
              <h2>Mobile Developer</h2>
            </Col>
            <Col className="member" id="aman" xs="2">
              <img
                className="photo"
                src={require("../assets/placeholder.jpg")}
              />
              <h1>Nurkholis Amanullah</h1>
              <h2>Cloud Computing Engineer</h2>
            </Col>
            <Col className="member" id="kaisar" xs="2">
              <img
                className="photo"
                src={require("../assets/placeholder.jpg")}
              />
              <h1>Kaisar Fauzan</h1>
              <h2>Cloud Computing Engineer</h2>
            </Col>
            <Col xs="1"></Col>
          </Row>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={991.98}>
      <div className="teamCont">
        <div>
          <h1 className="teamtitle">Meet the Team!</h1>
        </div>
        <Row>
        <Col xs="3"></Col>
        <Col className="member" id="hakam" xs="6">
            <img className="photo" src={require("../assets/placeholder.jpg")} />
            <h1>Muhammad Hakam F.</h1>
            <h2>Mobile Developer</h2>
          </Col>
          <Col xs="3"></Col>
        </Row>
        <Row>
          <Col className="member" id="niken" xs="6">
            <img className="photo" src={require("../assets/placeholder.jpg")} />
            <h1>Niken Larasati</h1>
            <h2>Machine Learning Engineer</h2>
          </Col>
          <Col className="member" id="lintang" xs="6">
            <img className="photo" src={require("../assets/placeholder.jpg")} />
            <h1>Lintang Pramayasti</h1>
            <h2>Machine Learning Engineer</h2>
          </Col>
        </Row>
        <Row>
          <Col className="member" id="aman" xs="6">
            <img className="photo" src={require("../assets/placeholder.jpg")} />
            <h1>Nurkholis Amanullah</h1>
            <h2>Cloud Computing Engineer</h2>
          </Col>
          <Col className="member" id="kaisar" xs="6">
            <img className="photo" src={require("../assets/placeholder.jpg")} />
            <h1>Kaisar Fauzan</h1>
            <h2>Cloud Computing Engineer</h2>
          </Col>
          </Row>
      </div>
      </MediaQuery>
    </>
  );
};

export default Team;
