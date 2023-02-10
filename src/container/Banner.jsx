import React from "react";
import banner from '../assets/banner.svg'

function Banner() {
  return (
    <div className="banner">
      <div className="contents">
        <img src={banner} alt="banner"/>
        <p>Pre - Order Now & </p>
        <h2>get 56% off</h2>
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default Banner;