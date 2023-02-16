import React from "react";
import "./testinomial.css";
import left from '../assets/icons/Left.svg'
import right from '../assets/icons/Right.svg'
import test1 from '../assets/Testinomial/testinomial1.svg';
import test2 from '../assets/Testinomial/testinomial2.svg';

function Testinomail(){
    return(
        <div className="test_container">
            <p className="test_p">What they say</p>
                    <div className="testinomial_container">
                    <button className="left_icon"><img src={left} alt="left"/></button>
                    <button className="right_icon"><img src={right} alt="right"/></button>
                        <div className="testinomial">
                            <p>“Cras habitant et a amet id. Fringilla consequat tortor sit rhoncus mi pellentesque rhoncus. Dictum te\r eu. Ultricies eu aenean pellentesque malesuada. Sem pharetra aliquam tristique aenean purus. Parturient pellentesque habitant proin pellentesque. Eu semper ornare cursus volutpat id. Tellus.”</p>
                            <h2>Kristin Watson</h2>
                            <img src={test1} alt="Testinomial"/>
                        </div>
                        <div className="testinomial">
                        <p>“Cras habitant et a amet id. Fringilla consequat tortor sit rhoncus mi pellentesque rhoncus. Dictum te\r eu. Ultricies eu aenean pellentesque malesuada. Sem pharetra aliquam tristique aenean purus. Parturient pellentesque habitant proin pellentesque. Eu semper ornare cursus volutpat id. Tellus.”</p>
                        <h2>Kristin Watson</h2>
                        <img src={test2} alt="Testinomial" />
                        </div>
                    </div>
        </div>
    );
}

export default Testinomail;