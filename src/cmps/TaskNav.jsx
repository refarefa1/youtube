import React from 'react'
import { NavButton } from './NavButton'
import { HomeSvg } from '../svgs/HomeSvg'
import { HistorySvg } from '../svgs/HistorySvg'
// import { WatchLaterSvg } from '../svgs/WatchLaterSvg'
import { LikeSvg } from '../svgs/LikeSvg'

export const TaskNav = ({ isNavOpen }) => {

    const className = (isNavOpen) ? '' : 'collapsed'

    return (
        <section className={"task-nav-container " + className}>

            <div className="task-nav-btns">
                <NavButton to="/" txt="Home" icon={HomeSvg} />
                <div className="seperator"></div>
                <NavButton to="/history" txt="History" icon={HistorySvg} />
                {/* <NavButton to="/saved" txt="Watch later" icon={WatchLaterSvg} /> */}
                <NavButton to="/like" txt="Liked videos" icon={LikeSvg} />
            </div>
        </section>
    )
}
