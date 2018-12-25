module.exports = {
  siteTitle: 'Dima Feoktistov Personal Site', // Site title.
  siteTitleShort: 'DF Site', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Site of Dima Feoktistov', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'http://localhost:8000', // Domain of your website without pathPrefix.
  pathPrefix: null, // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A personal website about web development and biology.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: 'dima-feoktistov', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'DD/MM/YYYY', // Date format used in the frontmatter.
  dateFormat: 'DD MM YYYY', // Date format for display.
  userName: 'Dima Feoktistov', // Username to display in the author segment.
  userTwitter: '@feoktistov_D_S', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Tomsk, Russia', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'I am inspired web developer and biologyst.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/dimafeoktistov',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/feoktistov_D_S',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:dimafeoktistov@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2018. Dima Feoktistov', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};
