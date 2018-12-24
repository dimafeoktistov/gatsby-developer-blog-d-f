import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import PostListing from '../../components/PostListing/PostListing';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div style={{ marginTop: '80px' }} />
          <Container>
            <PostListing postEdges={postEdges} />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
