import React from 'react'

import Layout from './layout'

import { mainAnswer, mainQuestion } from './faq.module.css'

export default function Faq() {
    return (
        <Layout pageTitle="Frequently Asked Questions">
            <p className={mainQuestion}>When is the ceremony?</p>
            <p className={mainAnswer}>
                We plan to get married in Fall 2021 in a small ceremony. We look
                forward to celebrating our marriage with you all on April 9,
                2022!
            </p>
            <br />
            <p className={mainQuestion}>What are your Covid safety plans?</p>
            <p className={mainAnswer}>
                Still TBD - we will decide safety protocols as we get closer to
                the reception date, but encourage vaccinations as we have immune
                compromised individuals in our immediate family.
            </p>
            <br />
            <p className={mainQuestion}>Did you build your own website?</p>
            <p className={mainAnswer}>
                Yes! Feel free to check out the code on{' '}
                <a
                    href="https://github.com/jamescurtin/jamesandelizedotcom"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                .
            </p>
        </Layout>
    )
}
