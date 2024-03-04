import React, { useState } from "react";
import "./UserTrack.css";
import ActiveUser from "../assets/activeUser.svg"
import Clubs from "../assets/clubs.svg"
import UserReview from "../assets/userReview.svg"
import ChallangeIcon from "../assets/challangeIcon.svg"

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const UserTrack=()=>{
    const[counterOn, setCounterOn] = useState(false)

    return(
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="UserTrack">
                <div className="leftSide">
                    <h1>Helps control</h1>
                    <h1 className="difH1">vehicle carbon emissions</h1>
                    <p>We strive to create a clean environment for the future</p>
                </div>
                <div className="rightSide">
                    <div className="firstSection">
                        <div className="userCount">
                            <img src={ActiveUser}></img>
                            <div>
                                <h3>
                                    {counterOn && <CountUp start={0} end={3354768} duration={1} delay={0}/>}
                                </h3>
                                <p>active user</p>
                            </div>
                        </div>
                        <div className="userCount">
                            <img src={Clubs}></img>
                            <div>
                                <h3>
                                    {counterOn && <CountUp start={0} end={32476} duration={1} delay={0}/>}
                                </h3>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondSection">
                    <div className="userCount">
                            <img src={UserReview}></img>
                            <div>
                                <h3>
                                    {counterOn && <CountUp start={0} end={2544765} duration={1} delay={0}/>}
                                </h3>
                                <p>User Review</p>
                            </div>
                        </div>
                        <div className="userCount">
                            <img src={ChallangeIcon}></img>
                            <div>
                                <h3>
                                    {counterOn && <CountUp start={0} end={1500} duration={1} delay={0}/>}
                                </h3>
                                <p>Challenge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </ScrollTrigger>
        
    )
}

export default UserTrack;