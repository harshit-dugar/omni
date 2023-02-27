import React from "react";
import "./cart.css";
import {GrAddCircle} from "react-icons/gr";
import {GrSubtractCircle} from "react-icons/gr";
import { Header } from "../../container";
import { Footer } from "../../container";
import { Link } from "react-router-dom";
import cartProduct from "../../assets/order/product.svg";
// import Checkout from "./Checkout";

function Cart() {
    const [qty, setQty] = React.useState(1);
    function updateQtyAdd() {
        setQty(qty + 1);
    }
    function updateQtySubtract() {
        if(qty > 1){
            setQty(qty - 1);
        }
    }
    // const [checkout, setCheckout] = React.useState(false);
    
    return (
        <div className="cart">
            <Header />
            <h1>Cart</h1>
            <div className="cart_container">
                <div className="cart_container_left">
                    <div className="product_image">
                        <img src={cartProduct} alt="" />
                    </div>
                    <div className="product_details">
                        <h3>Omni Screen</h3>
                        <div className="product_detail_info">
                            <div className="info">
                                <p>Type</p>
                                <h4>Standard</h4>
                            </div>
                            <div className="info">
                                <p>Size</p>
                                <h4>19"</h4>
                            </div>
                            <div className="info">
                                <p>Quantity</p>
                                <h4> <GrSubtractCircle onClick={updateQtySubtract}/> {qty} <GrAddCircle onClick={updateQtyAdd}/></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_container_right">
                    <div className="product_price">
                        <p>Price</p>
                        <h3>$ 1,000</h3>
                    </div>
                    <Link to="/checkout"><button>Checkout</button></Link>
                    {/* {checkout && <Checkout in={checkout} />} */}
                    <p>*Please note that additional taxes and fees may be applied by your local <br/> government or carrier upon delivery</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;