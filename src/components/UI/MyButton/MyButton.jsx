import React from 'react';
import "./MyButton.scss";

const MyButton = ({ children }) => {
    return (
        <button className='my_button'>
            <span className='title'>
                {children}
            </span>
        </button>
    )
}

export default MyButton;