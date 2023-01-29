import React from "react";

function Work(props){
    return(
        <div id="benefit" className="container">
            <div className="child_container">
                <div className="benefit_section">
                    <div className="benefit_section_left">
                        <h2>{props.head}</h2>
                        <p>{props.description}</p>
                        <button>{props.button}</button>
                    </div>  
                    <div className="benefit_section_right">
                        <img src={props.image} alt="benfits" />
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Work;