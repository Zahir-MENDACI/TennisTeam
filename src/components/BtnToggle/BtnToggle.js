import React, { useContext } from 'react';
import { ThemeContext } from '../../config/Context/ThemeContext';
import './BtnToggle.css'

const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)

    
    return (
        <div 
            onClick={toggleTheme}
            className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}
        >
                {theme ? 'dark' : 'light'}
        </div>
    );
};

export default BtnToggle;