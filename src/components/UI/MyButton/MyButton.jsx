import React from 'react';
import "./MyButton.scss";

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={'my_button ' + props.className}>
            <span className='my_button_title'>
                {children}
            </span>
        </button>
    )
}

export default MyButton;