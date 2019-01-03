import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link, navigateTo } from 'gatsby';
import PostMeta from '../../components/PostMeta/PostMeta';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/SiteConfig';
import styles from './blog.module.scss';
import BlogBtn from '../../components/UI/buttons/blogBtn';

class Index extends React.Component {
  state = {
    selectedPage: 1,
  };

  componentDidMount() {
    const { pathContext } = this.props;
    const { currentPage } = pathContext;
    this.setState({ selectedPage: currentPage });
  }

  handlePageSelect = (event) => {
    this.setState({
      selectedPage: event.target.value,
    });
  };

  handlePageRedirect = (event) => {
    event.preventDefault();
    const { selectedPage } = this.state;
    // navigateTo(`/blog/${selectedPage == 1 ? '' : selectedPage}`);
  };

  render() {
    const { data, pathContext } = this.props;
    const { currentPage, pageCount } = pathContext;
    const { selectedPage } = this.state;
    const postEdges = data.allMarkdownRemark.edges;
    const isFirst = currentPage === 1;
    const isLast = currentPage === pageCount;
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`;
    const nextPage = `/blog/${(currentPage + 1).toString()}`;
    const isInRange = selectedPage > pageCount || selectedPage <= 0;

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
                  <Link style={{ style: 'none' }} className={styles.link} to={node.fields.slug}>
                    <BlogBtn>READ MORE</BlogBtn>
                  </Link>
                </div>
              </div>
            ))}
            <div className={styles.pagination}>
              <div style={{ marginBottom: 10 }}>
                <Link to={prevPage} className={styles.link} rel="prev">
                  <BlogBtn disabled={isFirst}>← Previous Page</BlogBtn>
                </Link>

                <Link to={nextPage} className={styles.link} rel="next">
                  <BlogBtn disabled={isLast}>Next Page →</BlogBtn>
                </Link>
              </div>

              <div>
                <form>
                  {`Page ${currentPage} out of ${pageCount}. Go to page`}
                  <input
                    style={{ width: 40, borderRadius: 5, marginLeft: 5 }}
                    type="number"
                    min="1"
                    max={pageCount}
                    name="page-number"
                    placeholder={selectedPage}
                    value={selectedPage}
                    onChange={this.handlePageSelect}
                  />
                  <Link
                    to={`/blog/${selectedPage == 1 ? '' : selectedPage}`}
                    className={styles.link}
                    rel="next"
                  >
                    <BlogBtn type="submit" disabled={isInRange}>
                      Go
                    </BlogBtn>
                  </Link>
                </form>
              </div>
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
