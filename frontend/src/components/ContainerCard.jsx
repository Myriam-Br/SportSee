import React from "react";
import Card from "./Card";
import UserMain from "../mock_services/apiCalls";
import caloriesIcon from "../assets/calories-icon.png"
import fatIcon from "../assets/fat-icon.png"
import carbsIcon from "../assets/carbs-icon.png"
import proteinIcon from "../assets/protein-icon.png"


/**
 * @param { Number } prop
*/
function ContainerCard({prop}) {
    //create new Object icons with all the icon files
    const icons = {
        Calories : caloriesIcon,
        Proteines: proteinIcon,
        Glucides: carbsIcon,
        Lipides: fatIcon,
    }


    const data = UserMain(prop)
    
    //handle case where data is not an object
    if(typeof data !== "object") {
        return 0
    }

    //convert data.cardInfo and icons into arrays
    const cardInfoTab = Object.entries(data.cardInfo)
    const iconTab = Object.entries(icons)

    return <div className="card_container">
        {cardInfoTab.map((elt, index) => {
            return <Card key={index}  name={iconTab[index][0]} value={elt[1]} icon={iconTab[index][1]}/>    
        })}
    </div>
}

export default ContainerCard