import React from "react";
import { Menu as FMenu} from '../components/Navbar';
import instagram from '../assets/icons/instagram.png';
import youtube from '../assets/icons/youtube.png';
import twitter from '../assets/icons/twitter.png';
import logo from '../assets/Logo.svg';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <div className="footer_container">
                <ul className="footer_links">
                    <FMenu />
                </ul>
                <div className="footer_socials">
                    <div className="icons">
                        <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a>
                    </div>
                    <div className="icons">
                        <a href="https://www.twitter.com/"><img src={twitter} alt="Twitter"/></a>
                    </div>
                    <div className="icons">
                        <a href="https://www.youtube.com/"><img src={youtube} alt="Youtube"/></a>
                    </div>
                </div>
                <div className="footer_brand">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <p>Omni & co. @ 2022. All Rights Reserved</p>
                    <Link to="/order"><button>Order Now</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;