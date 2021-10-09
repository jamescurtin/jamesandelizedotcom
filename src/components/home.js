import React from 'react'

import { mainBody, weddingInfo } from './home.module.css'
import Config from '../utils/config'
import Layout from './layout'

export default function Home() {
    return (
        <Layout
            pageTitle={`${Config.personalInfo.groom} & ${Config.personalInfo.bride}`}
        >
            <p className={weddingInfo}>{Config.wedding.date}</p>
            <p className={weddingInfo}>{Config.wedding.location}</p>
            <p className={weddingInfo}>{Config.wedding.town}</p>
            <br />
            <p className={mainBody}>
                Still under construction - check back for more updates soon!
            </p>
        </Layout>
    )
}
