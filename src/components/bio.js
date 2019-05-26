import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import profilePic from '../../content/assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2),
            }}
          >
            <img
              src={profilePic}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
                borderRadius: '50%',
              }}
            />
            <p style={{ maxWidth: 310 }}>
              Personal blog by
              <a href={`https://twitter.com/${social.twitter}`}>{author}</a>
              I&nbsp;dunno but write anyhow
            </p>
          </div>
        );
      }}
    />
  );
}

export default Bio;
