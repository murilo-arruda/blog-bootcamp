const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({ node, name: 'slug', value: slug });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
  // CREATE PAGES FROM CMS
  const blogCmsTemplate = path.resolve('./src/templates/blogCms.js');
  const cms = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `);
  cms.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: blogCmsTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });
};
