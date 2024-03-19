import React from "react";
import "./TeamsMember.css";

import hakam from "../assets/hakam.jpg"
import elma from "../assets/elma.JPEG"
import niken from "../assets/niken.JPG"
import aman from "../assets/nurkholis.JPG"
import kaisar from "../assets/kaisar.jpg"
import jefri from "../assets/jefri.jpeg"
import firman from "../assets/firman.jpeg"

const CarbonEmission =()=>{
    return(
        <div className="Teams"> 
            <div className="TeamsIntroduction">
            <div className="TeamsIntroduction">
                <h1>Eco-Route</h1>
                <h1>main</h1>
                <h1>team</h1>
                <h1>member</h1>
            </div>
                
            </div>
            <div className="TeamsMember">
            <div id="cardContainer">
                
            </div>
                <div className="TeamsCard" >
                <img src={hakam}></img>
                    <div className="TeamsIdentity">
                    <h4>Mobile Developer</h4>
                    <h6>M. Hakam Fardana</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={elma}></img>
                    <div className="TeamsIdentity">
                    <h4>Machine Learning</h4>
                    <h6>lintang paramayasti</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={niken}></img>
                    <div className="TeamsIdentity">
                    <h4>Machine Learning</h4>
                    <h6>Niken Larasati</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={aman}></img>
                    <div className="TeamsIdentity">
                    <h4>Cloud Computing</h4>
                    <h6>Nurkholis Amanullah</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={kaisar}></img>
                    <div className="TeamsIdentity">
                    <h4>Cloud Computing</h4>
                    <h6>Kaisar Fauzan</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={firman}></img>
                    <div className="TeamsIdentity">
                    <h4>mobile developer</h4>
                    <h6>m. Frimansyah</h6>
                    </div>
                    
                </div>
                <div className="TeamsCard" >
                <img src={jefri}></img>
                    <div className="TeamsIdentity">
                    <h4>UI/ UX</h4>
                    <h6>Jefrico Wayan Saputra</h6>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default CarbonEmission;