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
            <a target='_blank' rel='noreferrer' href="https://t.me/nekit_tt"><Telegram /></a>
            <a target='_blank' rel='noreferrer' href="https://instagram.com/n_e_k_1_t__"><Instagram /></a>
            <a target='_blank' rel='noreferrer' href="viber://chat/?number=%2B380996272218"><Viber /></a>
            <a target='_blank' rel='noreferrer' href="https://www.facebook.com/profile.php?id=100023637429068"><Facebook /></a>
            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/nek1t/"><LinkedIn /></a>
        </div>
    )
}

export default Socials;