import React, { useState } from "react";
import {IoIosArrowDown} from 'react-icons/io'
import {Link} from 'react-router-dom'
import product1 from '../assets/order/product1.svg'
import product2 from '../assets/order/product2.png'
import product3 from '../assets/videos/order/product3.mp4'
import product4 from '../assets/videos/order/product4.mp4'
import play from '../assets/icons/Play.svg'

function Orders(){
    const [description, setdescription] = useState({
        open: false
    })
    const toggleDescription = () => {
        setdescription({
            open: !description.open
        })
    }

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
            image: product3
        },
        {
            id: 4,
            image: product4
        }
    ]
    const productsthumbs = [
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
            image: product2
        },
        {
            id: 4,
            image: product1
        }
    ]
    const [product, setProduct] = useState(productsthumb[0]);
    const handleProductThumb = (e) => {
        const id = e.target.id;
        setProduct(productsthumb[id - 1]);
    }
    return (
        <div className="order_section">
            <div className="order_vector">
                <div className="product_view">
                    {
                        product.image.includes('.mp4') ?
                            <video src={product.image} autoPlay loop muted height={500} width={700} />
                            :
                            <img src={product.image} alt="product" />
                    }
                </div>
                <div className="thumb">
                    {productsthumbs.map((product) => (
                        <img src={product.image} alt="product" id={product.id} onClick={handleProductThumb} />
                    ))}   
                    <div className="play1"> 
                        <img src={play} alt="" id={productsthumb[2].id} onClick={handleProductThumb}/>
                    </div>
                    <div className="play2">
                        <img src={play} alt="" id={productsthumb[3].id} onClick={handleProductThumb} />
                    </div>
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
                    <p className="d_head" onClick={()=>toggleDescription()}>Description <IoIosArrowDown className="arrow"/> </p>
                    <div className="description_text">
                        {description.open ? 
                            <div>
                                <p>Nisl orci mattis dictum sed in ut. Volutpat tristique commodo pretium enim vivamus felis diam. Neque et mi commodo viverra. Ac interdum nibh massa in urna velit. Tortor lectus malesuada</p>
                                <ul>
                                    <li> Vitae tempor dui feugiat neque </li>
                                    <li>elementum consectetur nisl. A</li>
                                    <li>Pleuhuh fyugyugref u3</li>
                                    <li>Frt uihorefoi </li>
                                    <li>UW eierg</li>
                                    <li>Eonr</li>
                                </ul>
                                <p>Nisl orci mattis dictum sed in ut. Volutpat tristique commodo pretium enim vivamus felis diam. Neque et mi commodo viverra. Ac interdum nibh massa in urna velit. Tortor lectus malesuada</p>
                            </div>
                            : null
                        }
                    </div>
                    <Link to="/cart"><button className=".button">Add to cart</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Orders;