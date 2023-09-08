import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import img from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div style={{ backgroundImage: 'url(https://qul.imgix.net/72e1881e-5e4d-49f3-b6f9-d823610ed4b3/448855_sld.jpg)' }} className=' p-10 mt-16 bg-fixed text-white'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured item'}
            ></SectionTitle>

            <div className='lg:flex lg:w-[1000px] justify-center items-center mx-auto align-middle mt-16 space-x-6 lg:space-y-0 space-y-2 ' >
                <div>
                    <img className='lg:w-[350px] sm:w-[200px]' src={img} alt="" />
                </div>
                <div className='lg:w-[400px] space-y-1'>
                    <p>Aug 9, 2023</p>
                    <p>WHERE I CAN GET SOME?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia a sed ex at earum. Nesciunt sed odio aliquid, nulla iure harum quaerat tenetur molestiae non ipsam obcaecati repellendus incidunt quam!</p>
                    <button className="btn btn-outline btn-sm border-o border-b-4 rounded-2xl">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;