import React from 'react';

const Cart = (props) => {
    let cart = props.cart
    let total= cart.reduce((total, item)=> total + item.price, 0);

    let shipping =0;
    if(total > 35){
        shipping=0;
    }
    else if (total > 15) {
        shipping=4.99;
    } 
    else if(total > 0){
        shipping = 12.99;
    }

    let tax= Math.round(total/10) ;
    let productPrice = Math.round(total).toFixed(2);
    let grandTotal= Math.round(total + shipping + tax).toFixed(2);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: $ {productPrice}</p>
            <p><small>Shipping Cost: $ {shipping}</small></p>
            <p><small>Tax + Vat: $ {tax}</small></p>
            <p>Total Price: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;