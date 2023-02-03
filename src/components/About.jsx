import React from "react";
import about_img from "../assets/about_img.png"

function About() {
    return (
        <div id="About" className="container" data-aos="fade-right">
            <div className="about_section">
                <p className="about_p">#people’sMediaNetwork</p>
                <div className="about_media grid grid-row-1">
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" />
                    </div>
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" />
                    </div>
                    <div className="about_media_img">
                        <img src={about_img} alt="Media work" />
                    </div>
                </div>
                <a href="#About">Know More </a>
            </div> 
        </div>
    );
}

export default About;