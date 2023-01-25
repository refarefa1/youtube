import React from 'react'
import { VideoDescription } from './VideoDescription'
import { VideoInfo } from './VideoInfo'

export const VideoPlayerInfo = ({ video, user, onSaveUserPrefs }) => {


    return (
        <section className="player-video-info">

            <VideoInfo user={user} video={video} onSaveUserPrefs={onSaveUserPrefs} />
            <VideoDescription video={video} />

        </section>
    )
}
