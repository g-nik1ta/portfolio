import React from 'react';
import Logo from "svg/Logo";
import "./Header.scss";
import MyButton from 'components/UI/MyButton/MyButton';

const Header = () => {
    return (
        <header>
            <div className="inner container_box">
                <div className="logo pointer">
                    <Logo />
                    <span className="title">Portfolio</span>
                </div>
                <nav>
                    <a className='link_item' href="">About</a>
                    <a className='link_item' href="">Skills</a>
                    <a className='link_item' href="">Experience</a>
                    <a className='link_item' href="">Projects</a>
                    <a className='link_item' href="">Education</a>
                </nav>
                <MyButton>
                    GitHub Profile
                </MyButton>
            </div>
        </header>
    )
}

export default Header;