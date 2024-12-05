import React from "react";

function Contact() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Contactez-nous</h1>
            <p className="mb-4">
                Merci de votre intérêt pour VitalSea. Veuillez remplir le formulaire ci-dessous pour nous contacter.
            </p>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                        type="text"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Votre nom"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Votre email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        placeholder="Votre message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default Contact;