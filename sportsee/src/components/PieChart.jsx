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

    return( <div className="container_user_score">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
                <Pie data={arrayData} dataKey="score"  cx="50%" cy="50%" innerRadius={60} outerRadius={80}>

                {arrayData.map((entry, index) => {
                     if (index === 1) {
                        return <Cell key={`cell-${index}`} fill="aliceblue" />; 
                      }
                      return <Cell key={`cell-${index}`} fill="red" />;
                })}
            
                    <Label
                    value= {arrayData[0]}
                    position="center"
                    fill="grey"
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        fontFamily: "Roboto"
                    }}
                    />

                </Pie>
            </PieChart>
      </ResponsiveContainer>
    </div>
        
    )
}

export default PieChartComponent