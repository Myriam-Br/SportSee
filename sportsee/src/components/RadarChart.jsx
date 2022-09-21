import React from "react";
import { UserPerformance } from "../mock_services/apiCalls";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * @param { Number } prop
*/
function RadarChartComponent({prop}) {
    const data = UserPerformance(prop)

    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData = Object.values(data)
    
    return <div className="container_activity_perf">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx={210}
            cy={250}
            outerRadius={150}
            data={arrayData}>
            <PolarGrid   radialLines={false} stroke="#FFFFFF"/>
            <PolarAngleAxis dataKey="kind" tick={{ fill: 'white' }}/>       
            <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
    </div>
    ;
}

export default RadarChartComponent