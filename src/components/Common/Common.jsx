import React from 'react';


const Common = () => {
    return (
        <div className=' mt-16'>
            <div className="hero h-[500px] brightness-90" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/06/20/17/30/youtube-banner-8077450_1280.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Common;