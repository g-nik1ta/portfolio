import React from 'react';
import "./Project.scss";
import SectionHead from 'components/SectionHead/SectionHead';
import SwitchBlock from 'components/UI/SwitchBlock/SwitchBlock';
import MyButton from 'components/UI/MyButton/MyButton';

const Project = () => {
    const types = [
        { id: -1, title: 'All' },
        { id: 1, title: 'Web APP\'S' },
        { id: 2, title: 'One page Landings' },
        { id: 3, title: 'Pet Projects' },
    ]

    const projects = [
        {
            id: 1,
            type_id: 3,
            preview: 'to-do-list.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
            project_name: 'To do list',
            duration_work: 'Aug 2022',
            project_description: 'Простой проект, созданный в короткий срок для осваивания скиллов и улучшение навыков. Веб приложение предоставляет возможность создавать, редактировать и удалять задачи. Также присутствует фильтрация задач на "не завершенные" и "все". В добавок на сайте есть часы и календарь в реальном времени.',
        },
        {
            id: 2,
            type_id: 3,
            preview: 'calculator.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
            project_name: 'Calculator',
            duration_work: 'Sep 2022',
            project_description: 'Типовая идея для пет-проекта - калькулятор. Разработан функционал для переключения "светлой" и "темной" темы, выбор которой записывается в лкоальное хранилище. Доступны стандартные математические операции по типу умножения, деления, удаление символа и так далее.',
        },
        {
            id: 3,
            type_id: 3,
            preview: 'weather-forecast.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript', 'API'],
            project_name: 'Weather forecast',
            duration_work: 'Sep 2022',
            project_description: 'Прогноз погоды, который использует API для получения данных о ней. На сайте присутствует температура, влажность, скорость ветра, тип погоды и многое другое. Прогноз указан на текущий и последующие 4 дня. Имеется возможность переключения температуры из "Цельсия" в "Фаренгейт", а также узнать погоду по текущему местоположению. Также разработан адаптив под мобильные устройства.',
        },
        {
            id: 4,
            type_id: 2,
            preview: 'golden.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
            project_name: 'Weather forecast',
            duration_work: 'Sep 2022',
            project_description: 'Одностраничный лендинг с использованием стандартных технологий. На сайте есть ховер эффекты, различные картинки, навигация, шапка, подвал, различные блоки, а также форма контаков.',
        },
        {
            id: 5,
            type_id: 3,
            preview: 'neural-network.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
            project_name: 'Neural network',
            duration_work: 'Sep 2022',
            project_description: 'Нейросеть на JS с использованием библиотеки "brain-browser". На сайте есть холст для рисовки объектов и три кнопки с соответствующей инструкцией в которых подробно написано что делать. Нейросеть можеть распознавать два состояния "да или нет", "добрый смайлик или плохой", "цифра 1 или цифра 2" и так далее. Важная особенность веб приложения в том, что нейросеть вначале нужно обучить (чем больше, тем лучше) прежде чем ее испытывать.',
        },
        {
            id: 6,
            type_id: 3,
            preview: 'login-form.jpg',
            technologies: ["HTML", 'CSS', 'Sass'],
            project_name: 'Login form',
            duration_work: 'Oct 2022',
            project_description: 'Простая форма логина с двумя полями: имя пользователя и пароль. На сайте идет упор на стили, которые были написаны с помощью предпроцессора Sаss.',
        },
        {
            id: 7,
            type_id: 3,
            preview: 'animtaion-cubes.jpg',
            technologies: ["HTML", 'CSS', 'Sass'],
            project_name: 'Animtaion cubes',
            duration_work: 'Oct 2022',
            project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        },
        // {
        //     id: 8,
        //     type_id: 3,
        //     preview: 'animtaion-cubes.jpg',
        //     technologies: ["HTML", 'CSS', 'Sass'],
        //     project_name: 'My Social network',
        //     duration_work: 'Oct 2022',
        //     project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        // },
        {
            id: 9,
            type_id: 3,
            preview: 'react-to-do-list.jpg',
            technologies: ["React", "Redux", "HTML", 'CSS', 'Js', "Sass"],
            project_name: 'To do list on ReactJS',
            duration_work: 'Nov 2022',
            project_description: 'Довольно простой список дел, однако с использованием фреймворка React и меннеджера состояний Redux. Есть возможность записи и удаления различных задач. Стили написаны с помощью Sass.',
        },
        // {
        //     id: 10,
        //     type_id: 3,
        //     preview: 'animtaion-cubes.jpg',
        //     technologies: ["HTML", 'CSS', 'Sass'],
        //     project_name: 'Pizza website',
        //     duration_work: 'Oct 2022',
        //     project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        // },
        {
            id: 11,
            type_id: 1,
            preview: 'usermanagement.jpg',
            technologies: ["Vue", "Vuex", "Vuetify", "Sass", "HTML", "CSS", "JavaScript", "API", "SPA"],
            project_name: 'Usermanagement',
            duration_work: 'Nov 2022 - Dec 2022',
            project_description: 'Проект разработан с целью повышения квалификации, изучения новых технологий и улучшение старых. Проект подразумивает собой Frontend часть, связанный с Backend-ом с помощью различных API запросов, без которого сайт функционировать не будет. Сайт - это система управлением пользователями, их создание, редактрование, добавление ролей и настройка профилей. Веб-приложение создано на фреймворке Vue, используя Vuex, Vuetify и другие технологии.',
        },
        {
            id: 12,
            type_id: 1,
            preview: 'react-web-shop.jpg',
            technologies: ["React", 'Redux', 'Sass', "CSS", "HTML", "JavaScript", "Firebase", "Database", "API", "Authentication", "SPA"],
            project_name: 'Web shop',
            duration_work: 'Jan 2023 - Apr 2023',
            project_description: 'Этот академический проект предназначен для демонстрации знаний фреймворка React и других технологий. В этом интернет-магазине ведется работа с API, реализованы разнообразные запросы к серверу. В качестве основы облачного хранилища был выбран Firebase, в котором хранится база данных, а также множество фотографий. Предусмотрена авторизация, в том числе и через Facebook и Google. Также полностью функционируют формы покупки товара и обратной связи, присутствует поиск, сортировка, фильтрация товаров и многое другое.',
        },
        {
            id: 13,
            type_id: 2,
            preview: 'resume.jpg',
            technologies: ["HTML", "CSS"],
            project_name: 'My resume',
            duration_work: 'Jul 2022 - Aug 2022',
            project_description: 'Сайт представляет собой мое резюме, в котором содержится краткая информация обо мне, моем опыте работы, технологиях и образовании. Сайт адаптирован под разные размеры устройств. Проект использует минимальный набор технологий, такие как HTML и CSS.',
        },
        {
            id: 14,
            type_id: 2,
            preview: 'hounter-landing.jpg',
            technologies: ["HTML", "CSS", "React", 'Rexux', 'JavaScript', "Figma"],
            project_name: 'Hounter landing',
            duration_work: 'May 2023',
            project_description: 'Это небольшой одностраничный лендинг, написанный на платформе React + менеджер состояний Redux, написаный в короткие сроки. Кроме того, здесь реализована адаптация под устройства с разными размерами экрана.',
        },
        {
            id: 15,
            type_id: 1,
            preview: 'address-book.jpg',
            technologies: ["HTML", "CSS", "PHP", "MySQL", "Sass", "Database"],
            project_name: 'Address book',
            duration_work: 'May 2023',
            project_description: 'Данный проект разработан с целью освоения Backend технологий и направления в целом. В ходе написания сайта были изучены основы языка программирования PHP, SQL запросов, создания и работа с БД. В приложении имеется форма для создания и редактирования пользователей, поиск нужного по определенному полю, их удаление. Все данные записываются в базу данных и остаются там, даже после закрытии сайта.',
        },
        {
            id: 16,
            type_id: 2,
            preview: 'printing-landing.jpg',
            technologies: ["HTML", "CSS", "Sass", "React", 'JavaScript'],
            project_name: 'Printing landing',
            duration_work: 'May 2023',
            project_description: 'Это небольшой одностраничный лендинг, написанный на платформе React, который я сделал на основе макета из Photoshop. На этом сайте много разных блоков, а также есть слайдер. Кроме того, здесь соблюдена семантика и реализована адаптация под мобильную версию (320px).',
        },
        {
            id: 17,
            type_id: 1,
            preview: 'jewelty.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
            project_name: 'Popi Jewelry',
            duration_work: 'Jun 2023 - Sep 2023',
            project_description: 'Многофункциональный интернет магазин детской детской бижутерии, который также является моим первым проектом использующий обширные возможности Backend, баз данных, работу с сервером и фреймворка Laravel. На сайте есть каталог различных категорий, поиск по товарам, мультиязычность, форма обратной связи, "плавающая кнопка социальных сетей" и многое другое. Кроме этого присутствует кастомная панель управления (админка), требущющая авторизации, которая предназначена для управлением всего сайта, начиная от редактированием товаров и категорий, заканчиваюшая работой над главным слайдером. При работе с данным проектом были изучены основы хостинга adm.tools и управлением над сайтами, которые размещены на нём.',
        },
        {
            id: 18,
            type_id: 1,
            preview: 'kyiv-realty.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
            project_name: 'Kyiv Realty',
            duration_work: 'Jun 2023 - Jul 2023',
            project_description: 'Принимал участие в проекте "KYIV REALTY". Это сайт агнетсва недвижимости в Киеве, на котором присутствует такой функционал как: многоязычность, обширная панель фильтров, поиск, каталог объектов, разоичные формы обратной связи, множество слайдеров и т.д.',
        },
        {
            id: 19,
            type_id: 1,
            preview: 'mododomus.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
            project_name: 'Mododomus',
            duration_work: 'Jun 2023 - Nov 2023',
            project_description: 'Сайт - портал по проектированию модульных домов в Европе. Присутствует уникальный функционал 3D панорам экстерьеров и интерьеров моделей домов с возможностью "перемещания" между точками для удобного осмотра дома со всех ракурсов, а также динамичное изменение цветов дома, комнат и их типов. В добавок ко всему перечисленному присутствует онлайн консультант, формы обратной связи, оформления заказа и подробная информация по моделям домов, самой компании и т.д.',
        },
        {
            id: 20,
            type_id: 1,
            preview: 'premier-palace.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', "Telegram Bot", 'phpMyAdmin', 'Database'],
            project_name: 'Premier Palace',
            duration_work: 'Aug 2023 - Oct 2023',
            project_description: 'Многофункциональный интернет магазин по продаже меблей. Адаптивный сайт, имеющий такие разделы как: каталог, поиск, отдельная страница со скидами, услуги, контакты, текстовые страницы и прочие. Присутствует мультиязычность, удобная страница для оформления заказа, а также в сайт встроен Telegram Bot для удобной обратотки заказов, на который может подписаться меннеджер или админ по управлению над сайтом.',
        },
        {
            id: 21,
            type_id: 1,
            preview: 'spektrum.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'phpMyAdmin', 'Database'],
            project_name: 'Spektrum',
            duration_work: 'Jul 2023, Mar 2024',
            project_description: 'Сайт по изготовлению, продажи и монтажу различных окон и солнцезащитных конструкций. Подключал Telegram бота для удобного отслеживания заявок, а также работал с админкой, добавял новые категории, фотографии, текстовые данные.',
        },
        {
            id: 22,
            type_id: 1,
            preview: 'stomadeus.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', "Telegram Bot", 'phpMyAdmin', 'Database', 'Seo'],
            project_name: 'Stomadeus',
            duration_work: 'Nov 2023 - Feb 2024',
            project_description: 'Проект "стоматологии", работу над которым принимал с самого начала и до выхода в продакшн. На сайте удобный интерфейс, имеется адаптив, мультиязычность, различные формы, слайдер, удобную админку, страницу с отзывами, Telegram бота и многое другое. В работе с данным сайтом был получен уникальный опыт в работе с Seo, а именно встраивание различных мета тегов и атрибутов, улучшение page speed, создание sitemap, семантика, добавление микроразметки и аналатики, общая оптимизация и продвижения сайта в поисковых системах и так далее.',
        },
        {
            id: 23,
            type_id: 1,
            preview: 'lavbet.jpg',
            technologies: ["React", "Redux", "Redux toolkit", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'SPA'],
            project_name: 'LavBet',
            duration_work: 'Oct 2023 - Feb 2024',
            project_description: 'Букмекерский сайт спортинвых ставок. Один из лучших моих проектов на основе фреймворка React разработан по принципу Single Page Aplication. Сайт имеет возможность авторизации, в том числе и через социальные сети, переключение светлой/темной тем, поиск, множество категорий спорта, удобный интерфейс сайта, страницы профиля и многое другое. В качестве меннеджера состояния используется Redux, в котором хранятся почти все данные о сайте, начиная от информации про аккаунт пользователя, заканчивая списком категорий и матчей.',
        },
    ]

    return (
        <section className='project_section container_box'>
            <SectionHead
                title="Projects"
                subtitle="I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."
            />
            <SwitchBlock>
                <MyButton>All</MyButton>
                <MyButton>Web APP'S</MyButton>
                <MyButton>One page Landings</MyButton>
                <MyButton>Pet Projects</MyButton>
            </SwitchBlock>
            <div className="projects_list">
                {
                    projects.reverse().map((project, index) =>
                        <div key={project.id} className="project_card">
                            <img src={require(`assets/projects/${project.preview}`)} alt={`project ${index}`} />
                            <ul className='undecorated_ul technologies'>
                                {
                                    project.technologies.map(item =>
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>
                            <h2 className="project_name">{project.project_name}</h2>
                            <h4 className="duration_work">{project.duration_work}</h4>
                            <p className="project_description">{project.project_description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Project;