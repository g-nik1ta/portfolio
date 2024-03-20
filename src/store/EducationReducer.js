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
            grade: '178/200',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate sit quo quaerat? Blanditiis temporibus consectetur ullam aut labore rerum eaque et explicabo ipsa accusamus nemo exercitationem laborum velit harum laboriosam voluptate, est placeat assumenda, cum neque atque?',
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
            grade: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, possimus quas. Beatae et nostrum laudantium maxime ducimus non expedita, quas iure nemo doloremque pariatur repellat dolorem consectetur earum, praesentium eveniet hic! Dolores voluptatem quibusdam alias laudantium, nobis cumque autem perspiciatis! Deleniti assumenda, quod sequi eum similique veniam nostrum soluta quo.',
        },
    ]
}

export const EducationReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}