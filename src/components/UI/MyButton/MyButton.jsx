import React from 'react';
import "./MyButton.scss";

const MyButton = ({ children, active = false, rectangle, href, ...props }) => {
    if (href) {
        return (
            <a
                {...props}
                href={href}
                target='_blank'
                rel='noreferrer'
                className={
                    'my_button'
                    + (props.className ? ` ${props.className}` : "")
                    + (active ? ' active' : "")
                    + (rectangle ? ' rectangle' : "")
                }
            >
                <span className='my_button_title'>
                    {children}
                </span>
            </a>
        )
    }

    return (
        <button
            {...props}
            className={
                'my_button'
                + (props.className ? ` ${props.className}` : "")
                + (active ? ' active' : "")
                + (rectangle ? ' rectangle' : "")
            }
        >
            <span className='my_button_title'>
                {children}
            </span>
        </button>
    )
}

export default MyButton;