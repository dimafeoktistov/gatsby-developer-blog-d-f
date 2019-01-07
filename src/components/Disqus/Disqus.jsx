import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
// import { DiscussionEmbed } from 'disqus-react';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!' });
    this.setState({ toasts });
  }

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug);
    return (
      <ReactDisqusComments
        shortname="dima-feoktistov-1"
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;




/* <DiscussionEmbed
  shortname="dima-feoktistov-1"
  config={{
    url,
    identifier: post.title,
    title: post.title,
  }}
  onNewComment={this.notifyAboutComment}
/> */