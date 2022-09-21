import React from "react";
import { UserActivity } from "../mock_services/apiCalls";
import { XAxis, YAxis,  Bar, BarChart, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import redDot from "../assets/redcircle.png"
import blackDot from "../assets/blackcircle.png"

/**
 * @param { Number } prop
*/
function BarChartComponent({prop}) {
    const data = UserActivity(prop)

    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData = Object.values(data)

      
    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
                <p className="label label_kilograms">{`${payload[1].value}kg`}</p>
                <p className="label label_calories">{`${payload[0].value}Kcal`}</p>   
            </div>
          );
        }
      
        return null;
    };
      
    return <article className="container_activity"> 
            <h2>Activité quotidienne</h2>
            <div className="params_graph">
                <p><img src={blackDot} alt=""/>Poids (kg)</p>
                <p><img src={redDot} alt="" />Calories brulées (kCal)</p>     
            </div>
        <ResponsiveContainer  className="barChart" width="100%" height={300}>
            <BarChart data={arrayData} >
                <XAxis/>
                <YAxis orientation="right"/>
                <CartesianGrid vertical={false} strokeDashArray="5 5" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="calories" barSize={10} fill="#DC143C"/>    
                <Bar dataKey="kilogram" barSize={10} fill="#000000"/>
              
            </BarChart>
        </ResponsiveContainer>
        
     
    </article>
}

export default BarChartComponent