import React from 'react';
import "./Skills.scss";
import { backendLogo, frontendLogo, othersLogo } from 'constants/skills';

const Skills = () => {
    return (
        <section className='skills_section container_box'>
            <h1 className="page_title">Skills</h1>
            <p className="page_subtitle">
                Here are some of my skills on which I have been working on for the past 3 years.
            </p>
            <div className="skills_box_list">
                <div className="skill_box">
                    <span className="title">Frontend</span>
                    <div className="skills_wrapper">
                        {
                            frontendLogo.map(item =>
                                <div key={item.id} className="skill">
                                    {item.svg}
                                    <span>{item.title}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="skill_box">
                    <span className="title">Backend</span>
                    <div className="skills_wrapper">
                        {
                            backendLogo.map(item =>
                                <div key={item.id} className="skill">
                                    {item.svg}
                                    <span>{item.title}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="skill_box">
                    <span className="title">Others</span>
                    <div className="skills_wrapper">
                        {
                            othersLogo.map(item =>
                                <div key={item.id} className="skill">
                                    {item.svg}
                                    <span>{item.title}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;