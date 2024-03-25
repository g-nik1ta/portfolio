import React from 'react';
import './MobileMenu.scss';
import MyButton from 'components/UI/MyButton/MyButton';
import Socials from 'components/Socials/Socials';

const MobileMenu = ({ burger, setBurger }) => {
    const closeBurger = () => {
        document.querySelector('body').classList.remove('no_scroll')
        setBurger(false);
    }

    return (
        <div className={"mobile_menu" + (burger ? " open" : "")}>
            <nav className="item-list">
                <div className='nav-item'>
                    <a onClick={closeBurger} className='text' href="#about">About</a>
                </div>
                <div className='nav-item'>
                    <a onClick={closeBurger} className='text' href="#skills">Skills</a>
                </div>
                <div className='nav-item'>
                    <a onClick={closeBurger} className='text' href="#experience">Experience</a>
                </div>
                <div className='nav-item'>
                    <a onClick={closeBurger} className='text' href="#projects">Projects</a>
                </div>
                <div className='nav-item'>
                    <a onClick={closeBurger} className='text' href="#education">Education</a>
                </div>
            </nav>

            <MyButton href="https://github.com/g-nik1ta">
                GitHub Profile
            </MyButton>
            <Socials />
        </div>
    )
}

export default MobileMenu;