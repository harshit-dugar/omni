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
let scroll_position= 500;
let scroll_direction;
function Navbar(){
    function nav(){
        const nav = document.querySelector(".navbar_active");
        nav.classList.add("navbar_active");
        const navb = document.querySelector(".navbar");
        scroll_direction =
        document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
        scroll_position = document.body.getBoundingClientRect().top;

        if (scroll_direction === "up") {
            navb.classList.add("trans");
            nav.classList.add("add");
        } else {
            navb.classList.remove("trans");
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