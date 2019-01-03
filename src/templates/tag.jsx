import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default class TagTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="tag-container" style={{ backgroundColor: '#f2f2f2' }}>
          <Helmet title={`Posts in category "${tag}" | ${config.siteTitle}`} />
          <div style={{ marginTop: '60px' }} />
          <Container>
            <PostListing postEdges={postEdges} />
          </Container>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
            author
          }
          excerpt
          timeToRead
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            date
          }
        }
      }
    }
  }
`;
