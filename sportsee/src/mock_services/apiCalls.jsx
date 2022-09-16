import React from "react";
import { useEffect, useState } from "react";
import {getUserById, getCardInfo, getUserActivity, getUserAverageSession} from "./mockedApi";
import axios from 'axios'
const baseUrl = "http://localhost:3000/user"


export default function UserMain(prop) {
    const [userInfo, setUserInfo] = useState(null)
    const [cardInfo, setCardInfo] = useState(null)

    
    // fetch data user info profil
    useEffect(() => {
        axios.get(`${baseUrl}/${prop}`)
        .then(res => {
            let userId = res.data.data.id
            setUserInfo(getUserById(userId))
            setCardInfo(getCardInfo(userId))
        })
        .catch(err => {
            console.log(err)
        })   
    })
    //gestion userInfo null
    if(userInfo === null || cardInfo === null) {
        return 0
    }  

    const info = {
        userInfo : userInfo,
        cardInfo : cardInfo
    }


    return info
}

export function UserActivity(prop) {

    const [userActivity, setUserActivity] = useState(null)
   // fetch data user info profil
   useEffect(() => {
        axios.get(`${baseUrl}/${prop}/activity`)
        .then(res => {
            console.log(res);
            let userId = res.data.data.userId
            setUserActivity(getUserActivity(userId))
        })
        .catch(err => {
            console.log(err)
        })   
    })

    if(typeof userActivity !== "object" || userActivity === null) {
        return 0
    }
  
    return userActivity

}

export function UserAverageSession(prop) {
    const [averageSession, setAverageSession] = useState(null)

    useEffect(() =>{
        axios.get(`${baseUrl}/${prop}/average-sessions`)
        .then((res) => {
            console.log(res.data.data.session);
            let userId = res.data.data.userId
            setAverageSession(getUserAverageSession(userId))
        })
        .catch(err => {
            console.log(err)
        })  
    })
 
    if(typeof averageSession !== "object" || averageSession === null) {
        return 0
    }

    //remplacer les index par jours
    const Days = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ]

    Object.values(averageSession).map((elt, index) => {
        elt.day = Days[index]   
        console.log(elt.sessionLength);
    })


    return averageSession
}