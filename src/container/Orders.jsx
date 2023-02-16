import React, { useState } from "react";
import product1 from '../assets/order/product1.svg'
import product2 from '../assets/order/product2.png'
import product3 from '../assets/videos/order/product3.mp4'
import product4 from '../assets/videos/order/product4.mp4'

function Orders(){
    const productsthumb = [
        {
            id: 1,
            image: product1
        },
        {
            id: 2,
            image: product2
        },
        {
            id: 3,
            image: product1
        },
        {
            id: 4,
            image: product2
        }
    ]
    const [product, setProduct] = useState(productsthumb[0]);
    const handleProduct = (e) => {
        const id = e.target.id;
        const product = productsthumb.find((product) => product.id === id);
        setProduct(product);
    }
    return (
        <div className="order_section">
            <div className="order_vector">
                <div className="product_view">
                    <img onChange={handleProduct} src={product.image} alt="product" />
                </div>
                <div className="thumb">   
                    {productsthumb.map((product) => (
                        <img src={product.image} alt="product" id={product.id} onClick={handleProduct} />
                    ))}
                </div>
            </div>
            <div className="order_description">
                <div className="product_info">
                    <h2>Omni screen</h2>
                    <p>$369.99</p>
                </div>
                <div className="product_type">
                    <p>Type</p>
                    <div className="type_select">
                        <input type="button" id="type" name="type" value="Standard"/>
                        <input type="button" id="type" name="type" value="Premium"/>
                    </div>
                </div>
                <div className="product_size">
                    <p>Size</p>
                    <div className="size_select">
                        <input type="button" id="select" name="size" value="19”"/>
                        <input type="button" id="select" name="size" value="22”"/>
                    </div>
                </div>
                <div className="description">

                </div>
            </div>
        </div>
    )
}

export default Orders;