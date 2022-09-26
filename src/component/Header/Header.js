import React, { useEffect, useState } from 'react';
import Actors from '../Actors/Actors';
import Cart from '../Cart/Cart';
import Cost from '../Cost/Cost';
import './Header.css'

const Header = () => {
   
    const [actors, setActor] = useState([]);
    const [addedActor, setAddedActor] = useState([]);
    
    useEffect(() =>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data =>{
             setActor(data);
             const newData = [...addedActor, data[2]]
             setAddedActor(newData);
            
          })
    }, [])   
    const handlebtn = parameter =>{
        const newAddedActor = [...addedActor, parameter];
        setAddedActor(newAddedActor);
       
    }
    let cost =0;
    addedActor.map(actor =>{
        cost += actor.salary;
    })
    return (
       <div>
         <div className='header'>
            <h2>Make an Ertugrul Team</h2>
            <p>The Mangol are attacking on us, we need Ertugrul Zahnbaz</p>
            <h2>Total Budget: 10 Million</h2>
            
        </div>
        <div className='container'>
            <div className='actors'>
                {
                    actors.map(actor => <Actors 
                        button ={handlebtn}
                        actor={actor}>

                        </Actors>)
                }
                
            </div>
            
           <div>
           <Cost cost={cost} number={addedActor.length}></Cost>
            {               
            addedActor.map(actor => <Cart
                salary ={cost}
                number={addedActor.length}
                 actor={actor}>

                 </Cart>)
           }
           </div>
            

        </div>
       </div>
    );
};

export default Header;