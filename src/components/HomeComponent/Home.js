import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer';
import OrderItem from './OrderItem';
import './home.scss';

const Home = () => {

    const [cartData, setCartData] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    //Dummy data start
    const items = [
        {
            id: 1,
            name: 'Coffe',
            price: 10
        },
        {
            id: 2,
            name: 'Tea',
            price: 15
        },
        {
            id: 3,
            name: 'Juice',
            price: 20
        },
    ];

    const resturant = {
        name: 'Three Stars',
        stars: 5,
        lat: 40.000,
        lng: 45.000
    };

    const freeTablesNumbers = ['01', '05', '10', '50']; 
    // Dummy data end

    useEffect(() => {
        let storageCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storageCartData);
        let subtotal = storageCartData.reduce((total, { price }) => total + price, 0);
        setSubTotal(subtotal);
    },[])

    const addToCart = (e) => {  
        let newItem = items.filter( item => item.id === +e.target.id )[0];
        let data = [...cartData, newItem];
        setCartData(data);
        localStorage.setItem('cartData', JSON.stringify(data));
        let newSubtotal = data.reduce((total, { price }) => total + price, 0);
        setSubTotal(newSubtotal);
    };

    return (
        <MainContainer>
            <h2 className='hm-title'>Home</h2>
            <div className='hm-container'>
                <div className='hm-welcome'>
                    <div>
                        <p>Welcome to</p>  
                        <p>{ resturant.name }</p>  
                    </div>
                    <div>
                        <p>Table no.</p> 
                        <p>{ freeTablesNumbers[0] }</p>
                    </div>
                </div>
                <div className='hm-view-cart'>
                    <p></p>
                    <p><Link to='/cart'>View Cart</Link></p>
                    <p>
                        <i className="fas fa-shopping-cart"></i>
                        <span>{ cartData.length }</span>
                    </p>
                </div>
                <h4 className='hm-subtotal'>Subtotal: $ { subTotal }</h4>
                <h3 className='hm-select-order-title'>Select your order</h3>
                <div className='hm-make-order'>
                    <h4>Category1</h4>
                    {
                        items.map( ( item, i ) => <OrderItem item={item} addToCart={addToCart} key={i} /> )
                    }                   
                </div>
                <div className='hm-make-order'>
                    <h4>Category2</h4>
                    {
                        items.map( ( item, i ) => <OrderItem item={item} addToCart={addToCart} key={i} /> )
                    }                    
                </div>
            </div>
        </MainContainer>
    )
}

export default Home