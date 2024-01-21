import React from 'react'
import icon from '../assets/world.svg'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <img src={icon} className="header--icon" alt="world icon" />
            <h3 className="header--title">my travel journal.</h3>
        </header>
    )
}
