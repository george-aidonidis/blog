import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
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

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2)};
`;

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`;

const ThemeLink = styled.a`
  color: #80f;
`;

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata;
      return (
        <Container>
          <Avatar src={profilePic} alt={author} />

          <div style={{ maxWidth: 310 }}>
            <div>
              Personal blog by{' '}
              <ThemeLink href={`https://twitter.com/${social.twitter}`}>
                {author}
              </ThemeLink>
            </div>
            I dunno but write anyhow
          </div>
        </Container>
      );
    }}
  />
);

export default Bio;
