import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/Head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Hello, my name is Murilo and i'm a fullstack developer living in Brazil.
      </p>
      <p>
        Need a talk? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
