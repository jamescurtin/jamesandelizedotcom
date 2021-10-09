import React from 'react'

import Layout from './layout'
import { mainBody } from './home.module.css'

export default function UnderConstruction() {
    return (
        <Layout pageTitle="Under Construction">
            <p className={mainBody}>Check back soon!</p>
        </Layout>
    )
}
