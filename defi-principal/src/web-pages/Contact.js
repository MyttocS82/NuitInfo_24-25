import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ImageBackground from "../ressources/fond_ecran_contact.png";

function Contact() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Gestion des changements dans les champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        emailjs
            .send("service_gx8ger7", "template_2dsnkl5", formData, "i5QvH7O7VXHnIwCDe")
            .then(() => {
                setSuccessMessage("Message envoyé avec succès !");
                setFormData({ user_name: "", user_email: "", message: "" });
            })
            .catch(() => {
                setErrorMessage("Erreur lors de l'envoi du message. Réessayez plus tard.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="flex items-start justify-center min-h-screen px-2 relative">
            {/* Image en arrière-plan */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ImageBackground}
                alt="Background"
                aria-hidden="true"
            />

            <form
                className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg z-10 mt-[5dvh]"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold text-center text-white mb-6">Contactez-nous</h1>
                <label className="block text-gray-400 mb-2" htmlFor="user_name">
                    Votre nom
                </label>
                <input
                    className="w-full p-3 mb-4 text-white bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Quel est votre nom ?"
                    required
                />
                <label className="block text-gray-400 mb-2" htmlFor="user_email">
                    Votre email
                </label>
                <input
                    className="w-full p-3 mb-4 text-white bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="Quel est votre email ?"
                    required
                />
                <label className="block text-gray-400 mb-2" htmlFor="message">
                    Votre message
                </label>
                <textarea
                    className="w-full p-3 mb-4 text-white bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Quel est votre message ?"
                    rows="5"
                    required
                ></textarea>
                <button
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                </button>
                {successMessage && (
                    <p className="mt-4 text-green-500 text-center">{successMessage}</p>
                )}
                {errorMessage && (
                    <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
                )}
            </form>
        </section>
    );
}

export default Contact;
