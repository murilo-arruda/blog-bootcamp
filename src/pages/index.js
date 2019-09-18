import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const IndexPage = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <h2>Soon this will be a blog</h2>
      <p>
        Need a talk? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
