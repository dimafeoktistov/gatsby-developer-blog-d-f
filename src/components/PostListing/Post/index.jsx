import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PostMeta from '../../PostMeta/PostMeta';
import styles from './post.module.scss';

const Post = ({ post }) => (
  <div className={styles.content}>
    <Link to={post.path}>
      <h1>{post.title}</h1>
    </Link>
    <PostMeta post={post} author={post.author} />
    <p>{post.excerpt}</p>
    <div className={styles.readMore}>
      <Link className={styles.btn} to={post.path}>
        READ MORE
      </Link>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
