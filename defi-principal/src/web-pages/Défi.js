import React, {useEffect, useState} from "react";
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

import VideoBackground from "../ressources/coral-reef-destroyed-by-fish-net-free-video.mp4";


const quizQuestions = [
    {
        question: "Quel organe humain est comparable aux courants marins ?",
        options: ["Le cœur", "Les poumons", "Le cerveau", "Les reins"],
        answer: "Le cœur",
        icons: ["💓", "💨", "🧠", "💧"]
    },
    {
        question: "Quel est l'équivalent humain de la photosynthèse dans l'océan ?",
        options: ["Les poumons", "Le plancton", "Les intestins", "Le foie"],
        answer: "Le plancton",
        icons: ["💨", "🦠", "🍽️", "🧑‍⚕️"]
    },
    {
        question: "Les courants marins sont comparés à quel système circulatoire ?",
        options: ["Le cœur", "La pompe thermohaline", "Les artères", "Les veines"],
        answer: "La pompe thermohaline",
        icons: ["💓", "⚙️", "🩸", "🩸"]
    },
    {
        question: "Le réchauffement climatique fait augmenter la température de l'eau de l'océan. Quel est l'impact sur la santé humaine ?",
        options: ["Augmentation des maladies respiratoires", "Réduction des allergies", "Amélioration des conditions de vie", "Disparition des maladies infectieuses"],
        answer: "Augmentation des maladies respiratoires",
        icons: ["💨", "🤧", "😌", "💪"]
    },
    {
        question: "Quel équivalent humain existe pour le corail dans l'océan ?",
        options: ["Le système osseux", "Les poumons", "La peau", "Les cheveux"],
        answer: "La peau",
        icons: ["🦴", "💨", "👤", "💇"]
    },
    {
        question: "Les océans agissent comme un réservoir de CO2. Quel est l'effet de l'augmentation de CO2 dans l'air sur le corps humain ?",
        options: ["Amélioration de la respiration", "Augmentation des maladies cardiaques", "Acidification des poumons", "Meilleure circulation sanguine"],
        answer: "Acidification des poumons",
        icons: ["🫁", "❤️", "🔥", "🩸"]
    },
    {
        question: "Quel rôle joue l'océan dans la régulation de la température de la Terre ?",
        options: ["Il refroidit l'atmosphère", "Il chauffe l'atmosphère", "Il régule l'humidité", "Il stabilise la température"],
        answer: "Il stabilise la température",
        icons: ["❄️", "🔥", "💧", "⚖️"]
    },
    {
        question: "Les océans absorbent le CO2, mais qu'arrive-t-il au corps humain lorsqu'il y a trop de CO2 dans l'air ?",
        options: ["Détérioration de la vue", "Maladies respiratoires", "Amélioration du système nerveux", "Réduction de la production d'oxygène"],
        answer: "Maladies respiratoires",
        icons: ["👀", "💨", "🧠", "⚡"]
    },
    {
        question: "Comment les océans et le corps humain maintiennent l'équilibre thermique ?",
        options: ["Par la respiration", "Par la photosynthèse", "Par la circulation sanguine et les courants marins", "Par la digestion"],
        answer: "Par la circulation sanguine et les courants marins",
        icons: ["💨", "🌱", "🩸", "🍽️"]
    },
    {
        question: "Quel effet le réchauffement climatique a-t-il sur la biodiversité océanique et humaine ?",
        options: ["Réduction de la biodiversité", "Augmentation de la biodiversité", "Aucune conséquence", "Amélioration de la biodiversité"],
        answer: "Réduction de la biodiversité",
        icons: ["⚡", "🌍", "❌", "🌱"]
    },
    {
        question: "Quel équivalent humain existe pour les vagues de chaleur océaniques ?",
        options: ["Fébrilité", "Hyperthermie", "Hypothermie", "Choc thermique"],
        answer: "Hyperthermie",
        icons: ["🤒", "🔥", "❄️", "⚡"]
    },
    {
        question: "Les océans subissent une acidification due au CO2. Cela peut avoir un effet similaire à quel phénomène humain ?",
        options: ["Les allergies", "Les brûlures d'estomac", "L'hyperventilation", "Les coups de chaleur"],
        answer: "Les brûlures d'estomac",
        icons: ["🌿", "🔥", "💨", "💦"]
    },
    {
        question: "Les récifs coralliens sont en danger à cause du réchauffement climatique. Quel équivalent humain pourrait souffrir de cette détérioration ?",
        options: ["Les os", "Les poumons", "Le cœur", "La peau"],
        answer: "Les os",
        icons: ["🦴", "🫁", "💓", "👤"]
    },
    {
        question: "Le réchauffement des océans impacte la circulation des courants marins. Cela affecte-t-il les humains ?",
        options: ["Non, cela n'a pas d'effet", "Oui, cela affecte la météo et la santé", "Oui, cela affecte la biodiversité", "Non, mais cela affecte la faune marine"],
        answer: "Oui, cela affecte la météo et la santé",
        icons: ["❌", "👍", "🌱", "🐠"]
    },
    {
        question: "Quel système humain est responsable de la régulation de la température interne, à l'instar de l'océan qui régule le climat global ?",
        options: ["Les poumons", "Le système nerveux", "La peau", "Les reins"],
        answer: "Les reins",
        icons: ["🫁", "🧠", "👤", "💧"]
    },
    {
        question: "L'océan et le corps humain partagent une fonction de régulation. Quelle est cette fonction ?",
        options: ["La digestion", "Le métabolisme", "La circulation sanguine et les courants marins", "La respiration"],
        answer: "La circulation sanguine et les courants marins",
        icons: ["🍽️", "⚖️", "🩸", "💨"]
    },
    {
        question: "Qu'est-ce qui, dans l'océan, est comparable à la digestion dans le corps humain ?",
        options: ["Les processus de filtration de l'eau", "Les systèmes d'échanges gazeux", "Les courants thermohalins", "Le plancton"],
        answer: "Les processus de filtration de l'eau",
        icons: ["🧽", "💨", "🌊", "🦠"]
    },
    {
        question: "Les océans sont un puits de carbone. Quel rôle joue ce carbone pour le corps humain ?",
        options: ["Il améliore la digestion", "Il aide à la respiration", "Il protège contre les infections", "Il joue un rôle dans l'équilibre acido-basique"],
        answer: "Il joue un rôle dans l'équilibre acido-basique",
        icons: ["🍽️", "🫁", "🦠", "⚖️"]
    },
    {
        question: "Pourquoi les océans sont-ils appelés les poumons de la planète ?",
        options: ["Ils produisent de l'oxygène", "Ils captent le CO2", "Ils régulent la température", "Ils génèrent des vagues"],
        answer: "Ils produisent de l'oxygène",
        icons: ["🌱", "❌", "❄️", "🌊"]
    },
    {
        question: "Comment les océans et le corps humain contribuent-ils à la régulation de la température ?",
        options: ["Par l'oxygénation", "Par la circulation sanguine et les courants marins", "Par la digestion", "Par les échanges gazeux"],
        answer: "Par la circulation sanguine et les courants marins",
        icons: ["💨", "🩸", "🍽️", "💧"]
    }
];

