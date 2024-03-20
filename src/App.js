import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Header from "components/Header/Header";
import ModalProject from "components/Modal/ModalProject/ModalProject";
import Project from "components/Project/Project";
import Skills from "components/Skills/Skills";
import React from "react";
import 'styles/App.scss';

function App() {
    return (
        <div className="App">
            <ModalProject />

            <Header />
            <main>
                <About />
                <div className="polygon-gradient_background">
                    <Skills />
                    <Experience />
                </div>
                <Project />
            </main>
        </div>
    );
}

export default App;
