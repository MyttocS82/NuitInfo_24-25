import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./web-pages/Header";
import Footer from "./web-pages/Footer";
import HeroSection from "./web-pages/HeroSection";
import Contact from "./web-pages/Contact";
import Defi from "./web-pages/Défi";
import "./output.css";

function App() {
    useEffect(() => {
        document.title = "VitalSea - Accueil";
    });

    return (
        <Router>
            <div className="App overscroll-none">
                {/* Header global */}
                <Header/>

                {/* Contenu basé sur la route */}
                <Routes>
                    <Route path="/" element={<HeroSection/>}/>
                    <Route path="/defi" element={<Defi/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>

                {/* Footer */}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;