import React, { useState } from 'react'
import { CommentList } from './CommentList'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { FoldSvg } from '../svgs/FoldSvg'

export const VideoComments = ({ comments }) => {

    const [isCommentsOpen, setIsCommentsOpen] = useState(false)

    const toggleComments = () => {
        if (window.innerWidth > 640) return
        setIsCommentsOpen(!isCommentsOpen)
    }

    const className = isCommentsOpen ? ' expand' : ''


    return (
        <div className={"comments-container" + className}>
            <div onClick={toggleComments} className="comment-count">
                <h1>{comments.length} Comments</h1>
                {isCommentsOpen
                    ? <FoldSvg />
                    : <ExpandSvg />}
            </div>
            <CommentList comments={comments} />
        </div>
    )
}
