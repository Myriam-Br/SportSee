import React from "react";
import { useEffect, useState } from "react";
import {getUserById, getCardInfo, getUserActivity, getUserAverageSession, getUserPerformance, getUserScore} from "./mockedApi";
import axios from 'axios'
const baseUrl = "http://localhost:3000/user"

/**
 *  Send request using axios api to get data user main info and keydata
 * @param { String } prop
 * @returns { Object } // info -> containd object userInfo and cardInfo
 */
export default function UserMain(prop) {
    console.log(typeof prop);
    const [userInfo, setUserInfo] = useState(null)
    const [cardInfo, setCardInfo] = useState(null)
    const [error, setError] = useState(null)

    //fetch data with axios when loading the page
    useEffect(() => {
        axios.get(`${baseUrl}/${prop}`)
        .then(res => {
            console.log(typeof prop);
            let userId = res.data.data.id
            setUserInfo(getUserById(userId))
            setCardInfo(getCardInfo(userId))
            setError(null)
        })
        .catch(err => {
            console.log(err)
            setError(err.response.status)
        })   
    })

       
        if(error === 404) {
            window.location.pathname = "/error"
        } 

        if(error === null && userInfo !== null && cardInfo !== null ){

            const info = {
                userInfo : userInfo,
                cardInfo : cardInfo
            }
            return info
        }     
    }

   



/**
 *  Send request using axios api to get data user activity
 * @param { Number } prop
 * @returns { Object } // userActivity
 */
export function UserActivity(prop) {
    const [userActivity, setUserActivity] = useState(null)

    //fetch data with axios when loading the page
    useEffect(() => {
        axios.get(`${baseUrl}/${prop}/activity`)
        .then(res => {
            let userId = res.data.data.userId
            setUserActivity(getUserActivity(userId))
        })
        .catch(err => {
            console.log(err)
        })   
    })

    //handle cases when userActivity is not an object to avoid errors when loading the data
    if(typeof userActivity !== "object" || userActivity === null) {
        return 0
    }
  
    return userActivity

}

/**
 *  Send request using axios api to get data user average session
 * @param { Number } prop
 * @returns { Object } // averageSession
 */
export function UserAverageSession(prop) {
    const [averageSession, setAverageSession] = useState(null)

    //fetch data with axios when loading the page
    useEffect(() =>{
        axios.get(`${baseUrl}/${prop}/average-sessions`)
        .then((res) => {
            let userId = res.data.data.userId
            setAverageSession(getUserAverageSession(userId))
        })
        .catch(err => {
            console.log(err)
        })  
    })
 
    //handle cases when averageSession is not an object to avoid errors when loading the data
    if(typeof averageSession !== "object" || averageSession === null) {
        return 0
    }

    //create new object Days 
    const Days = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ]

    //replace 'day' values with object Days values
    Object.values(averageSession).map((elt, index) => {
        elt.day = Days[index]   
        return elt
    })

    return averageSession
}

/**
 *  Send request using axios api to get data user performance 
 * @param { Number } prop
 * @returns { Object } // userPerformance
 */
export function UserPerformance(prop) {
    const [userPerformance, setUserPerformance] = useState(null)

    //fetch data with axios when loading the page
    useEffect(() =>{
        axios.get(`${baseUrl}/${prop}/performance`)
        .then((res) => {
           let userId =  res.data.data.userId
           setUserPerformance(getUserPerformance(userId))
        })
        .catch(err => {
            console.log(err)
        })  
    })

    //handle cases when userPerformance is not an object to avoid errors when loading the data
    if(typeof userPerformance !== "object" || userPerformance === null) {
        return 0
    }

    //create new object Activities
    const Activities =  { 
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    }
    
    //transform object Activities into an array to be able to use the index of each value
    const arrayActivities = Object.entries(Activities)

    //replace 'kind' values with object Activities values
    Object.values(userPerformance).map((activity, index) => {
       if(activity.kind === JSON.parse(arrayActivities[index][0])) {
            activity.kind = arrayActivities[index][1].charAt(0).toUpperCase() + arrayActivities[index][1].slice(1)
       }
       return activity
    })

    return userPerformance
}


/**
 *  Send request using axios api to get data user performance 
 * @param { Number } prop
 * @returns { Object } // UserScore -> contains object userScore 
 */
export function UserScore(prop) {
    const [userScore, setUserScore] = useState(null)

    //fetch data with axios when loading the page
    useEffect(() =>{
    axios.get(`${baseUrl}/${prop}`)
    .then((res) => {
       let userId = res.data.data.id
       setUserScore(getUserScore(userId))
    })
    .catch(err => {
        console.log(err)
    })  
    })

    //handle cases when userScore is not a number to avoid errors when loading the data
    if(typeof userScore !== "number" || userScore === null) {
        return 0
    }

    //creat new Object UserScore that contains score with values from data and the remaining percentage
    let UserScore = [
        {score: userScore}, 
        {score: 100 - userScore}
    ]

    return UserScore
}  