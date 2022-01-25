const path = require('path')
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
)

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.jamesandelize.com',
        title: "James and Elize's Wedding Website",
        description: "James and Elize's Wedding Website",
        author: 'James & Elize',
    },
    plugins: [
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: ['G-QD2NQFZMBM'],
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Elize & James Wedding Website`,
                short_name: `Elize&James Wedding`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: 'static/rings.png',
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'static/rings.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        'gatsby-source-local-git',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public',
                ],
            },
        },
    ],
}
