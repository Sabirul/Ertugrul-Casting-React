import React from 'react';
import'./Cost.css'

const Cost = (props) => {
    return (
        <div>
            <div className='cart'>
            <h2 className='text'>Added Actors: {props.number}</h2>
            <h2 className='text'>Total Cost: ₺ {props.cost}</h2>            
        
        </div>
            
        </div>
    );
};

export default Cost;