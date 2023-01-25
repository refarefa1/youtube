import React, { useState } from 'react'
import { longTextHook } from '../hooks/longTextHook'
import { utilService } from '../services/util.service'

export const VideoDescription = ({ video }) => {

    const [isExpand, setIsExpand] = useState(false)

    const desc = longTextHook(video.description, isExpand)
    const formattedTime = utilService.formatTime(new Date(video.publishedAt))
    const formattedViewsCount = utilService.formatNum(video.statistics.viewCount)

    function toggleExpand() {
        setIsExpand(!isExpand)
    }


    return (
        <div className="description">
            <div className="desc-info">
                <p className="desc-views">{formattedViewsCount} views</p>
                <p className="desc-created">{formattedTime} ago</p>
            </div>
            <div onClick={toggleExpand} className="desc">{desc}</div>
        </div>
    )
}
