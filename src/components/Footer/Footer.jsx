import React from 'react';
import './Footer.scss';
import Socials from 'components/Socials/Socials';

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
            <Socials />
            <span className="copyright">© 2024 Nikita Gonohov. All rights reserved.</span>
        </footer>
    )
}

export default Footer;