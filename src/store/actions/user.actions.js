import { userService } from "../../services/user.service";

export function loadUser() {
    return async (dispatch) => {
        const user = await userService.loadUser()
        dispatch({ type: 'SET_USER', user })
    }
}

export function saveUserPrefs(type, videoId) {
    return async (dispatch) => {
        await userService.saveUserPrefs(type, videoId)
        dispatch(loadUser())
    }
}