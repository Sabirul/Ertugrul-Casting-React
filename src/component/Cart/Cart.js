import React, { useState } from 'react';
import Actors from '../Actors/Actors';
import './Cart.css'

const Cart = (props) => {
    const {Name, img} = props.actor;
    return (
        <div className='con'>
        <div className='added-actor'>
        <div className='actor'>
        <img src={img} alt=''></img>
        <h3>{Name}</h3>
        </div>
    </div>
        </div>
        
        
    );
};

export default Cart;