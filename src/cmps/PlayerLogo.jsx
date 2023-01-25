import React from 'react'
import { Link } from 'react-router-dom'

export const PlayerLogo = ({ toggleIsNavOpen }) => {
    return (
        <div className="player-logo">
            <div onClick={toggleIsNavOpen} className="burger-menu">
                <div /><div /><div />
            </div>
            <Link to='/' className="logo">
                <img src={require('../assets/imgs/logo-white.svg').default} alt="" />
            </Link>
        </div>
    )
}
