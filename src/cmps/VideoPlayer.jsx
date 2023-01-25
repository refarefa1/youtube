import React from 'react'

export const VideoPlayer = ({ videoId }) => {
    return (
        <div className="player-video">
            <iframe allow="autoplay; encrypted-media; fullscreen" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}></iframe>
        </div>
    )
}
