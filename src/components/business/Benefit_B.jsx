import React from "react";
import benefit1 from '../../assets/business/Illus1.png';
import benefit2 from '../../assets/business/Illus2.svg';
import benefit3 from '../../assets/business/Illus 3.svg';

function Benefit_B(){
    function reveal(){
        var reveals = document.getElementsByClassName("reveal");
        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 300;
            if(elementTop < windowheight - revealPoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll',reveal);
    return(
        <div>
        <div className="business_container">
            <div className="business_section reveal">
                <div className="business_section_left">
                    <h2>Passive Income</h2>
                    <p>Consequat ac sed mi cras at consectetur risus feugiat pretium. Fermentum elit suspendisse eu tortor lectus. Turpis tristique porttitor morbi tellus ac odio fermentum. Amet odio nullam arcu velit ac congue gravida. Congue rutrum felis odio augue neque nibh fringilla. Imperdiet volutpat aenean felis quam condimentum condimentum diam. </p>
                    <button>Order Now</button>
                </div>  
                <div className="business_section_right">
                    <img src={benefit1} alt="benfits" />
                </div>
            </div>
        </div>
        <div className="business_container">
            <div className="business_section reveal">
                <div className="business_section_left">
                    <h2>Passive Income</h2>
                    <p>Consequat ac sed mi cras at consectetur risus feugiat pretium. Fermentum elit suspendisse eu tortor lectus. Turpis tristique porttitor morbi tellus ac odio fermentum. Amet odio nullam arcu velit ac congue gravida. Congue rutrum felis odio augue neque nibh fringilla. Imperdiet volutpat aenean felis quam condimentum condimentum diam. </p>
                    <button>Order Now</button>
                </div>  
                <div className="business_section_right">
                    <img src={benefit2} alt="benfits" />
                </div>
            </div>
        </div>
        <div className="business_container">
            <div className="business_section reveal">
                <div className="business_section_left">
                    <h2>Passive Income</h2>
                    <p>Consequat ac sed mi cras at consectetur risus feugiat pretium. Fermentum elit suspendisse eu tortor lectus. Turpis tristique porttitor morbi tellus ac odio fermentum. Amet odio nullam arcu velit ac congue gravida. Congue rutrum felis odio augue neque nibh fringilla. Imperdiet volutpat aenean felis quam condimentum condimentum diam. </p>
                    <button>Order Now</button>
                </div>  
                <div className="business_section_right">
                    <img src={benefit3} alt="benfits" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Benefit_B;