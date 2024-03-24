import React from 'react';
import './Socials.scss';
import Telegram from 'svg/socials/Telegram';
import Instagram from 'svg/socials/Instagram';
import Viber from 'svg/socials/Viber';
import Facebook from 'svg/socials/Facebook';
import LinkedIn from 'svg/socials/LinkedIn';

const Socials = () => {
    return (
        <div className="socials_wrapper">
            <a href=""><Telegram /></a>
            <a href=""><Instagram /></a>
            <a href=""><Viber /></a>
            <a href=""><Facebook /></a>
            <a href=""><LinkedIn /></a>
        </div>
    )
}

export default Socials;