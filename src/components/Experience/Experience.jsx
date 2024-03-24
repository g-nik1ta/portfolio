import React from 'react';
import "./Experience.scss";
import "styles/components_styles/CardLine.scss";
import SectionHead from 'components/SectionHead/SectionHead';
import { useSelector } from 'react-redux';
import CompanyCommon from 'svg/CompanyCommon';

const Experience = () => {
    const companies = useSelector(state => state.ExperienceReducer.companies);

    return (
        <section className='experience_section container_box' id='experience'>
            <SectionHead
                title="Experience"
                subtitle="My work experience as a software engineer and working on different companies and projects."
            />
            <div className="cards_line">
                {
                    companies.map(company =>
                        <div key={company.id} className="experience_item">
                            <div className="info_card">
                                <div className="head">
                                    <a href={company.href} className="logo">
                                        {
                                            company.logo
                                                ?
                                                <img src={require(`assets/companies/${company.logo}`)} alt={company.logo_alt} />
                                                :
                                                <CompanyCommon />
                                        }
                                    </a>
                                    <div className='flex column'>
                                        <span className="job_title">{company.job_title}</span>
                                        <a href={company.href} className="company_name">{company.company_name}</a>
                                        <span className="date">{company.date}</span>
                                    </div>
                                </div>
                                <p className="description">{company.description}</p>
                                <div className="skills">
                                    <b>Skills:</b>
                                    <ul className='undecorated_ul'>
                                        {
                                            company.skills.map((skill, index) =>
                                                <li key={index}>{skill}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="logo-date hide flex-if_lg_size">
                                    <span className="date">{company.date}</span>
                                </div>
                            </div>
                            <div className="logo-date flex">
                                <a href={company.href} className="logo_wrapper">
                                    {
                                        company.logo
                                            ?
                                            <img src={require(`assets/companies/${company.logo}`)} alt={company.logo_alt} />
                                            :
                                            <CompanyCommon />
                                    }
                                </a>
                                <span className="date hide-if_lg_size">{company.date}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Experience;