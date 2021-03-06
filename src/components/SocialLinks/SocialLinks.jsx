import React, { Component } from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  VKShareButton,
  VKIcon,
} from 'react-share';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import styles from './SocialLinks.module.scss';

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : '');
    const renderShareCount = count => <div className={styles.socialCount}>{filter(count)}</div>;

    return (
      <div className={styles.socialLinks}>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>{count => renderShareCount(count)}</RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>{count => renderShareCount(count)}</GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>{count => renderShareCount(count)}</FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
        <VKShareButton
          url={url}
          title={post.title}
          description="test"
          image={
            postNode.frontmatter.cover
              ? `http://localhost:8000${postNode.frontmatter.cover.childImageSharp.fluid.src}`
              : null
          }
        >
          <VKIcon round size={iconSize} />
        </VKShareButton>
      </div>
    );
  }
}

export default SocialLinks;
