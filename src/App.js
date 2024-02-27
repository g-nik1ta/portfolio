import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Header from "components/Header/Header";
import Skills from "components/Skills/Skills";
import React from "react";
import 'styles/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <div className="skills-experience">
                    <Skills />
                    <Experience />
                </div>
            </main>
        </div>
    );
}

export default App;
