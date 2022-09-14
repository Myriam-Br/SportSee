import React from "react";
import Data from "../mock_services/apiCalls";

function Profil({prop}) {

    const data =  Data(prop)
    console.log(data);
    console.log(data.userInfo, data.userInfo["firstName"]);
   // console.log(data.userInfo.firstName);

    return <div className="info_user">
        <h1>Bonjour </h1>
    </div>
}

export default Profil