import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const Title = styled.h3`
  font-family: Montserrat,
  margin-bottom: ${rhythm(1 / 4)},
  font-size: 1.75rem,
  color: #80F,
`

export const StyledLink = styled(Link)`
  box-shadow: none,
  color: #80F
`

const Subtitle = styled.small`
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: -1.4rem;
`

const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      {posts.map(({ node }) => (
        <div key={node.fields.slug}>
          <Title>
            <StyledLink
              style={{ boxShadow: `none`, color: '#80F' }}
              to={node.fields.slug}
            >
              {node.frontmatter.title}
            </StyledLink>
          </Title>
          <Subtitle>
            {node.frontmatter.date} • {node.timeToRead} min read
          </Subtitle>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
