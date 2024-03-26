import React from 'react';
import './Contacts.scss';
import SectionHead from 'components/SectionHead/SectionHead';
import MyButton from 'components/UI/MyButton/MyButton';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <section className='contacts_section container_box'>
            <SectionHead
                title={t('contacts.head.title')}
                subtitle={t('contacts.head.subtitle')}
            />
            <div className="form_wrapper">
                <h2 className="title">{t('contacts.email_me')} 🚀</h2>
                <form action="">
                    <input type="email" placeholder={t('contacts.form.email')} />
                    <input type="text" placeholder={t('contacts.form.text')} />
                    <textarea rows="3" placeholder={t('contacts.form.message')}></textarea>
                    <MyButton rectangle={true} active={true} className="medium">
                        {t('contacts.form.send')}
                    </MyButton>
                </form>
            </div>
        </section>
    )
}

export default Contacts;