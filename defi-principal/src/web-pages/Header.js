import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue-700 text-white py-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/">VitalSea</Link>
                </div>

                {/* Menu de navigation */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-blue-300 transition">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <a href="#defi" className="hover:text-blue-300 transition">
                            Le Défi
                        </a>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-300 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;