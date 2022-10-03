import React from "react";
import { UserAverageSession } from "../mock_services/apiCalls";
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

/**
 * @param { String } prop
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

    //display chart only if there's data in array
    function DisplayChart() {
      if(arrayData.length > 0) {
          return <ResponsiveContainer className="areaChart"  width="100%" height={300}  >
            <AreaChart width={250} height={300} data={arrayData}>     
              <XAxis type="category" dataKey="day" stroke="white" tickLine={false}  axisLine={false}/>
              <Tooltip content={<CustomTooltip />}/>
              <Area type="monotone" dataKey="sessionLength" stroke="white" fill="none" />
            </AreaChart>
          </ResponsiveContainer>   
      } 
      else {
        return <h3>No data available</h3>
      }
    }

    return <div className="container_average_session">
        <h2>Durée moyenne des sessions</h2>
        <DisplayChart />
    </div>
}

export default AreaChartComponent