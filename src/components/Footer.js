import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <p>Created by {author} © 2019 </p>
    </footer>
  );
};

export default Footer;
