import React from "react";
import { useEffect, useState } from "react";
import { MockedAPI } from "./mockedApi";
import axios from 'axios'
const baseUrl = "http://localhost:3000"


export function Api(service, userId) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
  
    const endpoint = getEndpointByService(service, userId);

    useEffect(() => {
        async function fetchDataUser() {
            await axios.get(`${baseUrl}/${endpoint}`)
            .then((res) => {
                const data =  res.data.data;
                setData(getDataByService(data, service))
            })
            .catch((err) => {
                setError(`error: cannot access ${baseUrl}/${endpoint}`)
            })
        }


        fetchDataUser()
    
   }, [])

    return {data , error}
  
  }

/**
 * @param {string} service 
 * @param {string} userId 
 * @returns {string} endpoint associated to the service that match id
 */
//create all the enpoints to return for each services
 function getEndpointByService(service, userId) {
        switch (service) {

        case "firstName":
            return `user/${userId}`;
            
        case "key-data":
            return `user/${userId}`;

        case "daily-activity":
            return `user/${userId}/activity`;

        case "average-sessions":
            return `user/${userId}/average-sessions`;

        case "performance":
            return `user/${userId}/performance`;
    
    
        case "today-score":
            return `user/${userId}`;
    
        default:
            return null;
        }

}

function getDataByService(data,service) {
    if (data) {
       // console.log(data);
      switch (service) {
        case "firstName":
          return getProfilFirstName(data);

        case "key-data":
            return getProfilKeyData(data);
         
        case "daily-activity":
            return getUserDailyActivity(data);
         
        case "average-sessions":
            return getUserAverageSession(data);
         
        case "performance":
            return getUserPerformance(data);
         
        case "today-score":
            return getUserScore(data);
         
        default:
          console.error(
            ` error: service "${service}" is not defined.`
          );

        return;
      }
    }
}  
 
function getDefaultProfil() {
    let profil = {
        firstName: '',
        description:''
    }

    return profil
}
function getProfilFirstName(userData) {
    let profil = getDefaultProfil()
    profil.firstName = userData.userInfos.firstName
    profil.description = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'
    return profil
}

//default keydata tab when user doesn't exist or no data for user
function getDefaultKeyData() {
    let userKeyData = [
        {
            'name': 'Calories',
            'count': 0,
            'unite' : 'kCal',
            
        },
        {
            'name': 'Protéines',
            'count': 0,
            'unite' : 'g',
           
        },
        {
            'name': 'Glucides',
            'count': 0,
            'unite' : 'g',
          
        },
        {
            'name': 'Lipides',
            'count': 0,
            'unite' : 'g',
            
        },
    ]

    return userKeyData
}


function getProfilKeyData(userData) {
    let arrayKeyData = getDefaultKeyData()
    //we replace tab valule with data value we get
    for(let index in Object.values(userData.keyData)) {
        arrayKeyData[index].count = Object.values(userData.keyData)[index]
    }
    return arrayKeyData
}


function getDefaultDailyActivity() {
    let dailyActivity = [
        {
            "day": new Date(), 
            "kilogram": 0, 
            "calories": 0, 
        }
    ]

    return dailyActivity
}

function getUserDailyActivity(userData) {
    let dailyActivity = getDefaultDailyActivity()
    if(userData) {
        dailyActivity = []
        for(let index in userData.sessions) {
            dailyActivity.push({
                "day": userData.sessions[index].day, 
                "kilogram": userData.sessions[index].kilogram, 
                "calories": userData.sessions[index].calories, 
            })
        }
    }

    return dailyActivity
}

function getDefaultAverageSession() {
    let averageSessions = [
        {
            day: 'L',
            sessionLength: 0
        },
        {
            day: 'M',
            sessionLength: 0
        },
        {
            day: 'M',
            sessionLength: 0
        },
        {
            day: 'J',
            sessionLength: 0
        },
        {
            day: 'V',
            sessionLength: 0
        },
        {
            day: 'S',
            sessionLength: 0
        },
        {
            day: 'D',
            sessionLength: 0
        }
    ]

    return averageSessions
}

function getUserAverageSession(userData) {
    let averageSessions = getDefaultAverageSession()
    for(let index in userData.sessions) {
        averageSessions[index].sessionLength = userData.sessions[index].sessionLength
    }
    return averageSessions
}

function getDefaultPerformance() {
    let performance = [
        {
            'kind':'Cardio',
            'value': 0
        },
        {
            'kind':'Energie',
            'value': 0
        },
        {
            'kind':'Endurance',
            'value': 0
        },
        {
            'kind':'Force',
            'value': 0
        },
        {
            'kind':'Vitesse',
            'value': 0
        },
        { 
            'kind':'Intensité',
            'value': 0
        }
    ]

    return performance
}

function getUserPerformance(userData) {
    let performance = getDefaultPerformance()
    for(let index in userData.data) {
        performance[index].value = userData.data[index].value
    }

    return performance
}

function getDefaultScore() {
    let userScore = [
        {
            'score': 'todayScore',
            'value': 0
        },
        {
            'score': 'restScore',
            'value': 100
        },
    ]

    return userScore
}


function getUserScore(userData) {
    let userScore = getDefaultScore()

    let score = ''
    if(userData.score) {
        score = userData.score
    }
    else if(userData.todayScore) {
        score = userData.todayScore
    }

    userScore[0].value = score * 100
    userScore[1].value = (1 - score) * 100

    console.log('SCORE',typeof userScore);
    return userScore
}
 
