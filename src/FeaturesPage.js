import React from "react";
import Navigation from './components/Navigation'
import Footer from "./components/Footer"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FeaturesPageStyle.css"
import image1 from "./assets/FeaturesAssets/artificial-intelligence.png";
import image2 from "./assets/FeaturesAssets/tracking.png";
import image3 from "./assets/FeaturesAssets/history.png";
import image4 from "./assets/FeaturesAssets/challenges.png";
import image5 from "./assets/FeaturesAssets/leaderboard.png";
import CallToAction from "./components/CallToAction";


const FeaturesPage = () => {
    return(
        <div> 
            <Navigation/>
                <div className='Feature1'>
                    <div className='left-side-feature1'>
                        <div>
                            <img className="image" src={image1}/>
                        </div>
                    </div>
                    <div className='right-side-feature1'>
                        <h1>emission tracking</h1>
                        <p>this Features will track emission that comes out from vehicles based on vehicle type, fuel type, and distance that have been through</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="00000" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,245.3C640,267,800,245,960,234.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className='Feature2'>
                    <div className='left-side-feature2'>
                    <h1>smart maps</h1>
                    <p>This feature will provide alternative paths based on the user's wishes, such as the path with the shortest route or the path that emits less carbon emissions.</p>
                    </div>
                    <div className='right-side-feature2'>
                    <div>
                            <img className="image" src={image2}/>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="00000" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,192C672,203,768,245,864,256C960,267,1056,245,1152,234.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className='Feature3'>
                    <div className='left-side-feature3'>
                        <div>
                            <img className="image" src={image3}/>
                        </div>
                    </div>
                    <div className='right-side-feature3'>
                        <h1>History</h1>
                        <p>this Features will save the history of user trip from distance and carbon emission that spend. and from there the data will be used to create a report to the user about the contribution made in reducing carbon emission expenditure. </p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="00000" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,160C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className='Feature4'>
                    <div className='left-side-feature2'>
                    <h1> challenges (coming soon)</h1>
                    <p>This feature will gives the user challenges to accomplish to get point</p>
                    </div>
                    <div className='right-side-feature2'>
                    <div>
                            <img className="image" src={image4}/>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="00000" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,133.3C384,149,480,235,576,256C672,277,768,235,864,229.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className='Feature5'>
                    <div className='left-side-feature5'>
                        <div>
                            <img className="image" src={image5}/>
                        </div>
                    </div>
                    <div className='right-side-feature5'>
                        <h1>leaderboard (coming soon)</h1>
                        <p>this Features will count point from challenges and trip and will count or leaderboard, so user can compete with another user</p>
                    </div>
                </div>
                <CallToAction/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6DCE8B" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,149.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <Footer/>
        </div>
    );
}

export default FeaturesPage;