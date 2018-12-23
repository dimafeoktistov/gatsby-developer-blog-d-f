import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <h1>Hello world</h1>
        </div>
      </Layout>
    );
  }
}

export default Index;
