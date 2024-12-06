import React from "react";
import raceForWater from "../ressources/raceForWater.png";
import VideoBackground from "../ressources/coral-reef-destroyed-by-fish-net-free-video.mp4";

function HeroSection() {
    return (
        <section className="bg-blue-50 min-h-screen flex flex-col items-center justify-start px-2 relative">

            {/* Vidéo en arrière-plan */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={VideoBackground}
                autoPlay
                loop
                muted
            />

            {/* Introduction au sujet */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-5xl mt-[5dvh] relative z-10">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Le Défi de cette année</h2>
                <p className="text-gray-600 leading-relaxed">
                    Pour cette <strong>Nuit de l'Info 2024</strong>, nous explorons un sujet fascinant : <strong>"Et si
                    l’océan était un corps humain ?"</strong>. L’objectif est de mettre en lumière les parallèles entre
                    les systèmes humains et océaniques. Ces comparaisons permettront de mieux comprendre l’importance
                    vitale des océans pour notre planète, tout en soulignant les dangers des dysfonctionnements.
                </p>
            </div>

            {/* Objectifs de la mission */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-5xl mt-[5dvh] relative z-10">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Notre mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    Nous devons développer une <strong>application web éducative et interactive</strong> qui représente
                    les parallèles entre les systèmes humains et les mécanismes océaniques. L’application permettra
                    d’explorer les liens tels que :
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-600">
                    <li><strong>Cœur :</strong> Le système circulatoire, représenté par les courants marins et la pompe
                        thermohaline.
                    </li>
                    <li><strong>Poumons :</strong> Les échanges gazeux, similaires à la photosynthèse et la dissolution
                        du CO2 dans l’océan.
                    </li>
                    <li><strong>Autres exemples :</strong> Le plancton, les coraux, la salinité, ou encore la
                        température de l’eau.
                    </li>
                </ul>
                <p className="text-gray-600 mt-4">
                    L’objectif est d’éduquer, de sensibiliser, et d’inspirer un sentiment de responsabilité collective
                    envers la préservation des océans.
                </p>
            </div>

            {/* Îlot avec description et image */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-[90%] max-w-5xl mb-[5dvh] mt-[5dvh] relative z-10">
                {/* Colonne gauche : texte avec flou */}
                <div className="flex flex-col justify-center rounded-l-lg max-w-xl">
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
                <div className="flex justify-center items-center mt-4 md:mt-0">
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
