import React from 'react';

const SocialMedia = props => {

    return (
        <a title={props.title} target="blank" className={`text-2xl md:text-3xl py-1 bg-${props.theme} cursor-pointer hover:scale-110 transition social-media`} href={props.url} >
            {props.children}
        </a>
    );
};

export default SocialMedia;