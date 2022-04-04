import React from 'react'

import Config from '../utils/config'
import Layout from './layout'

import { mainBody, mainHeader, mainSubtext } from './details.module.css'

export default function Details() {
    return (
        <Layout pageTitle="Schedule of Events">
            <br />
            <h3 className={mainHeader}>
                <b>Friday, {Config.welcomeParty.date}</b>
            </h3>
            <h3 className={mainHeader}>
                <i>Welcome</i>
            </h3>
            <p className={mainBody}>
                {Config.welcomeParty.time}
                <br />
                {Config.welcomeParty.location}
                <br />
                <br />
                Please join us for pizza and drinks! Depending on the weather,
                we may also go to{' '}
                <a
                    href="https://www.blackhatbrewworks.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Black Hat Brewery
                </a>{' '}
                afterwards.
            </p>
            <h3 className={mainHeader}>
                <b>Saturday, {Config.wedding.date}</b>
            </h3>
            <h3 className={mainHeader}>
                <i>Cocktail Hour and Reception</i>
            </h3>
            <p className={mainBody}>
                {Config.wedding.time}
                <br />
                {Config.wedding.location}
                <br />
                <i>{Config.wedding.room}</i>
            </p>
            <p className={mainBody}>
                {Config.wedding.address}
                <br />
                {Config.wedding.town}
            </p>
            <br />
            <p className={mainSubtext}>Cocktail attire suggested</p>
        </Layout>
    )
}
