import AppRouter from "components/AppRouter";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { useState } from "react";
import 'styles/App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [auth, setAuth] = useState(true);

    return (
        <div className="App">
            <Header />

            <AppRouter auth={auth} />

            <Footer />
        </div>
    );
}

export default App;
