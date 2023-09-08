/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-5/12 text-center my-8 mx-auto'>
            <p className=' text-yellow-600 mb-3'>-------{subHeading}-------</p>
            <h1 className=' text-4xl uppercase border-y-4 py-2'>{heading}</h1>

        </div>
    );
};

export default SectionTitle;