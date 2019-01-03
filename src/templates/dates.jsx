import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing/PostListing';
import Container from '../components/Container';
import config from '../../data/SiteConfig';

export default class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { date } = pageContext;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="category-container" style={{ backgroundColor: '#f2f2f2' }}>
          <Helmet title={`Posts by "${date}" | ${config.siteTitle}`} />
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
  query DatesPage($date: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { date: { eq: $date } } }
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
            date
            category
          }
        }
      }
    }
  }
`;
