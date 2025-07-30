import MyButton from 'components/UI/MyButton/MyButton';
import React, { useState } from 'react';
import './LangSelect.scss';
import { useTranslation } from 'react-i18next';

const LangSelect = () => {
    const countries = [
        {
            code: "ua",
            name: "Ukraine",
        },
        {
            code: "en",
            name: "English",
        },
        {
            code: "ru",
            name: "Russian",
        },
    ]
    const { i18n } = useTranslation();
    

    const [langWindow, setLangWindow] = useState(false);

    const clickFunc = (e) => {
        if (!e.target.closest('.lang_wrapper')) {
            setLangWindow(false);
            document.removeEventListener('click', clickFunc)
        }
    }

    const selectHandler = (e) => {
        setLangWindow(!langWindow)
        document.addEventListener('click', clickFunc)
    }

    const updateLang = (code) => {
        i18n.changeLanguage(code);
        setLangWindow(false);
        localStorage.setItem('i18nextLang', code);
    }

    return (
        <div className={'lang_wrapper' + (langWindow ? " open" : '')}>
            <MyButton
                rectangle={true}
                onClick={selectHandler}
            >
                {i18n.language}
            </MyButton>
            <div className="lang_window">
                {countries.map((lng) =>
                    <span
                        key={lng.code}
                        className='lang'
                        onClick={() => updateLang(lng.code)}
                    >
                        {lng.code}
                    </span>

                )}
            </div>
        </div>
    )
}

export default LangSelect;