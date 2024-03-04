import React from "react";
import "./CarbonEmission.css";

import globalWarming from "../assets/globalWarming.svg"

const CarbonEmission =()=>{
    return(
        <div className="CarbonEmission"> 
            <div className="leftSide">
            <img src={globalWarming}></img>
            </div>
            <div className="rightSide">
                <h1>
                Do you know about the impact of <br/> carbon emissions?
                </h1>
                <p>
                Carbon emissions are gases released into the atmosphere from the combustion of carbon-containing compounds, such as burning fossil fuels. The transportation sector, as one of the sectors that uses fossil energy, is the largest contributor to carbon emissions. This sector is projected to increase CO2 levels in the atmosphere which will impact natural imbalances if it is not acted upon immediately.
                </p>
                <button type="button">learn more</button>
            </div>
        </div>
    )
}

export default CarbonEmission;