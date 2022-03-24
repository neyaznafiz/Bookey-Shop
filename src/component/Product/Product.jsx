import React from 'react';
import './Product.css'

const Product = ({flowers, addToCartHandle }) => {
    // console.log(props.flowers.img)
// const {flowers, addToCartHandle } = props

    const { name, img, ratings, price } = flowers

    return (
        <div className='product-container'>

            <div className='product-info'>
                {/* <img src={img} alt="" /> */}
                <h3>Name: {name}</h3>
                <p>Rating: {ratings}</p>
                <h5>Price: ${price}</h5>
                <button onClick={() => addToCartHandle(flowers)} className='cart-btn'> Add To Cart </button>
            </div>

        </div>
    );
};

export default Product;