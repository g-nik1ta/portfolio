import React from 'react';
import './Home.scss';
import About from "components/About/About";
import Contacts from "components/Contacts/Contacts";
import Education from "components/Education/Education";
import Experience from "components/Experience/Experience";
import Modal from "components/Modal/Modal";
import ModalProject from "components/Modal/ModalProject/ModalProject";
import Project from "components/Project/Project";
import Skills from "components/Skills/Skills";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <ModalProject />
            <Modal modalName="form-success">
                <h1 className="modal-title">
                    {t('contacts.form.success_title')}
                </h1>
            </Modal>

            <main className='home-page'>
                <About />
                <div className="polygon-gradient_background">
                    <Skills />
                    <Experience />
                </div>
                <div className="polygon-gradient_background">
                    <Project />
                    <Education />
                    <Contacts />
                </div>
            </main>
        </>
    )
}

export default Home;