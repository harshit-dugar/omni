import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/hero/Logo.svg'

export const  Menu = () => (
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/aboutUs'>About Omni</Link></li>
        <li><Link to='/business'>Business</Link></li>
    </>
)
let scroll_position= 50;
let scroll_direction;
function Navbar(){
    function nav(){
        const nav = document.querySelector(".navbar_active");
        nav.classList.add("navbar_active");

        scroll_direction =
        document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
        scroll_position = document.body.getBoundingClientRect().top;

        if (scroll_direction === "up") {
            document.querySelector(".navbar").style.position= "fixed";
            document.querySelector(".hero_container").style.top= "10%";
            nav.classList.add("add");
        } else {
            document.querySelector(".navbar").style.position= "relative";
            document.querySelector(".hero_container").style.top= "0";
            nav.classList.remove("add");
        }
    }
    window.addEventListener('scroll',nav);
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <a href="/"><img src={logo} alt='lgo'/></a>
            </div>
            <div className="navbar_active">
                <div className="navbar_menu">
                    <ul className="navbar_links">
                        <Menu />
                    </ul>
                </div>
                <Link to='/order'><button>Order Now</button></Link>
            </div>
        </div>
    );
}

export default Navbar;