import React from 'react';
import "./About.scss";
import TypewriterBlock from './TypewriterBlock/TypewriterBlock';
import MyButton from 'components/UI/MyButton/MyButton';
import AboutAnimate from 'svg/AboutAnimate';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container_box flex inner space_between column_reverse-if_md_size'>
                <div className="info_wrapper half_width full_width-if_md_size">
                    <span className="title text_center-if_md_size">
                        Hi, I am <br />
                        Nikita Gonohov
                    </span>
                    <div className="subtitle justify_center-if_md_size">
                        <span>I am a</span>
                        <TypewriterBlock />
                    </div>
                    <p className="text text_center-if_md_size">
                    Я мотивированный и разносторонний человек, всегда готовый решать новые задачи.
                    <br /> С опытом работы и уверенными навыками в качестве Full Stack разработчика, я способен эффективно работать над разнообразными проектами. Я постоянно развиваюсь и готов к конструктивной критике, которая помогает мне совершенствоваться. 
                    <br /> Моя цель - не просто выполнять задачи, а создавать высококачественные проекты в сотрудничестве с дружной и амбициозной командой. Я стремлюсь к профессионализму в своей работе и нацелен на достижение значимых результатов в области веб-разработки.
                    </p>
                    <MyButton href="https://g-nik1ta.github.io/resume/" active={true} className="medium">
                        Check CV
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