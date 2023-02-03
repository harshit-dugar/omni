import React from "react";
import '../components/style/benefit.css';

function BenefitItem(props){
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
                {/* <div className="benefit_section">
                    <div className="benefit_section_left">
                        <h2>Living Room</h2>
                        <p>Consequat ac sed mi cras at consectetur risus feugiat
                         pretium. Fermentum elit suspendisse eu tortor lectus. Turpis
                          tristique porttitor morbi tellus ac odio fermentum. Amet odio 
                          nullam arcu velit ac congue gravida. Congue rutrum felis odio augue neque
                           nibh fringilla. Imperdiet volutpat aenean felis quam condimentum condimentum diam. 
                        </p>
                        <button>Order Now</button>
                    </div>  
                    <div className="benefit_section_right">
                        <img src={Image2} alt="benfits" />
                    </div>
                </div>
                <div className="benefit_section">
                    <div className="benefit_section_left">
                        <h2>Passive Income</h2>
                        <p>Consequat ac sed mi cras at consectetur risus feugiat pretium.
                         Fermentum elit suspendisse eu tortor lectus. Turpis tristique porttitor morbi 
                         tellus ac odio fermentum. Amet odio nullam arcu velit ac congue gravida. Congue rutrum
                          felis odio augue neque nibh fringilla. Imperdiet volutpat aenean felis quam condimentum condimentum diam. 
                        </p>
                        <button>Order Now</button>
                    </div>  
                    <div className="benefit_section_right">
                        <img src={Image3} alt="benfits" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default BenefitItem;