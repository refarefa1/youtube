import React, { useEffect, useState } from 'react'
import { TaskNav } from '../cmps/TaskNav'
import { PlayerHeader } from '../cmps/PlayerHeader'
import { query, loadUserVideos } from '../store/actions/player.actions'
import { useDispatch, useSelector } from 'react-redux'
import { LikedPlayerList } from '../cmps/LikedPlayerList'

export const PlayerWatchLater = () => {


    const [isNavOpen, setIsNavOpen] = useState(true)
    const videos = useSelector(state => state.playerModule.videos)
    const dispatch = useDispatch()

    useEffect(() => {
        loadVideos()
    }, [])

    const loadVideos = async () => {
        dispatch(loadUserVideos('watchLaterVideos'))
    }

    const onSearch = (filterBy) => {
        dispatch(query(filterBy))
    }

    const toggleIsNavOpen = () => {
        setIsNavOpen(!isNavOpen)
    }

    const className = (isNavOpen) ? '' : 'collapsed'

    if (!videos) return <div>Loading...</div>
    return (
        <section className={"user-videos-container " + className}>
            <PlayerHeader toggleIsNavOpen={toggleIsNavOpen} onSearch={onSearch} />
            <TaskNav isNavOpen={isNavOpen} />
            <LikedPlayerList isNavOpen={isNavOpen} videos={videos}></LikedPlayerList>
        </section>
    )
}
