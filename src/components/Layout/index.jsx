import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../Header/header';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/Sidebar';
import config from '../../../data/SiteConfig';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = {
    isFloat: false,
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const { isFloat, showSideDrawer } = this.state;
    return (
      <Fragment>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header floating={isFloat} drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideBar open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
        {children}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
