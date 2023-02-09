import React, { useState } from "react";
import product1 from '../assets/benefit3.png'

function Orders(){
    const [toggle, setToggle] = useState("1");
    return (
        <div className="orders">
            <div className="order_vector">
                <div className="thumb product_view">
                
                </div>
            </div>
            <div className="order_description">

            </div>
        </div>
    )
}

export default Orders;