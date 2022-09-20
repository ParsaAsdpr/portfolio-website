import React from 'react';

const Welcome = () => {
    return (
        <div className='p-16 border-red-400 overflow-hidden'>
            <h2 className='text-3xl sm:text-5xl md:text-7xl font-extrabold welcome-text text-center'>Hello</h2>
            <div className='vertical-line w-1/2 border-r border-black mt-5'></div>
            <div className=' border-red-500 flex justify-center items-center overflow-hidden'>
                <h2 className='text-white text-4xl sm:text-6xl md:text-8xl welcome-brand pb-5'>Welcome</h2>
            </div>
        </div>
    );
};

export default Welcome;