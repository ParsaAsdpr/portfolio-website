import React from 'react';

const ContactInfo = props => {
    return (
        <div className={`pb-10 duration-700 ${props.perc > props.expected ? 'translate-x-0 opacity-1' : 'opacity-0 translate-x-full'}`}>
            <h3 className='text-lg text-stone-700 font-bold'>{props.title}</h3>
            <p className='text-base text-stone-500'>{props.text}</p>
        </div>
    );
};

export default ContactInfo;