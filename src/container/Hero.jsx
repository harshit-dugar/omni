import React from "react";
import badge1 from "../assets/hero/Badge1.png";
import herovideo from "../assets/stillwithads1.png";

function Hero(){
    return(
        <div className="hero">
            <div className="hero_container">
                <div className="hero_head">
                    <p>Introducing Real</p>
                    <h1>Passive Income</h1>
                </div>
                <img className="hero_image" src={badge1} alt="hero"/>
                <iframe className="hero_video" width="245" height="420" src={herovideo}></iframe>
                <p className="hero_text">Companies are dying for your attention and they pay “The Advertisers” 
                    Billions of dollars for it. We are cutting the middleman out of the equation,
                    so you get paid for your attention
                </p>
                <button>Order Now</button>
            </div>
        </div>
    );
}

export default Hero;