function Défi() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate();

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
            setFeedback("Réponse correcte !");
        } else {
            setFeedback("Mauvaise réponse, réessayez !");
        }
        setTimeout(() => {
            if (currentQuestion < quizQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                alert(`Quiz terminé ! Votre score est ${score} / ${quizQuestions.length}`);
                navigate("/");
            }
        }, 1000);
    };

    useEffect(() => {
        document.title = "VitalSea - Défi";
    });

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

            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-5xl mt-[5dvh] relative z-10">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    Ressources vidéo pour le Quiz
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Regardez les vidéos ci-dessous pour vous aider à répondre aux questions du quiz sur les
                    parallèles entre le corps humain, et les océans.
                </p>

                {/* Vidéo 1 */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Vidéo 1 : Les courants marins et le corps
                        humain</h3>
                    <video controls className="w-full rounded-lg shadow-lg">
                        <source src="https://drive.google.com/uc?export=download&id=1jL_AMc64gENzFfIs-cw6Es-vM7SWuOUt"
                                type="video/mp4"/>
                        Votre navigateur ne supporte pas l'élément vidéo.
                    </video>
                </div>

                {/* Vidéo 2 */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Vidéo 2 : Le rôle des océans dans le
                        réchauffement climatique</h3>
                    <video controls className="w-full rounded-lg shadow-lg">
                        <source src="https://drive.google.com/uc?export=download&id=1EWVFJtBZ_diovcOOUe8mFhciZD43kowF"
                                type="video/mp4"/>
                        Votre navigateur ne supporte pas l'élément vidéo.
                    </video>
                </div>
            </div>

            {/* Quiz Section */}
            <div
                className="p-8 bg-white/60 backdrop-blur-xl shadow-lg rounded-lg overflow-hidden flex flex-col w-[90%] max-w-5xl mt-[5dvh] relative z-10 mb-[5dvh]">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Quiz : Parallèles entre le Corps Humain et
                    l'Océan</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Répondez aux questions pour tester vos connaissances sur les parallèles entre les systèmes humains
                    et océaniques !
                </p>

                {/* Question actuelle */}
                <p className="text-gray-800 font-semibold">{quizQuestions[currentQuestion].question}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            <span className="mr-2">{quizQuestions[currentQuestion].icons[index]}</span>
                            {option}
                        </button>
                    ))}
                </div>

                {/* Feedback */}
                {feedback && (
                    <div className="mt-4 text-xl font-semibold text-center">
                        {feedback === "Réponse correcte !" ? (
                            <span className="text-green-600">
                                <FaCheckCircle/> {feedback}
                            </span>
                        ) : (
                            <span className="text-red-600">
                                <FaTimesCircle/> {feedback}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Défi;
