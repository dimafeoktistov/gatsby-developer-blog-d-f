import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _ from 'lodash';
import { FaCalendarAlt, FaUser, FaFolderOpen } from 'react-icons/fa';
import styles from './PostMeta.module.scss';

const PostMeta = ({ post, author }) => (
  <div className={styles.entryMeta}>
    <span>
      <Link
        style={{ textDecoration: 'none', color: 'black', textUnderline: 'none' }}
        to={`/date/${_.kebabCase(post.date)}`}
      >
        <FaCalendarAlt color="#444" />
        {post.date}
      </Link>
    </span>
    <span>
      <Link style={{ textDecoration: 'none', color: 'black', textUnderline: 'none' }} to="/blog">
        <FaUser color="#444" />
        {author}
      </Link>
    </span>
    <span>
      <Link
        style={{ textDecoration: 'none', color: 'black', textUnderline: 'none' }}
        to={`/categories/${_.kebabCase(post.category)}`}
      >
        <FaFolderOpen color="#444" />
        {post.category}
      </Link>
    </span>
  </div>
);

PostMeta.propTypes = {
  post: PropTypes.object,
  author: PropTypes.string,
};

export default PostMeta;
