import React from "react";
import {ResponsiveContainer, PieChart, Pie, Cell, Label} from 'recharts'
import PropTypes from 'prop-types';
import { Api } from "../mock_services/apiCalls";

/**
 * @param { String } prop
*/
function PieChartComponent({prop}) {
    const data = Api('today-score', prop)
    let value = ''
    data.data.map((entry, index) => {
        if(index === 0) {
            value = `${entry.value} %`
        }
    })

    function DisplayChart() {
        if(data.data.length > 0 ) {
            return <div>
                <ResponsiveContainer className="pieChart chart" width="100%" height={250}>
                <PieChart>
                <Pie
                        data={data.data}
                        cx="50%"
                        cy="50%"
                        dataKey="value" 
                        innerRadius={60} 
                        outerRadius={80}
                    
                    >
                        {data.data.map((entry, index) => {
                            console.log(entry.value);
                        if (index === 1) {
                            return <Cell key={`cell-${index}`} fill="#FFFFFF" />; 
                        }
                        return <Cell key={`cell-${index}`} cornerRadius={60} fill="red" />;

                        })}
                        <Label
                            className="label_pie_chart"
                            value={value}
                            position="center"
                            fill="black"
                            style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                fontFamily: "Roboto",
                            }}
                        />
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
            <h4>de votre objectif</h4> 
            </div>     
        }
    }
    return( <div className="container_user_score">
        <h3>Score</h3>
        <DisplayChart/>
      
   
    </div>
        
    )
}

PieChartComponent.propTypes = {
    prop: PropTypes.string.isRequired,
};


export default PieChartComponent