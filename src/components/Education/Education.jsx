import React from 'react';
import './Education.scss';
import SectionHead from 'components/SectionHead/SectionHead';
import { useSelector } from 'react-redux';
import EducationCommon from 'svg/EducationCommon';
import { useTranslation } from 'react-i18next';
import { useTranslationDataArray } from 'hooks/useTranslations';

const Education = () => {
    const { t, i18n } = useTranslation();
    const educationsCommon = useSelector(state => state.EducationReducer.educations);
    const educations_translations = useSelector(state => state.EducationReducer.educations_translations);
    
    const educations = useTranslationDataArray(educationsCommon, educations_translations, i18n.language)

    return (
        <section className='education_section container_box' id='education'>
            <SectionHead
                title={t('education.head.title')}
                subtitle={t('education.head.subtitle')}
            />
            <div className="cards_line">
                {
                    educations.map(item =>
                        <div key={item.id} className="experience_item">
                            <div className="info_card">
                                <div className="head">
                                    <a href={item.href} target='_blank' className={"logo " + (item.logoBackground ? item.logoBackground : '')}>
                                        {
                                            item.logo
                                                ?
                                                <img src={require(`assets/educations/${item.logo}`)} alt={item.logo_alt} />
                                                :
                                                <EducationCommon />
                                        }
                                    </a>
                                    <div className='flex column'>
                                        <span className="job_title">{item.translation.title}</span>
                                        <a href={item.href} target='_blank' className="company_name">
                                            {item.translation.education_name}
                                        </a>
                                        <span className="date">{item.translation.date}</span>
                                    </div>
                                </div>
                                {
                                    item.grade &&
                                    <span className="grade">
                                        <b>{t('education.grade')}: </b>{item.grade}
                                    </span>
                                }
                                <p className="description">{item.translation.description}</p>
                                <div className="logo-date hide flex-if_lg_size">
                                    <span className="date">{item.translation.date}</span>
                                </div>
                            </div>
                            <div className="logo-date flex">
                                <a href={item.href} target='_blank' className={"logo_wrapper " + (item.logoBackground ? item.logoBackground : '')}>
                                    {
                                        item.logo
                                            ?
                                            <img src={require(`assets/educations/${item.logo}`)} alt={item.logo_alt} />
                                            :
                                            <EducationCommon />
                                    }
                                </a>
                                <span className="date hide-if_lg_size">{item.translation.date}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Education;