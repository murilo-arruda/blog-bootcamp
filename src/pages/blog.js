import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
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
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(({ node }) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>{node.publishDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
