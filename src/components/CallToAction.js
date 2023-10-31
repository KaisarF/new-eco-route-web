import React from "react";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import "./CallToActionStyles.css";
import { Button } from "reactstrap";

const CallToAction = () => {
    return (
        <div className="actionCont">
            <h1>Ready to Make a Change?</h1>
            <h6>Be one step ahead towards your sustainable journey</h6>
            <Button>Join our Beta Test</Button>
            {
            /*<a>
                <img 
                src = { googleplay }
                alt = "google play"/>
            </a>

            <a>
                <img 
                src = { appstore }
                alt = "app store"/>
            </a>
            */}
        </div>
    );
}

export default CallToAction;