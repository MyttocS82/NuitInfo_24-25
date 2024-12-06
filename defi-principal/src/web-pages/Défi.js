import React from "react";
import VideoBackground from "../ressources/coral-reef-destroyed-by-fish-net-free-video.mp4";

function Défi() {
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

            {/* Îlot avec la présentation de la Nuit de l'Info */}
            <div className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-7xl mt-[5dvh] relative z-10">
                <div className="flex flex-col justify-center rounded-l-lg">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">À quelle occasion ?</h2>
                    <p className="text-gray-600">
                        La <strong>Nuit de l'Info</strong> est un événement national qui rassemble chaque année des
                        milliers d'étudiants, enseignants et professionnels de l'informatique pour relever des défis
                        dans un temps limité. Pendant une nuit entière, les équipes collaborent pour concevoir et
                        développer des solutions innovantes répondant à des thématiques variées, souvent liées à des
                        causes sociales ou environnementales. Pour cette année <strong>2024</strong>, le sujet est
                        : <strong>"Et si l'océan était un corps humain ?"</strong>. Ce sujet, choisi en collaboration
                        avec l'association <strong>Race For Water</strong>, vise à sensibiliser les utilisateurs au
                        travers d'une application web éducative et interactive en établissant des parallèles entre
                        les <strong>systèmes humains</strong> et les <strong>systèmes océaniques</strong>.
                    </p>

                </div>
            </div>

            {/* Îlot avec la description de l'équipe */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-7xl mt-[5dvh] relative z-10">
                <div className="flex flex-col justify-center rounded-l-lg">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Qui sommes nous ?</h2>
                    <p className="text-gray-600">
                        Nous sommes une équipe de <strong>10 étudiants</strong> en deuxième année de BUT Informatique à
                        l'<strong>IUT Informatique de Toulouse</strong>, Paul Sabatier, site Rangueil. Passionnés par
                        l'informatique et engagés pour des causes environnementales, nous unissons nos compétences pour
                        réaliser ce projet.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Défi;
