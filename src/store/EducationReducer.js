const defaultState = {
    educations: [
        {
            id: 1,
            href: 'https://www.cusu.edu.ua/ua/',
            logo: 'cusu.png',
            logo_alt: 'cusu logo',
            grade: '',
            // title: 'Центральноукраїнський державний університет імені Володимира Винниченка',
            // education_name: 'Computer science',
            // date: 'Sep 2021 - Still',
            // description: 'На данный момент прохожу обучение в университете Украины на высшую профессионально-квалификационную степень Бакалавр на специальности Компьютерные Науки. Изучаю разносторонние технологии как и в сфере Backend, так и в Frontend.',
        },
        {
            id: 2,
            href: 'https://edu.cbsystematics.com/ua',
            logoBackground: 'black',
            logo: 'cbs.svg',
            logo_alt: 'cbs logo',
            grade: '917/1000',
            // title: 'CyberBionic systematics',
            // education_name: 'Frontend',
            // date: 'Jun 2022 - Nov 2022',
            // description: 'Успешно закончил курсы Frontend Developer (ReactJS), освоив множество технологий, получив уникальные знания и создав несколько проектов. Изучил основы фреймворка React, менеджера состояний redux, язык программирования JS и так далее.',
        },
    ],


    educations_translations: [
        {
            id: 1,
            lang: 'ru',
            title: 'Центральноукраинский государственный университет имени Владимира Винниченко',
            education_name: 'Компьютерные науки',
            date: 'Сентябрь 2021  — Все еще',
            description: "На данный момент прохожу обучение в университете Украины на высшую профессионально-квалификационную степень Бакалавр на специальности Компьютерные Науки. Изучаю разносторонние технологии как и в сфере Backend, так и в Frontend.",
        },
        {
            id: 1,
            lang: 'ua',
            title: 'Центральноукраїнський державний університет імені Володимира Винниченка',
            education_name: 'Комп\'ютерні науки',
            date: "Вересень 2021 — Досі",
            description: "На даний момент я навчаюся в університеті України на ступінь бакалавра за спеціальністю Комп'ютерні науки. Я вивчаю різноманітні технології як у сфері Backend, так і у Frontend.",
        },
        {
            id: 1,
            lang: 'en',
            title: 'Volodymyr Vynnychenko Central Ukrainian State University',
            education_name: 'Computer science',
            date: "Sep 2021 - Still",
            description: "Currently, I am studying at a university in Ukraine for a Bachelor's degree in Computer Science. I am learning various technologies both in the Backend and Frontend areas.",
        },

        {
            id: 2,
            lang: 'ru',
            title: 'CyberBionic systematics',
            education_name: 'Frontend',
            date: 'Июнь 2022 – Ноябрь 2022',
            description: "Успешно закончил курсы Frontend Developer (ReactJS), освоив множество технологий, получив уникальные знания и создав несколько проектов. Изучил основы фреймворка React, менеджера состояний redux, язык программирования JS и так далее.",
        },
        {
            id: 2,
            lang: 'ua',
            title: 'CyberBionic systematics',
            education_name: 'Frontend',
            date: "Червень 2022 - Листопад 2022",
            description: "Успішно завершив курси Frontend Developer (ReactJS), опанувавши безліч технологій, отримавши унікальні знання та створивши кілька проектів. Ознайомився з основами фреймворка React, менеджера станів redux, мови програмування JS та іншими технологіями.",
        },
        {
            id: 2,
            lang: 'en',
            title: 'CyberBionic systematics',
            education_name: 'Frontend',
            date: "Jun 2022 - Nov 2022",
            description: "Successfully completed Frontend Developer (ReactJS) courses, mastering numerous technologies, gaining unique knowledge, and creating several projects. Learned the basics of the React framework, the Redux state manager, the JavaScript programming language, and more.",
        },
    ]
}

export const EducationReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}