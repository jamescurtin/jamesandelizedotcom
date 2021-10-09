import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { mainBody, saveTheDatePhoto, weddingInfo } from './home.module.css'
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
            <StaticImage
                src="../images/save-the-date.jpg"
                alt="James and Elize save the date photo"
                width={400}
                className={saveTheDatePhoto}
                placeholder="blurred"
            />
            <br />
            <br />
            <p className={mainBody}>
                Still under construction - check back for more updates soon!
            </p>
        </Layout>
    )
}
