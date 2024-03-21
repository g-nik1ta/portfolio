import React from 'react';
import './Footer.scss';
import Telegram from 'svg/socials/Telegram';
import Instagram from 'svg/socials/Instagram';
import Viber from 'svg/socials/Viber';
import Facebook from 'svg/socials/Facebook';
import LinkedIn from 'svg/socials/LinkedIn';

const Footer = () => {
    return (
        <footer>
            <span className="my_name">Nikita Gonohov</span>
            <nav>
                <a className='link_item' href="#about">About</a>
                <a className='link_item' href="#skills">Skills</a>
                <a className='link_item' href="#experience">Experience</a>
                <a className='link_item' href="#projects">Projects</a>
                <a className='link_item' href="#education">Education</a>
            </nav>
            <div className="socials_wrapper">
                <a href=""><Telegram /></a>
                <a href=""><Instagram /></a>
                <a href=""><Viber /></a>
                <a href=""><Facebook /></a>
                <a href=""><LinkedIn /></a>
            </div>
            <span className="copyright">© 2024 Nikita Gonohov. All rights reserved.</span>
        </footer>
    )
}

export default Footer;