import React from "react";
import logo from "../assets/logo.png"


function NavBarH() {
    return  <nav className="NavBarH">
        <img src={logo} alt='logo sportsee'/>
        <ul className="rubriquesH">
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    </nav>
}

export default NavBarH