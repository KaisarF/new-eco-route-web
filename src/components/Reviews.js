import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./ReviewStyles.css";
import rating from '../assets/Ratings/Star Ratings.svg'
import { CarouselItem } from "reactstrap";

const Reviews = () => {
    return(
        <>
        <div className = "reviewCont">
            <div className="leftRevCont">
                <h1>What People Say About Us:</h1>
            </div>
            <Carousel className="rightRevCont">
                    <CarouselItem className="revCarouselItem">
                        <h1>Bikin Gue Sadar Akan Emisi,</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="reviewProfile">
                                <img src={require('../assets/placeholder.jpg')}
                                    className="reviewProfilePic"/>
                                <div className="reviewProfileID">
                                    <img id="reviewRating"
                                    src={ rating }/>
                                    <h2 id="reviewName">Name</h2>
                                    <h3 id="reviewTitle">Job Title</h3>
                                </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="revCarouselItem">
                        <h1>Keren Banget Sih!</h1>
                        <p>Maecenas vel mi pulvinar, vehicula nunc ut, bibendum libero. Integer at sodales quam. Donec nec est justo. Phasellus elementum molestie elit, in cursus odio dictum vel.</p>
                            <div className="reviewProfile">
                                <img src={require('../assets/placeholder.jpg')}
                                    className="reviewProfilePic"/>
                                <div className="reviewProfileID">
                                    <img id="reviewRating"
                                    src={ rating }/>
                                    <h2 id="reviewName">Name</h2>
                                    <h3 id="reviewTitle">Job Title</h3>
                                </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="revCarouselItem">
                        <h1>Saya sempat skeptis, tapi...</h1>
                        <p>Phasellus ut vestibulum tellus. Nullam erat ante, pulvinar quis pharetra quis, commodo vel risus. Aenean tellus tellus, suscipit facilisis orci non, mollis accumsan leo. Nunc maximus et turpis at tempor. In eget efficitur lacus, et rutrum nulla.</p>
                            <div className="reviewProfile">
                                <img src={require('../assets/placeholder.jpg')}
                                    className="reviewProfilePic"/>
                                <div className="reviewProfileID">
                                    <img id="reviewRating"
                                    src={ rating }/>
                                    <h2 id="reviewName">Name</h2>
                                    <h3 id="reviewTitle">Job Title</h3>
                                </div>
                            </div>
                    </CarouselItem>
            </Carousel>
        </div>
        </>
    )
}

export default Reviews;