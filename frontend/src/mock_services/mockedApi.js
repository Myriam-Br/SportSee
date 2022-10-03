const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../mock_services/mockedData')

/**
 * Get user info from mockedData
 * @param { String } userId
 * @returns { Object }
 */
export function getUserById(userId) {
    for(let user of USER_MAIN_DATA) {
        if(user.id.toString() === userId) { 
            return user.userInfos
        }
    }
}

/**
 * Get user keyData from mockedData
 * @param { String } userId
 * @returns { Object }
 */
export function getCardInfo(userId) {
    for(let user of USER_MAIN_DATA) {
        if(user.id.toString() === userId) {
            return user.keyData
        }
    }
}

/**
 * Get user activities from mockedData
 * @param { String } userId
 * @returns { Object }
 */
export function getUserActivity(userId) {
    for(let user of USER_ACTIVITY) {
        if(user.userId.toString() === userId) {
            return user.sessions
        }
    }
}

/**
 * Get user average session from mockedData
 * @param { String } userId
 * @returns { Object }
 */
export function getUserAverageSession(userId) {
    for(let user of USER_AVERAGE_SESSIONS) {
        if(user.userId.toString() === userId) {
            return user.sessions
        }
    }
}

/**
 * Get user performance from mockedData
 * @param { String } 
 * @returns { Object }
 */
export function getUserPerformance(userId) {
    for(let user of USER_PERFORMANCE) {
        if(user.userId.toString() === userId) {
            return user.data
        }
    }
}

/**
 * Get user score from mockedData
 * @param { String } userId
 * @returns { Number }
 */
export function getUserScore(userId) {
  for(let user of USER_MAIN_DATA) {
        if(user.id.toString() === userId) {
          let userScore = ''
          if(user.score === undefined) {
            userScore = user.todayScore * 100
          } else{
            userScore = user.score * 100
          }

          return userScore  
            
        }
    }
}

