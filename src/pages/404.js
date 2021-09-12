import React from 'react'
import TemplateWrapper from '../layouts/index'
import PageTitle from '../components/page_title'

export default function NotFoundPage() {
    return (
        <TemplateWrapper>
            <div>
                <PageTitle title="404" />
                <p>This page does not exist!</p>
            </div>
        </TemplateWrapper>
    )
}
