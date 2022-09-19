import React from 'react';
import {BsArrowLeft} from 'react-icons/bs'

const ArrowButton = props => {
    return (
        <div className={`rounded-full text-lg p-5 border border-stone-800 text-stone-800 cursor-pointer duration-300 hover:text-white hover:bg-stone-800 ${props.isRight ? "rotate-180" : ""}`}>
            <BsArrowLeft />
        </div>
    );
};

export default ArrowButton;