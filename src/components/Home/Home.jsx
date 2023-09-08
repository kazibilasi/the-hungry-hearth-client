import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Common from '../Common/Common';
import FromOurMenu from '../From Our Menu/FromOurMenu';
import CallUs from '../Call Us/CallUs';
import Featured from './Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Common></Common>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;