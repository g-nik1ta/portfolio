import React, { useState } from 'react';
import './Contacts.scss';
import SectionHead from 'components/SectionHead/SectionHead';
import MyButton from 'components/UI/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import Loader from 'components/UI/Loader/Loader';

const Contacts = () => {
    const { t } = useTranslation();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');
    const [formValue, setFormValue] = useState({
        email: '',
        name: '',
        message: ''
    })

    const changeValue = (e, type) => {
        setFormValue(prevValue => {
            return {
                ...prevValue,
                [type]: e.target.value
            }
        })
    }

    const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const submitForm = async (e) => {
        e.preventDefault();
        const { name, email, message } = formValue

        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0'); // Добавляем нуль спереди, если число меньше 10
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');

        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const year = currentDate.getFullYear();

        const formattedTime = `${hours}:${minutes}`;
        const formattedDate = `${day}.${month}.${year}`;

        const text = `Новая заявка!\n\n<b>Имя:</b> ${name}!\n<b>Email:</b> ${email}\n<b>Сообщение:</b> ${message}\n\n<b>Время отправки:</b> ${formattedTime}\n<b>Дата отправки:</b> ${formattedDate}`;

        try {
            setLoader(true);

            const response = await fetch(API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: 'HTML'
                })
            })

            if (response.ok) {
                document.querySelector("body").classList.add("no_scroll");
                document.querySelector('.modal_wrapper.form-success').classList.remove('hide')
                setFormValue({
                    email: '',
                    name: '',
                    message: ''
                });
            } else {
                const errorText = await response.text();
                const responseObject = JSON.parse(errorText);
                // console.log(responseObject.description);
                throw new Error(responseObject.description);
            }

        } catch (error) {
            setError(true);
            console.error(error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <section className='contacts_section container_box'>
            <SectionHead
                title={t('contacts.head.title')}
                subtitle={t('contacts.head.subtitle')}
            />
            <div className="form_wrapper">
                <h2 className="title">{t('contacts.email_me')} 🚀</h2>
                <form onSubmit={submitForm}>
                    <input
                        required={true}
                        value={formValue.email}
                        onChange={(e) => { changeValue(e, 'email') }}
                        name='email'
                        type="email"
                        placeholder={t('contacts.form.email')}
                    />
                    <input
                        required={true}
                        value={formValue.name}
                        onChange={(e) => { changeValue(e, 'name') }}
                        name='name'
                        type="text"
                        placeholder={t('contacts.form.text')}
                    />
                    <textarea
                        required={true}
                        value={formValue.message}
                        onChange={(e) => { changeValue(e, 'message') }}
                        name='message'
                        rows="3"
                        placeholder={t('contacts.form.message')}
                    />
                    {
                        loader
                            ?
                            <div className='loader_wrapper'> <Loader /></div>
                            :
                            error
                                ?
                                <span className="error">{t('contacts.form.error')}</span>
                                :
                                <MyButton rectangle={true} active={true} className="medium">
                                    {t('contacts.form.send')}
                                </MyButton>
                    }
                </form>
            </div>
        </section>
    )
}

export default Contacts;