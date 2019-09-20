import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = ({ data }) => {
  const { title, publishDate, body } = data.contentfulBlogPost;
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        console.log(node);
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  );
};

export default Blog;
