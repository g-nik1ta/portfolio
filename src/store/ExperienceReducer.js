const defaultState = {
    companies: [
        {
            id: 1,
            href: 'https://spekter.site/',
            logo: 'spekter.jpg',
            logo_alt: 'spekter_logo',
            job_title: 'Junior Full Stack developer',
            company_name: 'Spekter',
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
            skills: [
                'Vue', 'Vuex', 'Vuetify', 'HTML', 'CSS', 'JavaScript', 'Keycloak'
            ],
        },
    ],

    companies_translations: [
        {
            id: 1,
            lang: 'ru',
            date: 'Май 2023 — Все еще',
            description: 'Занимался созданием проектов и веб-сайтов на фреймворке Laravel, с использованием языка программирования PHP в качестве Backend и JavaScript в качестве Frontend, но помимо этого имел дело с React, Redux фреймворками. Принимал участие в разработке множество сайтов, интернет магазинов, порталов и других уникальных проектов. Работая в этой компании получил опыт в Backend разработке, в работе с базой данных, сервером, SEO оптимизацией и многое другое.',
        },
        {
            id: 1,
            lang: 'ua',
            date: "Травень 2023 — Досі",
            description: "Займався створенням проектів і веб-сайтів на фреймворку Laravel, з використанням мови програмування PHP як Backend і JavaScript як Frontend, а також мав справу з фреймворками React, Redux. Брав участь у розробці безлічі сайтів, інтернет-магазинів, порталів та інших унікальних проектів. Працюючи в цій компанії, отримав досвід в Backend розробці, роботі з базою даних, сервером, SEO оптимізацією та багато іншого.",
        },
        {
            id: 1,
            lang: 'en',
            date: "May 2023 — Still",
            description: "Engaged in creating projects and websites on the Laravel framework, using PHP as Backend and JavaScript as Frontend, but also dealt with React, Redux frameworks. Participated in the development of numerous websites, online stores, portals, and other unique projects. Working in this company gained experience in Backend development, working with databases, servers, SEO optimization, and much more.",
        },

        {
            id: 2,
            lang: 'ru',
            date: 'Декабрь 2022 - Март 2023',
            description: 'Проходил стажировку в качестве Frontend разработчка, принимал участие в создании веб-приложений и сайтов. В качестве основного фреймворка был выбран Vue, кроме этого имел дело с такими технологиями как Vuex, Vuetify, JavaScript и многое другое. Также получил уникальный опыт в работе с авторизацией с использованием системы управления идентификацией и доступом - Keycloak.',
        },
        {
            id: 2,
            lang: 'ua',
            date: "Грудень 2022 - Березень 2023",
            description: 'Проходив стажування як Frontend розробник, брав участь у створенні веб-додатків та сайтів. В якості фреймворка був обраний Vue, крім цього мав справу з такими технологіями як Vuex, Vuetify, JavaScript та багато іншого. Також отримав унікальний досвід у роботі з авторизацією з використанням системи керування ідентифікацією та доступом – Keycloak.'
        },
        {
            id: 2,
            lang: 'en',
            date: "December 2022 - March 2023",
            description: 'He completed an internship as a Frontend developer and took part in the creation of web applications and websites. Vue was chosen as the main framework, but in addition I dealt with technologies such as Vuex, Vuetify, JavaScript and much more. I also gained unique experience in working with authorization using the identity and access management system - Keycloak.'
        },
    ]
}

export const ExperienceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}