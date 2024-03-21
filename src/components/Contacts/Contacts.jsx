import React from 'react';
import './Contacts.scss';
import SectionHead from 'components/SectionHead/SectionHead';
import MyButton from 'components/UI/MyButton/MyButton';

const Contacts = () => {
    return (
        <section className='contacts_section container_box'>
            <SectionHead
                title="Contact"
                subtitle="Feel free to reach out to me for any questions or opportunities!"
            />
            <div className="form_wrapper">
                <h2 className="title">Email Me 🚀</h2>
                <form action="">
                    <input type="email" placeholder='Your Email' />
                    <input type="text" placeholder='Your Name' />
                    <textarea rows="3" placeholder='Message'></textarea>
                    <MyButton rectangle={true} active={true} className="medium">Send</MyButton>
                </form>
            </div>
        </section>
    )
}

export default Contacts;