import React from 'react'

import config from '../utils/config'
import TemplateWrapper from '../layouts/index'

export default function Home() {
    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                display: 'block',
                textAlign: 'center',
            }}
        >
            <TemplateWrapper>
                <br />
                <span
                    style={{
                        fontFamily: "'Euphoria Script', cursive",
                        fontSize: '80px',
                        fontWeight: 'bold',
                        color: config.site.textColor,
                        lineHeight: '1em',
                    }}
                >
                    {`${config.personalInfo.bride} & ${config.personalInfo.groom}`}
                </span>
                <br />
                <br />
                <br />
                <p
                    style={{
                        fontWeight: 'bold',
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: '25px',
                        color: config.site.textColor,
                    }}
                >
                    {config.wedding.date}
                </p>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: "'Dancing Script', cursive",
                        color: config.site.textColor,
                    }}
                >
                    {config.wedding.location}
                </p>
            </TemplateWrapper>
            <p>Under construction; come back soon!</p>
        </div>
    )
}
