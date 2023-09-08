/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className=' mx-auto mt-14'>
            <SectionTitle
            subHeading = {' From 11.00 am to 10.00pm'}
            heading = {'Order online'}

            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper gap-0"
            >
                <SwiperSlide>
                    <img className='mx-auto w-full' src={img} alt="" />
                    <h1 className=' text-4xl uppercase text-white -mt-20 text-center'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full' src={img2} alt="" />
                    <h1 className=' text-4xl uppercase text-white -mt-20 text-center'>pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full' src={img3} alt="" />
                    <h1 className=' text-4xl uppercase text-white -mt-20 text-center'>Soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full' src={img4} alt="" />
                    <h1 className=' text-4xl uppercase text-white -mt-20 text-center'>dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full' src={img5} alt="" />
                    <h1 className=' text-4xl uppercase text-white -mt-20 text-center'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Category;