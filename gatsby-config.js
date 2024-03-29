module.exports = {
  siteMetadata: {
    title: 'Dunno',
    author: 'George Aidonidis',
    description: 'Dunno - A blog by George Aidonidis',
    siteUrl: 'https://dunno.tech/',
    social: {
      twitter: 'geoaido',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: 'gatsby-plugin-feed', options: { feeds: [] } },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dunno',
        short_name: 'dunno',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#80F',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
