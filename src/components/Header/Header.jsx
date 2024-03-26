import React, { useState } from 'react';
import Logo from "svg/Logo";
import "./Header.scss";
import MyButton from 'components/UI/MyButton/MyButton';
import Burger from './Burger/Burger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import LangSelect from 'components/UI/LangSelect/LangSelect';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
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
                    <a className='link_item' href="#about">{t("nav.about")}</a>
                    <a className='link_item' href="#skills">{t("nav.skills")}</a>
                    <a className='link_item' href="#experience">{t("nav.experience")}</a>
                    <a className='link_item' href="#projects">{t("nav.projects")}</a>
                    <a className='link_item' href="#education">{t("nav.education")}</a>
                </nav>

                <div className='flex align_center lang_container'>
                    <MyButton href="https://github.com/g-nik1ta" className="hide-if_md_size">
                        {t('header.github_profile')}
                    </MyButton>
                    <LangSelect />
                </div>

                <Burger burger={burger} setBurger={setBurger} />
            </div>
            <MobileMenu burger={burger} setBurger={setBurger} />

            <div onClick={closeBurger} className={'background' + (burger ? " active" : "")}></div>
        </header>
    )
}

export default Header;