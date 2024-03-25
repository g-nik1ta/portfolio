import React, { useState } from 'react';
import Logo from "svg/Logo";
import "./Header.scss";
import MyButton from 'components/UI/MyButton/MyButton';
import Burger from './Burger/Burger';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const Header = () => {
    const [burger, setBurger] = useState(false);

    const closeBurger = () => {
        document.querySelector('body').classList.remove('no_scroll')
        setBurger(false);
    }

    return (
        <header>
            <div className="inner container_box">
                <div className="logo pointer">
                    <Logo />
                    <span className="title">Portfolio</span>
                </div>
                <nav className='hide-if_md_size flex'>
                    <a className='link_item' href="#about">About</a>
                    <a className='link_item' href="#skills">Skills</a>
                    <a className='link_item' href="#experience">Experience</a>
                    <a className='link_item' href="#projects">Projects</a>
                    <a className='link_item' href="#education">Education</a>
                </nav>
                <MyButton href="https://github.com/g-nik1ta" className="hide-if_md_size">
                    GitHub Profile
                </MyButton>

                <Burger burger={burger} setBurger={setBurger} />
            </div>
            <MobileMenu burger={burger} setBurger={setBurger} />

            <div onClick={closeBurger} className={'background' + (burger ? " active" : "")}></div>
        </header>
    )
}

export default Header;