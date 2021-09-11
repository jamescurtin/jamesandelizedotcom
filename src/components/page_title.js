import React from 'react'
import { string } from 'prop-types'
import config from '../utils/config'

export default function PageTitle({ title }) {
    return (
        <h1
            style={{
                fontFamily: "'Euphoria Script', cursive",
                fontSize: '70px',
                color: config.site.textColor,
            }}
        >
            {title}
        </h1>
    )
}

PageTitle.propTypes = {
    title: string.isRequired,
}
