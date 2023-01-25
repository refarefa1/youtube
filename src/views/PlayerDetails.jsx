import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlayerHeader } from '../cmps/PlayerHeader'
import { RelatedPlayerList } from '../cmps/RelatedPlayerList'
import { VideoComments } from '../cmps/VideoComments'
import { VideoPlayer } from '../cmps/VideoPlayer'
import { VideoPlayerInfo } from '../cmps/VideoPlayerInfo'
import { getVideoById, loadRelatedVideos, query } from '../store/actions/player.actions'
import { loadUser, saveUserPrefs } from '../store/actions/user.actions'

export const PlayerDetails = () => {

    const video = useSelector(state => state.playerModule.video)
    const user = useSelector(state => state.userModule.user)
    const relatedVideos = useSelector(state => state.playerModule.relatedVideos)
    const [videoId, setVideoId] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        loadData()
        dispatch(saveUserPrefs('historyVideos', params.id))
    }, [params.id])



    const loadData = () => {
        setVideoId(params.id)
        dispatch(loadUser())
        dispatch(loadRelatedVideos(params.id))
        dispatch(getVideoById(params.id))
    }

    const onSearch = (filterBy) => {
        dispatch(query(filterBy))
    }

    const onSaveUserPrefs = (type) => {
        dispatch(saveUserPrefs(type, videoId))
    }


    if (!relatedVideos || !videoId || !video || !user) return <div>Loading...</div>
    return (
        <section className="player-details-container">

            <PlayerHeader onSearch={onSearch} />

            <section className="player-details">

                <section className="player-info">
                    <VideoPlayer videoId={videoId} />
                    <VideoPlayerInfo user={user} onSaveUserPrefs={onSaveUserPrefs} video={video} />
                    <div className="related-video-list-mobile">
                        <RelatedPlayerList videos={relatedVideos} />
                    </div>
                    <VideoComments comments={video.comments} />
                </section>

                <section className="related-video-list">
                    <RelatedPlayerList videos={relatedVideos} />
                </section>

            </section>


        </section>
    )
}
