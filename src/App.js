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
            <Footer/>

        </div>
    );
}

export default App;





