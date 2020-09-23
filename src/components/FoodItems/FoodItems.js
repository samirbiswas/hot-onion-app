import React from 'react';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {
    const {title,img,subtitle,price,id} = props.food;
    
    return (
        <div className='col-md-4'>
           <Link to={`/foods/${id}`}>
            <div className="card m-2 card-style">
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                        <p>Price:{price}</p>
            
                </div>
             </div>
        </Link>
        </div>
        
    );
};


export default FoodItems;