import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";
import "./HeaderaltStyles.css";

const Header = () => {
    return(
        <div className='textCont'>
            <h1>Every. Mile. Matters.</h1>
            <h5>Jadilah pengendara yang bijak dengan Eco-Route, teman berkendara Anda!</h5>
            <a>
                <img 
                src = { googleplay }
                alt = "google play"/>
                </a>

                <a>
                <img 
                src = { appstore }
                alt = "app store"/>
                </a>
        </div>
    );
}

export default Header;