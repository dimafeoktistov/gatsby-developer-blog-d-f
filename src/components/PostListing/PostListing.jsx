import React, { Fragment } from 'react';
import Post from './Post';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const { postEdges } = this.props;
    postEdges.forEach((postEdge) => {
      postList.push({
        author: postEdge.node.fields.author,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <Fragment>
        {postList.map(post => (
          <Post key={post.title} post={post} />
        ))}
      </Fragment>
    );
  }
}

export default PostListing;
