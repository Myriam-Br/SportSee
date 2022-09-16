import React from "react";

function Card({name, value, icon}) {
 let unit = ""
 if(name === "calorieCount") {
    unit = 'kcal'
 }else {
    unit = 'g'
 }
 return <article className="card">
    <div className="image"><img src={icon} alt="icon" /></div>
    <div className="card_text">
        <h3>{value} {unit}</h3>
        <p>{name}</p>
    </div> 
   
</article>
}

export default Card