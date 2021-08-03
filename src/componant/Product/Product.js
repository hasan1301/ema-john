import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    let {img, name, seller,price, stock}=props.product
   
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
        
            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon.</small></p>
                <button onClick={()=>props.productAdd(props.product)} className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
            
        </div>
    );
};

export default Product;