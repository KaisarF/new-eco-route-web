import React from "react";
import "./Feature.css";

import friendlyRoute from "../assets/friendlyRoute.svg"
import healthLifestyle from "../assets/healthyLifestyle.svg"
import clubsAndGroups from "../assets/clubsAndGroups.svg"

const Features=()=>{
    return(
        <div className="Features">
            <div className="FeaturesTitle">
                <h1>Manage route you take in a single system</h1>
                <p>Who is Eco-Route suitable for?</p>
            </div>
            <div className="cardContainer">
                <div className="FeatureCard">
                    <img src={friendlyRoute}></img>
                    <h2> Friendly Route</h2>
                    <p>
                    Displaying routes with the lowest carbon emissions during your journey as the first step to save the Earth
                    </p>
                </div>
                <div className="FeatureCard">
                    <img src={healthLifestyle}></img>
                    <h2> Healthy Lifestyle</h2>
                    <p>
                    Establish a healthy lifestyle by controlling the carbon dioxide emissions of your daily vehicles
                    </p>
                </div>
                <div className="FeatureCard"> 
                    <img src={clubsAndGroups}></img>
                    <h2> Clubs and Groups</h2>
                    <p>
                    This app offers a chance to share your travel experiences and create lasting memories along the way
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features;
