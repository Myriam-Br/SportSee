import React from "react";
import {ResponsiveContainer, PieChart, Pie, Cell, Label} from 'recharts'
import { UserScore } from "../mock_services/apiCalls";


/**
 * @param { Number } prop
*/
function PieChartComponent({prop}) {
    const data = UserScore(prop)
    //convert data in an array to be able to use map method that is required to create a chart
    const arrayData =  Object.values(data)

    if(arrayData[0] === undefined) {
        return null
    }

    let value = `${arrayData[0].score}%`
  
    //display chart only if there's data in array
    function DisplayChart() {
        if(arrayData.length > 0) {
            return  <ResponsiveContainer className="pieChart" width="100%" height={250}>
            <PieChart>
            <Pie
                    data={arrayData}
                    cx="50%"
                    cy="50%"
                    dataKey="score" 
                    innerRadius={60} 
                    outerRadius={80}
                   
                >
                    {arrayData.map((entry, index) => {
                    if (index === 1) {
                        return <Cell key={`cell-${index}`} fill="#FFFFFF" />; 
                    }
                    return <Cell key={`cell-${index}`} fill="red" />;
                    })}
                    <Label
                        className="label_pie_chart"
                        value={value}
                        position="center"
                        fill="black"
                        style={{
                            fontSize: "36px",
                            fontWeight: "bold",
                            fontFamily: "Roboto"
                        }}
                    />
                </Pie>
            </PieChart>
      </ResponsiveContainer>
        } 
        else {
          return <h3>No data available</h3>
        }
      }

    return( <div className="container_user_score">
        <h3>Score</h3>
       <DisplayChart/>
      <h4>de votre objectif</h4>
    </div>
        
    )
}


export default PieChartComponent