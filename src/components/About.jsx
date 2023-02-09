import React from "react";
import about_img from "../assets/about_img.png"

function About() {
    return (
        <div id="About" className="container" data-aos="fade-right">
            <div className="about_section">
                <p className="about_p">#people’sMediaNetwork</p>
                <div className="about_media grid grid-row-1">
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" style={{filter: "drop-shadow(-10px 9px 30px rgba(35, 31, 32, 0.18))",transform: "rotateY( -15deg ) translateZ( 14px )"}}/>
                    </div>
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" style={{boxShadowz: "0px 4px 30px 1px rgba(35, 31, 32, 0.18)",order:1}}/>
                    </div>
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" style={{filter: "drop-shadow(10px 9px 30px rgba(35, 31, 32, 0.18))",order:2}}/>
                    </div>
                </div>
                <a href="#About">Know More </a>
            </div> 
        </div>
    );
}

export default About;