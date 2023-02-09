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
function Navbar(){
    const [navbar, setNavbar] = React.useState(false);
    
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <a href="/"><img src={logo} alt='lgo'/></a>
            </div>
            <div className="navbar_menu">
                <ul className="navbar_links">
                    <Menu />
                </ul>
            </div>
            <Link to='/order'><button>Order Now</button></Link>
            
        </div>
    );
}

export default Navbar;