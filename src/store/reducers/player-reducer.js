const INITIAL_STATE = {
    videos: null,
    relatedVideos: null,
    video: null
}

export function playerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_VIDEOS':
            return {
                ...state,
                videos: action.videos
            }
        case 'SET_VIDEO':
            return {
                ...state,
                video: action.video
            }
        case 'SET_RELATED_VIDEOS':
            return {
                ...state,
                relatedVideos: action.relatedVideos
            }
        default:
            return state
    }
}