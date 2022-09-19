import React from 'react';
import { useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";

const ScrollUp = () => {
    const [isActive, setActive] = React.useState(false)
    useEffect(() => {
        let y = window.scrollY;
        if (y >= 800) setActive(true);
        else setActive(false);
    }, [])

    return (
        <div className={`p-5 text-xl text-black border border-black fixed bottom-10 right-10 ${isActive ? "opacity-100" : "opacity-0"} duration-700`}>
            <FiArrowUp />
        </div>
    );
};

export default ScrollUp;