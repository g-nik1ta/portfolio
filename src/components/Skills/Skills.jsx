import React from 'react';
import "./Skills.scss";
import { backendLogo, frontendLogo, othersLogo } from 'constants/skills';
import SectionHead from 'components/SectionHead/SectionHead';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const skillBoxes = [
        { id: 1, title: 'Frontend', skills: frontendLogo },
        { id: 2, title: 'Backend', skills: backendLogo },
        { id: 3, title: 'Others', skills: othersLogo },
    ]

    return (
        <section className='skills_section container_box' id='skills'>
            <SectionHead
                title={t('skills.head.title')}
                subtitle={t('skills.head.subtitle')}
            />
            <div className="skills_box_list">
                {
                    skillBoxes.map(box =>
                        <div key={box.id} className="skill_box">
                            <span className="title">{box.title}</span>
                            <div className="skills_wrapper">
                                {
                                    box.skills.map(item =>
                                        <div key={item.id} className="skill">
                                            {item.svg}
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Skills;