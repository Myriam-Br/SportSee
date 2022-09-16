import React from "react";
import { UserActivity } from "../mock_services/apiCalls";
import { XAxis, YAxis,  Bar, BarChart, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import redDot from "../assets/redcircle.png"
import blackDot from "../assets/blackcircle.png"


function GraphUserActivity({prop}) {
    const data = UserActivity(prop)

    let arrayData = Object.values(data)

    return <article className="container_activity"> 
        <div className="params_graph">
            <h2>Activité quotidienne</h2>
            <p><img src={blackDot} alt=""/>Poids (kg)</p>
            <p><img src={redDot} alt="" />Calories brulées (kCal)</p>     
        </div>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={arrayData}  className="graph_activity">
                <XAxis/>
                <YAxis orientation="right"/>
                <CartesianGrid vertical={false} strokeDashArray="5 5" />
                <Tooltip/>
                <Bar dataKey="calories" barSize={10} fill="#DC143C"/>    
                <Bar dataKey="kilogram" barSize={10} fill="#000000"/>
              
            </BarChart>
        </ResponsiveContainer>
        
     
    </article>
}

export default GraphUserActivity