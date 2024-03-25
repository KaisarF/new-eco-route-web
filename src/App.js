import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navigation from './components/Navigation'
import Introduction from './components/Intro'
import Footer from "./components/Footer"
import Sponsor from "./components/Sponsor"
import Feature from "./components/Feature"
import Explanation from "./components/Explanation"
import UserTrack from "./components/UserTrack";
import CarbonEmission from "./components/CarbonEmission";
import Teams from "./components/TeamsMember";
import FAQPage from "./components/FAQPage"
import DownloadPage from "./components/downloadPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const App = () => {
    return(
        <div className="App">
            <Navigation/>
            <Introduction/>
            <Sponsor/>
            <Feature/>  
            <Explanation/>
            <UserTrack/>
            <CarbonEmission/>
            <Teams/>
            <FAQPage/>
            <DownloadPage />
            <Footer/>
            
        </div>
    );
}

export default App;