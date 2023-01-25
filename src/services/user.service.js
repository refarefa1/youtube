import { utilService } from "./util.service"

const USER_KEY = 'loggedinUser'

function loadUser() {
    const user = _getUser()
    return user
}

async function saveUserPrefs(type, videoId) {
    let user = _getUser()
    switch (type) {
        case 'likedVideos':
            if (user[type].includes(videoId)) user[type] = user[type].filter(id => id !== videoId)
            else user[type].unshift(videoId)
            break
        case 'historyVideos':
            if (user[type].includes(videoId)) user[type].unshift(user[type].pop())
            else user[type].unshift(videoId)
    }

    utilService.saveToStorage(USER_KEY, user)
}


function _getUser() {
    let user = utilService.loadFromStorage(USER_KEY)
    if (!user) {
        user = {
            _id: 'u101',
            historyVideos: [],
            watchLaterVideos: [],
            likedVideos: []
        }
        utilService.saveToStorage(USER_KEY, user)
    }
    return user
}

export const userService = {
    loadUser,
    saveUserPrefs
}