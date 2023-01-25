import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const NavButton = (props) => {

    const location = useLocation()

    const activeClass = (location.pathname === props.to) ? 'active' : ''

    return (
        <NavLink to={props.to} className={"task-nav-btn " + activeClass}>
            <span>{<props.icon />}</span>
            <p>{props.txt}</p>
        </NavLink>
    )
}
