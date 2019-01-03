import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="category-container" style={{ backgroundColor: '#f2f2f2' }}>
          <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
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
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
