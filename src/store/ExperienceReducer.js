const defaultState = {
    companies: [
        {
            id: 1,
            href: "https://it-transformation.com.ua/",
            logo: "it_transformation.jpg",
            logo_alt: "it_transformation_logo",
            job_title: "Frontend Engineer Intern",
            company_name: "IT Transformation",
            skills: [
                "Vue",
                "Vuex",
                "Vuetify",
                "HTML",
                "CSS",
                "JavaScript",
                "Keycloak",
            ],
        },
        {
            id: 2,
            href: "https://spekter.site/",
            logo: "spekter.jpg",
            logo_alt: "spekter_logo",
            job_title: "Junior Full Stack developer",
            company_name: "Spekter",
            skills: [
                "Laravel",
                "PHP",
                "MySQL",
                "ReactJS",
                "Redux",
                "HTML",
                "CSS",
                "JavaScript",
                "Sass",
                "jQuery",
            ],
        },
        {
            id: 3,
            href: "https://yeducoders.com/",
            logo: "yeDuCoders.jpg",
            logo_alt: "yellow-duck-coders_logo",
            job_title: "Full Stack developer",
            company_name: "Yellow Duck Coders",
            skills: [
                "JavaScript",
                "Laravel",
                "PHP",
                "PostgreSQL",
                "Vue",
                "Pinia",
                "Vuetify",
                "TypeScript",
                "React",
                "Tailwind",
                "Sass",
                "Vite",
                "SQL",
                "Node.js",
            ],
        },
        {
            id: 4,
            href: "https://www.instagram.com/traffic__jet/",
            logo: "trafficJet.jpg",
            logo_alt: "traffic-jet_logo",
            job_title: "Full Stack developer",
            company_name: "Traffic Jet",
            skills: [
                "JavaScript",
                "Laravel",
                "PHP",
                "PostgreSQL",
                "Vue",
                "Pinia",
                "TypeScript",
                "Tailwind",
                "Sass",
                "Quasar",
                "Vite",
                "SQL",
            ],
        },
    ],

    companies_translations: [
        {
            id: 1,
            companyId: 1,
            lang: "ru",
            date: "Декабрь 2022 - Март 2023",
            description:
                "Участвовал в разработке веб-приложений с использованием Vue и Vuetify. Реализовал авторизацию пользователей через Keycloak.",
            achievements: [],
        },
        {
            id: 2,
            companyId: 1,
            lang: "ua",
            date: "Грудень 2022 - Березень 2023",
            description:
                "Брав участь у розробці веб-застосунків з використанням Vue та Vuetify. Реалізував авторизацію користувачів через Keycloak.",
            achievements: [],
        },
        {
            id: 3,
            companyId: 1,
            lang: "en",
            date: "December 2022 - March 2023",
            description:
                "Participated in the development of web applications using Vue and Vuetify. Implemented user authorization via Keycloak.",
            achievements: [],
        },

        {
            id: 4,
            companyId: 2,
            lang: "ru",
            date: "Май 2023 - Июнь 2024",
            description:
                "Занимался разработкой и поддержкой веб-сайтов и проектов на Laravel. Принимал участие во фронтенд и в бэкенд разработке, интеграции с базами данных и настройке серверов.",
            achievements: [
                "Реализовал функционал на Laravel для нескольких коммерческих проектов.",
                "Оптимизировал работу сайтов, улучшив скорость загрузки и SEO.",
                "Применил React и Redux для создания интерактивных интерфейсов.",
            ],
        },
        {
            id: 5,
            companyId: 2,
            lang: "ua",
            date: "Травень 2023 - Червень 2024",
            description:
                "Працював над розробкою та підтримкою веб-сайтів і проектів на Laravel. Брав участь у фронтенд та бекенд розробці, інтеграції з базами даних та налаштуванні серверів.",
            achievements: [
                "Реалізував функціонал на Laravel для кількох комерційних проектів.",
                "Оптимізував роботу сайтів, покращивши швидкість завантаження та SEO.",
                "Застосував React і Redux для створення інтерактивних інтерфейсів.",
            ],
        },
        {
            id: 6,
            companyId: 2,
            lang: "en",
            date: "May 2023 - June 2024",
            description:
                "Worked on developing and supporting websites and projects on Laravel. Participated in frontend and backend development, database integration and server setup.",
            achievements: [
                "Implemented functionality on Laravel for several commercial projects.",
                "Optimized website performance, improving loading speed and SEO.",
                "Used React and Redux to create interactive interfaces.",
            ],
        },

        {
            id: 7,
            companyId: 3,
            lang: "ru",
            date: "Июнь 2024 — Сентябрь 2025",
            description:
                "Как член большой международной команды, я работал над разработкой масштабной ERP-системы с гибкой архитектурой, использованием CI/CD и процессом code-review. Участвовал в ежедневных митингах с заказчиком и сотрудничал с другими командами, обеспечивая качественную интеграцию модулей и стабильность продукта. Также занимался поддержкой уже запущенных продуктов.",
            achievements: [
                "Успешно реализовал ключевые модули ERP-системы, что оптимизировали бизнес-процессы клиента.",
                "Углубил экспертизу в планировании и менеджменте задач, работая в условиях часто изменяющихся требований.",
                "Наладил эффективное взаимодействие с другими командами, что сократило время согласования и интеграции.",
                "Поддержал и усовершенствовал несколько существующих продуктов, повысив их стабильность и производительность.",
            ],
        },
        {
            id: 8,
            companyId: 3,
            lang: "ua",
            date: "Червень 2024 - Вересень 2025",
            description:
                "Як член великої міжнародної команди, я працював над розробкою масштабної ERP-системи з гнучкою архітектурою, використанням CI/CD та процесом code-review. Брав участь у щоденних мітингах із замовником та співпрацював з іншими командами, забезпечуючи якісну інтеграцію модулів і стабільність продукту. Також займався підтримкою вже запущених продуктів.",
            achievements: [
                "Успішно реалізував ключові модулі ERP-системи, що оптимізували бізнес-процеси клієнта.",
                "Поглибив експертизу в плануванні та менеджменті задач, працюючи в умовах часто змінюваних вимог.",
                "Налагодив ефективну взаємодію з іншими командами, що скоротило час узгодження та інтеграції.",
                "Підтримав і вдосконалив кілька існуючих продуктів, підвищивши їхню стабільність та продуктивність.",
            ],
        },
        {
            id: 9,
            companyId: 3,
            lang: "en",
            date: "June 2024 - September 2025",
            description:
                "As a member of a large international team, I worked on the development of a large-scale ERP system with a flexible architecture, using CI/CD and a code review process. Participated in daily meetings with the customer and collaborated with other teams, ensuring high-quality integration of modules and product stability. Also supported already launched products.",
            achievements: [
                "Successfully implemented key modules of the ERP system, which optimized the client's business processes.",
                "Deepened my expertise in planning and task management, working in conditions of frequently changing requirements.",
                "Established effective interaction with other teams, which reduced the time of approval and integration.",
                "Supported and improved several existing products, increasing their stability and performance.",
            ],
        },

        {
            id: 10,
            companyId: 4,
            lang: "ru",
            date: "Сентябрь 2025 - Все еще",
            description: "",
            achievements: [],
        },
        {
            id: 11,
            companyId: 4,
            lang: "ua",
            date: "Вересень 2025 - Досі",
            description: "",
            achievements: [],
        },
        {
            id: 12,
            companyId: 4,
            lang: "en",
            date: "September 2025 - Still",
            description: "",
            achievements: [],
        },
    ],
};

export const ExperienceReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
