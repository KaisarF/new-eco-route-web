import React from "react";
import { NavLink } from "react-router-dom";
import "./downloadPage.css";
import arrow from "../assets/arrow.svg"

const DownloadPage = () =>{
    return(
        <div className="downloadPage">
            <h1>Be one step ahead towards<br/> your sustainable journey.</h1>
            <button>
                <a href="https://bit.ly/UnduhEcoRoute">
                    get started <img src={arrow}/>
                </a>
            </button>
        </div>
    )
}

export default DownloadPage;