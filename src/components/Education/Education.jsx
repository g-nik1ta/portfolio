import React from 'react';
import './Education.scss';
import SectionHead from 'components/SectionHead/SectionHead';
import { useSelector } from 'react-redux';
import EducationCommon from 'svg/EducationCommon';

const Education = () => {
    const educations = useSelector(state => state.EducationReducer.educations);

    return (
        <section className='education_section container_box' id='education'>
            <SectionHead
                title="Образование"
                subtitle="Краткий список моего образования как программиста."
            />
            <div className="cards_line">
                {
                    educations.map(item =>
                        <div key={item.id} className="experience_item">
                            <div className="info_card">
                                <div className="head">
                                    <a href={item.href} className={"logo " + (item.logoBackground ? item.logoBackground : '')}>
                                        {
                                            item.logo
                                                ?
                                                <img src={require(`assets/educations/${item.logo}`)} alt={item.logo_alt} />
                                                :
                                                <EducationCommon />
                                        }
                                    </a>
                                    <div className='flex column'>
                                        <span className="job_title">{item.title}</span>
                                        <a href={item.href} className="company_name">{item.education_name}</a>
                                        <span className="date">{item.date}</span>
                                    </div>
                                </div>
                                {
                                    item.grade &&
                                    <span className="grade">
                                        <b>Grade: </b>{item.grade}
                                    </span>
                                }
                                <p className="description">{item.description}</p>
                                <div className="logo-date hide flex-if_lg_size">
                                    <span className="date">{item.date}</span>
                                </div>
                            </div>
                            <div className="logo-date flex">
                                <a href={item.href} className={"logo_wrapper " + (item.logoBackground ? item.logoBackground : '')}>
                                    {
                                        item.logo
                                            ?
                                            <img src={require(`assets/educations/${item.logo}`)} alt={item.logo_alt} />
                                            :
                                            <EducationCommon />
                                    }
                                </a>
                                <span className="date hide-if_lg_size">{item.date}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Education;