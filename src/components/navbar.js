import React from 'react'

import { Link } from 'gatsby'
import { PropTypes } from 'prop-types'

import { activeNavbarLink, navbar, navbarLink } from './navbar.module.css'
import Config from '../utils/config'

const NavbarLink = function ({ to, title }) {
    return (
        <Link to={to} activeClassName={activeNavbarLink} className={navbarLink}>
            {title}
        </Link>
    )
}

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
        <div className={`navbar ${navbar}`}>
            <h1 className={navbar}>{generateNavbar(Config.navBarLinks)}</h1>
        </div>
    )
}

NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
