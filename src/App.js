import About from "components/About/About";
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
                <Skills />
            </main>
        </div>
    );
}

export default App;
