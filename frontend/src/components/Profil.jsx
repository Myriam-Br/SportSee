import React from "react";
import { Api } from "../mock_services/apiCalls";
import PropTypes from 'prop-types';
import ErrorMessage from "./ErrorMessage";

/**
 * @param { String } prop
 */
function Profil({prop}) {
    const data =  Api('firstName', prop)
    let nameColor = "red"
    return <div className="info_user">
        <h1>Bonjour<span style={{ 'color': nameColor}}> {data.data.firstName}</span></h1>
        <h2>{data.data.description}</h2>
        <ErrorMessage error = {data.error}/>
    </div>
}

Profil.propTypes = {
    prop: PropTypes.string.isRequired,
};

export default Profil