import React from 'react';
import "./About.scss";
import TypewriterBlock from './TypewriterBlock/TypewriterBlock';
import MyButton from 'components/UI/MyButton/MyButton';
import AboutAnimate from 'svg/AboutAnimate';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className='about' id='about'>
            <div className='container_box flex inner space_between column_reverse-if_md_size'>
                <div className="info_wrapper half_width full_width-if_md_size">
                    <span className="title text_center-if_md_size">
                        {t('about.title')} <br />
                        {t('general.name')}
                    </span>
                    <div className="subtitle justify_center-if_md_size">
                        <span>{t('about.subtitle')}</span>
                        <TypewriterBlock />
                    </div>
                    <p
                        className="text text_center-if_md_size"
                        dangerouslySetInnerHTML={
                            { __html: t('about.text', { joinArrays: '<br />' }) }
                        }
                    >
                    </p>
                    <MyButton href="https://g-nik1ta.github.io/resume/" active={true} className="medium">
                        {t('about.cv')}
                    </MyButton>
                </div>
                <div className="avatar_wrapper half_width full_width-if_md_size">
                    <AboutAnimate />
                    <img src={require('assets/avatar.jpg')} alt="avatar" className='avatar' />
                </div>
            </div>
        </section>
    )
}

export default About;