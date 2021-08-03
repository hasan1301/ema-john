import fakeData from '../../fakeData';
import React, { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    let first10 = fakeData.slice(0,20);
    let [products, setProduct] = useState(first10);

    let [cart, setCart]=useState([]);
    
    let handleAddProduct=(product)=>{
        console.log('product added', product);
        let newCart=[...cart, product]
        setCart(newCart)
    }

    return (
        <div className= "shop-container">
            <div className="product-container">
                    {
                        products.map(item=> <Product 
                            productAdd={handleAddProduct}product={item}>{item.name}</Product>)
                    }
            </div>
           <div className="card-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;