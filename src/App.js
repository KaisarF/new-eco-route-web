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
import TestFAQ from "./components/BetaTestFAQ";


const App = () => {
    return(
        <div className="App">
            <Navigation/>
 
            <Header/>
            <Intro/>
            <Features/>
            <Team/>
            <TestFAQ/>
            <CallToAction/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6DCE8B" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <Footer/>

        </div>
    );
}

export default App;