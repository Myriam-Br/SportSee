import React from "react";
import { UserAverageSession } from "../mock_services/apiCalls";
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

/**
 * @param { Number } prop
*/
function AreaChartComponent({prop}) {
    
    const data = UserAverageSession(prop)

    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData = Object.values(data)

    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label_session">{`${payload[0].value}min`}</p>
            </div>
          );
        }
      
        return null;
    };

    return <div className="container_average_session">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer className="areaChart"  width="100%" height={300}  >
          <AreaChart data={arrayData}>     
            <XAxis dataKey="day" stroke="white" tickLine={false}  axisLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <Area type="monotone" dataKey="sessionLength" stroke="white" fill="none" />
          </AreaChart>
        </ResponsiveContainer>
        
    </div>
}

export default AreaChartComponent