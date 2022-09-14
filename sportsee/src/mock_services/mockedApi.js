const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../mock_services/mockedData')

export function getUserById(userId) {
    //get info profil only (firstName, lastName, age)
    for(let user of USER_MAIN_DATA) {
        if(user.id === JSON.parse(userId) ) {
            return user.userInfos
        }
    }
}

export function getCardInfo(userId) {
    for(let user of USER_MAIN_DATA) {
        if(user.id === JSON.parse(userId) ) {
            return user.keyData
        }
    }
}


