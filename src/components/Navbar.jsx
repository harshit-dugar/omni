import React from "react";

function Navbar(){
    const [navbar, setNavbar] = React.useState(false);
    const Menu = () => (
        <>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About_Omni">About Omni</a></li>
            <li><a href="#Business">Business</a></li>
        </>
    )
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <h1>Omni</h1>
            </div>
            <div className="navbar_menu">
                <ul className="navbar_links">
                    <Menu />
                </ul>
            </div>
            <button>Order Now</button>
            
        </div>
    );
}

export default Navbar;