const defaultState = {
    educations: [
        {
            id: 1,
            href: 'https://www.cusu.edu.ua/ua/',
            logo: 'cusu.png',
            logo_alt: 'cusu logo',
            title: 'Центральноукраїнський державний університет імені Володимира Винниченка',
            education_name: 'Computer science',
            date: 'Sep 2021 - Still',
            grade: '',
            description: 'На данный момент прохожу обучение в университете Украины на высшую профессионально-квалификационную степень Бакалавр на специальности Компьютерные Науки. Изучаю разносторонние технологии как и в сфере Backend, так и в Frontend.',
        },
        {
            id: 2,
            href: 'https://edu.cbsystematics.com/ua',
            logoBackground: 'black',
            logo: 'cbs.svg',
            logo_alt: 'cbs logo',
            title: 'CyberBionic systematics',
            education_name: 'Frontend',
            date: 'Jun 2022 - Nov 2022',
            grade: '917/1000',
            description: 'Успешно закончил курсы Frontend Developer (ReactJS), освоив множество технологий, получив уникальные знания и создав несколько проектов. Изучил основы фреймворка React, менеджера состояний redux, язык программирования JS и так далее.',
        },
    ]
}

export const EducationReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}