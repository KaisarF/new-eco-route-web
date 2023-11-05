import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navigation from './components/Navigation'
import Header from './components/Headeralt'
import Intro from './components/Intro'
import Features from './components/Features'
import Team from "./components/Team";
import Footer from "./components/Footer"
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import CallToAction from "./components/CallToAction";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
    return(
        <div className="App">
            <Navigation/>
            <Parallax className="appAnimation"
            pages={2.3} 
            style={{ top: '0', left: '0' }}>
                <ParallaxLayer 
                offset={0} 
                speed={0.5}>
                    <div className='appBackdrop parallax'
                    id='background'>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer 
                offset={0} 
                speed={1}>
                    <div className='appBackdrop parallax'
                    id='skyline'>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer 
                offset={0} 
                speed={1.5}>
                    <div className='appBackdrop parallax'
                    id='park'>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={0}
                speed={3}>
                    <Header/>
                    <Intro/>
                    <Features/>
                    <Team/>
                    <Reviews/>
                    <FAQs/>
                    <CallToAction/>
                    <Footer/>
                </ParallaxLayer>
            </Parallax>


        </div>
    );
}

export default App;





