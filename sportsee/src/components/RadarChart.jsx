import React from "react";
import { UserPerformance } from "../mock_services/apiCalls";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * @param { Number } prop
*/
function RadarChartComponent({prop}) {
  
    const data = UserPerformance(prop)

    console.log(prop);
    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData = Object.values(data)

    //display chart only if there's data in array
    function DisplayChart() {
      if(arrayData.length > 0) {
          return <ResponsiveContainer className="radarChart" width="100%" height="100%">
          <RadarChart 
            cx={205}
            cy={240}
            outerRadius={150}
            data={arrayData}>
            <PolarGrid   radialLines={false} stroke="#FFFFFF"/>
            <PolarAngleAxis type="category" dataKey="kind" tick={{ fill: 'white' }}/>       
            <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      } 
      else {
        return <h3>No data available</h3>
      }
    }

    return <div className="container_activity_perf">
        <DisplayChart/>
    </div>
    ;
}

export default RadarChartComponent