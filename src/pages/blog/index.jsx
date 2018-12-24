import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import PostListing from '../../components/PostListing/PostListing';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/SiteConfig';
import styles from './blog.module.scss';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className={styles.indexContainer}>
          <Helmet title={config.siteTitle} />
          <SEO />
          <div style={{ marginTop: '60px' }} />
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
            author
            slug
            date
          }
          excerpt(pruneLength: 50)
          timeToRead
          frontmatter {
            author
            title
            tags
            cover
            date
            category
          }
        }
      }
    }
  }
`;
