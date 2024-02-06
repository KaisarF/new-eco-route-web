import React from "react";

import Marquee from "react-fast-marquee";
import traveloka from "../assets/traveloka.png"
import bangkit from "../assets/bangkit.png"
import kampus_merdeka from "../assets/kampus_merdeka.png"
import google from "../assets/google.png"
import goto from "../assets/GoTo.png"

import "./Sponsor.css"

const Sponsor = ()=>{
    return(
        <div className="sponsor">
            <h2>sponsored by</h2>
            <p>We have collaborated with several brands</p>
            <div className="contentWrapper">
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
    )
}

export default Sponsor;