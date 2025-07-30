const defaultState = {
    educations: [
        {
            id: 1,
            href: "https://edu.cbsystematics.com/ua",
            logoBackground: "black",
            logo: "cbs.svg",
            logo_alt: "cbs logo",
            grade: "917/1000",
        },
        {
            id: 2,
            href: "https://www.cusu.edu.ua/ua/",
            logo: "cusu.png",
            logo_alt: "cusu logo",
            grade: "",
        },
    ],

    educations_translations: [
        {
            id: 1,
            companyId: 1,
            lang: "ru",
            title: "CyberBionic systematics",
            education_name: "Frontend",
            date: "Июнь 2022 – Ноябрь 2022",
            description:
                "Успешно закончил курсы Frontend Developer (ReactJS), освоив множество технологий, получив уникальные знания и создав несколько проектов. Изучил основы фреймворка React, менеджера состояний redux, язык программирования JS и так далее.",
        },
        {
            id: 2,
            companyId: 1,
            lang: "ua",
            title: "CyberBionic systematics",
            education_name: "Frontend",
            date: "Червень 2022 - Листопад 2022",
            description:
                "Успішно закінчив курси Frontend Developer (ReactJS), опанувавши безліч технологій, отримавши унікальні знання та створивши кілька проектів. Ознайомився з основами фреймворка React, менеджера станів redux, мови програмування JS та іншими технологіями.",
        },
        {
            id: 3,
            companyId: 1,
            lang: "en",
            title: "CyberBionic systematics",
            education_name: "Frontend",
            date: "Jun 2022 - Nov 2022",
            description:
                "I successfully completed Frontend Developer (ReactJS) courses, mastering numerous technologies, gaining unique knowledge, and creating several projects. I learned the basics of the React framework, the Redux state manager, the JavaScript programming language, and more.",
        },
        {
            id: 4,
            companyId: 2,
            lang: "ru",
            title: "Центральноукраинский государственный университет имени Владимира Винниченко",
            education_name: "Компьютерные науки",
            date: "Сентябрь 2021  — Июнь 2025",
            description:
                'Окончил Центральноукраинский государственный университет по специальности "Компьютерные науки" и получил степень бакалавра. В процессе обучения изучил широкий спектр технологий как в области Backend, так и Frontend-разработки. Полученные знания позволили мне поработать с различными направлениями в разработке, освоить современные инструменты и подойти к обучению с практической стороны.',
        },
        {
            id: 5,
            companyId: 2,
            lang: "ua",
            title: "Центральноукраїнський державний університет імені Володимира Винниченка",
            education_name: "Комп'ютерні науки",
            date: "Вересень 2021 — Червень 2025",
            description:
                'Закінчив Центральноукраїнський державний університет за спеціальністю "Комп\'ютерні науки" та здобув ступінь бакалавра. У процесі навчання вивчив широкий спектр технологій як у галузі Backend, так і Frontend-розробки. Отримані знання дозволили мені попрацювати з різними напрямками розробки, освоїти сучасні інструменти і підійти до навчання з практичної сторони.',
        },
        {
            id: 6,
            companyId: 2,
            lang: "en",
            title: "Volodymyr Vynnychenko Central Ukrainian State University",
            education_name: "Computer science",
            date: "Sep 2021 - June 2025",
            description:
                "Graduated from the Central Ukrainian State University with a Bachelor's degree in Computer Science. During my studies, I explored a wide range of technologies in both Backend and Frontend development. The knowledge I gained allowed me to work with different areas of software development, master modern tools, and approach learning from a practical perspective.",
        },
    ],
};

export const EducationReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
