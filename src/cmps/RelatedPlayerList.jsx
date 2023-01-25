import React from 'react'
import { PlayerPreview } from './PlayerPreview'

export const RelatedPlayerList = ({ videos }) => {
    return (
        <ul className="player-list">
            {videos.map(video =>
                < PlayerPreview
                    key={video._id}
                    url={video._id}
                    title={video.title}
                    imgUrl={video.imgUrl}
                    channelId={video.channelId}
                    channelTitle={video.channelTitle}
                    channelImg={video.channelImg}
                    publishedAt={video.publishedAt}
                />
            )}
        </ul>
    )
}
