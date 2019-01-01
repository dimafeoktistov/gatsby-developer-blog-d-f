import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styles from './posttags.module.scss';
import Tag from '../Tag';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags
          && tags.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
      </div>
    );
  }
}

export default PostTags;
