import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

class UserInfo extends Component {
  render() {
    const {
      config: { userTwitter },
    } = this.props;
    const { expanded } = this.props;
    return <Follow username="feoktistov_D_S" options={{ count: expanded ? true : 'none' }} />;
  }
}

export default UserInfo;
