import React from 'react';

const Navlink = props => {
    return (
        <a className={`font-bold bg-${props.theme} px-1 md:px-3 py-1 cursor-pointer relative`} style={{animationDuration: props.duration, animationName: `navlinkAnim`}} href={props.url}>{props.text}</a>
    );
};

export default Navlink;