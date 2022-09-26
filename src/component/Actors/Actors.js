import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Actors.css'

const Actors = (props) => {
    // console.log(props.actor)
    const {Name, character, age, salary, img} = props.actor;
    return (
        <div className=''>
            
            <div className='actor-field'>
                <img src={img} alt=''></img>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{Name}</td>
                    </tr>
                    <tr>
                        <td>Character:</td>
                        <td>{character}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>Salary:</td>
                        <td>₺{salary}</td>
                    </tr>
                </table>
                <button onClick={()=> props.button(props.actor)} className='btn'>Cast</button>

            </div>

        </div>
    );
};

export default Actors;