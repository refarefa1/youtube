import React from 'react'
import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'
import sanitize from 'sanitize-html'

export const PlayerPreview = ({ url, title, imgUrl, channelId, channelTitle, publishedAt, channelImg }) => {

    const formatter = () => {
        const date = new Date(publishedAt)
        const res = utilService.formatTime(date)
        return `${res} ago`
    }

    return (
        <li className="player-preview">
            <Link to={`/watch/${url}`}>
                <img className="preview-img" src={imgUrl} alt="" />
                <div className="preview-details">
                    <img className="channel-img" src={channelImg} alt="" />
                    <div className="preview-txt">
                        <h1 dangerouslySetInnerHTML={{ __html: sanitize(title) }} className="preview-title"></h1>
                        <p className="preview-channel-title">{channelTitle}</p>
                        <p className="preview-published">{formatter()}</p>
                    </div>
                </div>
            </Link>
        </li >
    )
}
