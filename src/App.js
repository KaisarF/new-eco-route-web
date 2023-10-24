import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Features from './components/Features'
import Team from "./components/Team";
import Footer from "./components/Footer"
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
    return(
        <div className="App">
            <Navigation/>
            <Parallax className="appAnimation"
            pages={3} 
            style={{ top: '0', left: '0' }}>
                <ParallaxLayer 
                offset={0} 
                speed={1}>
                    <div className='appBackdrop parallax'>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={0}
                speed={1.5}>
                    <Header/>
                    <Intro/>
                    <Features/>
                    <Reviews/>
                    <FAQs/>
                    <Team/>
                    <Footer/>
                </ParallaxLayer>

            </Parallax>


        </div>
    );
}

export default App;





