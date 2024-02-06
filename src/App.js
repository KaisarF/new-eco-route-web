import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navigation from './components/Navigation'
import Introduction from './components/Intro'
import Footer from "./components/Footer"
import Sponsor from "./components/Sponsor"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const App = () => {
    return(
        <div className="App">
            <Navigation/>
            <Introduction/>
            <Sponsor/>
            <Footer/>

        </div>
    );
}

export default App;