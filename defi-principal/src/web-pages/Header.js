import React from "react";

function Header() {
    return (
        <header className="bg-blue-700 text-white py-4 shadow-md">
            <title>VitalSea</title>
            <nav className="container mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <a href="#">VitalSea</a>
                </div>

                {/* Menu de navigation */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="hover:text-blue-300 transition">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#defi" className="hover:text-blue-300 transition">
                            Le Défi
                        </a>
                    </li>
                    <li>
                        <a href="#race" className="hover:text-blue-300 transition">
                            RaceForWater
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-300 transition">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
