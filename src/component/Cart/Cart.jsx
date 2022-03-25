import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0
    let delivery = 0

    for (const flower of cart) {
        // console.log(flower.delivery);
        total = total + flower.price
        delivery = delivery + flower.delivery
    }

    const tax = total * 10 / 100

    const grandTotal = total + delivery + tax

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <hr />
            {/* cart ditails show */}
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Delivery Charge : ${delivery}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>

        </div>
    );
};

export default Cart;