import React from "react";
import { useEffect, useState } from "react";
import {getUserById, getCardInfo} from "./mockedApi";
import axios from 'axios'
const baseUrl = "http://localhost:3000/user"


export default function Data(prop) {
    const [userInfo, setUserInfo] = useState(null)
    const [cardInfo, setCardInfo] = useState(null)

    // fetch data user info profil
    useEffect(() => {
        axios.get(`${baseUrl}/${prop}`)
        .then(res => {
            setUserInfo(getUserById(prop))
            setCardInfo(getCardInfo(prop))
        })
        .catch(err => {
            console.log(err)
        })   
    })
    //gestion userInfo null
    if(userInfo === null || userInfo === null) {
        return 0
    }            

    const info = {
        userInfo,
        cardInfo
    }
   
    return info
}

