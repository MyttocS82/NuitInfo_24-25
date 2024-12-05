// Header.js
import React from 'react';
import './css/header.css';

function Header() {
    return (
        <header className="App-header">
            <nav className="App-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Le défi de la nuit !</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Race for Water</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
