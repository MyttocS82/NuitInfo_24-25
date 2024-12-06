import React from "react";
import raceForWater from "../ressources/raceForWater.png";
import VideoBackground from "../ressources/coral-reef-destroyed-by-fish-net-free-video.mp4";

function HeroSection() {
    return (
        <section className="bg-blue-50 min-h-screen flex items-center justify-center px-2 relative">

            {/* Vidéo en arrière-plan */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={VideoBackground}
                autoPlay
                loop
                muted
            />

            {/* Îlot avec description et image */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-[90%] max-w-7xl mt-[-10vh] relative z-10">
                {/* Colonne gauche : texte avec flou */}
                <div className="flex flex-col justify-center rounded-l-lg">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">À propos de RaceForWater</h2>
                    <p className="text-gray-600">
                        <a className="hover:text-blue-700 transition" href="https://www.raceforwater.org/fr/">Race for
                            Water</a> est une fondation suisse créée en
                        2010, engagée dans la préservation des océans
                        et la lutte contre la pollution plastique. Elle sensibilise aux impacts environnementaux de
                        cette pollution et œuvre à promouvoir des solutions durables. Son navire emblématique,
                        entièrement autonome grâce à l'énergie solaire, éolienne et à l'hydrogène, parcourt le monde
                        pour mener des actions éducatives, scientifiques et technologiques.

                        La fondation s'articule autour de trois axes principaux : prévention, en éduquant sur les
                        dangers des déchets plastiques ; valorisation, en soutenant des technologies qui transforment
                        ces déchets en énergie ; et mobilisation, en collaborant avec des gouvernements, scientifiques
                        et entreprises pour des initiatives concrètes. Avec une approche innovante et un modèle
                        inspirant, Race for Water démontre qu'il est possible de conjuguer écologie et solutions
                        technologiques pour protéger nos océans.
                    </p>
                </div>

                {/* Colonne droite : image */}
                <div className="flex justify-center items-center">
                    <img
                        src={raceForWater}
                        alt="Catamaran RaceForWater"
                        className="transform scale-250 max-w-md rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
