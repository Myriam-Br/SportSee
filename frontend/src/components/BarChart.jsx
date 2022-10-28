import React from "react";
import { XAxis, YAxis,  Bar, BarChart, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import redDot from "../assets/redcircle.png"
import blackDot from "../assets/blackcircle.png"
import { Api} from "../mock_services/apiCalls";
import PropTypes from 'prop-types';
import ErrorMessage from "./ErrorMessage";
/**
 * @param { String } prop
*/
function BarChartComponent({prop}) {
    const data = Api("daily-activity", prop)

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

    CustomTooltip.propTypes = {
      active: PropTypes.bool,
      payload: PropTypes.array,
    };
    
    function DisplayChart() {
      if(data.data.length > 0 ){
        return <ResponsiveContainer  className="barChart chart" width="100%" height={300}>
        <BarChart data={data.data} >
            <XAxis />
            <YAxis orientation="right"/>
            <CartesianGrid vertical={false} strokeDashArray="5 5" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="calories" radius={[10, 10, 0, 0]} barSize={10} fill="#DC143C"/>    
            <Bar dataKey="kilogram"  radius={[10, 10, 0, 0]} barSize={10} fill="#000000"/>
          
        </BarChart>
        </ResponsiveContainer>
      }
    }
    
    return <article className="container_activity"> 
            <h2>Activité quotidienne</h2>
            <div className="params_graph">
                <p><img src={blackDot} alt=""/>Poids (kg)</p>
                <p><img src={redDot} alt="" />Calories brulées (kCal)</p>     
            </div>
            <DisplayChart/>
            <ErrorMessage error = {data.error}/>
    </article>
}

BarChartComponent.propTypes = {
  prop: PropTypes.string.isRequired,
}



export default BarChartComponent