require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Afterlight`,
    name: `Afterlight Collective, Inc.`,
    siteUrl: `https://afterlight.co`,
    description: `Filter, Texture, Create.`,
    hero: {
      heading: `Welcome to Afterlight. Become a member to access all features!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/afterlightapp`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/afterlight`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: false,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
