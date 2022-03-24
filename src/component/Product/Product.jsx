import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.flowers.img)
    const { name, img, ratings, price } = props.flowers

    return (
        <div className='product-container'>

            <div className='product-info'>
                {/* <img src={img} alt="" /> */}
                <h3>Name: {name}</h3>
                <p>Rating: {ratings}</p>
                <h5>Price: ${price}</h5>
            </div>
        </div>
    );
};

export default Product;