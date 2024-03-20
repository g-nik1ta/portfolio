import React from 'react';
import "./About.scss";
import TypewriterBlock from './TypewriterBlock/TypewriterBlock';
import MyButton from 'components/UI/MyButton/MyButton';
import AboutAnimate from 'svg/AboutAnimate';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container_box flex inner space_between'>
                <div className="info_wrapper half_width">
                    <span className="title">
                        Hi, I am <br />
                        Nikita Gonohov
                    </span>
                    <div className="subtitle">
                        <span>I am a</span>
                        <TypewriterBlock />
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque nostrum fuga odit odio architecto et beatae, facilis aliquam officia magnam aut ab quae esse placeat dolor culpa hic non explicabo sapiente animi ex eaque autem! Ratione nulla iste inventore accusamus veritatis dolor quas incidunt rem odio, excepturi aspernatur, fugiat consectetur nam laborum error reiciendis?
                    </p>
                    <MyButton active={true} className="medium">
                        Check Resume
                    </MyButton>
                </div>
                <div className="avatar_wrapper half_width">
                    <AboutAnimate />
                    <img src={require('assets/avatar.jpg')} alt="avatar" className='avatar' />
                </div>
            </div>
        </section>
    )
}

export default About;