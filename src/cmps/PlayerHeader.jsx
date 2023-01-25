import React from 'react'
import { PlayerFilter } from './PlayerFilter'
import { PlayerLogo } from './PlayerLogo'
import { PlayerProfile } from './PlayerProfile'

export const PlayerHeader = ({ onSearch, toggleIsNavOpen }) => {
    return (
        <section className="player-header-container">
            <PlayerLogo toggleIsNavOpen={toggleIsNavOpen} />
            <PlayerFilter onSearch={onSearch} />
            <PlayerProfile />
        </section>
    )
}
