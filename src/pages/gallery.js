import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Gallery from '@browniebroke/gatsby-image-gallery'

import Layout from '../components/layout'

import '../components/gallery.style.css'

const PhotoGallery = ({ data }) => {
    const images = data.images.edges.map(({ node }) => ({
        ...node.childImageSharp,
        caption: node.name,
    }))
    return (
        <Layout pageTitle="Photo Gallery">
            <Gallery images={images} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query ImagesForGallery {
        images: allFile(
            filter: { relativeDirectory: { eq: "gallery" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    name
                    childImageSharp {
                        thumb: gatsbyImageData(
                            width: 700
                            height: 500
                            placeholder: BLURRED
                        )
                        full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`
PhotoGallery.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    map: PropTypes.string,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
}

export default PhotoGallery
