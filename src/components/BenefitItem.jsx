import React from "react";
import { Link } from "react-router-dom";
import '../components/style/benefit.css';

function BenefitItem(props){
    function reveal(){
        var reveals = document.getElementsByClassName("reveal");
        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 30;
            if(elementTop < windowheight - revealPoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll',reveal);
    return(
        <div id="benefit" className="container reveal">
            <div className="child_container">
                <div className="benefit_section">
                    <div className="benefit_section_left">
                        <h2>{props.head}</h2>
                        <p>{props.description}</p>
                        <Link to="/order"><button>{props.button}</button></Link>
                    </div>  
                    <div className="benefit_section_right">
                        <img src={props.image} alt="benfits" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BenefitItem;