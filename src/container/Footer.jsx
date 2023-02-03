import React from "react";
import { Menu as FMenu} from '../components/Navbar';
import instagram from '../assets/icons/instagram.png';
import youtube from '../assets/icons/youtube.png';
import twitter from '../assets/icons/twitter.png';


function Footer(){
    return(
        <div className="footer">
            <div className="footer_container">
                <ul className="footer_links">
                    <FMenu />
                </ul>
                <div className="footer_socials">
                    <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://www.twitter.com/"><img src={twitter} alt="Twitter"/></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="Youtube"/></a>
                </div>
                <div className="footer_brand">
                    <a href="/">Omni</a>
                    <p>Omni & co. @ 2022. All Rights Reserved</p>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;