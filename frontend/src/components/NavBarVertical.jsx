import React from "react";
import mediationIcon from "../assets/meditation.png"
import swimmingIcon from "../assets/swimming.png"
import bicycleIcon from "../assets/bicycle.png"
import workoutIcon from "../assets/workout.png"
import copyright from "../assets/copyright.png"

function NavBarV() {
    return   <nav className="NavBarV">
        <ul className="rubriquesV">
            <li><img src={mediationIcon} alt="mediation icon" /></li>
            <li><img src={swimmingIcon} alt="swimming icon" /></li>
            <li><img src={bicycleIcon} alt="bicycle icon" /></li>
            <li><img src={workoutIcon} alt="workout icon" /></li>
        </ul>
        <img src={copyright} alt="copyright sportsee 2020" className="copyright" />
    </nav>
}

export default NavBarV