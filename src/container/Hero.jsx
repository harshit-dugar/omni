import React from "react";
import badge1 from "../assets/hero/Badge1.png";
import herovideo from "../assets/videos/Hero/desktop.mp4";

function Hero(){
    return(
        <div className="hero">
            <div className="hero_container">
                <div className="hero_head">
                    <p>Introducing Real</p>
                    <h1>Passive Income</h1>
                </div>
                <img className="hero_image" src={badge1} alt="hero"/>
                <video className="hero_video" autoPlay loop muted src={herovideo} height='420' width={245}/>
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