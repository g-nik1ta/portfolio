import React from 'react';
import "./Experience.scss";

const Experience = () => {
    const companies = [
        {
            id: 1,
            href: 'https://spekter.site/',
            logo: 'spekter.jpg',
            logo_alt: 'spekter_logo',
            job_title: 'Junior Full Stack developer',
            company_name: 'Spekter',
            date: 'June 2023 - still',
            description: 'Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query. Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.',
            skills: [
                'ReactJS', 'Redux', 'Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Sass', 'jQuery'
            ],
        },
        {
            id: 2,
            href: 'https://it-transformation.com.ua/',
            logo: 'it_transformation.jpg',
            logo_alt: 'it_transformation_logo',
            job_title: 'Frontend Engineer Intern',
            company_name: 'IT Transformation',
            date: 'December 2022 - March 2023',
            description: 'Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query. Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.',
            skills: [
                'Vue', 'Vuex', 'Vuetify', 'HTML', 'CSS', 'JavaScript', 'Keycloak'
            ],
        },
    ]

    return (
        <section className='experience_section container_box'>
            <h1 className="page_title">Experience</h1>
            <p className="page_subtitle">
                My work experience as a software engineer and working on different companies and projects.
            </p>
            <div className="experience_line">
                {
                    companies.map(company =>
                        <div key={company.id} className="experience_item">
                            <div className="info_card">
                                <div className="head">
                                    <a href={company.href} className="company_logo">
                                        <img src={require(`assets/companies/${company.logo}`)} alt={company.logo_alt} />
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
                            </div>
                            <div className="logo-date">
                                <a href={company.href} className="logo_wrapper">
                                    <img src={require(`assets/companies/${company.logo}`)} alt={company.logo_alt} />
                                </a>
                                <span className="date">{company.date}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Experience;