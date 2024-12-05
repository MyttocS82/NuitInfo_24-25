import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Icônes sociales

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section des liens */}
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-4">RaceForWater</h3>
                        <p className="text-gray-400 max-w-2xl">
                            Nous nous engageons pour la préservation de l'eau et des océans.
                            Luttons ensemble contre la pollution plastique.
                        </p>
                    </div>

                    {/* Liens de navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Plan du site</h4>
                        <ul>
                            <li><a href="#" className="hover:text-blue-400">Accueil</a></li>
                            <li><a href="#defi" className="hover:text-blue-400">Le Défi</a></li>
                            <li><a href="#race" className="hover:text-blue-400">RaceForWater</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-blue-600">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-500">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-pink-600">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section de copyright */}
                <div className="text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Équipe "C'est qui PPP ?". Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
