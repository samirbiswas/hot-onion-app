import React, { useState } from 'react';
import Data from '../../fakeData';
import FoodItems from '../FoodItems/FoodItems';
const Home = () => {

    const [food, setFood] = useState(Data);
    //console.log(food);


    return (
        <div className='container'>
            
        <div className='row'>
            
                {food.map(fd=> <FoodItems key={fd.id} food={fd}></FoodItems> )}

        </div>
        </div>
    );
};

export default Home;