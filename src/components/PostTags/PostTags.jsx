import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styles from './posttags.module.scss';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags
          && tags.map(tag => (
            <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
              <button type="button" className={styles.tag}>{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
