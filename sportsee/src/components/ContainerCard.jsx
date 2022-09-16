import React from "react";
import Card from "./Card";
import Data from "../mock_services/apiCalls";
import caloriesIcon from "../assets/calories-icon.png"
import fatIcon from "../assets/fat-icon.png"
import carbsIcon from "../assets/carbs-icon.png"
import proteinIcon from "../assets/protein-icon.png"
function ContainerCard({prop}) {
  
    //récupération des icones
    const icons = {
        Calories : caloriesIcon,
        Proteines: proteinIcon,
        Glucides: carbsIcon,
        Lipides: fatIcon,
    }

    //récupération des données
    const data = Data(prop)
    
    //gestion le cas ou on renvoie null à la place des données lors de la récupération dans apiCalls
    if(typeof data !== "object") {
        return 0
    }
    //transformer objet cardInfo en tableau 
    const cardInfoTab = Object.entries(data.cardInfo)
    const iconTab = Object.entries(icons)

    return <div className="card_container">
        {cardInfoTab.map((elt, index) => {
            return <Card key={index}  name={iconTab[index][0]} value={elt[1]} icon={iconTab[index][1]}/>    
        })}
    </div>
}

export default ContainerCard