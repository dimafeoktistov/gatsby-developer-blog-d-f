import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import PostMeta from '../../components/PostMeta/PostMeta';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/SiteConfig';
import styles from './blog.module.scss';

class Index extends React.Component {
  render() {
    const { data, pathContext } = this.props;
    const { currentPage, pageCount } = pathContext;
    const postEdges = data.allMarkdownRemark.edges;
    const isFirst = currentPage === 1;
    const isLast = currentPage === pageCount;
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`;
    const nextPage = `/blog/${(currentPage + 1).toString()}`;
    return (
      <Layout>
        <div className={styles.indexContainer}>
          <Helmet title={config.siteTitle} />
          <SEO />
          <div style={{ marginTop: '60px' }} />
          <Container>
            {postEdges.map(({ node }) => (
              <div key={node.id} className={styles.content}>
                <Link to={node.fields.slug}>
                  <h1>{node.frontmatter.title}</h1>
                </Link>
                <PostMeta post={node.frontmatter} author={node.fields.author} />
                <p>{node.excerpt}</p>
                <div className={styles.readMore}>
                  <Link className={styles.btn} to={node.fields.slug}>
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}
            <div className={styles.pagination}>
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              )}
              
              <div>
                {Array.from({ length: pageCount }, (_, i) => (
                  <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? '' : i + 1}`}>
                    {i + 1}
                  </Link>
                ))}
              </div>

              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
              )}
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            author
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;
