import React from 'react'

import NavbarLink from './navbar_link'

import config from '../utils/config'

const generateNavbar = (navArray) =>
    navArray.map((section) => (
        <NavbarLink
            key={section.title}
            to={section.link}
            title={section.title}
        />
    ))

export default function Navbar() {
    return (
        <div className="navbar">
            <h1
                style={{
                    margin: 0,
                    display: 'block',
                    textAlign: 'center',
                }}
            >
                {generateNavbar(config.navBarLinks)}
            </h1>
        </div>
    )
}
