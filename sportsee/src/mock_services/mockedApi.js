const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../mock_services/mockedData')

/**
 * Get user info from mockedData
 * @param { Number } userId
 * @returns { Object }
 */
export function getUserById(userId) {
    //get info profil only (firstName, lastName, age)
    for(let user of USER_MAIN_DATA) {
        if(user.id === userId ) {
            return user.userInfos
        }
    }
}

/**
 * Get user keyData from mockedData
 * @param { Number } userId
 * @returns { Object }
 */
export function getCardInfo(userId) {
    for(let user of USER_MAIN_DATA) {
        if(user.id === userId) {
            return user.keyData
        }
    }
}

/**
 * Get user activities from mockedData
 * @param { Number } userId
 * @returns { Object }
 */
export function getUserActivity(userId) {
    for(let user of USER_ACTIVITY) {
        if(user.userId === userId) {
            return user.sessions
        }
    }
}

/**
 * Get user average session from mockedData
 * @param { Number } userId
 * @returns { Object }
 */
export function getUserAverageSession(userId) {
    for(let user of USER_AVERAGE_SESSIONS) {
        if(user.userId === userId) {
            return user.sessions
        }
    }
}

/**
 * Get user performance from mockedData
 * @param { Number } userId
 * @returns { Object }
 */
export function getUserPerformance(userId) {
    for(let user of USER_PERFORMANCE) {
        if(user.userId === userId) {
            return user.data
        }
    }
}

/**
 * Get user score from mockedData
 * @param { Number } userId
 * @returns { Number }
 */
export function getUserScore(userId) {
  for(let user of USER_MAIN_DATA) {
        if(user.id === userId) {
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

