import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <Fragment>
    <Link to={post.path} key={post.title}>
      <h1>{post.title}</h1>
    </Link>
    <p>{post.excerpt}</p>
  </Fragment>
);

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
