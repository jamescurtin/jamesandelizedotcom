import React from 'react'

import { weddingInfo } from './home.module.css'
import Config from '../utils/config'
import Layout from './layout'

export default function Home() {
    return (
        <Layout
            pageTitle={`${Config.personalInfo.groom} & ${Config.personalInfo.bride}'s Wedding`}
        >
            <p className={weddingInfo}>{Config.wedding.date}</p>
            <p className={weddingInfo}>{Config.wedding.location}</p>
            <p>Under construction; come back soon!</p>
        </Layout>
    )
}
