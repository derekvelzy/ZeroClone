module.exports = {
  siteMetadata: {
    title: `zeroClone`,
    description: `Clone of SRF Page`,
    author: `Derek Velzy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:Bold 700`,
          `source sans pro\:300,400,400i,700`,
          `work sans\:Semi-bold 600,Regular 400,Light 300`,
          `lobster\:Regular 400`,
          `montserrat\:Regular 400,Light 300,Semi-bold 600,Thin 100`,
          `oswald\:Bold 700,Medium 500`,
          `barlow condensed\:Semi-bold 600,Bold 700`
        ],
        display: 'swap'
      }
    }
  ],
}
