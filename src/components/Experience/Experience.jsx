import React, { useEffect, useState } from 'react';
import "./Experience.scss";
import "styles/components_styles/CardLine.scss";
import SectionHead from 'components/SectionHead/SectionHead';
import { useSelector } from 'react-redux';
import CompanyCommon from 'svg/CompanyCommon';
import { useTranslation } from 'react-i18next';
import { useTranslationDataArray } from 'hooks/useTranslations';

const Experience = () => {
    const { t, i18n } = useTranslation();
    const companiesCommon = useSelector(state => state.ExperienceReducer.companies);
    const companies_translations = useSelector(state => state.ExperienceReducer.companies_translations);
    
    const companies = useTranslationDataArray(companiesCommon, companies_translations, i18n.language)

    return (
        <section className='experience_section container_box' id='experience'>
            <SectionHead
                title={t('experience.head.title')}
                subtitle={t('experience.head.subtitle')}
            />
            <div className="cards_line">
                {
                    companies.map(company =>
                        <div key={company.id} className="experience_item">
                            <div className="info_card">
                                <div className="head">
                                    <a href={company.href} target='_blank' className="logo">
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
                                        <a href={company.href} target='_blank' className="company_name">
                                            {company.company_name}
                                        </a>
                                        <span className="date">{company.translation.date}</span>
                                    </div>
                                </div>
                                <p className="description">{company.translation.description}</p>
                                <div className="skills">
                                    <b>{t('nav.skills')}:</b>
                                    <ul className='undecorated_ul'>
                                        {
                                            company.skills.map((skill, index) =>
                                                <li key={index}>{skill}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="logo-date hide flex-if_lg_size">
                                    <span className="date">{company.translation.date}</span>
                                </div>
                            </div>
                            <div className="logo-date flex">
                                <a href={company.href} target='_blank' className="logo_wrapper">
                                    {
                                        company.logo
                                            ?
                                            <img src={require(`assets/companies/${company.logo}`)} alt={company.logo_alt} />
                                            :
                                            <CompanyCommon />
                                    }
                                </a>
                                <span className="date hide-if_lg_size">{company.translation.date}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Experience;