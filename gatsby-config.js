module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp!',
    author: 'Murilo Arruda',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
