import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [flowers, setFlowers] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/neyaznafiz/Bookey-Shop-Data/main/flowers.json')
            .then(res => res.json())
            .then(data => setFlowers(data))

    }, [])

    const addToCartHandle = () => {
  console.log('clicked');
}

return (
    <div className='shop-container'>

        <div className='product-container'>
            {
                flowers.map(flower => <Product
                    key={flower.id}
                    flowers={flower}
                    addToCartHandle={addToCartHandle}
                ></Product>)
            }
        </div>

        <div className='cart-container'>
            <Cart 
            cart={cart}
            ></Cart>
        </div>
    </div>
);
};

export default Shop;