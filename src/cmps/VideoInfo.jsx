import React from 'react'
import { utilService } from '../services/util.service'
import { FillLikeSvg } from '../svgs/FillLikeSvg'
import { OptionsSvg } from '../svgs/OptionsSvg'
import { ShareSvg } from '../svgs/ShareSvg'
import { SmallLikeSvg } from '../svgs/SmallLikeSvg'

export const VideoInfo = ({ video, user, onSaveUserPrefs }) => {

    const formattedSubscribersCount = utilService.formatNum(video.statistics.subscriberCount)

    const likeVideo = () => {
        onSaveUserPrefs('likedVideos')
    }

    const shareVideo = async () => {
        try {
            await navigator.share({
                title: 'Youtube Video',
                url: window.location.href
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="player-video-title">
                <h1>{video.title}</h1>
            </div>
            <div className="player-video-info-details">
                <div className="player-channel-info">
                    <img src={video.channelImg} alt="" />
                    <div>
                        <p>{video.channelTitle}</p>
                        <small>{formattedSubscribersCount} subscribers</small>
                    </div>
                </div>
                <div className="actions">
                    <button onClick={likeVideo} className="like-btn">
                        {user.likedVideos.includes(video._id)
                            ? <FillLikeSvg />
                            : <SmallLikeSvg />
                        }
                        <h1>Like</h1>
                    </button>
                    <button onClick={shareVideo} className="share-btn">
                        <ShareSvg />
                        <h1>Share</h1>
                    </button>
                    <button className="options-btn">
                        <OptionsSvg />
                    </button>
                </div>
            </div>
        </>
    )
}
