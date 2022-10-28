import React from "react";
import PropTypes from 'prop-types';
/**
 *  Send request using axios api to get data user average session
 * @param { String } name
 * @param { Number } value
 * @param { String } unite
 * @param { String } icon
 */
function Card({name, unite, value, icon}) {
 return <article className="card">
    <div className="image"><img  src ={icon} alt="icon" /></div>
    <div className="card_text">
        <h3> {value} {unite}</h3>
        <p>{name}</p>
    </div> 
   
</article>
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unite: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
  
export default Card