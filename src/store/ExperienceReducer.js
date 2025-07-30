const defaultState = {
    companies: [
        {
            id: 1,
            href: 'https://it-transformation.com.ua/',
            logo: 'it_transformation.jpg',
            logo_alt: 'it_transformation_logo',
            job_title: 'Frontend Engineer Intern',
            company_name: 'IT Transformation',
            skills: [
                'Vue', 'Vuex', 'Vuetify', 'HTML', 'CSS', 'JavaScript', 'Keycloak'
            ],
        },
        {
            id: 2,
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
            id: 3,
            href: 'https://yeducoders.com/',
            logo: 'yeDuCoders.jpg',
            logo_alt: 'yellow-duck-coders_logo',
            job_title: 'Full Stack developer',
            company_name: 'Yellow Duck Coders',
            skills: [
                'JavaScript', 'Laravel', 'PHP', 'PostgreSQL', 'Vue', 'Pinia', 'Vuetify', 'TypeScript', 'React', 'Tailwind', 'Sass', 'Vite', 'SQL', 'Node.js'
            ],
        },
    ],

    companies_translations: [
        {
            id: 1,
            companyId: 1,
            lang: 'ru',
            date: 'Декабрь 2022 - Март 2023',
            description: 'Проходил стажировку в качестве Frontend разработчка, принимал участие в создании веб-приложений и сайтов. В качестве основного фреймворка был выбран Vue, кроме этого имел дело с такими технологиями как Vuex, Vuetify, JavaScript и многое другое. Также получил уникальный опыт в работе с авторизацией с использованием системы управления идентификацией и доступом - Keycloak.',
        },
        {
            id: 2,
            companyId: 1,
            lang: 'ua',
            date: "Грудень 2022 - Березень 2023",
            description: 'Проходив стажування як Frontend розробник, брав участь у створенні веб-додатків та сайтів. В якості фреймворка був обраний Vue, крім цього мав справу з такими технологіями як Vuex, Vuetify, JavaScript та багато іншого. Також отримав унікальний досвід у роботі з авторизацією з використанням системи керування ідентифікацією та доступом – Keycloak.'
        },
        {
            id: 3,
            companyId: 1,
            lang: 'en',
            date: "December 2022 - March 2023",
            description: 'I completed an internship as a Frontend developer and took part in the creation of web applications and websites. Vue was chosen as the main framework, but in addition I dealt with technologies such as Vuex, Vuetify, JavaScript and much more. I also gained unique experience in working with authorization using the identity and access management system - Keycloak.'
        },
        {
            id: 4,
            companyId: 2,
            lang: 'ru',
            date: 'Май 2023 — Июнь 2024',
            description: 'Занимался созданием проектов и веб-сайтов на фреймворке Laravel, с использованием языка программирования PHP в качестве Backend и JavaScript в качестве Frontend, но помимо этого имел дело с React, Redux фреймворками. Принимал участие в разработке множество сайтов, интернет магазинов, порталов и других уникальных проектов. Работая в этой компании получил опыт в Backend разработке, в работе с базой данных, сервером, SEO оптимизацией и многое другое.',
        },
        {
            id: 5,
            companyId: 2,
            lang: 'ua',
            date: "Травень 2023 — Червень 2024",
            description: "Займався створенням проектів і веб-сайтів на фреймворку Laravel, з використанням мови програмування PHP як Backend і JavaScript як Frontend, а також мав справу з фреймворками React, Redux. Брав участь у розробці безлічі сайтів, інтернет-магазинів, порталів та інших унікальних проектів. Працюючи в цій компанії, отримав досвід в Backend розробці, роботі з базою даних, сервером, SEO оптимізацією та багато іншого.",
        },
        {
            id: 6,
            companyId: 2,
            lang: 'en',
            date: "May 2023 — June 2024",
            description: "I engaged in creating projects and websites on the Laravel framework, using PHP as Backend and JavaScript as Frontend, but also dealt with React, Redux frameworks. Participated in the development of numerous websites, online stores, portals, and other unique projects. Working in this company gained experience in Backend development, working with databases, servers, SEO optimization, and much more.",
        },
        {
            id: 7,
            companyId: 3,
            lang: 'ru',
            date: 'Июнь 2024 — Все еще',
            description: "Работал в крупной международной компании, где был частью одной из многочисленных команд. Основным проектом на протяжении года была разработка масштабной ERP-системы, с гибкой архитектурой, использованием CI/CD и code review. Во время работы над этим проектом я значительно прокачал как технические, так и командные навыки: принимал участие в созвонах с заказчиком, активно взаимодействовал с другими командами, углубил понимание микроменеджмента и управления задачами, улучшил навыки коммуникации, планирования и быстрой адаптации в условиях меняющихся требований. Помимо основного проекта участвовал в поддержке других уже запущенных продуктов. Технологический стек включал как знакомые инструменты (PHP, Laravel, JavaScript), так и новые для меня: PostgreSQL, TypeScript, Pinia, Tailwind, Vuetify, DBeaver, Postman и другие.",
        },
        {
            id: 8,
            companyId: 3,
            lang: 'ua',
            date: "Червень 2024 — Досі",
            description: "Працював у великій міжнародній компанії, де був частиною однієї з численних команд. Основним проектом протягом року була розробка масштабної ERP-системи з гнучкою архітектурою, використанням CI/CD та code review. Під час роботи над цим проектом я значно прокачав як технічні, так і командні навички: брав участь у дзвонах із замовником, активно взаємодіяв з іншими командами, поглибив розуміння мікроменеджменту та управління завданнями, покращив навички комунікації, планування та швидкої адаптації в умовах змінних вимог. Крім основного проекту, брав участь у підтримці інших вже запущених продуктів. Технологічний стек включав як знайомі інструменти (PHP, Laravel, JavaScript), так і нові для мене: PostgreSQL, TypeScript, Pinia, Tailwind, Vuetify, DBeaver, Postman та інші.",
        },
        {
            id: 9,
            companyId: 3,
            lang: 'en',
            date: "June 2024 — Still",
            description: "I worked at a large international company as part of one of many teams. My main focus for a year was contributing to the development of a large-scale ERP system with a flexible architecture, CI/CD pipelines, and regular code reviews. Throughout this project, I significantly improved both my technical and soft skills: I participated in client calls, collaborated actively with other teams, deepened my understanding of micromanagement and task coordination, and enhanced my communication, planning, and adaptability in the face of changing requirements. In addition to the main project, I was also involved in maintaining and supporting other live products. The tech stack included familiar tools (PHP, Laravel, JavaScript) as well as new ones I mastered during the process: PostgreSQL, TypeScript, Pinia, Tailwind, Vuetify, DBeaver, Postman and more.",
        },
    ]
}

export const ExperienceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}