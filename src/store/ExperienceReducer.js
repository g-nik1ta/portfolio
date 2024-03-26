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
            description: 'Занимался созданием проектов и веб-сайтов на фреймворке Laravel, с использованием языка программирования PHP в качестве Backend и JavaScript в качестве Frontend, но помимо этого имел дело с React, Redux фреймворками. Принимал участие в разработке множество сайтов, интернет магазинов, порталов и других уникальных проектов. Работая в этой компании получил опыт в Backend разработке, в работе с базой данных, сервером, SEO оптимизацией и многое другое.',
            skills: [
                'Laravel', 'PHP', 'MySQL', 'ReactJS', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Sass', 'jQuery'
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
            description: 'Проходил стажировку в качестве Frontend разработчка, принимал участие в создании веб-приложений и сайтов. В качестве основного фреймворка был выбран Vue, но кроме этого имел дело с такими технологиями как Vuex, Vuetify, JavaScript и многое другое. Также получил уникальный опыт в работе с авторизацией с использованием системы управления идентификацией и доступом - Keycloak.',
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