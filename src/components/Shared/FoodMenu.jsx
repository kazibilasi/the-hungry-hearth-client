/* eslint-disable react/prop-types */
import React from 'react';

const FoodMenu = ({item}) => {
    const {image, name, price, recipe} = item
    return (
        <div className='flex space-x-4 '>
            <img className='w-[150px]' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p>{name}----------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-center text-yellow-600'>${price}</p>
        </div>
    );
};

export default FoodMenu;