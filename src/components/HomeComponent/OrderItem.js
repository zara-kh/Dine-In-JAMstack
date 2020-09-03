import React from 'react';

const OrderItem = ({ item, addToCart }) => {
    return (
        <div className='hm-order-item'>
            <div>{ item.name }</div>
            <div>$ { item.price }</div>
            <div>
                <button onClick={addToCart} id={ item.id } >ADD</button>
            </div>
        </div>
    )
}

export default OrderItem