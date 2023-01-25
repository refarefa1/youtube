
import { configureStore as store } from '@reduxjs/toolkit'
import { playerReducer } from './reducers/player-reducer'
import { userReducer } from './reducers/user-reducer'

export default store({
    reducer: {
        playerModule: playerReducer,
        userModule: userReducer
    },
})
