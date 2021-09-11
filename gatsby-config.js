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
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-QD2NQFZMBM',
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/rings.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
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
