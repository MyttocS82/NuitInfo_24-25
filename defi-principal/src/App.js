import React, {useEffect} from "react";
import Header from "./web-pages/Header"; // Import du Header
import HeroSection from "./web-pages/HeroSection"; // Import du HeroSection
import "./output.css"; // Fichier CSS de Tailwind

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
        </div>
    );
}

export default App;
