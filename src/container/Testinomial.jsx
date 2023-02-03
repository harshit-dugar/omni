import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import "./testinomial.css";

function Testinomail(){
    return(
        <div className="container">
            <p className="test_p">What they say</p>
            <Carousel>
                <Carousel.Item>
                    <div className="testinomial">
                        <p>“Cras habitant et a amet id. Fringilla consequat tortor sit rhoncus mi pellentesque rhoncus. Dictum te\r eu. Ultricies eu aenean pellentesque malesuada. Sem pharetra aliquam tristique aenean purus. Parturient pellentesque habitant proin pellentesque. Eu semper ornare cursus volutpat id. Tellus.”</p>
                        <h2>Kristin Watson</h2>
                        <img />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testinomial">
                        <p>“Cras habitant et a amet id. Fringilla consequat tortor sit rhoncus mi pellentesque rhoncus. Dictum te\r eu. Ultricies eu aenean pellentesque malesuada. Sem pharetra aliquam tristique aenean purus. Parturient pellentesque habitant proin pellentesque. Eu semper ornare cursus volutpat id. Tellus.”</p>
                        <h2>Kristin Watson</h2>
                        <img />
                    </div>
                </Carousel.Item>
            </Carousel>              
        </div>
    );
}

export default Testinomail;