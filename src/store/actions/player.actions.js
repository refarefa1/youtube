import { playerService } from "../../services/player.service";

export function query(filterBy) {
    return async (dispatch) => {
        const videos = await playerService.query(filterBy)
        dispatch({ type: 'SET_VIDEOS', videos })
    }
}

export function loadRelatedVideos(videoId) {
    return async (dispatch) => {
        const relatedVideos = await playerService.getRelatedVideos(videoId)
        dispatch({ type: 'SET_RELATED_VIDEOS', relatedVideos })
    }
}

export function loadUserVideos(type) {
    return async (dispatch) => {
        const videos = await playerService.getUserVideos(type)
        dispatch({ type: 'SET_VIDEOS', videos })

    }
}

export function getVideoById(videoId) {
    return async (dispatch) => {
        const video = await playerService.getVideoById(videoId)
        dispatch({ type: 'SET_VIDEO', video })
    }
}