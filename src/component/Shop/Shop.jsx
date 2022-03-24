import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [flowers, setFlowers] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/neyaznafiz/Bookey-Shop-Data/main/flowers.json')
            .then(res => res.json())
            .then(data => setFlowers(data))

    }, [])

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    flowers.map(flower => <Product
                    key={flower.id}
                        flowers={flower}
                    ></Product> )
                }
            </div>

            <div className='cart-container'>
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;