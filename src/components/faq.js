import React from 'react'

import Layout from './layout'

import { mainAnswer, mainQuestion } from './faq.module.css'

export default function Faq() {
    return (
        <Layout pageTitle="Frequently Asked Questions">
            <p className={mainQuestion}>When is the ceremony?</p>
            <p className={mainAnswer}>
                We were married in a small ceremony at the Arnold Arboretum on November 13, 2021. See the gallery tab for some of our favorite pictures from the day. We look
                forward to celebrating our marriage with you all on April 9, 2022!
            </p>
            <br />
            <p className={mainQuestion}>What are your Covid safety plans?</p>
            <p className={mainAnswer}>
                We are requiring everyone intending to attend to be fully vaccinated. 
                We want to celebrate our wedding with as many of our loved ones as possible, but we also want to be as safe as possible. Thank you for understanding!
            </p>
        </Layout>
    )
}
