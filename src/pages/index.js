import * as React from 'react'

// styles
const pageStyles = {
    color: '#232129',
    padding: 96,
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const paragraphStyles = {
    marginBottom: 48,
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>James & Elize&apos;s Wedding</title>
            <h1 style={headingStyles}>
                Hello world!
                <br />
                <span role="img" aria-label="Party popper emojis">
                    🎉🎉🎉
                </span>
            </h1>
            <p style={paragraphStyles}>
                Under Construction.{' '}
                <span role="img" aria-label="Sunglasses smiley emoji">
                    😎
                </span>
            </p>
        </main>
    )
}

export default IndexPage
