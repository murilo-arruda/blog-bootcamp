import React from 'react';
import Layout from '../components/layout';
import Head from '../components/Head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Want hire me? please contact me at:</p>
      <p>
        <a
          href="http://twitter.com/passocabr"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
