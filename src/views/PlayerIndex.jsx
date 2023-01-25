import React, { useEffect, useState } from 'react'
import { TaskNav } from '../cmps/TaskNav'
import { PlayerHeader } from '../cmps/PlayerHeader'
import { PlayerList } from '../cmps/PlayerList'
import { query } from '../store/actions/player.actions'
import { useDispatch, useSelector } from 'react-redux'

export const PlayerIndex = () => {


    const [isNavOpen, setIsNavOpen] = useState(true)

    const videos = useSelector(state => state.playerModule.videos)
    
    const dispatch = useDispatch()

    useEffect(() => {
        loadVideos()
    }, [])

    const loadVideos = async () => {
        const filterBy = { term: 'guitar' }
        dispatch(query(filterBy))
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
        <section className={"video-index-container " + className}>
            <PlayerHeader toggleIsNavOpen={toggleIsNavOpen} onSearch={onSearch} />
            <TaskNav isNavOpen={isNavOpen} />
            <PlayerList isNavOpen={isNavOpen} videos={videos}></PlayerList>
        </section>
    )
}
