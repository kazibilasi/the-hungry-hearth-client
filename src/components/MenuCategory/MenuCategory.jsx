/* eslint-disable react/prop-types */
import React from 'react';
import FoodMenu from '../Shared/FoodMenu';
import Cover from '../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, image }) => {
    return (
        <div >

            {title && <Cover img={image} title={title}></Cover>}
            <div className=' lg:grid lg:grid-cols-2 gap-5 mt-20 mb-5  '>
                {
                    items.map(item => <FoodMenu
                        key={item._id}
                        item={item}
                    ></FoodMenu>)
                }
            </div>
            <div className=' mb-10 text-center'>
                {
                    title && <Link to={`/orderFood/${title}`}>
                        <button className="btn btn-outline btn-sm border-o border-b-4 rounded-2xl">Order Now</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default MenuCategory;