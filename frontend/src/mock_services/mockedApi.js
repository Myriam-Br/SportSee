const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../mock_services/mockedData')

/**
 * Get user score from mockedData
 * @param { String } userId
 * @returns { array.Object }
 */
export class MockedAPI{
    constructor(userId) {
        this.userId = parseInt(userId)
    }
 
    getProfilFirstName() {
        let userInfo = {
            'firstName': '',
            'description':'ERROR : USER NOT FOUND'          
        }
        for(let user of USER_MAIN_DATA) {
            if(user.id === this.userId) {  
                userInfo.firstName = user.userInfos.firstName 
                userInfo.description = 'Félicitation! vous avez explosé vos objectifs hier 👏' 
            }

            return userInfo
        }
    }

    getProfilKeyData() {
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

      
        for(let user of USER_MAIN_DATA) {
            if(user.id === this.userId) {
                let arrayKeyData = Object.values(user.keyData)
               for(let index in arrayKeyData) {
                    userKeyData[index].count = arrayKeyData[index]
               }
            }

            return userKeyData
        }
   
    }

    getUserDailyActivity() {
        let dailyActivity = []

        for(let user of USER_ACTIVITY) {
            if(user.userId === this.userId) {
                for(let index in user.sessions) {
                    dailyActivity.push({
                        "day": user.sessions[index].day, 
                        "kilogram": user.sessions[index].kilogram, 
                        "calories": user.sessions[index].calories, 
                    })
                }  
            }
            else{
                dailyActivity.push({
                    "day": 'undefined', 
                    "kilogram": 0, 
                    "calories": 0, 
                })
            }
            return dailyActivity
        }   
    }

    getUserAverageSession() {
       //create array default average sessions 
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

        for(let user of USER_AVERAGE_SESSIONS) {
            if(user.userId === this.userId) {
                for(let index in user.sessions) {
                    averageSessions[index].sessionLength = user.sessions[index].sessionLength        
                }
                
            }
            return averageSessions
        }
    }

    getUserPerformance() {
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

        for(let user of USER_PERFORMANCE) {
            if(user.userId === this.userId) {
                for(let index in user.data) {
                    performance[index].value = user.data[index].value
                }
             
            }
            return performance
        }
    }

    getUserScore() {
     
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

        for(let user of USER_MAIN_DATA) {
            if(user.id === this.userId) {
               if(user.score) {
                    userScore[0].value = user.score * 100
                    userScore[1].value = (1 - user.score) * 100
               }
               else if(user.todayScore){
                    userScore[0].value = user.todayScore * 100
                    userScore[1].value = (1 - user.todayScore) * 100
               }
            }   

       
            return userScore   
        }
       
    }

}

