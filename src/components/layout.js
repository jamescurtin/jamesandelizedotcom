import React from 'react'

import 'typeface-euphoria-script'
import 'typeface-dancing-script'
import 'typeface-raleway'

import { PropTypes } from 'prop-types'
import { Helmet } from 'react-helmet'

import './layout.style.css'

import {
    contentWrapper,
    header,
    layoutContainer,
    navbarHr,
    title,
} from './layout.module.css'
import Config from '../utils/config'
import Navbar from './navbar'

const Header = () => (
    <div className={header}>
        <div className={layoutContainer}>
            <Navbar />
            <br />
            <hr className={navbarHr} />
        </div>
    </div>
)

export default function Layout({ pageTitle, children }) {
    return (
        <div>
            <Helmet
                title={pageTitle}
                meta={[
                    {
                        name: 'description',
                        content: Config.site.description,
                    },
                    { name: 'keywords', content: Config.site.keywords },
                ]}
            />
            <Header />
            <div className={contentWrapper}>
                <h1 className={title}>{pageTitle}</h1>
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    pageTitle: Config.site.title,
}

Layout.propTypes = {
    pageTitle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object,
    ]).isRequired,
}
