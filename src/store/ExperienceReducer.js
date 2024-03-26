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
            date: 'Июнь 2023 — Все еще',
            description: 'Занимался созданием проектов и веб-сайтов на фреймворке Laravel, с использованием языка программирования PHP в качестве Backend и JavaScript в качестве Frontend, но помимо этого имел дело с React, Redux фреймворками. Принимал участие в разработке множество сайтов, интернет магазинов, порталов и других уникальных проектов. Работая в этой компании получил опыт в Backend разработке, в работе с базой данных, сервером, SEO оптимизацией и многое другое.',
        },
        {
            id: 1,
            lang: 'ua',
            date: "Червень 2023 — Досі",
            description: "Займався створенням проектів і веб-сайтів на фреймворку Laravel, з використанням мови програмування PHP як Backend і JavaScript як Frontend, а також мав справу з фреймворками React, Redux. Брав участь у розробці безлічі сайтів, інтернет-магазинів, порталів та інших унікальних проектів. Працюючи в цій компанії, отримав досвід в Backend розробці, роботі з базою даних, сервером, SEO оптимізацією та багато іншого.",
        },
        {
            id: 1,
            lang: 'en',
            date: "June 2023 — Still",
            description: "Engaged in creating projects and websites on the Laravel framework, using PHP as Backend and JavaScript as Frontend, but also dealt with React, Redux frameworks. Participated in the development of numerous websites, online stores, portals, and other unique projects. Working in this company gained experience in Backend development, working with databases, servers, SEO optimization, and much more.",
        },

        {
            id: 2,
            lang: 'ru',
            date: 'Декабрь 2022 - Март 2023',
            description: 'Занимался созданием проектов и веб-сайтов на фреймворке Laravel, с использованием языка программирования PHP в качестве Backend и JavaScript в качестве Frontend, но помимо этого имел дело с React, Redux фреймворками. Принимал участие в разработке множество сайтов, интернет магазинов, порталов и других уникальных проектов. Работая в этой компании получил опыт в Backend разработке, в работе с базой данных, сервером, SEO оптимизацией и многое другое.',
        },
        {
            id: 2,
            lang: 'ua',
            date: "Грудень 2022 - Березень 2023",
            description: 'Займався створенням проектів і веб-сайтів на фреймворку Laravel, з використанням мови програмування PHP як Backend і JavaScript як Frontend, а також мав справу з фреймворками React, Redux. Брав участь у розробці безлічі сайтів, інтернет-магазинів, порталів та інших унікальних проектів. Працюючи в цій компанії, отримав досвід в Backend розробці, роботі з базою даних, сервером, SEO оптимізацією та багато іншого.'
        },
        {
            id: 2,
            lang: 'en',
            date: "December 2022 - March 2023",
            description: 'Engaged in creating projects and websites on the Laravel framework, using PHP as Backend and JavaScript as Frontend, but also dealt with React, Redux frameworks. Participated in the development of numerous websites, online stores, portals, and other unique projects. Working in this company gained experience in Backend development, working with databases, servers, SEO optimization, and much more.'
        },
    ]
}

export const ExperienceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}