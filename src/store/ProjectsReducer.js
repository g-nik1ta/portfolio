const defaultState = {
    projects: [
        {
            id: 1,
            appHref: 'https://g-nik1ta.github.io/to-do-list/',
            type_id: 3,
            preview: 'to-do-list.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
        },
        {
            id: 2,
            appHref: 'https://g-nik1ta.github.io/calculator/',
            type_id: 3,
            preview: 'calculator.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
        },
        {
            id: 3,
            appHref: 'https://g-nik1ta.github.io/weather-forecast-app/',
            type_id: 3,
            preview: 'weather-forecast.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript', 'API'],
        },
        {
            id: 4,
            appHref: 'https://g-nik1ta.github.io/golden-landing-page/',
            type_id: 2,
            preview: 'golden.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
        },
        {
            id: 5,
            appHref: 'https://g-nik1ta.github.io/my-neural-network/',
            type_id: 3,
            preview: 'neural-network.jpg',
            technologies: ["HTML", 'CSS', 'JavaScript'],
        },
        {
            id: 6,
            appHref: 'https://g-nik1ta.github.io/login-form/',
            type_id: 3,
            preview: 'login-form.jpg',
            technologies: ["HTML", 'CSS', 'Sass'],
        },
        {
            id: 7,
            appHref: 'https://g-nik1ta.github.io/animation-of-cube/',
            type_id: 3,
            preview: 'animtaion-cubes.jpg',
            technologies: ["HTML", 'CSS', 'Sass'],
        },
        // {
        //     id: 8,
        //     appHref: '',
        //     type_id: 3,
        //     preview: 'animtaion-cubes.jpg',
        //     technologies: ["HTML", 'CSS', 'Sass'],
        //     project_name: 'My Social network',
        //     duration_work: 'Oct 2022',
        //     project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        // },
        {
            id: 9,
            appHref: 'https://g-nik1ta.github.io/react-todo-list/',
            type_id: 3,
            preview: 'react-to-do-list.jpg',
            technologies: ["React", "Redux", "HTML", 'CSS', 'Js', "Sass"],
        },
        // {
        //     id: 10,
        //     appHref: '',
        //     type_id: 3,
        //     preview: 'animtaion-cubes.jpg',
        //     technologies: ["HTML", 'CSS', 'Sass'],
        //     project_name: 'Pizza website',
        //     duration_work: 'Oct 2022',
        //     project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        // },
        {
            id: 11,
            appHref: '',
            type_id: 1,
            preview: 'usermanagement.jpg',
            technologies: ["Vue", "Vuex", "Vuetify", "Sass", "HTML", "CSS", "JavaScript", "API", "SPA"],
        },
        {
            id: 12,
            appHref: 'https://g-nik1ta.github.io/react-web-shop/',
            type_id: 1,
            preview: 'react-web-shop.jpg',
            technologies: ["React", 'Redux', 'Sass', "CSS", "HTML", "JavaScript", "Firebase", "Database", "API", "Authentication", "SPA"],
        },
        {
            id: 13,
            appHref: 'https://g-nik1ta.github.io/resume/',
            type_id: 2,
            preview: 'resume.jpg',
            technologies: ["HTML", "CSS"],
        },
        {
            id: 14,
            appHref: 'https://g-nik1ta.github.io/hounter-landing/',
            type_id: 2,
            preview: 'hounter-landing.jpg',
            technologies: ["HTML", "CSS", "React", 'Rexux', 'JavaScript', "Figma"],
        },
        {
            id: 15,
            appHref: '',
            type_id: 1,
            preview: 'address-book.jpg',
            technologies: ["HTML", "CSS", "PHP", "MySQL", "Sass", "Database"],
        },
        {
            id: 16,
            appHref: 'https://g-nik1ta.github.io/printing-landing/',
            type_id: 2,
            preview: 'printing-landing.jpg',
            technologies: ["HTML", "CSS", "Sass", "React", 'JavaScript'],
        },
        {
            id: 17,
            appHref: 'https://popi-jewelry.com/',
            type_id: 1,
            preview: 'jewelty.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
        },
        {
            id: 18,
            appHref: 'https://kyiv-realty.spekter.site/',
            type_id: 1,
            preview: 'kyiv-realty.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
        },
        {
            id: 19,
            appHref: 'https://mododomus.cy/',
            type_id: 1,
            preview: 'mododomus.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
        },
        {
            id: 20,
            appHref: 'https://premier-palace.spekter.site/',
            type_id: 1,
            preview: 'premier-palace.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', "Telegram Bot", 'phpMyAdmin', 'Database'],
        },
        {
            id: 21,
            appHref: 'https://market-house.kyiv.ua/',
            type_id: 1,
            preview: 'market-house.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'phpMyAdmin', 'Database'],
        },
        {
            id: 22,
            appHref: 'https://spektrum.zp.ua/',
            type_id: 1,
            preview: 'spektrum.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'phpMyAdmin', 'Database'],
        },
        {
            id: 23,
            appHref: 'https://stomadeus.ck.ua/uk/',
            type_id: 1,
            preview: 'stomadeus.jpg',
            technologies: ["Laravel", "PHP", "MySQL", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', "Telegram Bot", 'phpMyAdmin', 'Database', 'Seo'],
        },
        {
            id: 24,
            appHref: 'https://lavbet.spekter.site/',
            type_id: 1,
            preview: 'lavbet.jpg',
            technologies: ["React", "Redux", "Redux toolkit", "HTML", 'CSS', 'Sass', 'JavaScript', 'jQuery', 'SPA'],
        },
    ],
    currentProject: null,

    projects_translations: [
        {
            id: 1,
            lang: 'ru',
            project_name: 'Список дел',
            duration_work: 'Авг 2022',
            project_description: 'Простой проект, созданный в короткий срок для осваивания скиллов и улучшение навыков. Веб приложение предоставляет возможность создавать, редактировать и удалять задачи. Также присутствует фильтрация задач на "не завершенные" и "все". В добавок на сайте есть часы и календарь в реальном времени.'
        },
        {
            id: 1,
            lang: 'ua',
            project_name: 'Список справ',
            duration_work: 'Серп 2022',
            project_description: 'Простий проект, створений протягом короткого періоду для здобуття навичок та їх покращення. Веб-додаток надає можливість створювати, редагувати та видаляти завдання. Додатково, є фільтрація завдань на "незавершені" та "всі". Крім того, на веб-сайті присутні годинники та календар у реальному часі.'
        },
        {
            id: 1,
            lang: 'en',
            project_name: 'To do list',
            duration_work: 'Aug 2022',
            project_description: 'A simple project created within a short period for skill acquisition and improvement. The web application provides the ability to create, edit, and delete tasks. Additionally, there is task filtering for "incomplete" and "all" tasks. Moreover, the website features real-time clocks and a calendar.'
        },

        {
            id: 2,
            lang: 'ru',
            project_name: 'Калькулятор',
            duration_work: 'Вер 2022',
            project_description: 'Типичная идея для пет-проекта - калькулятор. Разработан функционал для переключения "светлой" и "темной" темы, выбор которой записывается в локальное хранилище. Доступны стандартные математические операции по типу умножения, деления, удаление символа и так далее.',
        },
        {
            id: 2,
            lang: 'ua',
            project_name: 'Калькулятор',
            duration_work: 'Сент 2022',
            project_description: 'Типова ідея для пет-проекту - калькулятор. Реалізовано функціонал для перемикання між "світлою" та "темною" темами, вибрана тема зберігається в локальному сховищі. Доступні стандартні математичні операції, такі як множення, ділення, видалення символів та інші.'
        },
        {
            id: 2,
            lang: 'en',
            project_name: 'Calculator',
            duration_work: 'Sep 2022',
            project_description: 'A typical idea for a pet project - a calculator. Functionality has been developed to switch between "light" and "dark" themes, with the chosen theme being saved to local storage. Standard mathematical operations such as multiplication, division, deletion of characters, and so on, are available.'
        },

        {
            id: 3,
            lang: 'ru',
            project_name: 'Прогноз погоды',
            duration_work: 'Вер 2022',
            project_description: 'Прогноз погоды, который использует API для получения данных о ней. На сайте присутствует температура, влажность, скорость ветра, тип погоды и многое другое. Прогноз указан на текущий и последующие 4 дня. Имеется возможность переключения температуры из "Цельсия" в "Фаренгейт", а также можно узнать погоду по текущему местоположению. Также разработан адаптив под мобильные устройства.',
        },
        {
            id: 3,
            lang: 'ua',
            project_name: 'Прогноз погоди',
            duration_work: 'Сент 2022',
            project_description: 'Прогноз погоди, який використовує API для отримання даних про неї. На сайті відображаються температура, вологість, швидкість вітру, тип погоди та інше. Прогноз надається на поточний день та на наступні 4 дні. Користувачі можуть перемикати температуру між "Цельсієм" та "Фаренгейтом", а також можуть перевірити погоду за поточним місцезнаходженням. Крім того, застосунок адаптований під мобільні пристрої.'
        },
        {
            id: 3,
            lang: 'en',
            project_name: 'Weather forecast',
            duration_work: 'Sep 2022',
            project_description: 'A weather forecast application that utilizes an API to retrieve weather data. The website displays temperature, humidity, wind speed, weather condition, and more. The forecast is provided for the current day and the following 4 days. Users can switch between "Celsius" and "Fahrenheit" temperature units, and can also check the weather based on their current location. Additionally, the application is responsive and optimized for mobile devices.'
        },

        {
            id: 4,
            lang: 'ru',
            project_name: 'Golden Landing',
            duration_work: 'Вер 2022',
            project_description: 'Одностраничный лендинг с использованием стандартных технологий. На сайте есть ховер эффекты, различные картинки, навигация, шапка, подвал, различные блоки, а также форма контаков.',
        },
        {
            id: 4,
            lang: 'ua',
            project_name: 'Golden Landing',
            duration_work: 'Сент 2022',
            project_description: 'Односторінковий лендінг з використанням стандартних технологій. На сайті присутні ховер-ефекти, різноманітні зображення, навігація, заголовок, підвал, різні блоки, а також форма контактів.'
        },
        {
            id: 4,
            lang: 'en',
            project_name: 'Golden Landing',
            duration_work: 'Sep 2022',
            project_description: 'A single-page landing page using standard technologies. The website features hover effects, various images, navigation, header, footer, various blocks, and a contact form.'
        },

        {
            id: 5,
            lang: 'ru',
            project_name: 'Нейронная сеть',
            duration_work: 'Вер 2022',
            project_description: 'Нейросеть на JS с использованием библиотеки "brain-browser". На сайте есть холст для рисовки объектов и три кнопки с соответствующей инструкцией в которых подробно написано что делать. Нейросеть можеть распознавать два состояния "да или нет", "добрый смайлик или плохой", "цифра 1 или цифра 2" и так далее. Важная особенность веб приложения в том, что нейросеть вначале нужно обучить (чем больше, тем лучше) прежде чем ее испытывать.',
        },
        {
            id: 5,
            lang: 'ua',
            project_name: 'Нейронна мережа',
            duration_work: 'Сент 2022',
            project_description: 'Нейромережа на JS з використанням бібліотеки "brain-browser". На сайті є полотно для малювання об\'єктів та три кнопки з відповідними інструкціями, у яких детально описано, що робити. Нейромережа може розпізнавати два стани, такі як "так чи ні", "радісний смайлик або сумний", "цифра 1 або цифра 2" і так далі. Важливою особливістю веб-додатка є те, що нейромережу спочатку потрібно навчити (чим більше, тим краще), перш ніж її тестувати.'
        },
        {
            id: 5,
            lang: 'en',
            project_name: 'Neural network',
            duration_work: 'Sep 2022',
            project_description: 'A neural network in JS using the "brain-browser" library. The website features a canvas for drawing objects and three buttons with corresponding instructions detailing what to do. The neural network can recognize two states such as "yes or no", "happy smiley or sad", "digit 1 or digit 2", and so on. An important feature of the web application is that the neural network needs to be trained first (the more, the better) before testing.'
        },

        {
            id: 6,
            lang: 'ru',
            project_name: 'Форма входа',
            duration_work: 'Окт 2022',
            project_description: 'Простая форма логина с двумя полями: имя пользователя и пароль. На сайте идет упор на стили, которые были написаны с помощью предпроцессора Sаss.',
        },
        {
            id: 6,
            lang: 'ua',
            project_name: 'Форма входа',
            duration_work: 'Жовт 2022',
            project_description: 'Проста форма входу з двома полями: ім\'я користувача та пароль. Сайт акцентується на стилях, які були написані за допомогою препроцесора Sаss.'
        },
        {
            id: 6,
            lang: 'en',
            project_name: 'Login form',
            duration_work: 'Oct 2022',
            project_description: 'A simple login form with two fields: username and password. The website emphasizes styles, which were written using the Sаss preprocessor.'
        },

        {
            id: 7,
            lang: 'ru',
            project_name: 'Анимационные кубы',
            duration_work: 'Окт 2022',
            project_description: 'Простая 3D анимация кубов с разными цветами и размерами без использования JavaScript кода.',
        },
        {
            id: 7,
            lang: 'ua',
            project_name: 'Анімаційні куби',
            duration_work: 'Жовт 2022',
            project_description: 'Проста 3D анімація кубів з різними кольорами та розмірами без використання коду JavaScript.'
        },
        {
            id: 7,
            lang: 'en',
            project_name: 'Animtaion cubes',
            duration_work: 'Oct 2022',
            project_description: 'Simple 3D cube animation with different colors and sizes without using JavaScript code.'
        },

        {
            id: 9,
            lang: 'ru',
            project_name: 'Список дел на ReactJS',
            duration_work: 'Нояб 2022',
            project_description: 'Довольно простой список дел, однако с использованием фреймворка React и менеджера состояний Redux. Есть возможность записи и удаления различных задач. Стили написаны с помощью Sass.',
        },
        {
            id: 9,
            lang: 'ua',
            project_name: 'Список справ на ReactJS',
            duration_work: 'Лист 2022',
            project_description: 'Досить простий список справ, проте створений з використанням фреймворка React та менеджера стану Redux. Є можливість додавання та видалення різних завдань. Стилі написані за допомогою Sass.'
        },
        {
            id: 9,
            lang: 'en',
            project_name: 'To do list on ReactJS',
            duration_work: 'Nov 2022',
            project_description: 'A fairly simple to-do list, however, built using the React framework and state manager Redux. It includes features for adding and deleting various tasks. Styles are written using Sass.'
        },

        {
            id: 11,
            lang: 'ru',
            project_name: 'Usermanagement',
            duration_work: 'Нояб 2022 - Дек 2022',
            project_description: 'Проект разработан с целью повышения квалификации, изучения новых технологий и улучшение старых. Проект подразумивает собой Frontend часть, связанный с Backend-ом с помощью различных API запросов, без которого сайт функционировать не будет. Сайт - это система управлением пользователями, их создание, редактрование, добавление ролей и настройка профилей. Веб-приложение создано на фреймворке Vue, используя Vuex, Vuetify и другие технологии.',
        },
        {
            id: 11,
            lang: 'ua',
            project_name: 'Usermanagement',
            duration_work: 'Лист 2022 - Груд 2022',
            project_description: 'Проект розроблено з метою підвищення кваліфікації, вивчення нових технологій та поліпшення існуючих. Він включає фронтендну частину, пов\'язану з бекендом за допомогою різних запитів API, без яких сайт не буде працювати. Сайт є системою управління користувачами, що включає створення, редагування користувачів, додавання ролей та налаштування профілів. Веб-додаток створений на фреймворку Vue з використанням Vuex, Vuetify та інших технологій.'
        },
        {
            id: 11,
            lang: 'en',
            project_name: 'Usermanagement',
            duration_work: 'Nov 2022 - Dec 2022',
            project_description: 'The project is developed with the aim of improving qualifications, learning new technologies, and enhancing existing ones. It involves a Frontend part connected to the Backend via various API requests, without which the site will not function. The website is a user management system, involving user creation, editing, adding roles, and profile settings. The web application is built on the Vue framework, using Vuex, Vuetify, and other technologies.'
        },

        {
            id: 12,
            lang: 'ru',
            project_name: 'Интернет-магазин',
            duration_work: 'Янв 2023 - Апр 2023',
            project_description: 'Проект разработан с целью повышения квалификации, изучения новых технологий и улучшение старых. Проект подразумивает собой Frontend часть, связанный с Backend-ом с помощью различных API запросов, без которого сайт функционировать не будет. Сайт - это система управлением пользователями, их создание, редактрование, добавление ролей и настройка профилей. Веб-приложение создано на фреймворке Vue, используя Vuex, Vuetify и другие технологии.',
        },
        {
            id: 12,
            lang: 'ua',
            project_name: 'Інтернет-магазин',
            duration_work: 'Січ 2023 - Квіт 2023',
            project_description: 'Цей академічний проект призначений для демонстрації знань фреймворка React та інших технологій. У цьому інтернет-магазині ведеться робота з API, реалізовані різноманітні запити до сервера. В якості основи хмарного сховища було обрано Firebase, де зберігається база даних, а також багато фотографій. Передбачена автентифікація, включаючи через Facebook та Google. Також повністю функціонують форми покупки товару та зворотнього зв\'язку, присутній пошук, сортування, фільтрація товарів та багато іншого.'
        },
        {
            id: 12,
            lang: 'en',
            project_name: 'Web shop',
            duration_work: 'Jan 2023 - Apr 2023',
            project_description: 'This academic project is designed to demonstrate knowledge of the React framework and other technologies. This online store involves working with APIs, implementing various server requests. Firebase was chosen as the basis of the cloud storage, where the database and numerous photos are stored. Authentication is provided, including via Facebook and Google. Purchase and feedback forms are also fully functional, with search, sorting, filtering of products, and much more.'
        },

        {
            id: 13,
            lang: 'ru',
            project_name: 'Мое резюме',
            duration_work: 'Июль 2022 - Авг 2022',
            project_description: 'Сайт представляет собой мое резюме, в котором содержится краткая информация обо мне, моем опыте работы, технологиях и образовании. Сайт адаптирован под разные размеры устройств. Проект использует минимальный набор технологий, такие как HTML и CSS.',
        },
        {
            id: 13,
            lang: 'ua',
            project_name: 'Моє резюме',
            duration_work: 'Лип 2022 - Січ 2022',
            project_description: 'Сайт є моїм резюме, яке містить коротку інформацію про мене, мій досвід роботи, технології та освіту. Сайт адаптований під різні розміри пристроїв. Проект використовує мінімальний набір технологій, таких як HTML та CSS.'
        },
        {
            id: 13,
            lang: 'en',
            project_name: 'My resume',
            duration_work: 'Jul 2022 - Aug 2022',
            project_description: 'The website is my resume, containing brief information about me, my work experience, technologies, and education. The site is responsive and adapts to various device sizes. The project uses a minimal set of technologies, such as HTML and CSS.'
        },

        {
            id: 14,
            lang: 'ru',
            project_name: 'Hounter landing',
            duration_work: 'Май 2023',
            project_description: 'Это небольшой одностраничный лендинг, созданный на платформе React + менеджер состояния Redux, разработанный в течение короткого периода. Кроме того, здесь реализована адаптация под устройства с разными размерами экрана.',
        },
        {
            id: 14,
            lang: 'ua',
            project_name: 'Hounter landing',
            duration_work: 'Трав 2023',
            project_description: 'Це невеликий односторінковий лендінг, створений на платформі React + менеджер стану Redux, розроблений протягом короткого періоду. Крім того, тут реалізовано адаптацію під пристрої з різними розмірами екрану.'
        },
        {
            id: 14,
            lang: 'en',
            project_name: 'Hounter landing',
            duration_work: 'May 2023',
            project_description: 'This is a small single-page landing, created on the React platform + Redux state manager, developed within a short timeframe. Additionally, it features adaptation for devices with different screen sizes.'
        },

        {
            id: 15,
            lang: 'ru',
            project_name: 'Адрессная книжка',
            duration_work: 'Май 2023',
            project_description: 'Данный проект разработан с целью освоения Backend технологий и этого направления в целом. В ходе написания сайта были изучены основы языка программирования PHP, SQL запросов, создания и работа с БД. В приложении имеется форма для создания и редактирования пользователей, поиск нужного по определенному полю, их удаление. Все данные записываются в базу данных и остаются там, даже после закрытия сайта.',
        },
        {
            id: 15,
            lang: 'ua',
            project_name: 'Адресна книжка',
            duration_work: 'Трав 2023',
            project_description: 'Цей проект розроблено з метою освоєння Backend технологій і цього напрямку в цілому. Під час написання веб-сайту були вивчені основи мови програмування PHP, SQL запитів, створення та робота з базами даних. У додатку є форма для створення та редагування користувачів, пошук за певним полем та їх видалення. Усі дані зберігаються в базі даних і залишаються там навіть після закриття веб-сайту.'
        },
        {
            id: 15,
            lang: 'en',
            project_name: 'Address book',
            duration_work: 'May 2023',
            project_description: 'This project is developed with the aim of mastering Backend technologies and this field in general. During the development of the website, the basics of the PHP programming language, SQL queries, and database creation and management were studied. The application includes a form for creating and editing users, searching by a specific field, and deleting them. All data is stored in the database and remains there even after closing the website.'
        },

        {
            id: 16,
            lang: 'ru',
            project_name: 'Printing landing',
            duration_work: 'Май 2023',
            project_description: 'Это небольшой одностраничный лендинг, написанный на платформе React, который я сделал на основе макета из Photoshop. На этом сайте много разных блоков, а также есть слайдер. Кроме того, здесь соблюдена семантика и реализована адаптация под мобильную версию (320px).',
        },
        {
            id: 16,
            lang: 'ua',
            project_name: 'Printing landing',
            duration_work: 'Трав 2023',
            project_description: 'Це невеликий односторінковий лендінг, написаний на платформі React, який я створив на основі макету з Photoshop. На цьому сайті багато різних блоків, а також є слайдер. Крім того, тут використана семантична розмітка та реалізована адаптація під мобільну версію (320px).'
        },
        {
            id: 16,
            lang: 'en',
            project_name: 'Printing landing',
            duration_work: 'May 2023',
            project_description: 'This is a small single-page landing, written on the React platform, which I created based on a layout from Photoshop. The site contains many different blocks and a slider. Additionally, semantic markup is used, and adaptation for the mobile version (320px) is implemented.'
        },

        {
            id: 17,
            lang: 'ru',
            project_name: 'Popi Jewelry',
            duration_work: 'Июнь 2023 - Сент 2023',
            project_description: 'Многофункциональный интернет-магазин детской бижутерии, который также является моим первым проектом использующий обширные возможности Backend, баз данных, работу с сервером и фреймворка Laravel. На сайте есть каталог различных категорий, поиск по товарам, мультиязычность, форма обратной связи, "плавающая кнопка социальных сетей" и многое другое. Кроме этого присутствует кастомная панель управления (админка), требущющая авторизации, которая предназначена для управления всего сайта, начиная от редактирования товаров и категорий, заканчивая работой над главным слайдером. При работе с данным проектом были изучены основы хостинга adm.tools и управлением над сайтами, которые размещены на нём.',
        },
        {
            id: 17,
            lang: 'ua',
            project_name: 'Popi Jewelry',
            duration_work: 'Черв 2023 - Вер 2023',
            project_description: 'Багатофункціональний інтернет-магазин дитячого прикраси, який є моїм першим проектом, що використовує обширні можливості Backend, баз даних, роботу на сервері та фреймворк Laravel. На сайті є каталог різних категорій, пошук товарів, багатомовність, форма зворотнього зв\'язку, "плаваюча кнопка соціальних мереж" та багато іншого. Крім того, є власна панель керування (адмін панель), яка вимагає автентифікації і призначена для управління всім сайтом, починаючи з редагування товарів та категорій та закінчуючи роботою над головним слайдером. При роботі над цим проектом було вивчено основи хостингу на adm.tools та управління сайтами, розміщеними на ньому.'
        },
        {
            id: 17,
            lang: 'en',
            project_name: 'Popi Jewelry',
            duration_work: 'Jun 2023 - Sep 2023',
            project_description: 'A multifunctional online store for children\'s jewelry, which is also my first project using extensive Backend capabilities, databases, server-side work, and the Laravel framework. The website features a catalog of various categories, product search, multilingualism, a feedback form, a "floating social media button," and much more. Additionally, there is a custom control panel (admin panel) that requires authentication, designed to manage the entire site, from editing products and categories to working on the main slider. Working on this project involved learning the basics of hosting on adm.tools and managing websites hosted on it.'
        },

        {
            id: 18,
            lang: 'ru',
            project_name: 'Kyiv Realty',
            duration_work: 'Июнь 2023 - Июль 2023',
            project_description: 'Принимал участие в проекте "KYIV REALTY". Это сайт агнетсва недвижимости в Киеве, на котором присутствует такой функционал как: многоязычность, обширная панель фильтров, поиск, каталог объектов, различные формы обратной связи, множество слайдеров и т.д.',
        },
        {
            id: 18,
            lang: 'ua',
            project_name: 'Kyiv Realty',
            duration_work: 'Черв 2023 - Лип 2023',
            project_description: 'Брав участь у проекті "KYIV REALTY". Це сайт агентства нерухомості в Києві, на якому присутні такі функції, як: багатомовність, обширна панель фільтрів, пошук, каталог об\'єктів, різноманітні форми зворотного зв\'язку, численні слайдери та інше.'
        },
        {
            id: 18,
            lang: 'en',
            project_name: 'Kyiv Realty',
            duration_work: 'Jun 2023 - Jul 2023',
            project_description: 'Participated in the "KYIV REALTY" project. This is a real estate agency website in Kyiv, which includes features such as multilingualism, an extensive filter panel, search, property catalog, various feedback forms, multiple sliders, etc.'
        },

        {
            id: 19,
            lang: 'ru',
            project_name: 'Mododomus',
            duration_work: 'Июнь 2023 - Нояб 2023',
            project_description: 'Сайт - портал по проектированию модульных домов в Европе. Присутствует уникальный функционал 3D панорам экстерьеров и интерьеров моделей домов с возможностью "перемещания" между точками для удобного осмотра дома со всех ракурсов, а также динамичное изменение цветов дома, комнат и их типов. В добавок ко всему перечисленному присутствует онлайн консультант, формы обратной связи, оформления заказа и подробная информация по моделям домов, самой компании и т.д.',
        },
        {
            id: 19,
            lang: 'ua',
            project_name: 'Mododomus',
            duration_work: 'Черв 2023 - Лист 2023',
            project_description: 'Сайт - портал з проектування модульних будинків в Європі. Він має унікальний функціонал з 3D-панорами екстер\'єрів та інтер\'єрів моделей будинків, що дозволяє "навігувати" між точками для зручного перегляду будинку з усіх ракурсів, а також динамічні зміни кольорів будинку, кімнат та їх типів. Окрім усіх вищезазначених функцій, є онлайн-консультант, форми зворотного зв\'язку, оформлення замовлення та детальна інформація про моделі будинків, саму компанію та інше.'
        },
        {
            id: 19,
            lang: 'en',
            project_name: 'Mododomus',
            duration_work: 'Jun 2023 - Nov 2023',
            project_description: 'The website is a portal for designing modular homes in Europe. It features unique functionality with 3D panoramas of exteriors and interiors of house models, allowing for "navigation" between points for convenient viewing of the house from all angles, as well as dynamic color changes for the house, rooms, and their types. In addition to all the mentioned features, there is an online consultant, feedback forms, order placement, and detailed information about house models, the company itself, etc.'
        },

        {
            id: 20,
            lang: 'ru',
            project_name: 'Premier Palace',
            duration_work: 'Авг 2023 - Окт 2023',
            project_description: 'Многофункциональный интернет-магазин по продаже мебели. Адаптивный сайт, имеющий такие разделы как: каталог, поиск, отдельная страница со скидами, услуги, контакты, текстовые страницы и прочие. Присутствует мультиязычность, удобная страница для оформления заказа, а также в сайт встроен Telegram Bot для удобной обратотки заказов, на который может подписаться меннеджер или админ по управлению над сайтом.',
        },
        {
            id: 20,
            lang: 'ua',
            project_name: 'Premier Palace',
            duration_work: 'Серп 2023 - Окт 2023',
            project_description: 'Багатофункціональний інтернет-магазин меблів. Адаптивний веб-сайт, який має такі розділи, як каталог, пошук, окрема сторінка зі знижками, послуги, контакти, текстові сторінки та інше. Присутня багатомовність, зручна сторінка оформлення замовлення, а також веб-сайт вбудовує в себе Telegram Bot для зручної обробки замовлень, на який може підписатися менеджер або адміністратор сайту.'
        },
        {
            id: 20,
            lang: 'en',
            project_name: 'Premier Palace',
            duration_work: 'Aug 2023 - Oct 2023',
            project_description: 'A multifunctional online furniture store. An adaptive website featuring sections such as a catalog, search, a separate page for discounts, services, contacts, text pages, and more. It includes multilingualism, a convenient checkout page, and a Telegram Bot integrated into the website for convenient order processing, which can be subscribed to by a manager or site administrator.'
        },

        {
            id: 21,
            lang: 'ru',
            project_name: 'Market House',
            duration_work: 'Септ 2023 - Окт 2023',
            project_description: 'Интернет-магазин имеющий огромный ассортимент товаров, каталог поделеный на множество категорий и подкатегорий, система фильтров, поиск, формы обратной связи, мультиязычность и так далее.',
        },
        {
            id: 21,
            lang: 'ua',
            project_name: 'Market House',
            duration_work: 'Вер 2023 - Окт 2023',
            project_description: 'Інтернет-магазин з величезним асортиментом товарів, каталог якого поділений на безліч категорій та підкатегорій, система фільтрів, можливість пошуку, форми зворотнього зв\'язку, підтримка кількох мов тощо.'
        },
        {
            id: 21,
            lang: 'en',
            project_name: 'Market House',
            duration_work: 'Sep 2023 - Oct 2023',
            project_description: 'An online store with a vast range of products, a catalog divided into numerous categories and subcategories, a filtering system, search functionality, feedback forms, multilingual support, and so on.'
        },

        {
            id: 22,
            lang: 'ru',
            project_name: 'Spektrum',
            duration_work: 'Июль 2023, Март 2024',
            project_description: 'Сайт по изготовлению, продажи и монтажу различных окон и солнцезащитных конструкций. Подключал Telegram бота для удобного отслеживания заявок, а также работал с админкой, добавял новые категории, фотографии, текстовые данные.',
        },
        {
            id: 22,
            lang: 'ua',
            project_name: 'Spektrum',
            duration_work: 'Лип 2023, Март 2024',
            project_description: 'Сайт з виготовлення, продажу та монтажу різних вікон та сонцезахисних конструкцій. Підключав Telegram бота для зручного відстеження заявок, а також працював з адмінкою, додавав нові категорії, фотографії, текстові дані.'
        },
        {
            id: 22,
            lang: 'en',
            project_name: 'Spektrum',
            duration_work: 'Jul 2023, Mar 2024',
            project_description: 'Website for manufacturing, selling, and installing various windows and sun protection structures. Integrated a Telegram bot for convenient order tracking, and also worked with the admin panel, adding new categories, photos, and textual data.'
        },

        {
            id: 23,
            lang: 'ru',
            project_name: 'Stomadeus',
            duration_work: 'Нояь 2023 - Февр 2024',
            project_description: 'Проект "стоматология" - проект над которым работал с самого начала и до выхода в продакшн. На сайте удобный интерфейс, имеется адаптив, мультиязычность, различные формы, слайдер, удобная админка, страница с отзывами, Telegram бот и многое другое. В работе с данным сайтом был получен уникальный опыт в работе с Seo, а именно встраивание различных мета тегов и атрибутов, улучшение page speed, создание sitemap, семантика, добавление микроразметки и аналатики, общая оптимизация и продвижения сайта в поисковых системах и так далее.',
        },
        {
            id: 23,
            lang: 'ua',
            project_name: 'Stomadeus',
            duration_work: 'Лист 2023 - Лют 2024',
            project_description: 'Проект "стоматологія" - проект, над яким я працював від початку до випуску в продакшн. На сайті зручний інтерфейс, пристосованість до різних пристроїв, багатомовність, різноманітні форми, слайдер, зручна адмінка, сторінка з відгуками, Telegram бот і багато іншого. Робота над цим сайтом надала унікальний досвід у роботі з SEO, зокрема вбудовування різних мета-тегів та атрибутів, покращення швидкості сторінок, створення sitemap, семантика, додавання мікророзмітки та аналітики, загальна оптимізація та просування сайту в пошукових системах і багато іншого.'
        },
        {
            id: 23,
            lang: 'en',
            project_name: 'Stomadeus',
            duration_work: 'Nov 2023 - Feb 2024',
            project_description: 'The "Dentistry" project - a project I worked on from inception to production. The website features a user-friendly interface, adaptability, multilingual support, various forms, sliders, a convenient admin panel, a testimonials page, a Telegram bot, and much more. Working on this site provided unique experience in SEO, including embedding various meta tags and attributes, improving page speed, creating a sitemap, semantics, adding microdata and analytics, overall optimization, and website promotion in search engines, and more.'
        },

        {
            id: 24,
            lang: 'ru',
            project_name: 'Stomadeus',
            duration_work: 'Окт 2023 - Февр 2024',
            project_description: 'Букмекерский сайт спортинвых ставок. Один из лучших моих проектов на основе фреймворка React разработан по принципу Single Page Aplication. Сайт имеет возможность авторизации, в том числе и через социальные сети, переключение светлой/темной тем, поиск, множество категорий спорта, удобный интерфейс сайта, страницы профиля и многое другое. В качестве меннеджера состояния используется Redux, в котором хранятся почти все данные о сайте, начиная от информации про аккаунт пользователя, заканчивая списком категорий и матчей.',
        },
        {
            id: 24,
            lang: 'ua',
            project_name: 'Stomadeus',
            duration_work: 'Жовт 2023 - Лют 2024',
            project_description: 'Сайт спортивних ставок. Один з моїх кращих проектів на основі фреймворка React, розроблений за принципом Single Page Application. Сайт має можливість автентифікації, включаючи через соціальні мережі, перемикання світлої/темної теми, можливість пошуку, багато категорій спорту, зручний інтерфейс, сторінки профілю та багато іншого. Redux використовується як менеджер стану, в якому зберігається майже вся інформація про сайт, від інформації про обліковий запис користувача до списку категорій та матчів.'
        },
        {
            id: 24,
            lang: 'en',
            project_name: 'Stomadeus',
            duration_work: 'Oct 2023 - Feb 2024',
            project_description: 'A sports betting website. One of my best projects based on the React framework developed as a Single Page Application. The site features authentication, including via social networks, light/dark theme switching, search functionality, numerous sports categories, a user-friendly interface, profile pages, and much more. Redux is used as the state manager, storing almost all data about the site, from user account information to the list of categories and matches.'
        },
    ]
}

const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export const ProjectsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_PROJECT:
            return { ...state, currentProject: action.payload }
        default:
            return state
    }
}

export const setCurrentProjectAction = (payload) => ({ type: SET_CURRENT_PROJECT, payload })