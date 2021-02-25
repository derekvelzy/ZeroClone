module.exports = {
  siteMetadata: {
    title: `zeroClone`,
    description: `Clone of SRF Page`,
    author: `Derek Velzy`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-brotli'
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `montserrat\:Regular 400,Light 300,Semi-bold 600,Thin 100`,
          `oswald\:Bold 700,Medium 500`,
        ],
        display: 'swap'
      }
    }
  ],
}
