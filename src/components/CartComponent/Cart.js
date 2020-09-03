import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer';
import './cart.scss';

import CartItem from './CartItem';

const Cart = () => {

    const [cartData, setCartData] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [toPay, setToPay] = useState(0);

    useEffect(() => {
        let storageCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storageCartData);
        let subtotal = storageCartData.reduce((total, { price }) => total + price, 0);
        setSubTotal(subtotal);
        setToPay(taxes + subtotal); 
    },[]);

    //Dummy data start 
    const taxes = 17;

    return (
        <MainContainer>
            <h2 className='ct-title'>View Cart</h2>
            <div className='ct-container'>
                <h4><Link to='/'>View menu</Link></h4>
                <h3>Your Cart</h3>
                <div className='ct-info'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <div className='ct-item-total'>
                        <div>Item Total</div>
                        <div>$ { subTotal }</div>
                    </div>
                    <div className='ct-taxes'>
                        <div>Taxes</div>
                        <div>$ { taxes }</div>
                    </div>
                    <div className='ct-to-pay'>
                        <div>To pay</div>
                        <div>$ { toPay }</div>
                    </div>
                </div>
                <div className='ct-process-to-pay'>
                    <div>$ { toPay }</div>
                    <div>Processed to pay</div>
                </div>

            </div>
        </MainContainer>
    )

}

export default Cart