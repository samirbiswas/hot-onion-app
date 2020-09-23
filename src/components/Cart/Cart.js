import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../fakeData';
import './Cart.css'

const Cart = () => {
    const {id} =useParams();
    const newData = Data.find(dt=> dt.id == id);
    //console.log(newData);
    
    return (
        <div className='container '>
            <div className='cart-style'>
    
                <div>
                    <h1>{newData.title}</h1>
                    <p>{newData.description}</p>
                    <p>Price: {newData.price}</p>
                    <button>+</button>
                    <button>-</button>
                    <p>1</p>
                    <button>Add to Cart</button>
                </div>

                <div className="cart-image">
                    <img src={newData.img} alt=""/>
                   

                </div>
            </div>
           
                
        </div>
    );
};

export default Cart;