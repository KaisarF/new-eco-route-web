import React from "react";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import "./CallToActionStyles.css";
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import traveloka from "../assets/traveloka.png"
import bangkit from "../assets/bangkit.png"
import kampus_merdeka from "../assets/kampus_merdeka.png"
import google from "../assets/google.png"
import goto from "../assets/GoTo.png"

const CallToAction = () => {
    return (
        <div className="actionCont" data-aos="zoom-in" data-aos-duration="1000">
            <h1>Ready to Make a Change?</h1>
            <h6>Be one step ahead towards your sustainable journey</h6>
            <Button variant='success' href="https://bit.ly/UnduhEcoRoute">TRY OUR APPLICATION</Button>
            <div className="sponsor">
            <h2>sponsored by</h2>
            <div className="contentWrapper"></div>
                <Marquee>
                <div className="imageWrapper" >
                    <img src={bangkit}></img>
                </div>
                <div className="imageWrapper" >
                    <img src={kampus_merdeka}></img>
                </div>
                <div className="imageWrapper" >
                    <img src={google}></img>
                </div>
                <div className="imageWrapper" >
                    <img src={goto}></img>
                </div>
                <div className="imageWrapper" >
                    <img src={traveloka}></img>
                </div>
                    
                </Marquee>
            </div>
        </div>
    );
}

export default CallToAction;