import About from "components/About/About";
import Contacts from "components/Contacts/Contacts";
import Education from "components/Education/Education";
import Experience from "components/Experience/Experience";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Modal from "components/Modal/Modal";
import ModalProject from "components/Modal/ModalProject/ModalProject";
import Project from "components/Project/Project";
import Skills from "components/Skills/Skills";
import React from "react";
import { useTranslation } from "react-i18next";
import 'styles/App.scss';

function App() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <ModalProject />
            <Modal modalName="form-success">
                <h1 className="modal-title">
                    {t('contacts.form.success_title')}
                </h1>
            </Modal>

            <Header />
            <main>
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
            <Footer />
        </div>
    );
}

export default App;
