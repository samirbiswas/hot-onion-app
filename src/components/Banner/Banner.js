import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-section'>
           <div className="search-area">
               <h1>Best Food waiting for you....</h1>
          
           <div className="input-area">
               <input type="text"/>
               <button type="submit">Search</button>
           </div>
           </div>
        </div>
    );
};

export default Banner;