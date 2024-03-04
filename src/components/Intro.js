import React from "react";
import bumi from "../assets/earth.svg"
import googleplay from "../assets/google-play.jpeg"
import "./intro.css"

const Introduction = ()=>{
    return(
        <div className="Introduction">
            <div className="leftSide">
                <h1 className="firstTitle">great steps for a</h1>
                <h1 className="secondTitle">green earth</h1>
                <p>Download the Eco-Route app from the Play Store and App Store, create an account using your vehicle information, and embark on your journey. Take small steps to kickstart big changes.</p>
                <a href="https://bit.ly/UnduhEcoRoute">
                    <img src={googleplay} alt="google-play-logo"></img>
                </a>
            </div>
            <div className="rightSide">
                <img src={bumi} alt="bumi" ></img>
            </div>
        </div>
    )

}

export default Introduction;