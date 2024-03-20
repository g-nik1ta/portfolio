const defaultState = {
    companies: [
        {
            id: 1,
            href: 'https://spekter.site/',
            logo: 'spekter.jpg',
            logo_alt: 'spekter_logo',
            job_title: 'Junior Full Stack developer',
            company_name: 'Spekter',
            date: 'June 2023 - Still',
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
}

export const ExperienceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}