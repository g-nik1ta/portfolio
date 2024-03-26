import React from 'react';
import './Footer.scss';
import Socials from 'components/Socials/Socials';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <span className="my_name">{t('general.name')}</span>
            <nav>
                <a className='link_item' href="#about">{t("nav.about")}</a>
                <a className='link_item' href="#skills">{t("nav.skills")}</a>
                <a className='link_item' href="#experience">{t("nav.experience")}</a>
                <a className='link_item' href="#projects">{t("nav.projects")}</a>
                <a className='link_item' href="#education">{t("nav.education")}</a>
            </nav>
            <Socials />
            <span className="copyright">
                {t('general.copyright')}
            </span>
        </footer>
    )
}

export default Footer;