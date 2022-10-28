import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { Api } from "../mock_services/apiCalls";

/**
 * @param { String } prop
*/
function RadarChartComponent({prop}) {
  
    const data = Api('performance', prop)

    function DisplayChart() {
      if(data.data.length > 0 ){
        return  <ResponsiveContainer className="radarChart chart" width="100%" minWidth="10%" height="100%">
        <RadarChart 
          cx={205}
          cy={240}
          outerRadius={150}
          data={data.data}>
          <PolarGrid   radialLines={false} stroke="#FFFFFF"/>
          <PolarAngleAxis type="category" dataKey="kind" tick={{ fill: 'white' }}/>       
          <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
      }
    }
    return <div className="container_activity_perf">
       <DisplayChart/>
    </div>
    ;
}

RadarChartComponent.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default RadarChartComponent