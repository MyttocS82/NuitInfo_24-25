import React, {useEffect} from "react";
import Header from "./web-pages/Header";
import HeroSection from "./web-pages/HeroSection";
import "./output.css";
import Footer from "./web-pages/Footer";

function App() {
    useEffect(() => {
        document.title = "VitalSea - Accueil";
    })
    return (
        <div className="App">
            {/* Header global */}
            <Header />

            {/* Section principale */}
            <HeroSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
