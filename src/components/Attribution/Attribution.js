import React from 'react';
import './Attribution.scss';


const Attribution = () => {
    const NAME = 'Stephen Dueñas';
    return (
        <div className="attribution">
            Challenge by <a href="//www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="//github.com/stephenduenas" target="_blank" rel="noreferrer">{ NAME }</a>.
        </div>
    );
}

export default Attribution;
