import React from "react";
import { UserAverageSession } from "../mock_services/apiCalls";
import {LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts'
function GraphAverageSession({prop}) {
    
    const data = UserAverageSession(prop)

    console.log(data, 'data');
    //transformer en array pour pouvoir utilliser propriété map
    const arrayData = Object.values(data)

    arrayData.map((elt) => {
        console.log(elt.sessionLength);
    })

    function renderTooltip() {
        return (
         <div>Custom content</div>
        )
    }


    return <div className="container_average_session">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer  width="100%" height={400} >
          
            <LineChart data={arrayData}>     
                <XAxis dataKey="day"/>
                <Line type="monotone" dataKey="sessionLength" stroke="black"  />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
        
    </div>
}

export default GraphAverageSession