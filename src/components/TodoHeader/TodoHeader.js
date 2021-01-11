import React, { useState } from 'react';
import './TodoHeader.scss';
import IconSun from '../../images/icon-sun.svg';
import IconMoon from '../../images/icon-moon.svg';

const TodoHeader = () => {

    const [dark_mode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
        const LIGHT_MODE = 'light';
        dark_mode ? document.body.classList.add(LIGHT_MODE) : document.body.classList.remove(LIGHT_MODE);
        setDarkMode(!dark_mode);
    };

    return (
        <div className="todo__header">
            <h1>Todo</h1>
            <span className="mode" onClick={handleDarkMode}>
                <img src={`${dark_mode ? IconSun: IconMoon}` } alt="switch mode"></img>
            </span>
        </div>
    );

};

export default TodoHeader;
