import React, { useState } from 'react'
import defaultProfile from '../assets/imgs/default-profile.svg'
import { utilService } from '../services/util.service'

export const CommentPreview = ({ comment }) => {

    const formattedTime = utilService.formatTime(new Date(comment.publishedAt))

    const [isError, setIsError] = useState(false)

    function error() {
        setIsError(true)
    }

    return (
        <li className="comment-preview">
            {(isError)
                ? < img src={defaultProfile} />
                : < img onError={error} src={comment.imgUrl} />
            }
            <div>
                <h2>{comment.name}<span>{formattedTime} ago</span></h2>
                <p>{comment.txt}</p>
            </div>
        </li>
    )
}
