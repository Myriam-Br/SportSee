import React from "react";
import { UserAverageSession } from "../mock_services/apiCalls";
import {LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts'

/**
 * @param { Number } prop
*/
function LineChartComponent({prop}) {
    
    const data = UserAverageSession(prop)

    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData = Object.values(data)

    return <div className="container_average_session">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer  width="100%" height={400} >
            <LineChart width={600} height={300} data={arrayData}>     
                <XAxis dataKey="day"/>
                <Line type="monotone" dataKey="sessionLength" stroke="black"  />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
        
    </div>
}

export default LineChartComponent