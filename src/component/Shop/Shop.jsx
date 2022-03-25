import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // useState and set for product
    const [flowers, setFlowers] = useState([])

    // useState and set for cart
    const [cart, setCart] = useState([])

    // data fetch
    useEffect(() => {

        fetch(`https://raw.jsongithubusercontent.com/neyaznafiz/Bookey-Shop-Data/main/flowers`)
            .then(res => res.json())
            .then(data => setFlowers(data))

    }, [])


    // add to cart button handle
    const addToCartHandle = (flowers) => {
        const newCart = [...cart, flowers]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    flowers.map(flower => <Product
                        // added unique key
                        key={flower.id}
                        // send flowers info to product component
                        flowers={flower}
                        // send btn function to onClick in btn
                        addToCartHandle={addToCartHandle}
                    ></Product>)
                }
            </div>
            {/* cart container */}
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;