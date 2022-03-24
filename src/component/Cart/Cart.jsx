import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // const {cart} = props

    let total = 0
    // let delivery = 0
    // let quantity = 0

    for (const flower of cart) {
        console.log(flower);
        total = total + flower.price
        // quantity = quantity + flower.quantity
        // total = total + flower.price * flower.quantity
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {/* cart ditails show */}
            <p>Selected Items : {cart.length}</p>
            <p>Quantity : { }</p>
            <p>Total Price : ${total}</p>
            <p>Delivery Charge : </p>
            <p>Tax :</p>
            <h5>Grand Total :</h5>

        </div>
    );
};

export default Cart;