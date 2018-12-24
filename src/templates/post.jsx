import React from 'react';
import Helmet from 'react-helmet';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import styles from './post.module.scss';

export default class PostTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const { frontmatter: post, fields } = postNode;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div style={{ marginTop: '60px' }} />
        <div className={styles.indexContainer}>
          <Container>
            <div className={styles.content}>
              <h1>{post.title}</h1>
              <div className={styles.entryMeta}>
                <span>
                  <FaCalendarAlt color="#444" />
                  {post.date}
                </span>
                <span>
                  <FaUser color="#444" />
                  {fields.author}
                </span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <UserInfo config={config} />
              <Disqus postNode={postNode} />
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 5000)
      frontmatter {
        author
        title
        cover
        date
        category
        tags
      }
      fields {
        author
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
