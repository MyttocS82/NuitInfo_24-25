import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./web-pages/Header";
import HeroSection from "./web-pages/HeroSection";
import Footer from "./web-pages/Footer";
import Contact from "./web-pages/Contact";
import "./output.css";

function App() {
    useEffect(() => {
        document.title = "VitalSea - Accueil";
    });

    return (
        <Router>
            <div className="App">
                {/* Header global */}
                <Header />

                {/* Contenu basé sur la route */}
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;