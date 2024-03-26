import React, { useEffect, useState } from 'react';
import Logo from "svg/Logo";
import "./Header.scss";
import MyButton from 'components/UI/MyButton/MyButton';
import Burger from './Burger/Burger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [burger, setBurger] = useState(false);

    const closeBurger = () => {
        document.querySelector('body').classList.remove('no_scroll')
        setBurger(false);
    }

    let countries = [
        {
            code: "ru",
            name: "Russian",
        },
        {
            code: "en",
            name: "English",
        },
    ]

    const { t, i18n } = useTranslation();

    return (
        <header>
            <div className="inner container_box">
                <div className="logo pointer">
                    <Logo />
                    <span className="title">Portfolio</span>
                </div>

                {countries.map((lng) => {
                    return (
                        <div key={lng.code}>
                            <button
                                onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
                                disabled={i18n.language === lng.code}
                            >
                                <span>{i18n.language}__</span>
                                <span>{lng.name}</span>
                            </button>
                        </div>
                    );
                })}

                <p>{t("test")}</p>

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