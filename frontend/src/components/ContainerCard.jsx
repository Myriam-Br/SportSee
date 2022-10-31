import React from "react";
import Card from "./Card";
import { MockedAPI } from "../mock_services/mockedApi";
import caloriesIcon from "../assets/calories-icon.png"
import fatIcon from "../assets/fat-icon.png"
import carbsIcon from "../assets/carbs-icon.png"
import proteinIcon from "../assets/protein-icon.png"
import { Api } from "../mock_services/apiCalls";
import PropTypes from 'prop-types';

/**
 * @param { String } prop
*/
function ContainerCard({prop}) {
    //create new Object icons with all the icon files
    const icons = [
        caloriesIcon,
        proteinIcon,
        carbsIcon,
        fatIcon,
    ]
     
    const data = Api('key-data', prop)

    return <div className="card_container">
            {data.data.length > 0 ? (data.data.map((elt, index) => {
                return <Card key={index}  name={elt.name} value={elt.count} unite={elt.unite} icon={icons[index]}/>    
            })) : (icons.map((elt, index) =>{
                return <Card key={index}  name='NO DATA ' value='' unite='' icon={icons[index]}/>    
            }))
            }
          
        </div>
}

ContainerCard.propTypes = {
    prop: PropTypes.string.isRequired,
  };

export default ContainerCard