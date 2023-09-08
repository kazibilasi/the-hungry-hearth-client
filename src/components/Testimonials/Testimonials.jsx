import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'What our client says'}
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-20">
                <div>

                    {
                        review.map(r => <SwiperSlide key={r._id} className='text-center'>
                            <p className='flex flex-col items-center mb-6'>
                                <Rating
                              
                                    style={{ maxWidth: 180 }}
                                    value={r.rating}
                                    readOnly

                                />
                            </p>
                            <p className=' text-2xl font-serif'>{r.name}</p>
                            <p className='w-9/12 mx-auto'>{r.details}</p>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Testimonials;