import React from "react";
import UserMain from "../mock_services/apiCalls";

function Profil({prop}) {
    const data =  UserMain(prop)
    let nameColor = "red"
    
    //gestion le cas ou on renvoie null à la place des données lors de la récupération dans apiCalls
    if(typeof data !== "object") {
        return 0
    }

    return <div className="info_user">
        <h1>Bonjour <span style={{ 'color': nameColor}}>{data.userInfo["firstName"]}</span></h1>
    </div>
}

export default Profil