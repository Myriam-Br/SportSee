import React from "react";
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { MockedAPI } from "../mock_services/mockedApi";
import { Api } from "../mock_services/apiCalls";
import PropTypes from 'prop-types';
import ErrorMessage from "./ErrorMessage";
/**
 * @param { String } prop
*/
function AreaChartComponent({prop}) {
    
    const data = Api('average-sessions', prop)

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

    CustomTooltip.propTypes = {
      active: PropTypes.bool,
      payload: PropTypes.array,
    };
    
    function DisplayChart() {
      if(data.data.length > 0 ){
        return  <ResponsiveContainer className="areaChart chart"  width="100%" height={300}  >
        <AreaChart width={250} height={300} data={data.data}>     
          <XAxis type="category" dataKey="day" stroke="white" tickLine={false}  axisLine={false}/>
          <Tooltip content={<CustomTooltip />}/>
          <Area type="monotone" dataKey="sessionLength" stroke="white" fill="none" />
        </AreaChart>
      </ResponsiveContainer>   
      }
    }

    return <div className="container_average_session chart_container">
        <h2>Durée moyenne des sessions</h2>
        <DisplayChart/>       
    </div>
}

AreaChartComponent.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default AreaChartComponent