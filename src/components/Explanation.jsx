import React from "react";
import "./Explanation.css";

import PeopleHoldingPhone from "../assets/PeopleHoldingPhone.svg"


const Explanation =()=>{
    return(
        <div className="Explanation"> 
            <div className="leftSide">
            <img src={PeopleHoldingPhone}></img>
            </div>
            <div className="rightSide">
                <h1>
                What makes Eco-Route so special?<br/> Find the answer here!
                </h1>
                <p>
                Eco-Route is an application that can effectively determine the best travel route by considering time efficiency and the principle of minimal carbon footprint. Eco-Route provides information on the accumulated carbon footprint of each transportation trip, so that it can reduce the carbon footprint contribution of each trip.
                </p>
                <button type="button">learn more</button>
            </div>
        </div>
    )
}

export default Explanation;