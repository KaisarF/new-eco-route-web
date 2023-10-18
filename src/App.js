import React from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Features from './components/Features'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
    return(
            <div className="App">
                <Navigation/>
                <Header/>
                <Intro/>
                <Features/>
            </div>
    );
}

export default App;